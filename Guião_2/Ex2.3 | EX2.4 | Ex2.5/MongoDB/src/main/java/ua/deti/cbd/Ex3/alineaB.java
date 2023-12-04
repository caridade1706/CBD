package ua.deti.cbd.Ex3;


import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.MongoCommandException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;
import java.util.logging.Level;
import java.util.logging.Logger;


public class alineaB {
    public static void main(String[] args) {
        
        String uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

        Logger.getLogger("org.mongodb.driver").setLevel(Level.SEVERE);
        String connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongodb-vscode+1.0.1";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {

            MongoDatabase database = mongoClient.getDatabase("cbd");
            MongoCollection<Document> collection = database.getCollection("restaurants");

           // Index Localidade
           String resultCreateIndexLoc = collection.createIndex(Indexes.ascending("localidade"));
           System.out.println(String.format("Index created: %s", resultCreateIndexLoc));
           Bson filterLoc = Filters.eq("localidade", "Braga");
           FindIterable<Document> l1Loc = collection.find(filterLoc);
           for (Document dLoc: l1Loc) {
               System.out.println(dLoc.toJson());
           }

           // Index Gastronomia
           String resultCreateIndexGas = collection.createIndex(Indexes.ascending("gastronomia"));
           System.out.println(String.format("Index created: %s", resultCreateIndexGas));
           Bson filterGas = Filters.eq("gastronomia", "Ice Cream, Gelato, Yogurt, Ices");
           FindIterable<Document> l1Gas = collection.find(filterGas);
           for (Document dGas: l1Gas) {
               System.out.println(dGas.toJson());
           }

           // Index Nome
            try {
                String resultCreateIndexNome = collection.createIndex(Indexes.text("nome"));
                System.out.println(String.format("Index created: %s", resultCreateIndexNome));
                Bson filterNome = Filters.eq("nome", "Restaurante Wokasia");
                FindIterable<Document> l1Nome = collection.find(filterNome);
                for (Document dNome: l1Nome) {
                    System.out.println(dNome.toJson());
                }
            } catch (MongoCommandException e) {
                if (e.getErrorCodeName().equals("IndexOptionsConflict"))
                    System.out.println("there's an existing text index with different options");
            }
            
        }
    }
}