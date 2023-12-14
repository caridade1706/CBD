package pt.ua.cbd.lab4.ex4;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class CsvRelationshipUploader {

    private final Driver driver;

    public CsvRelationshipUploader(Driver driver) {
        this.driver = driver;
    }

    public void uploadCsv(String filePath) throws IOException, CsvException {
        try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            List<String[]> allData = reader.readAll();
    
            for (String[] row : allData) {
                try (Session session = driver.session()) {
                    String query = String.format("MATCH (a {id: '%s'}), (b {id: '%s'}) " +
                                                 "CREATE (b)-[:%s]->(a)", 
                                                 row[0], row[1], row[2].toUpperCase());
                    session.executeWrite(tx -> {
                        tx.run(query);
                        return null; // Consumindo o resultado
                    });
                }
            }
        }
    }
    
}
