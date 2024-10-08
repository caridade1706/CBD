package pt.ua.cbd.lab3.ex3.EXa;

import java.util.Scanner;

import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.SimpleStatement;

public class EdicaoUtilizador {
      public static void main(String args[]) {

        try {
            // connect to cassandra server
            CqlSession session = CqlSession.builder()
            .withKeyspace("cbd_ex2")
            .build();

            Scanner sc = new Scanner(System.in);

            System.out.print("Username: ");
            String username = sc.nextLine();

            System.out.print("Email: ");
            String email = sc.nextLine();

            System.out.print("New name: ");
            String nome = sc.nextLine();

            sc.close();

            System.out.println("Updating utilizador");
            // update utilizador
            session.execute(
                SimpleStatement.builder("update utilizadores set nome=? where username=? and email=?")
                .addPositionalValues(nome, username, email)
                .build()
            );

            session.close();
            
        } catch (Exception e){
            System.err.println(e);
        }
    }
    
}
