    USE cbd_ex4;

    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (1, 'Alice Smith', 'alice@example.com', {'home': '123 Apple St', 'work': '456 Banana Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (2, 'Bob Johnson', 'bob@example.com', {'home': '789 Cherry St', 'work': '101 Date Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (3, 'Carlos Rivera', 'carlos@example.com', {'home': '159 Grape St', 'work': '202 Fig Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (4, 'Diana Brooks', 'diana@example.com', {'home': '753 Kiwi St', 'work': '303 Hazel Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (5, 'Ethan Ford', 'ethan@example.com', {'home': '246 Lemon St', 'work': '404 Ivy Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (6, 'Fiona Graham', 'fiona@example.com', {'home': '135 Mango St', 'work': '505 Jasmine Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (7, 'George Hall', 'george@example.com', {'home': '864 Orange St', 'work': '606 Lavender Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (8, 'Hannah Ingram', 'hannah@example.com', {'home': '975 Papaya St', 'work': '707 Magnolia Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (9, 'Ian Jenkins', 'ian@example.com', {'home': '684 Pear St', 'work': '808 Narcissus Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (10, 'Julia Kline', 'julia@example.com', {'home': '793 Plum St', 'work': '909 Orchid Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (11, 'Kevin Lutz', 'kevin@example.com', {'home': '812 Quince St', 'work': '1010 Peony Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (12, 'Laura Mertz', 'laura@example.com', {'home': '921 Raspberry St', 'work': '1111 Rose Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (13, 'Michael Norris', 'michael@example.com', {'home': '130 Strawberry St', 'work': '1212 Sunflower Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (14, 'Nina Owens', 'nina@example.com', {'home': '349 Tangerine St', 'work': '1313 Tulip Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (15, 'Oliver Perez', 'oliver@example.com', {'home': '458 Ugli St', 'work': '1414 Violet Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (16, 'Pamela Quinn', 'pamela@example.com', {'home': '567 Watermelon St', 'work': '1515 Wisteria Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (17, 'Quincy Richards', 'quincy@example.com', {'home': '676 Xigua St', 'work': '1616 Yarrow Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (18, 'Rachel Simmons', 'rachel@example.com', {'home': '785 Yuzu St', 'work': '1717 Zinnia Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (19, 'Steven Turner', 'steven@example.com', {'home': '894 Avocado St', 'work': '1818 Bamboo Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (20, 'Tina Underwood', 'tina@example.com', {'home': '903 Banana St', 'work': '1919 Cactus Ave'}, toTimestamp(now()));
    INSERT INTO users (user_id, name, email, addresses, created_at) VALUES (21, 'Ursula Vargas', 'ursula@example', {'home': '012 Dragonfruit St', 'work': '2020 Eucalyptus Ave'}, toTimestamp(now()));


    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (1,  'Laptop High-End', 'Laptop com alto desempenho para jogos', 1500.00, {'electronics', 'computers', 'gaming'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (2,  'Smartphone Pro', 'Smartphone de última geração com câmera de alta qualidade', 900.00, {'electronics', 'phones'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (3,  'Headphones Bluetooth', 'Headphones sem fio com cancelamento de ruído', 200.00, {'electronics', 'audio'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (4,  'Smartwatch Fitness', 'Relógio inteligente com foco em saúde e fitness', 300.00, {'electronics', 'wearables', 'fitness'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (5,  'Tablet Professional', 'Tablet com recursos avançados para profissionais', 800.00, {'electronics', 'computers', 'mobile'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (6,  'E-reader Compact', 'Leitor de livros digitais leve e portátil', 120.00, {'electronics', 'readers'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (7,  'Action Camera', 'Câmera de ação resistente e impermeável para aventuras', 250.00, {'electronics', 'cameras', 'outdoors'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (8,  'Gaming Console', 'Console de jogos de última geração para entretenimento em casa', 500.00, {'electronics', 'gaming'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (9,  'Portable Speaker', 'Alto-falante portátil com som de alta qualidade', 150.00, {'electronics', 'audio', 'portable'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (10, 'Drone with Camera', 'Drone equipado com câmera para fotografia aérea', 400.00, {'electronics', 'cameras', 'drones'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (11, 'VR Headset', 'Óculos de realidade virtual para experiências imersivas', 350.00, {'electronics', 'gaming', 'vr'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (12, 'Wireless Mouse', 'Mouse sem fio com alta precisão e ergonomia', 40.00, {'electronics', 'computers', 'accessories'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (13, 'Keyboard Mechanical', 'Teclado mecânico retroiluminado para jogos', 100.00, {'electronics', 'computers', 'gaming'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (14, 'Digital Camera', 'Câmera digital com lentes intercambiáveis para fotografia profissional', 600.00, {'electronics', 'cameras', 'photography'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (15, 'External Hard Drive', 'Disco rígido externo com grande capacidade de armazenamento', 120.00, {'electronics', 'computers', 'storage'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (16, 'Smart Home Hub', 'Central de automação para casas inteligentes', 180.00, {'electronics', 'home', 'smart home'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (17, 'Fitness Tracker', 'Dispositivo de monitoramento de atividades físicas e saúde', 90.00, {'electronics', 'wearables', 'fitness'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (18, '3D Printer', 'Impressora 3D para prototipagem e projetos criativos', 400.00, {'electronics', 'gadgets', '3d printing'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (19, 'Robotic Vacuum Cleaner', 'Aspirador de pó robótico para limpeza automatizada', 250.00, {'electronics', 'home', 'cleaning'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (20, 'Electric Scooter', 'Scooter elétrico portátil para transporte urbano', 300.00, {'electronics', 'transport', 'eco-friendly'}, toTimestamp(now()));
    INSERT INTO products (product_id, name, description, price, categories, created_at) VALUES (21, 'Wireless Earbuds', 'Fones de ouvido sem fio com cancelamento de ruído', 150.00, {'electronics', 'audio'}, toTimestamp(now()));


    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (1, 1, [1, 2], toTimestamp(now()), 2400.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (2, 2, [3], toTimestamp(now()), 200.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (3, 3, [4, 5, 6], toTimestamp(now()), 1220.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (4, 4, [7], toTimestamp(now()), 250.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (5, 5, [8, 9], toTimestamp(now()), 650.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (6, 6, [10, 11], toTimestamp(now()), 750.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (7, 7, [12], toTimestamp(now()), 40.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (8, 8, [13, 14], toTimestamp(now()), 700.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (9, 9, [15], toTimestamp(now()), 120.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (10, 10, [16, 17], toTimestamp(now()), 270.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (11, 11, [18], toTimestamp(now()), 400.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (12, 12, [19, 20], toTimestamp(now()), 550.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (13, 13, [1, 3, 5], toTimestamp(now()), 1920.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (14, 14, [2, 4], toTimestamp(now()), 1200.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (15, 15, [6, 7, 8], toTimestamp(now()), 870.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (16, 16, [9, 10], toTimestamp(now()), 550.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (17, 17, [11, 12, 13], toTimestamp(now()), 490.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (18, 18, [14, 15, 16], toTimestamp(now()), 950.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (19, 19, [17, 18, 19], toTimestamp(now()), 740.00);
    INSERT INTO orders (order_id, user_id, product_ids, order_date, total_price) VALUES (20, 20, [20, 1, 2], toTimestamp(now()), 2700.00);


    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (1, 1, 1, 5, 'Excelente laptop para jogos!', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (2, 2, 2, 4, 'Smartphone muito bom, mas a bateria poderia durar mais.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (3, 3, 3, 5, 'Ótimos headphones, cancelamento de ruído incrível.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (4, 4, 4, 3, 'Bom, mas faltam algumas funcionalidades.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (5, 5, 5, 4, 'Tablet excelente para trabalho, mas um pouco caro.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (6, 6, 6, 2, 'A tela poderia ser melhor.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (7, 7, 7, 5, 'Perfeita para aventuras ao ar livre!', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (8, 8, 8, 4, 'Ótimo console, mas os jogos são caros.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (9, 9, 9, 3, 'Bom som, mas a bateria dura pouco.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (10, 10, 10, 5, 'Drone incrível, muito fácil de voar.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (11, 1, 11, 4, 'Laptop poderoso, mas um pouco pesado.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (12, 2, 12, 5, 'Melhor smartphone que já tive!', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (13, 3, 13, 4, 'Confortáveis e com boa qualidade de som.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (14, 4, 14, 3, 'Bom smartwatch, mas esperava mais funcionalidades.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (15, 5, 15, 5, 'Ótimo para leitura e navegação na web.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (16, 6, 16, 2, 'Não gostei da interface de usuário.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (17, 7, 17, 4, 'Boa câmera, mas poderia ser mais resistente.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (18, 8, 18, 5, 'Melhor console para jogos familiares.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (19, 9, 19, 3, 'Design legal, mas a qualidade do som é mediana.', toTimestamp(now()));
    INSERT INTO reviews (review_id, product_id, user_id, rating, comment, created_at) VALUES (20, 10, 20, 4, 'Drone fantástico, mas a câmera poderia ser melhor.', toTimestamp(now()));



    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (1, 1, {1, 2}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (2, 2, {3}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (3, 3, {4, 5}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (4, 4, {6, 7, 8}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (5, 5, {9, 10}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (6, 6, {1, 11}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (7, 7, {12, 13}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (8, 8, {14, 15}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (9, 9, {16, 17}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (10, 10, {18, 19}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (11, 11, {20, 2}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (12, 12, {3, 4}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (13, 13, {5, 6}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (14, 14, {7, 8}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (15, 15, {9, 10}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (16, 16, {11, 12}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (17, 17, {13, 14}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (18, 18, {15, 16}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (19, 19, {17, 18}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (20, 20, {19, 20}, toTimestamp(now()));


    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (1, 1, {1, 2}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (2, 2, {3}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (3, 3, {4, 5}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (4, 4, {6, 7, 8}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (5, 5, {9, 10}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (6, 6, {1, 11}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (7, 7, {12, 13}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (8, 8, {14, 15}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (9, 9, {16, 17}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (10, 10, {18, 19}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (11, 11, {20, 2}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (12, 12, {3, 4}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (13, 13, {5, 6}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (14, 14, {7, 8}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (15, 15, {9, 10}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (16, 16, {11, 12}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (17, 17, {13, 14}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (18, 18, {15, 16}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (19, 19, {17, 18}, toTimestamp(now()));
    INSERT INTO shopping_carts (cart_id, user_id, product_ids, updated_at) VALUES (20, 20, {19, 20}, toTimestamp(now()));


    UPDATE users SET addresses = addresses + {'vacation': '321 Beach St'} WHERE user_id = 1;  
    UPDATE products SET price = 1550.00 WHERE product_id = 1; 
    UPDATE shopping_carts SET product_ids = product_ids + {21} WHERE cart_id = 1;
    UPDATE reviews SET rating = 4, comment = 'Mudou minha opinião, é realmente bom!' WHERE review_id = 1; 
    UPDATE orders SET total_price = 2500.00 WHERE order_id = 1;  

    DELETE FROM users WHERE user_id = 21; 
    DELETE FROM products WHERE product_id = 21; 
    UPDATE shopping_carts SET product_ids = product_ids - {20} WHERE cart_id = 1;
    DELETE FROM reviews WHERE review_id = 20;  
    DELETE FROM orders WHERE order_id = 20;  

