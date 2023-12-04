package pt.ua.cbd.lab3.ex3.Exb;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.*;

public class Query2 {
    // 2. Os ultimos 5 eventos de determinado video realizados por um utilizador;
    public static void main(String[] args) {

        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            System.out.println("Os ultimos 5 eventos de determinado video realizados por um utilizador");


            ResultSet rs = session.execute(SimpleStatement
            .builder("select evento from eventos where id_video = 2 and user_id = 'user3' limit 5;")
            .build());

            System.out.println(" tags");
            System.out.println("---------------------");

            for (Row row: rs) {
                System.out.println(row.getString("tags"));
            }

            session.close();

        } catch (Exception e) {
            System.err.println(e);
        }
        
    }
    
}
