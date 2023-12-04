package ua.deti.cbd.Ex3;


import java.util.Arrays;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import com.mongodb.client.result.InsertManyResult;
import com.mongodb.client.result.InsertOneResult;
import com.mongodb.client.result.UpdateResult;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class alineaA {
    public static void main(String[] args) {
        
        String uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

        Logger.getLogger("org.mongodb.driver").setLevel(Level.SEVERE);
        String connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongodb-vscode+1.0.1";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {

            MongoDatabase database = mongoClient.getDatabase("cbd");
            MongoCollection<Document> collection = database.getCollection("restaurants");

            // testar inserção
            testarIsercao(collection);

            // testar edição
            testarEdicao(collection);

            // testar pesquisa
            testarPesquisa(collection);
        }
    }

    public static void testarIsercao(MongoCollection<Document> collection) {

        Document documento1 = new Document("address", new Document("building", "35")
                .append("coord", Arrays.asList(-73.981305, 40.742615))
                .append("rua", "R. Bartolomeu Dias")
                .append("zipcode", "4750117"))
                .append("localidade", "Barcelos")
                .append("gastronomia", "Sushi")
                .append("grades", Arrays.asList(
                        new Document("date", new Date(1483228800000L)).append("grade", "A").append("score", 9),
                        new Document("date", new Date(1464288000000L)).append("grade", "A").append("score", 8),
                        new Document("date", new Date(1432732800000L)).append("grade", "A").append("score", 10)
                ))
                .append("nome", "Restaurante Wokasia")
                .append("restaurant_id", "60093210");

        Document documento2 = new Document("address", new Document("building", "53")
                .append("coord", Arrays.asList(-73.987156, 40.748817))
                .append("rua", "Ed. Mercúrio")
                .append("zipcode", "4730454"))
                .append("localidade", "Braga")
                .append("gastronomia", "Steakhouse")
                .append("grades", Arrays.asList(
                        new Document("date", new Date(1559366400000L)).append("grade", "A").append("score", 6),
                        new Document("date", new Date(1527811200000L)).append("grade", "B").append("score", 23),
                        new Document("date", new Date(1496256000000L)).append("grade", "A").append("score", 7)
                ))
                .append("nome", "FAIAL D’OURO")
                .append("restaurant_id", "50056729");

        List<Document> documentosParaInserir = Arrays.asList(documento1, documento2);

        InsertManyResult result = collection.insertMany(documentosParaInserir);
        List<ObjectId> insertedIds = new ArrayList<>();
        result.getInsertedIds().values()
                .forEach(doc -> insertedIds.add(doc.asObjectId().getValue()));
        System.out.println("Inserted documents with the following ids: " + insertedIds);
    }

    public static void testarEdicao(MongoCollection<Document> collection) {
        Document query = new Document().append("nome", "New York Grill");

        Bson updates = Updates.combine(
                Updates.set("address.building", 99),
                Updates.set("Phone", "253926291"));

        UpdateResult result = collection.updateOne(query, updates);
        System.out.println("Modified document count: " + result.getModifiedCount());
    }

    public static void testarPesquisa(MongoCollection<Document> collection) {
        Bson filter = Filters.or(Filters.eq("nome", "Restaurante Wokasia"), Filters.eq("nome", "FAIAL D’OURO"));
        FindIterable<Document> l1 = collection.find(filter);
        for (Document d: l1) {
            System.out.println(d.toJson());
        }
    }
}