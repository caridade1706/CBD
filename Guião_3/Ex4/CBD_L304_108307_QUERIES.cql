// 1. Selecionar um utilizador específico pelo nome
SELECT * FROM users WHERE name = 'Alice Smith';

// 2. Devolve todos os Produtos de uma Categoria Específica:
SELECT * FROM products WHERE categories CONTAINS 'electronics';


// 3. Devolve todas as avaliações de um produto específico:
SELECT * FROM reviews WHERE product_id = 7;

// 4. Pesquisa de produtos por nome
SELECT * FROM products WHERE name = 'Laptop High-End';

// 5. Devolve todos os produtos com avaliações iguais a 5
SELECT * FROM reviews WHERE rating = 5;

// 6. Pesquisa de utilizadores por endereço
SELECT * FROM users WHERE addresses CONTAINS '123 Apple St';

// 7. Pesquisa por email
SELECT * FROM users WHERE email = 'alice@example.com';

// 8. Pesquisa de pedidos com um determinado produto
SELECT * FROM orders WHERE product_ids CONTAINS 3;

// 9. Pesquisa de avalizações dadas por um determinado utilizador
SELECT * FROM reviews WHERE user_id = 2;

// 10. Encomendas feitas após uma determinada data
SELECT * FROM orders WHERE order_date > '2023-01-01' ALLOW FILTERING;
