package org.example;
import redis.clients.jedis.Jedis;

public class SimplePost {
    public static String USERS_NAMES = "users";
    public static String USERS_AGES = "ages";

    public static void main(String[] args) {

        Jedis jedis = new Jedis();
        // some users
        String[] users = { "Ana", "Pedro", "Maria", "Luis" };
        int[] ages = { 21, 45, 7, 8 };
        // jedis.del(USERS_KEY); // remove if exists to avoid wrong type


        //i) lista
        System.out.println("----------------LIST---------------");
        for (String user : users)
            jedis.rpush(USERS_NAMES,user);


        for (int i=0;i<jedis.llen(USERS_NAMES); i++){
            System.out.println(jedis.lindex(USERS_NAMES, i));
        }
        jedis.del(USERS_NAMES);
        

        //ii) HashMap
        System.out.println("----------------HASHMAP-----------------");

         for (int i=0;i<users.length; i++){
            jedis.hset(USERS_AGES, users[i], Integer.toString(ages[i]));
        }

        for(String name : jedis.hkeys(USERS_AGES)){
            System.out.print(name + ": ");
            System.out.println(jedis.hget(USERS_AGES, name) + " anos");
        }
        

        jedis.close();
    }
}