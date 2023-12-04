package pt.ua.cbd.lab3.ex3.Exb;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.*;

public class Query4 {
    // 4.  Todos os seguidores (followers) de determinado video;
    public static void main(String[] args) {

        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            System.out.println(" Todos os seguidores (followers) de determinado video;;");


            ResultSet rs = session.execute(SimpleStatement
            .builder("select * from followers where id_video = 14;")
            .build());

            System.out.printf("%-10s | %-30s ",  "id_video", "utilizador");
            System.out.println("-----------+--------------------------------");

            for (Row row: rs) {
                System.out.printf("%-10s | %-30s",
                    row.getInt("id_video"),
                    row.getSet("utilizador", String.class));
            }

        

            session.close();

        } catch (Exception e) {
            System.err.println(e);
        }
      
    
    }
}
