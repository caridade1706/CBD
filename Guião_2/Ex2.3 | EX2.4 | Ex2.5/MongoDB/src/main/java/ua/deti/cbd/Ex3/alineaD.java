package ua.deti.cbd.Ex3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;

import org.bson.Document;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.DistinctIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Accumulators;
import static com.mongodb.client.model.Aggregates.group;
import static com.mongodb.client.model.Filters.regex;

public class alineaD {

    static MongoCollection<Document> collection;

    public static void main(String[] args) {

         
        String uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";

        Logger.getLogger("org.mongodb.driver").setLevel(Level.SEVERE);
        String connectionString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongodb-vscode+1.0.1";
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {

            MongoDatabase database = mongoClient.getDatabase("cbd");
            collection = database.getCollection("restaurants");


            System.out.println("Numero de localidades distintas: "+ countLocalidades());

            System.out.println("Numero de restaurantes por localidade: ");
            Map<String, Integer> map = countRestByLocalidade();
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                System.out.println("-> " + entry.getKey() + " - " + entry.getValue());
            }

            System.out.println("Nome de restaurantes contendo 'Park' no nome: ");
            List<String> list = getRestWithNameCloserTo("Park");
            for (String elem : list)
                System.out.println("-> "+elem);      

        }
    }

   public static List<String> getRestWithNameCloserTo(String name){
        List<String> list = new ArrayList<String>();
        FindIterable<Document> documents = collection.find(regex("nome", ".*" + Pattern.quote(name) + ".*"));

        for (Document doc : documents) {
            list.add((String) doc.get("nome"));
        }
        
        return list;
    }

    public static Map<String, Integer> countRestByLocalidade(){
        Map<String, Integer> map = new HashMap<>();

        AggregateIterable<Document> documents = collection.aggregate(Arrays.asList(group("$localidade",
                                                                        Accumulators.sum("number_restaurants",1))));

        for (Document doc : documents) {
            map.put(doc.get("_id").toString(), (int) (doc.get("number_restaurants")));
        }
        
        return map;
    }

    private static int countLocalidades() {
         int count = 0;
        
        DistinctIterable<String> documents = collection.distinct("localidade", String.class);
        for (String elem : documents) {
            count++;
        }
        return count;
    }
    
}
