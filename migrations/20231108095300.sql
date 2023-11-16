-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: vivu_rooftop
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` varchar(45) NOT NULL,
  `guest_id` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `note` text,
  `sucessful` tinyint DEFAULT NULL,
  `failed_reason` text,
  PRIMARY KEY (`id`),
  KEY `fk_booking_guest1_idx` (`guest_id`),
  CONSTRAINT `fk_booking_guest1` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES ('67770641-7d42-11ee-9692-a8a15941455d','cce6e35e-7d3f-11ee-9692-a8a15941455d','2023-11-07','17:00:00','View Cầu Hôn',1,NULL);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` varchar(45) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `start_working_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('2c588002-7d40-11ee-9692-a8a15941455d','Nhân Viên A','0912345678','2023-11-07 14:35:07');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guest`
--

DROP TABLE IF EXISTS `guest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guest` (
  `id` varchar(45) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `rank` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_guest_master_data1_idx` (`rank`),
  CONSTRAINT `fk_guest_master_data1` FOREIGN KEY (`rank`) REFERENCES `master_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guest`
--

LOCK TABLES `guest` WRITE;
/*!40000 ALTER TABLE `guest` DISABLE KEYS */;
INSERT INTO `guest` VALUES ('cce6e35e-7d3f-11ee-9692-a8a15941455d','0836257564','Nguyễn Anh Tuấn','ba525da7-7d3f-11ee-9692-a8a15941455d');
/*!40000 ALTER TABLE `guest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_data`
--

DROP TABLE IF EXISTS `master_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_data` (
  `id` varchar(45) NOT NULL DEFAULT 'uuid()',
  `type` varchar(45) NOT NULL,
  `name` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_data`
--

LOCK TABLES `master_data` WRITE;
/*!40000 ALTER TABLE `master_data` DISABLE KEYS */;
INSERT INTO `master_data` VALUES ('0577da9e-7c7b-11ee-ae1c-a8a15941455d','menu_category','bottle-beer','Bottle Beer'),('0578a80f-7c7b-11ee-ae1c-a8a15941455d','menu_category','non-alcoholic-beverage','Thức Uống Không Cồn'),('0578fc53-7c7b-11ee-ae1c-a8a15941455d','menu_category','signature-cocktail','Signature Cocktail'),('0579505c-7c7b-11ee-ae1c-a8a15941455d','menu_category','classic-cocktail','Classic Cocktail'),('05799dec-7c7b-11ee-ae1c-a8a15941455d','menu_category','upside-down-beer','Upside Down Beer'),('0579fb36-7c7b-11ee-ae1c-a8a15941455d','menu_category','bartender-shot','Bartender Shot'),('057a49db-7c7b-11ee-ae1c-a8a15941455d','menu_category','spirit','Spirit'),('057a9dcb-7c7b-11ee-ae1c-a8a15941455d','menu_category','bar-snack-nibble','Mồi Nhâm Nhi'),('057af177-7c7b-11ee-ae1c-a8a15941455d','menu_category','bar-snack-light','Mồi Lai Rai'),('057b3b66-7c7b-11ee-ae1c-a8a15941455d','menu_category','bar-snack-full','Mồi No Nê'),('ba50fce3-7d3f-11ee-9692-a8a15941455d','guest_rank','classic','Cơ Bản'),('ba51915e-7d3f-11ee-9692-a8a15941455d','guest_rank','advanced','Nâng Cao'),('ba51d8cd-7d3f-11ee-9692-a8a15941455d','guest_rank','silver','Bạc'),('ba521bcd-7d3f-11ee-9692-a8a15941455d','guest_rank','gold','Vàng'),('ba525da7-7d3f-11ee-9692-a8a15941455d','guest_rank','platinum','Platinum');
/*!40000 ALTER TABLE `master_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_choices`
--

DROP TABLE IF EXISTS `menu_choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_choices` (
  `id` varchar(45) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `category` varchar(45) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `is_best_seller` tinyint NOT NULL DEFAULT '0',
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_menu_choices_master_data1_idx` (`category`),
  CONSTRAINT `fk_menu_choices_master_data1` FOREIGN KEY (`category`) REFERENCES `master_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_choices`
--

LOCK TABLES `menu_choices` WRITE;
/*!40000 ALTER TABLE `menu_choices` DISABLE KEYS */;
INSERT INTO `menu_choices` VALUES ('66f4e070-7d3d-11ee-9692-a8a15941455d','Strongbow',89000,'05799dec-7c7b-11ee-ae1c-a8a15941455d','Vị Dâu/ Táo/ Nho Đen',0,0),('714d3b79-7d25-11ee-9692-a8a15941455d','Beck\'s Ice',39000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('75063c5c-7d3d-11ee-9692-a8a15941455d','Budweiser',99000,'05799dec-7c7b-11ee-ae1c-a8a15941455d','Vị Đào',0,0),('7600f719-7d3d-11ee-9692-a8a15941455d','Hoegaarden Rosee',99000,'05799dec-7c7b-11ee-ae1c-a8a15941455d','Vị Ổi',0,0),('77fdbff5-7d26-11ee-9692-a8a15941455d','Heiniken Xanh',49000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('77fe7683-7d26-11ee-9692-a8a15941455d','Heiniken Bạc',49000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('77feb9c1-7d26-11ee-9692-a8a15941455d','Tiger Nâu',49000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('77ff0a39-7d26-11ee-9692-a8a15941455d','Tiger Bạc',49000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('77ff5949-7d26-11ee-9692-a8a15941455d','Tiger Soju',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d','Vị Dưa Lưới/ Mận Đỏ',0,0),('77ff9c7f-7d26-11ee-9692-a8a15941455d','Budweiser',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('77ffd8f1-7d26-11ee-9692-a8a15941455d','San Miguel',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d','Vị Vải',0,0),('78001699-7d26-11ee-9692-a8a15941455d','Blanc 1664',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('78005ce9-7d26-11ee-9692-a8a15941455d','Hoegaarden',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('7800a3bf-7d26-11ee-9692-a8a15941455d','Strongbow',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d','Vị Táo/ Dâu/ Nho Đen/ Đào',0,0),('817a8e2c-7d28-11ee-9692-a8a15941455d','Mango Yogurt',69000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Xoài Dứa',0,0),('817afa90-7d28-11ee-9692-a8a15941455d','Blue Berry Yogurt',69000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Việt Quất',0,0),('817b4a5d-7d28-11ee-9692-a8a15941455d','Blue Berry',69000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Việt Quất',0,0),('817b93ef-7d28-11ee-9692-a8a15941455d','Tropical Juice',79000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Ví Táo Nho',0,0),('817bef59-7d28-11ee-9692-a8a15941455d','Fresh Summer',79000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Dưa Hấu Vải',0,0),('817c3dc7-7d28-11ee-9692-a8a15941455d','Sky Flowers',89000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Thơm',0,0),('817c8913-7d28-11ee-9692-a8a15941455d','Darking',89000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Lựu Đỏ',0,0),('817cda30-7d28-11ee-9692-a8a15941455d','Mango Tango',99000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Xòai',0,0),('817d17fd-7d28-11ee-9692-a8a15941455d','Ocean',99000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Chanh Dây',0,0),('817d533c-7d28-11ee-9692-a8a15941455d','Fresh Soul',99000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Dâu Vải',0,0),('817d9100-7d28-11ee-9692-a8a15941455d','Heiniken Không Độ',69000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('817dcb9c-7d28-11ee-9692-a8a15941455d','Eden',79000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Táo Đỏ/ Táo Xanh',0,0),('817e079a-7d28-11ee-9692-a8a15941455d','Bundaberg',99000,'0578a80f-7c7b-11ee-ae1c-a8a15941455d','Vị Bưởi Hồng/ Nho/ Dừa Dứa/ Chanh Dây/ Ối Đỏ/ Đào',0,0),('94400fff-7d2b-11ee-9692-a8a15941455d','Pina Colada',99000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Rum, Malibu, Pineapple Juice',0,0),('95f5380b-7d2b-11ee-9692-a8a15941455d','Mojito',79000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Rum, Soda, Lime',0,0),('95f5def4-7d2b-11ee-9692-a8a15941455d','Lychee Martini',79000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Vodka, Lychee Syrup',0,0),('95f62759-7d2b-11ee-9692-a8a15941455d','Tequila Sunrise',79000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Tequila, Orange Juice, Syrup Grenadine',0,0),('95f677c0-7d2b-11ee-9692-a8a15941455d','Old Fashionaed',89000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Whiskey, Bitter Dash',0,0),('95f6dbab-7d2b-11ee-9692-a8a15941455d','Strawberry Caipiroska',89000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Vodka, Strawberry, Lime',0,0),('95f72865-7d2b-11ee-9692-a8a15941455d','The Hiball',89000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Whiskey, Ginger Ale',0,0),('95f770d1-7d2b-11ee-9692-a8a15941455d','Cosmopolitan',99000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Vodka, Cointreau, Syrup Grenadine',0,0),('95f7bce0-7d2b-11ee-9692-a8a15941455d','Blue Margarita',99000,'0579505c-7c7b-11ee-ae1c-a8a15941455d','Tequila, Blue Curacao, Lime',0,0),('bfb051c6-7d2a-11ee-9692-a8a15941455d','Sky Getty',8900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Vodka, Cointreau, Mứt Đào, Syrup Vải',0,0),('bfb0f8f2-7d2a-11ee-9692-a8a15941455d','Story',8900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Midori, Cointreau, Vodka, Ép Thơm',0,0),('bfb146d6-7d2a-11ee-9692-a8a15941455d','Natural Beauty',8900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Gin, Hisbicus Syrup',0,0),('bfb18cf7-7d2a-11ee-9692-a8a15941455d','Passinate Moment',9900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Vodka, Cointreau, Chanh Dây, Syrup Ổi',0,0),('bfb1e996-7d2a-11ee-9692-a8a15941455d','Only Love',9900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Gin, Mứt Phúc Bồn Tử, Mứt Việt Quất',0,0),('bfb24fcf-7d2a-11ee-9692-a8a15941455d','Simple Love',9900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Vodka, Mứt Phúc Bồn Tử, Vanilla Syrup',0,0),('bfb2999b-7d2a-11ee-9692-a8a15941455d','Chilly',10900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Vodka, Midori, Ép Thơm',0,0),('bfb2e14e-7d2a-11ee-9692-a8a15941455d','Soul Classic',10900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Gin, Peach, Grenadine Syrup, Syrup Hoa Hồng',0,0),('bfb328ce-7d2a-11ee-9692-a8a15941455d','Sweet Heart',10900,'0578fc53-7c7b-11ee-ae1c-a8a15941455d','Bailey, Kahlua, Cream Rich',0,0),('e5b60df1-7d2e-11ee-9692-a8a15941455d','B52',59000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Kahlua, Cointreau, Bailey',0,0),('e5b6cb07-7d2e-11ee-9692-a8a15941455d','The Parrot',59000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Jagermeister, Midori, Orange Juice',0,0),('e5b7240c-7d2e-11ee-9692-a8a15941455d','Jager Bomb',89000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Jagermeister, Redbull',0,0),('e5b78066-7d2e-11ee-9692-a8a15941455d','Forever (8 Shot)',159000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Peach Jam, Jagermeister, Cranberry Juice',0,0),('e5b7cd14-7d2e-11ee-9692-a8a15941455d','Woo Woo (8 Shot)',159000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Vodka, Cointreau, Peach Jam, Cranberry Juice',0,0),('e5b818d1-7d2e-11ee-9692-a8a15941455d','I Love 3000 (10 Shot)',179000,'0579fb36-7c7b-11ee-ae1c-a8a15941455d','Gin, Cointreau, Blueberry Jam, Apple Juice',0,0),('e5b85831-7d2e-11ee-9692-a8a15941455d','Whiskey',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Jim Beam',0,0),('e5b88eaf-7d2e-11ee-9692-a8a15941455d','Vodka/ Vodka + Soda',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Sminoff Red',0,0),('e5b8c609-7d2e-11ee-9692-a8a15941455d','Rum',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Bacardi',0,0),('e5b8fa8b-7d2e-11ee-9692-a8a15941455d','Jagermeister',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Jagermeister',0,0),('e5b930b8-7d2e-11ee-9692-a8a15941455d','Gin',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Bombay',0,0),('e5b967cd-7d2e-11ee-9692-a8a15941455d','Tequila',89000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Jose Cuervo Gold',0,0),('e5b999d2-7d2e-11ee-9692-a8a15941455d','Soju Hàn Quốc',149000,'057a49db-7c7b-11ee-ae1c-a8a15941455d','Vị Mận/ Dâu/ Nho',0,0),('e5b9ddbe-7d2e-11ee-9692-a8a15941455d','Đậu Phộng Tỏi Ớt',29000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5ba1d87-7d2e-11ee-9692-a8a15941455d','Khoai Tây Trứng Muối',39000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5ba579b-7d2e-11ee-9692-a8a15941455d','Khô Gà Lá Chanh',39000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5ba9195-7d2e-11ee-9692-a8a15941455d','Hạt Điều Phô Mai',49000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bac631-7d2e-11ee-9692-a8a15941455d','Vỏ Bưởi Ngâm Nước Cốt Chanh Dây',59000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5baf47b-7d2e-11ee-9692-a8a15941455d','Da Cá Lắc Trứng Muối',69000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bb2834-7d2e-11ee-9692-a8a15941455d','Chả Bì Trứng Muối',69000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bb5a1b-7d2e-11ee-9692-a8a15941455d','Khô Bò Sợi Cay',79000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bb8c2f-7d2e-11ee-9692-a8a15941455d','Gân Bò Ngâm Rau Tiến Vua Chua Ngọt',89000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bbc052-7d2e-11ee-9692-a8a15941455d','Chân Gà Sốt Thái',89000,'057a9dcb-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bbf5e8-7d2e-11ee-9692-a8a15941455d','Xúc Xích Đức',49000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bc324b-7d2e-11ee-9692-a8a15941455d','Khoai Tây Chiên',49000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bc78e1-7d2e-11ee-9692-a8a15941455d','Khoai Tây Chiên Lắc Phô Mai',59000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bcbae4-7d2e-11ee-9692-a8a15941455d','Khoai Lang Kén',59000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bcf1e2-7d2e-11ee-9692-a8a15941455d','Chả Ram Tôm Đất Bình Định',59000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bd2b3d-7d2e-11ee-9692-a8a15941455d','Mực Xé',59000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bd5f64-7d2e-11ee-9692-a8a15941455d','Gà Popcorn',59000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bd9336-7d2e-11ee-9692-a8a15941455d','Gà Popcorn Lắc Phô Mai',69000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bdc22c-7d2e-11ee-9692-a8a15941455d','Gà Vòng',69000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bdf558-7d2e-11ee-9692-a8a15941455d','Gà Vòng Lắc Phô Mai',79000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5be289a-7d2e-11ee-9692-a8a15941455d','Trái Cây Ngũ Vị',79000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5be5e53-7d2e-11ee-9692-a8a15941455d','Đậu Hũ Phô Mai',79000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5be91b8-7d2e-11ee-9692-a8a15941455d','Chả Mực Giã Tay Làng Chài',89000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bec777-7d2e-11ee-9692-a8a15941455d','Cá Que Giòn Phô Mai',89000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bf0c7b-7d2e-11ee-9692-a8a15941455d','Lợn Gác Bếp Tây Bắc',89000,'057af177-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bf4736-7d2e-11ee-9692-a8a15941455d','Cơm Chiên Hải Sản Ngũ Sắc/ Gạo Lức',79000,'057b3b66-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bf7ca7-7d2e-11ee-9692-a8a15941455d','Mì Ý Sốt Bò Bằm',89000,'057b3b66-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('e5bfb18e-7d2e-11ee-9692-a8a15941455d','Bánh Mandu Hải Sản',89000,'057b3b66-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('ebc052ea-7d26-11ee-9692-a8a15941455d','Somersby',59000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d','Vị Táo, Vị Mâm Xôi',0,0),('ebc0d366-7d26-11ee-9692-a8a15941455d','Edel Weiss',69000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('ebc120db-7d26-11ee-9692-a8a15941455d','Heiniken Pháp',79000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('ebc170d5-7d26-11ee-9692-a8a15941455d','Corona',79000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0),('ebc1cb81-7d26-11ee-9692-a8a15941455d','Hoegaarden White',79000,'0577da9e-7c7b-11ee-ae1c-a8a15941455d',NULL,0,0);
/*!40000 ALTER TABLE `menu_choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` varchar(45) NOT NULL,
  `guest_id` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_notification_guest1_idx` (`guest_id`),
  CONSTRAINT `fk_notification_guest1` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` varchar(45) NOT NULL,
  `guest_id` varchar(45) NOT NULL,
  `menu_choices_id` varchar(45) NOT NULL,
  `employee_id` varchar(45) NOT NULL,
  `note_for_employee` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_order_menu_choices_idx` (`menu_choices_id`),
  KEY `fk_order_employee1_idx` (`employee_id`),
  KEY `fk_order_guest1` (`guest_id`),
  CONSTRAINT `fk_order_employee1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  CONSTRAINT `fk_order_guest1` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`),
  CONSTRAINT `fk_order_menu_choices` FOREIGN KEY (`menu_choices_id`) REFERENCES `menu_choices` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('e43c8ae3-7d41-11ee-9692-a8a15941455d','cce6e35e-7d3f-11ee-9692-a8a15941455d','e5b8fa8b-7d2e-11ee-9692-a8a15941455d','2c588002-7d40-11ee-9692-a8a15941455d',NULL,'2023-11-07 14:47:25');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `id` varchar(45) NOT NULL,
  `guest_id` varchar(45) NOT NULL,
  `star_number` int NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_rating_guest1_idx` (`guest_id`),
  CONSTRAINT `fk_rating_guest1` FOREIGN KEY (`guest_id`) REFERENCES `guest` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES ('1ca4a974-7d42-11ee-9692-a8a15941455d','cce6e35e-7d3f-11ee-9692-a8a15941455d',5,'Pơ Phẹt','2023-11-07 14:48:59');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-07 14:54:50
