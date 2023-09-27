package org.example;

import java.util.*;
import redis.clients.jedis.Jedis;

public class atendimento {
    public static String USERS = "users";
    public static String PRODUCTS = "products";

    public static void main(String[] args) {
        Jedis jedis = new Jedis();

        System.out.println("-----Menu-----");
        Scanner scanner = new Scanner(System.in);
        int escolha;

        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1. Adicionar utilizador");
            System.out.println("2. Adicionar produto");
            System.out.println("3. Ver detalhe");
            System.out.println("4. Sair");

            System.out.print("Digite o número da opção desejada: ");
            escolha = scanner.nextInt();

            switch (escolha) {
                case 1:
                    System.out.print("Utilizador: ");
                    inputUser(USERS, scanner, jedis);
                    break;
                case 2:
                    System.out.print("Utilizador: ");
                    inputProduct(USERS, PRODUCTS, scanner, jedis);
                    break;
                case 3:
                    System.out.print("Utilizador: ");
                    listProduct(USERS, PRODUCTS, scanner, jedis);
                    break;
                case 4:
                    System.out.println("ADEUS");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (escolha != 4);
        scanner.close();
    }

    private static void listProduct(String USERS, String PRODUCTS, Scanner scanner, Jedis jedis) {
        String nome = scanner.next();

        if (!jedis.sismember(USERS, nome)) {
            System.err.println("ERRO: utilizador não encontrado!");
            return;
        }

        if (!jedis.hexists(PRODUCTS, nome)) {
            System.err.println("ERRO: utilizador não tem produtos!");
            return;
        }

        String produtos = jedis.hget(PRODUCTS, nome);
        System.out.println("Produtos: " + produtos);
    }

    private static void inputProduct(String USERS, String PRODUCTS, Scanner scanner, Jedis jedis) {
        String nome;
        String produto;
        int quantidade;
        List<String> produtos = new ArrayList<>();
        nome = scanner.next();

        if (!jedis.sismember(USERS, nome)) {
            System.out.println("Utilizador não inserido");
        } else {
            System.out.print("Produto: ");
            produto = scanner.next();
            System.out.print("Quantidade: ");
            quantidade = scanner.nextInt();
            if (quantidade == 0) {
                System.out.println("Quantidade inválida");
                return;
            }

            long currentTime = System.currentTimeMillis() / 1000; // Get current time in seconds

            if (!jedis.hexists(PRODUCTS, nome)) {
                for (int i = 0; i < quantidade; i++) {
                    produtos.add(produto);
                }
                String myproducts = String.join(",", produtos);
                jedis.hset(PRODUCTS, nome, myproducts);
                jedis.hset("timestamps", nome, String.valueOf(currentTime));
            } else {
                long lastTimestamp = Long.parseLong(jedis.hget("timestamps", nome));

                if (currentTime - lastTimestamp >= 3600) {
                    jedis.hdel(PRODUCTS, nome);
                    jedis.hdel("timestamps", nome);
                    jedis.hset("timestamps", nome, String.valueOf(currentTime));
                    for (int i = 0; i < quantidade; i++) {
                        produtos.add(produto);
                    }
                } else {
                    produtos = new ArrayList<>(Arrays.asList(jedis.hget(PRODUCTS, nome).split(",")));

                    // Check if the user will exceed the 30-product limit
                    if (produtos.size() + quantidade > 30) {
                        System.out.println("Limite de produtos atingido neste intervalo de tempo");
                    } else {
                        for (int i = 0; i < quantidade; i++) {
                            produtos.add(produto);
                        }
                    }
                }

                String myproducts = String.join(",", produtos);
                jedis.hset(PRODUCTS, nome, myproducts);
            }
        }
    }

    private static void inputUser(String USERS, Scanner scanner, Jedis jedis) {
        String nome = scanner.next();
        if (jedis.sismember(USERS, nome)) {
            System.out.println("Utilizador já inserido");
        } else {
            jedis.sadd(USERS, nome);
        }
    }
}
