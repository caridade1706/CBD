package pt.ua.cbd.lab3.ex3.Exb;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.*;

public class Query3 {
    // 3. Videos partilhados por determinado utilizador (maria1987, por exemplo) num determinado periodo de tempo (Agosto de 2017, por exemplo);
    public static void main(String[] args) {

        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            System.out.println("Videos partilhados por determinado utilizador (maria1987, por exemplo) num determinado periodo de tempo (Agosto de 2017, por exemplo);");


            ResultSet rs = session.execute(SimpleStatement
            .builder("select * from videos_por_autor where autor = 'user9' and data = '2023-11-25 23:27:13.820000+0000';")
            .build());

            System.out.printf("%-10s | %-30s | %-40s | %-3s | %-30s | %-30s\n", "autor", "data", "descricao", "id", "nome", "tags");
            System.out.println("-----------+--------------------------------+------------------------------------------+----+------------------+-------------------");

            for (Row row: rs) {
                System.out.printf("%-10s | %-30s | %-40s | %-3d | %-30s | %-30s\n", 
                    row.getString("autor"), 
                    row.getObject("data").toString(),
                    row.getString("descricao"),
                    row.getInt("id"),
                    row.getString("nome"),
                    row.getString("tags"));
            }

        

            session.close();

        } catch (Exception e) {
            System.err.println(e);
        }
      
    
    }
}
