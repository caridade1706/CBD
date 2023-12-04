package pt.ua.cbd.lab3.ex3.EXa;

import java.util.Scanner;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.SimpleStatement;

public class InsercaoUtilizador {

     public static void main(String args[]) {
        
        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            Scanner sc = new Scanner(System.in);

            System.out.print("Username: ");
            String username = sc.nextLine();

            System.out.print("Nome: ");
            String nome = sc.nextLine();

            System.out.print("Email: ");
            String email = sc.nextLine();

            sc.close();

            System.out.println("Inserting utilizador");

            // insert utilizador
            session.execute(
                SimpleStatement.builder("insert into utilizadores (username, nome, email, selo_tempo) values ( ?, ?, ?, toTimestamp(now()))")
                .addPositionalValues(username, email, nome)
                .build()

            );

            session.close();

    } catch (Exception e){
        System.err.println(e);
    }
    }
    
}
