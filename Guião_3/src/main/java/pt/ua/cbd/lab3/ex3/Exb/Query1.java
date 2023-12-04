package pt.ua.cbd.lab3.ex3.Exb;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.*;

public class Query1 {
    // 1. Os ultimos 3 comentarios introduzidos para um video;
    public static void main(String[] args) {
        
        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            System.out.println("Os ultimos 3 comentarios introduzidos para um video");


            ResultSet rs = session.execute(SimpleStatement
            .builder("select * from videos_comentarios where id_video = 4 limit 3;")
            .build());

            System.out.printf("%-10s | %-30s | %-10s | %-40s | %-10s\n", "id_video", "data", "autor", "comentario", "id");
            System.out.println("----------+--------------------------------+----------+---------------------------------------+----------");

            for (Row row: rs) {
                System.out.printf("%-10s | %-30s | %-10s | %-40s | %-10s\n", 
                    row.getInt("id_video"), 
                    row.getObject("comentario_data"),
                    row.getString("autor"),
                    row.getString("comentario"),
                    row.getInt("id")
                ); 
            }

            session.close();

        } catch (Exception e) {
            System.err.println(e);
        }
        
    }
}
