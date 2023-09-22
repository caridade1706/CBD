package org.example;

import java.util.*;
import java.io.*;

import redis.clients.jedis.Jedis;

public class AutoComplete_a {
    public static String USERS = "set_names";

    public static void main(String[] args) throws IOException {
        Jedis jedis = new Jedis();

        File file = new File("names.txt");
        Scanner sc = new Scanner(file);
        while (sc.hasNextLine()) {
            String name = sc.nextLine();
            jedis.sadd(USERS, name);
        }
        sc.close();

        Scanner sc2 = new Scanner(System.in);

        while (true) {
            System.out.print("Search for ('Enter' for quit): ");
            String input = sc2.nextLine();

            if (!input.isEmpty()) {

                Set<String> results = jedis.smembers(USERS);

                for (String result : results) {
                    if (result.startsWith(input.toLowerCase())) {
                        System.out.println(result);
                    }
                }
            } else {
                System.err.println("Invalid Input");
                break;
            }
        }
        sc2.close();
        jedis.flushAll();
        jedis.close(); // Close the Jedis connection when done
    }
}
