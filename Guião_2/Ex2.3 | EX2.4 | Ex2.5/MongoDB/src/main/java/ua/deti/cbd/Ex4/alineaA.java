package ua.deti.cbd.Ex4;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.UpdateResult;

public class alineaA {

    private static int limite_produtos = 30;
    private static double tempo = 10.0;

    public static void main(String[] args) throws InterruptedException {
        
        String uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

        Logger.getLogger("org.mongodb.driver").setLevel(Level.SEVERE);
        String connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongodb-vscode+1.0.1";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {

            MongoDatabase database = mongoClient.getDatabase("cbd");
            MongoCollection<Document> collection = database.getCollection("atendimentoA");

            
            ArrayList<String> produtos1 = new ArrayList<String>();
            ArrayList<String> produtos2 = new ArrayList<String>();

            String user1 = "Tiago";
            String user2 = "Roberto";

            produtos1.add("cenoura");
            produtos1.add("batata");
            
            produtos1.add("alface");
            produtos1.add("tomate");
            produtos1.add("cebola");
            produtos1.add("alho");        
            produtos1.add("maça");
            produtos1.add("batata");
            produtos1.add("batata");
            produtos1.add("batata");

            produtos2.add("maça");
            produtos2.add("banana");
            produtos2.add("laranja");   
            produtos2.add("uva");
            produtos2.add("maça");
            produtos2.add("melancia");
            produtos2.add("melão");
            produtos2.add("maça");
            produtos2.add("morango");
            
            for(String produto : produtos1){


                inputProduct(collection, user1, produto);

                verificaTempo(collection, user1);

                Thread.sleep(3000); // 2000 milliseconds = 2 seconds

                System.out.println(collection.find(new Document("user",user1)).first());


            }

            for(String produto : produtos2){

                inputProduct(collection, user2, produto);

                verificaTempo(collection, user2);

                
                Thread.sleep(10000); // 6000 milliseconds = 6 seconds
                
                System.out.println(collection.find(new Document("user",user2)).first());

            }
            
            

        

        }
    }

    // private static void listProduct(Scanner scanner, MongoCollection<Document> collection) {
    //     String nome = scanner.next();
    //     if(collection.find(new Document("nome", nome)).first() == null){
    //         System.out.println("Utilizador não existe");
           
    //     }
    //     else{
    //         Bson filter = Filters.eq("nome", nome);
    //         FindIterable<Document> l1 = collection.find(filter);
    //         Document doc = l1.first();
    //         List<Object> produtos = Arrays.asList(doc.get("produtos"));
    //         produtos = (List<Object>) produtos.get(0);
    //         System.out.print("Produtos: ");
    //         System.out.println(produtos);
    //     }
    // }

    private static void verificaTempo(MongoCollection<Document> collection, String user1) {
        Bson filter = Filters.eq("user", user1);
        FindIterable<Document> l1 = collection.find(filter);
        Document doc = l1.first();
        List<Document> listaproduto= (List<Document>) doc.get("produtos");
        List<Document> updatedListaproduto = new ArrayList<>();
        long current_time = System.currentTimeMillis() / 1000;
        for(Document produto : listaproduto){
            if(current_time - (long) produto.get("time") <= tempo){  
                updatedListaproduto.add(produto);
            }
        }

        doc.put("produtos", updatedListaproduto);
        collection.replaceOne(Filters.eq("user", user1), doc);
    }

    private static void inputProduct(MongoCollection<Document> collection, String user, String produto ) {
        long current_time = System.currentTimeMillis() / 1000;
        if(collection.find(new Document("user",user)).first()==null){
            Document doc = new Document("user", user)
            .append("produtos", Arrays.asList(new Document("produto",produto).append("time", current_time)));
            collection.insertOne(doc);
        }
        else{
            Bson filter = Filters.eq("user", user);
            FindIterable<Document> l1 = collection.find(filter);
            Document doc = l1.first();
            List<Document> listaproduto= (List<Document>) doc.get("produtos");

            if(listaproduto.size() < limite_produtos){
                listaproduto.add(new Document("produto",produto).append("time", current_time));
                doc.put("produtos", listaproduto);
                collection.replaceOne(Filters.eq("user", user), doc);
            }
            else{
                System.out.println("Tamanho da Fila excedido");
                
            }

        }
        

    }

    
}
