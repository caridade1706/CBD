package org.example;

import java.util.*;
import java.io.*;

import redis.clients.jedis.Jedis;

public class AutoComplete_b {
    public static String USERS = "names_csv";

    public static void main(String[] args) throws IOException {
        Jedis jedis = new Jedis();

        File file = new File("nomes-pt-2021.csv");
        Scanner sc = new Scanner(file);
        while (sc.hasNextLine()) {
            String[] row = sc.nextLine().split(";");
            jedis.zadd(USERS,Integer.parseInt(row[1]),row[0]);
        }
        sc.close();

        Scanner sc2 = new Scanner(System.in);

        while (true) {
            System.out.print("Search for ('Enter' for quit): ");
            String input = sc2.nextLine();

            if (!input.isEmpty()) {
                List<String> results = jedis.zrevrange(USERS, 0, -1);

                for (String result : results) {
                    if (result.toLowerCase().matches(input.toLowerCase() + "(.*)")) {// could use 'startsWith(input.toLowerCase()) like in exercise a)
                        System.out.println(result);
                    }
                }

            }
            else{
                System.err.println("Invalid Input");
                break;
            }
        }
        sc2.close();
        jedis.flushAll();
        jedis.close(); // Close the Jedis connection when done
    }
}
