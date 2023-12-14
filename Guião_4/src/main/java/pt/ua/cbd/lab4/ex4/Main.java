package pt.ua.cbd.lab4.ex4;

import java.io.File;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Session;
import org.neo4j.driver.Record; // Importação correta do Record do Neo4j
import org.neo4j.driver.Result;

public class Main {

    private final Driver driver;

    public Main(String uri) {
        driver = GraphDatabase.driver(uri);
    }

    public void close() {
        driver.close();
    }

    public Driver getDriver() {
        return driver;
    }

    public static void main(String[] args) {
        // Configurações do Neo4j
        String uri = "bolt://localhost:7687";

        // Cria uma instância do Main
        Main mainInstance = new Main(uri);

        CsvNodeUploader nodeUploader = new CsvNodeUploader(mainInstance.getDriver());
        CsvRelationshipUploader relationshipUploader = new CsvRelationshipUploader(mainInstance.getDriver());

        // Caminho dos arquivos CSV
        String basePath = "./resources/";

        List<String> questionsList = new ArrayList<>();
        List<String> queriesList = new ArrayList<>();

        questionsList.add("1 - Listar todas as pessoas que participaram de um evento específico");
        queriesList.add("MATCH (p:Pessoa)-[r:PARTICIPAR]->(e:Evento) WHERE e.nome = 'Webinar' RETURN p.nome");

        questionsList.add("2 - Contar quantos eventos diferentes cada empresa organizou");
        queriesList.add("MATCH (emp:Empresa)-[:ORGANIZA]->(ev:Evento) RETURN emp.nome, COUNT(DISTINCT ev) AS num_eventos");

        questionsList.add("3 - Listar eventos que não têm participantes");
        queriesList.add("MATCH (e:Evento) WHERE NOT (e)<-[:PARTICIPAR]-(:Pessoa) RETURN e");

        questionsList.add("4 - Encontrar todas as empresas que patrocinam um evento específico");
        queriesList.add("MATCH (emp:Empresa)-[:PATROCINAR]->(ev:Evento {nome: 'Feira'}) RETURN emp.nome");

        questionsList.add("5 - Listar pessoas que participam de mais de N eventos");
        queriesList.add("MATCH (p:Pessoa)-[:PARTICIPAR]->(ev:Evento) WITH p, COUNT(ev) AS num_eventos WHERE num_eventos > 1 RETURN p.nome, num_eventos");

        questionsList.add("6 - Encontrar eventos organizados e patrocinados pela mesma empresa");
        queriesList.add("MATCH (emp:Empresa)-[:ORGANIZA]->(ev:Evento), (emp)-[:PATROCINAR]->(ev) RETURN emp.nome, ev.nome");

        questionsList.add("7 - Listar pessoas com mais de N conexões");
        queriesList.add("MATCH (p:Pessoa)-[:AMIGO]->(p2:Pessoa) WITH p, COUNT(p2) AS num_conexoes WHERE num_conexoes > 4 RETURN p.nome, num_conexoes");

        questionsList.add("8 - Listar empresas que patrocinaram mais de N eventos");
        queriesList.add("MATCH (emp:Empresa)-[:PATROCINAR]->(ev:Evento) WITH emp, COUNT(ev) AS num_eventos WHERE num_eventos > 1 RETURN emp.nome, num_eventos");

        questionsList.add("9 - Listar pessoas que participaram de eventos de uma empresa específica");
        queriesList.add("MATCH (p:Pessoa)-[:PARTICIPAR]->(ev:Evento)<-[:ORGANIZA]-(emp:Empresa {nome: 'Soluções'}) RETURN p.nome, ev.nome");

        questionsList.add("10 - Encontrar a pessoa que participa do maior número de eventos");
        queriesList.add("MATCH (p:Pessoa)-[:PARTICIPAR]->(ev:Evento) WITH p, COUNT(ev) AS num_eventos ORDER BY num_eventos DESC LIMIT 1 RETURN p.nome, num_eventos");


        // Upload dos dados
        try {
            nodeUploader.uploadCsv(basePath + "EX4_pessoas.csv", "Pessoa");
            nodeUploader.uploadCsv(basePath + "EX4_empresas.csv", "Empresa");
            nodeUploader.uploadCsv(basePath + "EX4_eventos.csv", "Evento");
            relationshipUploader.uploadCsv(basePath + "EX4_relacionamentos.csv");
            relationshipUploader.uploadCsv(basePath + "EX4_relacionamentos_eventos_empresas.csv");
            relationshipUploader.uploadCsv(basePath + "EX4_relacionamentos_eventos_pessoas.csv");
            
            
        } catch (Exception e) {
            e.printStackTrace();
        }

        try (PrintWriter out = new PrintWriter(new File("CBD_L44c_output.txt"))) {
            try (Session session = mainInstance.getDriver().session()) {
                for (int i = 0; i < queriesList.size(); i++) {
                    String question = questionsList.get(i);
                    String query = queriesList.get(i);

                    System.out.println(question);
                    out.println(question);

                    Result result = session.run(query);
                    while (result.hasNext()) {
                        Record record = result.next(); // Sem necessidade de cast
                        System.out.println(record);
                        out.println(record);
                    }


                    System.out.println();
                    out.println();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Fecha a conexão
        mainInstance.close();
    }
}
