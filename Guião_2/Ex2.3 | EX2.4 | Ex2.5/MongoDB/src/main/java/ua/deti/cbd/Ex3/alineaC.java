package ua.deti.cbd.Ex3;


import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.MongoCommandException;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Accumulators;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Indexes;
import com.mongodb.client.model.Projections;

import java.util.Arrays;
import java.util.logging.Level;
import java.util.logging.Logger;


public class alineaC {
    public static void main(String[] args) {
        
        String uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

        Logger.getLogger("org.mongodb.driver").setLevel(Level.SEVERE);
        String connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongodb-vscode+1.0.1";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {

            MongoDatabase database = mongoClient.getDatabase("cbd");
            MongoCollection<Document> collection = database.getCollection("restaurants");


            // 1. Indique o total de restaurantes localizados no Bronx
            System.out.println("1. Indique o total de restaurantes localizados no Bronx");
            Bson filterBronx = Filters.eq("localidade", "Bronx");
            FindIterable<Document> l1Bronx = collection.find(filterBronx);
            int count = 0;
            for (Document dBronx: l1Bronx) {
                count++;
            }
            System.out.println("Total de restaurantes localizados no Bronx: " + count);

            // 2. Indique os restaurantes com latitude inferior a -95,7
            System.out.println("2. Indique os restaurantes com latitude inferior a -95,7");
            Bson filterLat = Filters.lt("address.coord.0", -95.7);
            FindIterable<Document> l1Lat = collection.find(filterLat);
            for (Document dLat : l1Lat) {
                System.out.println(dLat.toJson());
            }

            // 3. Liste o restaurant_id, o nome, a localidade e gastronomia dos restaurantes cujo nome começam por "Wil"
            System.out.println("3. Liste o restaurant_id, o nome, a localidade e gastronomia dos restaurantes cujo nome começam por 'Wil'");
            Bson filterWil = Filters.regex("nome", "^Wil", "i");
            FindIterable<Document> l1Wil = collection.find(filterWil)
                    .projection(Projections.fields(
                            Projections.include("restaurant_id", "nome", "localidade", "gastronomia"),
                            Projections.excludeId()));
            for (Document dWil : l1Wil) {
                System.out.println(dWil.toJson());
            }

            // 4. Indique o número total de avaliações (numGrades) na coleção.
            System.out.println("4. Indique o número total de avaliações (numGrades) na coleção.");
            AggregateIterable<Document> resulteGrades =collection.aggregate(
                Arrays.asList(
                    Aggregates.unwind("$grades"),
                    Aggregates.group("TotalGrades", Accumulators.sum("count", 1))
                )
            );
            System.out.println(resulteGrades.first().toJson());
            

            // 5. Conte o total de restaurante existentes em cada localidade.
            System.out.println("5. Conte o total de restaurante existentes em cada localidade.");
              AggregateIterable<Document> resultLocal =collection.aggregate(
                Arrays.asList(
                    Aggregates.group("$localidade", Accumulators.sum("count", 1))
                )
            );
            for (Document dLocal : resultLocal) {
                System.out.println(dLocal.toJson());
            }
            
        }
    }
}