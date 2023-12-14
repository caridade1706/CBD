package pt.ua.cbd.lab4.ex4;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class CsvNodeUploader {

    private final Driver driver;

    public CsvNodeUploader(Driver driver) {
        this.driver = driver;
    }

    public void uploadCsv(String filePath, String nodeLabel) throws IOException, CsvException {
            try (CSVReader reader = new CSVReader(new FileReader(filePath))) {
            List<String[]> allData = reader.readAll();
    
            for (String[] row : allData) {
                try (Session session = driver.session()) {
                    String query = String.format("CREATE (n:%s {id: '%s', nome: '%s'})", 
                                                 nodeLabel, row[0], row[1]);
                    session.executeWrite(tx -> {
                        tx.run(query);
                        return null; // Consumindo o resultado
                    });
                }
            }
        }
    }
    
}
