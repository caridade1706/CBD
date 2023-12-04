DROP KEYSPACE IF EXISTS cbd_ex2;
CREATE KEYSPACE cbd_ex2 WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE cbd_ex2;


CREATE TABLE utilizadores(
   username text PRIMARY KEY,
   nome text,
   email text,
   selo_tempo timestamp
   
);

CREATE TABLE videos(
    id int,
    autor text,
    nome text,
    descricao text,
    tags list<text>,
    data timestamp,
    PRIMARY KEY (nome, data) 
)   WITH CLUSTERING ORDER BY (data DESC);

CREATE TABLE videos_por_autor(
    id int,
    autor varchar,
    nome varchar,
    descricao varchar,
    tags list<text>,
    data timestamp,
    PRIMARY KEY (autor, data)
);

CREATE TABLE autor_comentarios(
    id int,
    id_video int,
    autor varchar,
    comentario varchar,
    data timestamp,
    PRIMARY KEY (autor, data)
) WITH CLUSTERING ORDER BY (data DESC);

CREATE TABLE videos_comentarios(
    id int,
    id_video int,
    autor varchar,
    comentario varchar,
    data timestamp,
    PRIMARY KEY (id_video, data)
) WITH CLUSTERING ORDER BY (data DESC);


CREATE TABLE followers(
    utilizador set<text>,
    id_video int,
    PRIMARY KEY (id_video)
);


CREATE TABLE eventos(
    id int,
    user_id text,
    id_video int,
    evento varchar,
    video_data timestamp,
    data timestamp,
    PRIMARY KEY ((id_video, user_id), data, evento)
);

CREATE TABLE ratings(
    id int,
    id_video int,
    valor int,
    data timestamp,
    PRIMARY KEY (id_video, valor, data)
);

CREATE TABLE rating_avg(
    id_video int,
    num_ratings counter,
    valor_rating counter,
    PRIMARY KEY (id_video)
);

CREATE TABLE videos_por_tag (
    id int,
    tag text,
    id_video int,
    PRIMARY KEY (tag, id_video)
);

CREATE TABLE user_following_comments (
    user_id text,
    video_id int,
    comment_id int,
    comment_author text,
    comment text,
    PRIMARY KEY ((user_id), video_id)
);

