// 7. Permitir a pesquisa de todos os videos de determinado autor;

// 8. Permitir a pesquisa de comentarios por utilizador, ordenado inversamente pela data;

// 9. Permitir a pesquisa de comentarios por videos, ordenado inversamente pela data;

// 10. Permitir a pesquisa do rating medio de um video e quantas vezes foi votado;



// 1. Os ultimos 3 comentarios introduzidos para um video;
select * from videos_comentarios where id_video = 4 limit 3;

// 2. Lista das tags de determinado video;UA.DETI.CBD- 2023/24 15
select tags from videos where nome = 'Fotografia 1.0';
 
// 3. Todos os videos com a tag Aveiro; --- Não dá para fazer criar um indece
select * from videos_por_tag where tag = 'Aveiro';

// 4. Os ultimos 5 eventos de determinado video realizados por um utilizador;
select evento from eventos where id_video = 2 and user_id = 'user3' limit 5;

// 5. Videos partilhados por determinado utilizador (maria1987, por exemplo) num determinado periodo de tempo (Agosto de 2017, por exemplo);
select * from videos_por_autor where autor = 'user9' and data = '2023-11-25 23:27:13.820000+0000';

// 6. Os ultimos 10 videos, ordenado inversamente pela data da partilhada;
Não é suportado por Cassandra

// 7. Todos os seguidores (followers) de determinado video;
select * from followers where id_video = 14;

// 8. Todos os comentarios (dos videos) que determinado utilizador esta a seguir (following);----não da
select * from user_following_comments where user_id = 'user7';

// 9. Os 5 videos com maior rating;
Não é suportado por Cassandra, pois este não suporta diretamente consultas de agregação como MAX ou TOP N 

// 10. Uma query que retorne todos os videos e que mostre claramente a forma pela qual estao ordenados;
select * from videos;

// 11. Lista com as Tags existentes e o numero de videos catalogados com cada uma delas;---- não dá
select count(*) as num_videos, tag from videos_por_tag group by tag;


// 12. Selecionar Vídeos Por Autor e Ordem Decrescente de Data
select * from videos_por_autor where autor = 'user9' order by data desc;

// 13.Selecionar Comentários de Vídeos e Ordenar por Data
select * from videos_comentarios where id_video = 4 order by data desc;
