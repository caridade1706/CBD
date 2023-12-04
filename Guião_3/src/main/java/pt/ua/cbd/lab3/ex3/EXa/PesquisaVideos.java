package pt.ua.cbd.lab3.ex3.EXa;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.*;

public class PesquisaVideos {
    public static void main(String args[]) {
    
        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();


            // search videos
            ResultSet rs = session.execute("SELECT * FROM videos");
            System.out.printf("\n%-8s %-33s %-12s %-39s %-5s %-28s\n", "id",  "autor","nome", "descricao", "tags", "data");
            for (Row row : rs) {
                // process the row
                System.out.printf("%-8s %-33s %-12s %-39s %-5s %-28s\n", 
                row.getInt("id"), 
                row.getString("autor"),
                row.getString("nome"),
                row.getString("descricao"),
                row.getList("tags", String.class),
                row.getObject("data"));
                
            }

            session.close();

        } catch (Exception e){
            System.err.println(e);
        }
    }
    
}
