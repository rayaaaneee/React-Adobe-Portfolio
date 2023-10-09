-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 09 avr. 2023 à 19:37
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `market_manager`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `unity_price` double NOT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_23A0E66C54C8C93` (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=170 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `type_id`, `name`, `unity_price`, `image`) VALUES
(1, 1, 'Pastas', 1.5, 'pasta.png'),
(2, 1, 'Rice', 2.3, 'rice.png'),
(3, 1, 'Chips', 1.8, 'chips.png'),
(4, 2, 'Cookies', 1.2, 'cookies.png'),
(5, 2, 'Chocolate', 2.5, 'chocolate.png'),
(6, 2, 'Candies', 0.8, 'candy.png'),
(7, 3, 'Laundry', 6.5, 'laundry.png'),
(8, 3, 'Detergent', 2.2, 'detergent.png'),
(9, 3, 'Toilet paper', 1.8, 'toilet-paper.png'),
(10, 4, 'Man shirt', 20, 'man-shirt.png'),
(11, 4, 'Woman dress', 25, 'woman-dress.png'),
(12, 4, 'Belt', 8.5, 'belt.png'),
(13, 5, 'Pillow', 12, 'pillow.png'),
(14, 5, 'Rug', 30, 'rug.png'),
(15, 5, 'Coffee table', 50, 'coffee-table.png'),
(16, 6, 'Aspirin', 2.5, 'aspirin.png'),
(17, 6, 'Vitamin C', 6, 'vitamin-c.png'),
(18, 6, 'Band aid', 1.2, 'band-aid.png'),
(19, 7, 'Puzzle', 8, 'puzzle.png'),
(20, 7, 'Card game', 4.5, 'cards.png'),
(21, 10, 'Football ball', 12, 'football-ball.png'),
(22, 10, 'Basket ball', 15, 'basketball-ball.png'),
(23, 10, 'Tennis racket', 35, 'tennis-racket.png'),
(24, 8, 'Lip Stick', 6.5, 'lipstick.png'),
(25, 8, 'Mascara', 8, 'mascara.png'),
(26, 8, 'Nail polish', 5, 'nail-polish.png'),
(27, 9, 'Book', 10, 'book.png'),
(28, 9, 'Magazine', 3.5, 'magazine.png'),
(29, 2, 'Fruit salad', 3.99, 'fruit-salad.png'),
(30, 1, 'Cheese', 8.49, 'cheese.png'),
(31, 3, 'Cleaner', 4.29, 'cleaner.png'),
(32, 4, 'Men t-shirt', 14.99, 'mens-tshirt.png'),
(33, 4, 'Women pant', 29.99, 'womens-pants.png'),
(34, 5, 'Bath towel', 12.99, 'bath-towel.png'),
(35, 5, 'Curtain', 19.99, 'curtain.png'),
(36, 6, 'Electric toothbrush', 39.99, 'electric-toothbrush.png'),
(37, 6, 'Thermometer', 8.99, 'thermometer.png'),
(38, 7, 'Ping-pong kit', 0.99, 'ping-pong-kit.png'),
(39, 8, 'Makeup kit', 39.99, 'makeup-kit.png'),
(40, 10, 'Sports bag', 34.99, 'sports-bag.png'),
(41, 10, 'Rugby ball', 19.99, 'rugby-ball.png'),
(42, 6, 'Tea', 3.99, 'tea.png'),
(43, 3, 'Tissue box', 1.49, 'tissue-box.png'),
(44, 4, 'Handbag', 49.99, 'handbag.png'),
(45, 5, 'Nightstand', 59.99, 'nightstand.png'),
(46, 5, 'Iron', 29.99, 'iron.png'),
(47, 4, 'Men coat', 89.99, 'mens-coat.png'),
(48, 4, 'Women jacket', 69.99, 'womens-jacket.png'),
(49, 1, 'Sunflower seeds', 2.99, 'sunflower-seeds.png'),
(50, 2, 'Corn chips', 2.49, 'corn-chips.png'),
(51, 3, 'Hand soap', 3.49, 'hand-soap.png'),
(52, 7, 'Colored pencils', 1.99, 'colored-pencils.png'),
(53, 10, 'Volley ball', 24.99, 'volleyball.png'),
(54, 10, 'Ping pong table', 99.99, 'ping-pong-table.png'),
(55, 8, 'Makeup sponge', 9.99, 'makeup-sponge.png'),
(56, 10, 'Badminton racket', 39.99, 'badminton-racket.png'),
(57, 10, 'Running shoe', 79.99, 'running-shoes.png'),
(58, 5, 'Broom', 14.99, 'broom.png'),
(59, 9, 'Corkscrew', 6.99, 'corkscrew.png'),
(60, 4, 'Socks', 4.99, 'socks.png'),
(61, 5, 'Bath mat', 12.99, 'bath-mat.png'),
(62, 6, 'Hairbrush', 6.99, 'hairbrush.png'),
(63, 6, 'Hair dryer', 34.99, 'hair-dryer.png'),
(64, 6, 'Nail brush', 3.99, 'nail-brush.png'),
(65, 6, 'Tweezers', 2.99, 'tweezers.png'),
(66, 6, 'Electric shaver', 49.99, 'electric-shaver.png'),
(67, 8, 'Compact mirror', 7.99, 'compact-mirror.png'),
(68, 8, 'Deodorant', 4.99, 'deodorant.png'),
(69, 8, 'Shampoo', 9.99, 'shampoo.png'),
(70, 8, 'Shower gel', 7.99, 'shower-gel.png'),
(71, 6, 'Toothbrush', 2.99, 'toothbrush.png'),
(72, 6, 'Toothpaste', 4.99, 'toothpaste.png'),
(73, 3, 'Cleansing wipes', 3.99, 'cleansing-wipes.png'),
(74, 3, 'Glass cleaner', 5.99, 'glass-cleaner.png'),
(75, 3, 'Microfiber cloth', 8.99, 'microfiber-cloth.png'),
(76, 9, 'Wine bottle stopper', 1.99, 'wine-bottle-stopper.png'),
(77, 5, 'Trash bag', 6.99, 'trash-bag.png'),
(78, 5, 'Air freshener', 3.99, 'air-freshener.png'),
(79, 9, 'Gift wrap', 1.99, 'gift-wrap.png'),
(80, 9, 'Tape', 2.99, 'tape.png'),
(81, 7, 'Light bulb', 4.99, 'lightbulb.png'),
(82, 6, 'White bread', 1.29, 'white-bread.png'),
(83, 4, 'Whole wheat bread', 1.99, 'whole-wheat-bread.png'),
(84, 2, 'Ham', 3.49, 'ham.png'),
(85, 1, 'Prosciutto', 6.99, 'prosciutto.png'),
(86, 6, 'Yogurt', 1.29, 'yogurt.png'),
(87, 2, 'Butter', 1.89, 'butter.png'),
(88, 1, 'Eggs', 2.49, 'eggs.png'),
(89, 4, 'Wheat flour', 1.29, 'wheat-flour.png'),
(90, 3, 'Sugar powder', 0.99, 'sugar.png'),
(91, 3, 'Sugar squares', 0.99, 'sugar.png'),
(92, 2, 'Brown sugar', 1.29, 'brown-sugar.png'),
(93, 1, 'Olive oil', 4.99, 'olive-oil.png'),
(94, 1, 'Sunflower oil', 2.99, 'sunflower-oil.png'),
(95, 1, 'Balsamic vinegar', 3.49, 'balsamic-vinegar.png'),
(96, 1, 'Red wine vinegar', 2.99, 'red-wine-vinegar.png'),
(97, 5, 'Potatoes', 2.99, 'potatoes.png'),
(98, 4, 'Carrots', 1.99, 'carrots.png'),
(99, 2, 'Cauliflower', 2.49, 'cauliflower.png'),
(100, 3, 'Lettuce', 1.99, 'lettuce.png'),
(101, 4, 'Tomatoes', 2.99, 'tomatoes.png'),
(102, 3, 'Peppers', 3.49, 'peppers.png'),
(103, 4, 'Onions', 1.99, 'onions.png'),
(104, 3, 'Garlic', 0.99, 'garlic.png'),
(105, 2, 'Parsley', 1.49, 'parsley.png'),
(106, 2, 'Thyme', 1.49, 'thyme.png'),
(107, 2, 'Rosemary', 1.49, 'rosemary.png'),
(108, 1, 'Honey', 6.99, 'honey.png'),
(109, 1, 'Orange juice', 2.49, 'orange-juice.png'),
(110, 1, 'Roast chicken', 7.99, 'roast-chicken.png'),
(111, 1, 'Salmon', 9.99, 'salmon.png'),
(112, 1, 'Coffee', 5.99, 'coffee.png'),
(113, 1, 'Canned tuna', 2.99, 'canned-tuna.png'),
(114, 1, 'Sour cream', 1.99, 'sour-cream.png'),
(115, 3, 'Furniture Polish', 9.99, 'furniture-polish.png'),
(116, 4, 'Dress Shirt', 39.99, 'dress-shirt.png'),
(117, 4, 'Skirt', 29.99, 'skirt.png'),
(118, 5, 'Hat', 18.99, 'hat.png'),
(119, 10, 'Watch', 99.99, 'watch.png'),
(120, 5, 'Wool Scarf', 22.99, 'wool-scarf.png'),
(121, 5, 'Laptop Bag', 59.99, 'laptop-bag.png'),
(122, 5, 'Decorative Pillow', 19.99, 'decorative-pillow.png'),
(123, 5, 'Photo Frame', 12.99, 'photo-frame.png'),
(124, 3, 'Home Deodorizer', 3.49, 'home-deodorizer.png'),
(125, 5, 'Dress Shirt', 39.99, 'dress-shirt.png'),
(126, 5, 'Wool Scarf', 22.99, 'wool-scarf.png'),
(127, 5, 'Laptop Bag', 59.99, 'laptop-bag.png'),
(128, 5, 'Decorative Pillow', 19.99, 'decorative-pillow.png'),
(129, 5, 'Photo Frame', 12.99, 'photo-frame.png'),
(130, 4, 'Toilet Brush', 7.99, 'toilet-brush.png'),
(131, 3, 'Laundry Stain Remover', 6.49, 'laundry-stain-remover.png'),
(132, 3, 'Carpet Cleaner', 11.99, 'carpet-cleaner.png'),
(133, 10, 'Jogging Pants', 24.99, 'jogging-pants.png'),
(134, 5, 'Dress Shirt', 39.99, 'dress-shirt.png'),
(135, 5, 'Table Lamp', 29.99, 'ceramic-table-lamp.png'),
(136, 5, 'Velvet Cushion', 12.99, 'velvet-cushion.png'),
(137, 5, 'Jute Woven Rug', 39.99, 'jute-woven-rug.png'),
(138, 5, 'Cotton Cushion Cover', 8.99, 'cotton-cushion-cover.png'),
(139, 5, 'Blown Glass Vase', 19.99, 'blown-glass-vase.png'),
(140, 5, 'Wool Blanket', 49.99, 'wool-blanket.png'),
(141, 5, 'Wooden Wall Clock', 34.99, 'wooden-wall-clock.png'),
(142, 5, 'Metal Wall Mirror', 42.99, 'metal-wall-mirror.png'),
(143, 5, 'Wooden Photo Frame', 8.99, 'wooden-photo-frame.png'),
(144, 5, 'Essential Oil', 12.99, 'essential-oil.png'),
(145, 6, 'Olive Oil Soap', 6.99, 'olive-oil-soap.png'),
(146, 6, 'Tea Infuser', 4.99, 'stainless-steel-tea-infuser.png'),
(147, 6, 'Electric Foot Massager', 49.99, 'electric-foot-massager.png'),
(148, 6, 'Heating Pad', 29.99, 'heating-pad.png'),
(149, 7, 'Uno Card Game', 9.99, 'uno.png'),
(150, 7, 'Monopoly', 30, 'monopoly.png'),
(151, 7, 'Jenga', 15, 'jenga.png'),
(152, 7, 'Lego', 20, 'lego.png'),
(153, 7, 'Beyblade', 5.99, 'beyblade.png'),
(154, 7, 'Trivial Pursuit Board Game', 40, 'trivial-pursuit.png'),
(155, 7, 'Modeling Compound', 7, 'modelling-campound.png'),
(156, 7, 'Catan Board Game', 49.99, 'catan-board-game.png'),
(157, 7, 'Doll', 19, 'doll.png'),
(158, 8, 'Body Lotion', 13, 'body-lotion.png'),
(159, 8, 'Self care cream', 35, 'anti-aging-cream.png'),
(160, 8, 'Foundation', 15.5, 'foundation.png'),
(161, 8, 'Eyebrow Pencil', 22, 'eyebrow-pencil.png'),
(162, 8, 'Perfume', 90, 'perfume.png'),
(163, 10, 'Swimsuit', 20, 'swimsuit.png'),
(164, 10, 'Yoga Mat', 40, 'yoga-mat.png'),
(165, 10, 'Hiking Socks', 15, 'hiking-socks.png'),
(166, 10, 'Water Bottle', 24.99, 'water-bottle.png'),
(167, 10, 'Boxing Gloves', 10, 'boxing-gloves.png'),
(168, 10, 'City Bike', 345, 'city-bike.png'),
(169, 10, 'Surfboard', 250, 'surfboard.png');

-- --------------------------------------------------------

--
-- Structure de la table `article_in_list`
--

DROP TABLE IF EXISTS `article_in_list`;
CREATE TABLE IF NOT EXISTS `article_in_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shopping_list_id` int NOT NULL,
  `article_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `total_price` double NOT NULL,
  `unity_price` double NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_83A183CB23245BF9` (`shopping_list_id`),
  KEY `IDX_83A183CB7294869C` (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `collaboration_request`
--

DROP TABLE IF EXISTS `collaboration_request`;
CREATE TABLE IF NOT EXISTS `collaboration_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shopping_list_id` int NOT NULL,
  `receiver_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_6CCAF4EE23245BF9` (`shopping_list_id`),
  KEY `IDX_6CCAF4EECD53EDB6` (`receiver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `collaborator`
--

DROP TABLE IF EXISTS `collaborator`;
CREATE TABLE IF NOT EXISTS `collaborator` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `shopping_list_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_606D487CA76ED395` (`user_id`),
  KEY `IDX_606D487C23245BF9` (`shopping_list_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20230330102907', '2023-03-30 10:29:24', 654),
('DoctrineMigrations\\Version20230330152432', '2023-03-30 15:24:43', 54),
('DoctrineMigrations\\Version20230405105624', '2023-04-06 19:13:43', 229),
('DoctrineMigrations\\Version20230406191330', '2023-04-06 19:13:43', 260),
('DoctrineMigrations\\Version20230406235957', '2023-04-07 00:00:16', 720);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `shopping_list`
--

DROP TABLE IF EXISTS `shopping_list`;
CREATE TABLE IF NOT EXISTS `shopping_list` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nb_articles` int NOT NULL DEFAULT '0',
  `total_price` double NOT NULL DEFAULT '0',
  `end_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_3DC1A459A76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `name`) VALUES
(1, 'Salty food'),
(2, 'Sweet food'),
(3, 'Produits ménagers'),
(4, 'Household products'),
(5, 'Home and decoration items'),
(6, 'health and selfcare'),
(7, 'Toys and games'),
(8, 'Cosmetics and beauty products'),
(9, 'Books and magazines'),
(10, 'Sport stuff');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_23A0E66C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`);

--
-- Contraintes pour la table `article_in_list`
--
ALTER TABLE `article_in_list`
  ADD CONSTRAINT `FK_83A183CB23245BF9` FOREIGN KEY (`shopping_list_id`) REFERENCES `shopping_list` (`id`),
  ADD CONSTRAINT `FK_83A183CB7294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`);

--
-- Contraintes pour la table `collaboration_request`
--
ALTER TABLE `collaboration_request`
  ADD CONSTRAINT `FK_6CCAF4EE23245BF9` FOREIGN KEY (`shopping_list_id`) REFERENCES `shopping_list` (`id`),
  ADD CONSTRAINT `FK_6CCAF4EECD53EDB6` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `collaborator`
--
ALTER TABLE `collaborator`
  ADD CONSTRAINT `FK_606D487C23245BF9` FOREIGN KEY (`shopping_list_id`) REFERENCES `shopping_list` (`id`),
  ADD CONSTRAINT `FK_606D487CA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `shopping_list`
--
ALTER TABLE `shopping_list`
  ADD CONSTRAINT `FK_3DC1A459A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
