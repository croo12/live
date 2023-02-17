-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: live
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `consulting`
--

DROP TABLE IF EXISTS `consulting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulting` (
  `consulting_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `consulting_date` datetime DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `requirement` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `realtor_no` bigint DEFAULT NULL,
  `user_no` bigint DEFAULT NULL,
  PRIMARY KEY (`consulting_no`),
  KEY `FKnmtg66b7ovo3m7ygr8c6vtm0q` (`realtor_no`),
  KEY `FKfc8l2pixd2jh0myc2lc8yeufs` (`user_no`),
  CONSTRAINT `FKfc8l2pixd2jh0myc2lc8yeufs` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`),
  CONSTRAINT `FKnmtg66b7ovo3m7ygr8c6vtm0q` FOREIGN KEY (`realtor_no`) REFERENCES `realtor` (`realtor_no`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulting`
--

LOCK TABLES `consulting` WRITE;
/*!40000 ALTER TABLE `consulting` DISABLE KEYS */;
INSERT INTO `consulting` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-17 00:00:00',NULL,'저는 남향에 삼성화재연수원 근처 매물을 원해요!',3,1,1),(2,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-07 00:00:00',NULL,'덕명동에 해가 잘 들면 좋겠어요!',4,2,1),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-02 00:00:00',NULL,'주변 인프라가 중요해요!',4,3,1),(4,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-20 00:00:00',NULL,'삼성화재연수원과 10분 거리 내의 매물을 원해요!',2,4,1),(5,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-23 00:00:00',NULL,'신축 건물이면 좋을 것 같아요!',0,5,1),(6,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-17 00:00:00',NULL,'요청사항은 딱히 없습니다~!',3,6,1),(7,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-24 00:00:00',NULL,'지하철역 5분 거리 내의 매물을 원해요!',5,7,1),(8,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-19 00:00:00',NULL,'여성 안심 구역의 매물을 원해요!',2,8,1),(9,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-21 00:00:00',NULL,'주변이 시끄럽지 않은 곳으로 부탁드려요!',1,9,1),(10,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-29 00:00:00',NULL,'무조건 깔끔한 곳으로 부탁드려요 ㅠㅠ',4,1,2),(11,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-07 00:00:00',NULL,'주변 인프라가 중요해요!',1,1,3),(12,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-02 00:00:00',NULL,'저는 남향에 삼성화재 연수원과 10분 거리 내의 매물을 원해요!',4,1,4),(13,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-20 00:00:00',NULL,'삼성화재연수원과 10분 거리 내의 매물을 원해요!',0,1,5),(14,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-17 00:00:00',NULL,'지하철역에서 5분 거리 내의 인프라 구성이 잘 되어 있는 곳을 원해요!',3,1,6),(15,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-17 00:00:00',NULL,'신축 건물이면 좋을 것 같아요!',3,1,7),(16,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-17 00:00:00',NULL,'저는 남향에 삼성화재 연수원과 10분 거리 내의 매물을 원해요!',3,1,8),(17,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-19 00:00:00',NULL,'여성 안심 구역의 매물을 원해요!',2,1,9),(18,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-21 00:00:00',NULL,'주변이 시끄럽지 않은 곳으로 부탁드려요!',1,1,10),(19,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-29 00:00:00',NULL,'무조건 깔끔한 곳으로 부탁드려요 ㅠㅠ',4,1,11),(20,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-17 00:00:00',NULL,'저는 남향에 삼성화재 연수원과 10분 거리 내의 매물을 원해요!',3,1,12),(21,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-27 00:00:00',NULL,'저는 남향에 삼성화재 연수원과 10분 거리 내의 매물을 원해요!',0,1,13),(22,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-24 00:00:00',NULL,'지하철역 5분 거리 내의 매물을 원해요!',2,1,14),(23,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-12 00:00:00',NULL,'저는 남향에 삼성화재 연수원과 10분 거리 내의 매물을 원해요!',4,1,1),(24,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-01-18 00:00:00',NULL,'지하철역 5분 거리 내의 매물을 원해요!',4,1,1);
/*!40000 ALTER TABLE `consulting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulting_item`
--

DROP TABLE IF EXISTS `consulting_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulting_item` (
  `consulting_item_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `consulting_no` bigint DEFAULT NULL,
  `item_no` bigint DEFAULT NULL,
  PRIMARY KEY (`consulting_item_no`),
  UNIQUE KEY `UKmou3q05lmfumbq21rgdum70nm` (`consulting_no`,`item_no`),
  KEY `FKsk35xxyclinsj52p6pev0p5um` (`item_no`),
  CONSTRAINT `FKm0ki23l8gqpjl2kf41ubdh32b` FOREIGN KEY (`consulting_no`) REFERENCES `consulting` (`consulting_no`),
  CONSTRAINT `FKsk35xxyclinsj52p6pev0p5um` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulting_item`
--

LOCK TABLES `consulting_item` WRITE;
/*!40000 ALTER TABLE `consulting_item` DISABLE KEYS */;
INSERT INTO `consulting_item` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13',1,1),(2,'2023-02-07 03:37:13','2023-02-07 03:37:13',1,2),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13',1,3),(4,'2023-02-07 03:37:13','2023-02-07 03:37:13',2,1),(5,'2023-02-07 03:37:13','2023-02-07 03:37:13',2,2),(6,'2023-02-07 03:37:13','2023-02-07 03:37:13',3,3),(7,'2023-02-07 03:37:13','2023-02-07 03:37:13',3,4),(8,'2023-02-07 03:37:13','2023-02-07 03:37:13',4,5),(9,'2023-02-07 03:37:13','2023-02-07 03:37:13',5,6),(10,'2023-02-07 03:37:13','2023-02-07 03:37:13',6,6),(11,'2023-02-07 03:37:13','2023-02-07 03:37:13',7,7),(12,'2023-02-07 03:37:13','2023-02-07 03:37:13',7,8),(13,'2023-02-07 03:37:13','2023-02-07 03:37:13',8,8),(14,'2023-02-07 03:37:13','2023-02-07 03:37:13',9,9),(15,'2023-02-07 03:37:13','2023-02-07 03:37:13',10,10),(16,'2023-02-07 03:37:13','2023-02-07 03:37:13',10,11),(17,'2023-02-07 03:37:13','2023-02-07 03:37:13',11,12),(18,'2023-02-07 03:37:13','2023-02-07 03:37:13',11,13),(19,'2023-02-07 03:37:13','2023-02-07 03:37:13',12,14),(20,'2023-02-07 03:37:13','2023-02-07 03:37:13',13,15),(21,'2023-02-07 03:37:13','2023-02-07 03:37:13',14,16),(22,'2023-02-07 03:37:13','2023-02-07 03:37:13',15,17),(23,'2023-02-07 03:37:13','2023-02-07 03:37:13',15,18),(24,'2023-02-07 03:37:13','2023-02-07 03:37:13',16,19),(25,'2023-02-07 03:37:13','2023-02-07 03:37:13',16,20),(26,'2023-02-07 03:37:13','2023-02-07 03:37:13',16,21),(27,'2023-02-07 03:37:13','2023-02-07 03:37:13',17,22),(28,'2023-02-07 03:37:13','2023-02-07 03:37:13',17,23),(29,'2023-02-07 03:37:13','2023-02-07 03:37:13',17,24),(30,'2023-02-07 03:37:13','2023-02-07 03:37:13',18,25),(31,'2023-02-07 03:37:13','2023-02-07 03:37:13',18,26),(32,'2023-02-07 03:37:13','2023-02-07 03:37:13',19,27),(33,'2023-02-07 03:37:13','2023-02-07 03:37:13',19,28),(34,'2023-02-07 03:37:13','2023-02-07 03:37:13',20,1),(35,'2023-02-07 03:37:13','2023-02-07 03:37:13',20,2),(36,'2023-02-07 03:37:13','2023-02-07 03:37:13',20,3),(37,'2023-02-07 03:37:13','2023-02-07 03:37:13',21,4),(38,'2023-02-07 03:37:13','2023-02-07 03:37:13',21,5),(39,'2023-02-07 03:37:13','2023-02-07 03:37:13',22,6),(40,'2023-02-07 03:37:13','2023-02-07 03:37:13',22,7),(41,'2023-02-07 03:37:13','2023-02-07 03:37:13',2,8),(42,'2023-02-07 03:37:13','2023-02-07 03:37:13',2,9),(43,'2023-02-07 03:37:13','2023-02-07 03:37:13',3,10),(44,'2023-02-07 03:37:13','2023-02-07 03:37:13',4,11),(45,'2023-02-07 03:37:13','2023-02-07 03:37:13',5,12),(46,'2023-02-07 03:37:13','2023-02-07 03:37:13',6,13),(47,'2023-02-07 03:37:13','2023-02-07 03:37:13',7,14),(48,'2023-02-07 03:37:13','2023-02-07 03:37:13',8,15),(49,'2023-02-07 03:37:13','2023-02-07 03:37:13',9,16),(50,'2023-02-07 03:37:13','2023-02-07 03:37:13',10,17),(51,'2023-01-12 00:00:00','2023-01-12 00:00:00',23,1),(52,'2023-01-18 00:00:00','2023-01-18 00:00:00',24,2);
/*!40000 ALTER TABLE `consulting_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulting_room`
--

DROP TABLE IF EXISTS `consulting_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulting_room` (
  `consulting_room_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `consulting_no` bigint DEFAULT NULL,
  PRIMARY KEY (`consulting_room_no`),
  KEY `FKt60ayp3g7br660vkym5q7a589` (`consulting_no`),
  CONSTRAINT `FKt60ayp3g7br660vkym5q7a589` FOREIGN KEY (`consulting_no`) REFERENCES `consulting` (`consulting_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulting_room`
--

LOCK TABLES `consulting_room` WRITE;
/*!40000 ALTER TABLE `consulting_room` DISABLE KEYS */;
/*!40000 ALTER TABLE `consulting_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `contract_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `approve_datetime` date DEFAULT NULL,
  `balance` int DEFAULT NULL,
  `commission` int NOT NULL,
  `contract_datetime` date DEFAULT NULL,
  `contract_state` int DEFAULT NULL,
  `down_payment` int DEFAULT NULL,
  `move_on_date` date DEFAULT NULL,
  `number_of_residents` int DEFAULT NULL,
  `special_contract` varchar(255) DEFAULT NULL,
  `tenant_address` varchar(255) DEFAULT NULL,
  `tenant_age` int DEFAULT NULL,
  `tenant_detail_address` varchar(255) DEFAULT NULL,
  `term_of_contract` int DEFAULT NULL,
  `item_no` bigint DEFAULT NULL,
  `realtor_no` bigint DEFAULT NULL,
  `user_no` bigint DEFAULT NULL,
  PRIMARY KEY (`contract_no`),
  KEY `FKs6l416ednhr90q99jxtyqd6tp` (`item_no`),
  KEY `FK7frrsxqlt5dekktnnqbw87pcs` (`realtor_no`),
  KEY `FKhmgi7u6yn7a7lcmicbt1k8trd` (`user_no`),
  CONSTRAINT `FK7frrsxqlt5dekktnnqbw87pcs` FOREIGN KEY (`realtor_no`) REFERENCES `realtor` (`realtor_no`),
  CONSTRAINT `FKhmgi7u6yn7a7lcmicbt1k8trd` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`),
  CONSTRAINT `FKs6l416ednhr90q99jxtyqd6tp` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
INSERT INTO `contract` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-10',540,30,'2023-02-10',0,60,'2023-04-06',1,'임대인은 임차인이 잔금을 지급하는 다음 날까지 해당 목적물에 대하여 근저당권 및 기타 제한물권 설정을 하지 않는다. 이를 위반 시 계약은 즉시 무효가 되며 임대인은 임차인에게 위약금을 지불한다. 기타 사항은 부동산 관례에 따른다.','경기도 고양시 일산동구',25,'위시티4로 80',12,3,3,1),(2,'2023-02-06 03:37:13','2023-02-07 03:37:13','2023-02-10',810,50,'2023-02-11',2,90,'2023-03-05',1,'전세자금대출 심사과정에서 진행이 불가한 경우, 해당 임대차 계약은 무효로 하며 임대인은 임차인에게 계약금을 전액 반환한다.','인천광역시 남동구 구월로',26,'구월로 192',12,6,1,2),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13','2023-02-11',4500,60,'2023-02-12',2,500,'2023-03-08',1,'임대인은 임차인의 전세자금대출 및 전세보증보험가입을 위한 절차에 동의하고 협조하며, 대출상환 및 부대비용은 임차인이 부담한다.','서울특별시 영등포구 여의도동',27,'여의도동 51',6,14,1,4);
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `house`
--

DROP TABLE IF EXISTS `house`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `house` (
  `house_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address_detail` varchar(255) DEFAULT NULL,
  `bathroom` int NOT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `completion_year` int NOT NULL,
  `contracted` bit(1) NOT NULL,
  `dong` varchar(255) DEFAULT NULL,
  `exclusive_private_area` float DEFAULT NULL,
  `floor` int NOT NULL,
  `gugun` varchar(255) DEFAULT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `region_code` varchar(255) DEFAULT NULL,
  `room` int NOT NULL,
  `sido` varchar(255) DEFAULT NULL,
  `supply_area` float DEFAULT NULL,
  `total_floor` int DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  PRIMARY KEY (`house_no`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `house`
--

LOCK TABLES `house` WRITE;
/*!40000 ALTER TABLE `house` DISABLE KEYS */;
INSERT INTO `house` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 유성구 학하서로121번길 13','(덕명동) 싸피하우스',2,'싸피하우스',2015,_binary '\0','덕명동',24,3,'유성구','공동주택','3020011100',3,'대전광역시',22,5,34159),(2,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 유성구 덕명동로 7','(덕명동) 가온하우스',1,'가온하우스',2017,_binary '\0','원동',10,5,'유성구','공동주택','3020011100',1,'대전광역시',8,10,34155),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 유성구 봉명동 563-15','(봉명동) 무지개하우스',1,'무지개하우스',2020,_binary '\0','장대동',16,2,'동구','공동주택','3020011200',2,'대전광역시',14,7,34175),(4,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 유성구 궁동로 5','(궁동, 다솔아파트)',0,'다솔아파트',2019,_binary '\0','덕명동',15,7,'유성구','공동주택','3020011300',2,'대전광역시',13,8,34137),(5,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 유성구 구암동 585-14','(구암동) 기철하우스',2,'기철하우스',2015,_binary '\0','봉명동',24,3,'유성구','공동주택','3020011100',3,'대전광역시',22,5,34175),(6,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 동구 대전로 730','(원동) 화재하우스',1,'화재하우스',2017,_binary '\0','궁동',10,5,'유성구','공동주택','3020012200',1,'대전광역시',8,10,34632),(7,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 중구 대전천서로 433','(은행동) 현수하우스',1,'현수하우스',2020,_binary '\0','장대동',16,2,'유성구','공동주택','3020011700',2,'대전광역시',14,7,34923),(8,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 서구 계백로 1236','(정림동) 유지하우스',1,'유지하우스',2019,_binary '\0','덕명동',15,7,'유성구','공동주택','3020011300',2,'대전광역시',13,8,35392),(9,'2023-02-07 03:37:13','2023-02-07 03:37:13','대전 대덕구 계족산로 110','(송촌동) 미노하우스',2,'미노하우스',2022,_binary '','송촌동',27,14,'대덕구','공동주택','3020011300',3,'대전광역시',22,5,34159);
/*!40000 ALTER TABLE `house` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `deposit` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `direction` varchar(255) DEFAULT NULL,
  `entrance` varchar(255) DEFAULT NULL,
  `heating` varchar(255) DEFAULT NULL,
  `maintenance_fee` int DEFAULT NULL,
  `move_in_date` date DEFAULT NULL,
  `rent` int NOT NULL,
  `house_no` bigint DEFAULT NULL,
  `realtor_no` bigint DEFAULT NULL,
  PRIMARY KEY (`item_no`),
  KEY `FKlgpqx3i7mjqu0c6cr3yh13kcp` (`house_no`),
  KEY `FK14wfndca4vwnky122c0q827i8` (`realtor_no`),
  CONSTRAINT `FK14wfndca4vwnky122c0q827i8` FOREIGN KEY (`realtor_no`) REFERENCES `realtor` (`realtor_no`),
  CONSTRAINT `FKlgpqx3i7mjqu0c6cr3yh13kcp` FOREIGN KEY (`house_no`) REFERENCES `house` (`house_no`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13',1000,'남향이라 해가 잘 들어요.','SOUTH','PASSAGE','INDIVIDUAl',10,'2023-04-07',45,1,1),(2,'2023-02-07 03:37:13','2023-02-07 03:37:13',500,'관리가 잘 되어 있습니다.','EAST','COMPLEX','CENTERAL',15,'2023-12-07',30,1,1),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13',600,'관리가 잘 되어 있습니다.','SOUTH','STAIR','INDIVIDUAl',30,'2023-02-27',40,1,2),(4,'2023-02-07 03:37:13','2023-02-07 03:37:13',1500,'관리가 잘 되어 있습니다.','NORTH','COMPLEX','CENTERAL',25,'2023-10-17',30,2,1),(5,'2023-02-07 03:37:13','2023-02-07 03:37:13',2500,'관리가 잘 되어 있습니다.','SOUTH_WEST','COMPLEX','INDIVIDUAl',20,'2023-03-13',50,2,3),(6,'2023-02-07 03:37:13','2023-02-07 03:37:13',900,'관리가 잘 되어 있습니다.','SOUTH_EAST','STAIR','DISTRICT',15,'2023-03-15',40,3,1),(7,'2023-02-07 03:37:13','2023-02-07 03:37:13',800,'관리가 잘 되어 있습니다.','NORTH_WEST','COMPLEX','CENTERAL',30,'2023-09-20',45,3,4),(8,'2023-02-07 03:37:13','2023-02-07 03:37:13',950,'관리가 잘 되어 있습니다.','NORTH_EAST','PASSAGE','INDIVIDUAl',10,'2023-10-26',45,4,1),(9,'2023-02-07 03:37:13','2023-02-07 03:37:13',650,'관리가 잘 되어 있습니다.','SOUTH_WEST','STAIR','DISTRICT',30,'2023-03-08',45,4,5),(10,'2023-02-07 03:37:13','2023-02-07 03:37:13',800,'관리가 잘 되어 있습니다.','SOUTH_WEST','COMPLEX','CENTERAL',7,'2023-04-04',40,5,1),(11,'2023-02-07 03:37:13','2023-02-07 03:37:13',6000,'관리가 잘 되어 있습니다.','SOUTH_WEST','STAIR','INDIVIDUAl',5,'2023-08-16',100,6,6),(12,'2023-02-07 03:37:13','2023-02-07 03:37:13',750,'관리가 잘 되어 있습니다.','SOUTH_WEST','PASSAGE','CENTERAL',20,'2023-05-29',60,6,1),(13,'2023-02-07 03:37:13','2023-02-07 03:37:13',450,'관리가 잘 되어 있습니다.','EAST','COMPLEX','DISTRICT',25,'2023-12-20',90,7,1),(14,'2023-02-07 03:37:13','2023-02-07 03:37:13',5000,'관리가 잘 되어 있습니다.','SOUTH_WEST','STAIR','DISTRICT',10,'2023-03-19',80,8,7),(15,'2023-02-07 03:37:13','2023-02-07 03:37:13',3000,'관리가 잘 되어 있습니다.','NORTH','COMPLEX','INDIVIDUAl',8,'2023-04-14',70,9,1),(16,'2023-02-07 03:37:13','2023-02-07 03:37:13',4000,'관리가 잘 되어 있습니다.','SOUTH','PASSAGE','DISTRICT',20,'2023-03-17',80,9,8),(17,'2023-02-07 03:37:13','2023-02-07 03:37:13',4000,'관리가 잘 되어 있습니다.','SOUTH','PASSAGE','DISTRICT',35,'2023-03-17',80,9,1),(18,'2023-02-07 03:37:13','2023-02-07 03:37:13',1000,'남향이라 해가 잘 들어요.','SOUTH','PASSAGE','INDIVIDUAl',18,'2023-04-07',50,1,9),(19,'2023-02-07 03:37:13','2023-02-07 03:37:13',500,'관리가 잘 되어 있습니다.','EAST','COMPLEX','CENTERAL',20,'2023-04-07',40,1,9),(20,'2023-02-07 03:37:13','2023-02-07 03:37:13',600,'관리가 잘 되어 있습니다.','SOUTH','STAIR','INDIVIDUAl',10,'2023-02-27',45,2,2),(21,'2023-02-07 03:37:13','2023-02-07 03:37:13',1500,'관리가 잘 되어 있습니다.','NORTH','COMPLEX','CENTERAL',10,'2023-10-17',45,3,4),(22,'2023-02-07 03:37:13','2023-02-07 03:37:13',2500,'관리가 잘 되어 있습니다.','SOUTH_WEST','COMPLEX','INDIVIDUAl',30,'2023-03-13',35,4,4),(23,'2023-02-07 03:37:13','2023-02-07 03:37:13',900,'관리가 잘 되어 있습니다.','SOUTH_EAST','STAIR','DISTRICT',14,'2023-03-15',45,5,4),(24,'2023-02-07 03:37:13','2023-02-07 03:37:13',800,'관리가 잘 되어 있습니다.','NORTH_WEST','COMPLEX','CENTERAL',15,'2023-09-20',35,6,4),(25,'2023-02-07 03:37:13','2023-02-07 03:37:13',950,'관리가 잘 되어 있습니다.','NORTH_EAST','PASSAGE','INDIVIDUAl',19,'2023-10-26',45,7,3),(26,'2023-02-07 03:37:13','2023-02-07 03:37:13',650,'관리가 잘 되어 있습니다.','SOUTH_WEST','STAIR','DISTRICT',30,'2023-03-08',25,8,2),(27,'2023-02-07 03:37:13','2023-02-07 03:37:13',800,'관리가 잘 되어 있습니다.','SOUTH_WEST','COMPLEX','CENTERAL',18,'2023-04-04',30,9,3),(28,'2023-02-07 03:37:13','2023-02-07 03:37:13',6000,'관리가 잘 되어 있습니다.','SOUTH_WEST','STAIR','INDIVIDUAl',30,'2023-08-16',45,2,3);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_image`
--

DROP TABLE IF EXISTS `item_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_image` (
  `item_image_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `image_src` varchar(255) DEFAULT NULL,
  `item_no` bigint DEFAULT NULL,
  PRIMARY KEY (`item_image_no`),
  KEY `FKphe2ewoqi03ilspr9m0toylcu` (`item_no`),
  CONSTRAINT `FKphe2ewoqi03ilspr9m0toylcu` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_image`
--

LOCK TABLES `item_image` WRITE;
/*!40000 ALTER TABLE `item_image` DISABLE KEYS */;
INSERT INTO `item_image` VALUES (1,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/9bb85672-c513-4023-838b-73eda3a3937c_%ED%96%89%EC%9A%B4%EC%95%84%ED%8C%8C%ED%8A%B8_3.jpg',1),(2,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-alexander-zvir-3705529.jpg',1),(3,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-ilya-shakir-2440471.jpg',1),(4,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-jean-van-der-meulen-1457842.jpg',2),(5,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-ksenia-chernaya-3965509.jpg',2),(6,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-medhat-ayad-439227.jpg',2),(7,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-pixabay-269218.jpg',3),(8,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571453.jpg',28),(9,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-pixabay-276583.jpg',3),(10,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-taryn-elliott-4112601.jpg',3),(11,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571452.jpg',4),(12,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571453.jpg',4),(13,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571458.jpg',4),(14,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571459.jpg',5),(15,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571460.jpg',5),(16,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571463.jpg',5),(17,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571470.jpg',6),(18,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571471.jpg',6),(19,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1643383.jpg',6),(20,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1669799.jpg',7),(21,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1743227.jpg',7),(22,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-victoria-akvarel-1648776.jpg',7),(23,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1484101403633-562f891dc89a.jpg',8),(24,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1486304873000-235643847519.jpg',8),(25,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1493809842364-78817add7ffb.jpg',8),(26,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1502672260266-1c1ef2d93688.jpg',9),(27,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1505691938895-1758d7feb511.jpg',9),(28,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1507652313519-d4e9174996dd.jpg',9),(29,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1513694203232-719a280e022f.jpg',10),(30,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1519974719765-e6559eac2575.jpg',10),(31,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1521607630287-ee2e81ad3ced.jpg',10),(32,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1522708323590-d24dbb6b0267.jpg',11),(33,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1541123603104-512919d6a96c.jpg',11),(34,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1542889601-399c4f3a8402.jpg',11),(35,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1547166812-0fca6370dc03.jpg',12),(36,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1550581190-9c1c48d21d6c.jpg',12),(37,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1554995207-c18c203602cb.jpg',12),(38,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1556228453-efd6c1ff04f6.jpg',13),(39,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1558211583-d26f610c1eb1.jpg',13),(40,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1558882224-dda166733046.jpg',13),(41,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1560184897-67f4a3f9a7fa.jpg',14),(42,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1560185007-5f0bb1866cab.jpg',14),(43,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1560448204-603b3fc33ddc.jpg',14),(44,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1565182999561-18d7dc61c393.jpg',15),(45,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1565183997392-2f6f122e5912.jpg',15),(46,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1567767292278-a4f21aa2d36e.jpg',15),(47,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/	photo-1574873392684-75f9963434cb.jpg',16),(48,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1575422097134-04f8af34adf8.jpg',16),(49,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1593696140826-c58b021acf8b.jpg',16),(50,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1582417728413-b2347161b864.jpg',17),(51,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1583847268964-b28dc8f51f92.jpg',17),(52,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1585264550248-1778be3b6368.jpg',17),(53,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1586023492125-27b2c045efd7.jpg',18),(54,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1586024486164-ce9b3d87e09f.jpg',18),(55,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/	photo-1587048595115-553751fdc150.jpg',18),(56,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1588471980726-8346cb477a33.jpg',19),(57,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1593067607070-95193763e3ab.jpg',19),(58,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1593696140826-c58b021acf8b.jpg',19),(59,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1594026112284-02bb6f3352fe.jpg',20),(60,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1598928506311-c55ded91a20c.jpg',20),(61,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1601002257790-ebe0966a85ae.jpg',20),(62,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1602028815636-407eaab32c8c.jpg',21),(63,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1605774337664-7a846e9cdf17.jpg',21),(64,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1611596189148-a74728c484ca.jpg',21),(65,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1615873968403-89e068629265.jpg',22),(66,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1619218005459-c8651c2f5918.jpg',22),(67,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1630011007979-8e89fd9ed31e.jpg',22),(68,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/	photo-1639259885918-b8ee9b8374b8.jpg',23),(69,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-jean-van-der-meulen-1457842.jpg',23),(70,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-pixabay-276583.jpg',23),(71,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1586024486164-ce9b3d87e09f.jpg',24),(72,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/	photo-1587048595115-553751fdc150.jpg',24),(73,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1593696140826-c58b021acf8b.jpg',24),(74,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1565182999561-18d7dc61c393.jpg',25),(75,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1743227.jpg',25),(76,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571471.jpg',25),(77,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-victoria-akvarel-1648776.jpg',26),(78,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1669799.jpg',26),(79,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571463.jpg',26),(80,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571459.jpg',27),(81,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1513694203232-719a280e022f.jpg',27),(82,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1541123603104-512919d6a96c.jpg',27),(83,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/photo-1522708323590-d24dbb6b0267.jpg',28),(84,'2023-02-07 03:37:13','2023-02-07 03:37:13','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/items/pexels-vecislavas-popa-1571470.jpg',28);
/*!40000 ALTER TABLE `item_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_option`
--

DROP TABLE IF EXISTS `item_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_option` (
  `item_no` bigint NOT NULL,
  `air_conditioner` bit(1) DEFAULT NULL,
  `bath` bit(1) NOT NULL,
  `bathtub` bit(1) NOT NULL,
  `bed` bit(1) NOT NULL,
  `bidet` bit(1) NOT NULL,
  `cctv` bit(1) NOT NULL,
  `closet` bit(1) NOT NULL,
  `desk` bit(1) NOT NULL,
  `dining_table` bit(1) DEFAULT NULL,
  `dishwasher` bit(1) NOT NULL,
  `drying_machine` bit(1) DEFAULT NULL,
  `elevator` bit(1) NOT NULL,
  `fire_alarm` bit(1) DEFAULT NULL,
  `garden` bit(1) NOT NULL,
  `gas_stove` bit(1) DEFAULT NULL,
  `guard` bit(1) NOT NULL,
  `induction_cooktop` bit(1) DEFAULT NULL,
  `intercom` bit(1) NOT NULL,
  `keycard` bit(1) NOT NULL,
  `microwave` bit(1) NOT NULL,
  `oven` bit(1) NOT NULL,
  `parking_lot` bit(1) DEFAULT NULL,
  `refrigerator` bit(1) NOT NULL,
  `shoe_rack` bit(1) DEFAULT NULL,
  `sink` bit(1) NOT NULL,
  `sofa` bit(1) NOT NULL,
  `terrace` bit(1) NOT NULL,
  `veranda` bit(1) NOT NULL,
  `washing_machine` bit(1) DEFAULT NULL,
  PRIMARY KEY (`item_no`),
  CONSTRAINT `FKoi1dbsem3j83fct8btq2okf4j` FOREIGN KEY (`item_no`) REFERENCES `item` (`item_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_option`
--

LOCK TABLES `item_option` WRITE;
/*!40000 ALTER TABLE `item_option` DISABLE KEYS */;
INSERT INTO `item_option` VALUES (1,_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '\0',_binary '',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary ''),(2,_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '\0',_binary '',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary '',_binary '\0',_binary ''),(3,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(4,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(5,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(6,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(7,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(8,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(9,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(10,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(11,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(12,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(13,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(14,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(15,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(16,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(17,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(18,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(19,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(20,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(21,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(22,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(23,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(24,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(25,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(26,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(27,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary ''),(28,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '');
/*!40000 ALTER TABLE `item_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `notice_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `notice_info` varchar(255) DEFAULT NULL,
  `notice_writer` varchar(255) DEFAULT NULL,
  `realtor_no` bigint DEFAULT NULL,
  `user_no` bigint DEFAULT NULL,
  PRIMARY KEY (`notice_no`),
  KEY `FKsa6qs9d1lxo75uhs4htusub2l` (`realtor_no`),
  KEY `FKghuq221ew39o0s0hux5loluhl` (`user_no`),
  CONSTRAINT `FKghuq221ew39o0s0hux5loluhl` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`),
  CONSTRAINT `FKsa6qs9d1lxo75uhs4htusub2l` FOREIGN KEY (`realtor_no`) REFERENCES `realtor` (`realtor_no`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담이 시작됩니다. 상담실로 입장해 주세요.','두기철',1,1),(2,'2023-02-07 00:00:00','2023-02-07 00:00:00',NULL,'상담 매물 등록이 완료되었습니다.','김순자',2,1),(3,'2023-02-02 00:00:00','2023-02-02 00:00:00',NULL,'상담이 시작됩니다. 상담실로 입장해 주세요.','박창호',3,1),(4,'2023-02-20 00:00:00','2023-02-20 00:00:00',NULL,'상담 매물 등록이 완료되었습니다.','김대희',4,1),(5,'2023-02-23 00:00:00','2023-02-23 00:00:00',NULL,'상담이 시작됩니다. 상담실로 입장해 주세요.','오승준',5,1),(6,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담 매물 등록이 완료되었습니다.','황준희',6,1),(7,'2023-01-24 00:00:00','2023-01-24 00:00:00',NULL,'상담 매물 등록이 완료되었습니다.','이은주',7,1),(8,'2023-02-19 00:00:00','2023-02-19 00:00:00',NULL,'상담이 취소되었습니다.','조민성',8,1),(9,'2023-02-21 00:00:00','2023-02-21 00:00:00',NULL,'상담이 시작됩니다. 상담실로 입장해 주세요.','박창호',9,1),(10,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','김싸피',1,1),(11,'2023-01-29 00:00:00','2023-01-19 00:00:00',NULL,'사용자가 상담을 취소하였습니다.','김태수',1,2),(12,'2023-02-07 00:00:00','2023-02-07 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','이지우',1,3),(13,'2023-02-02 00:00:00','2023-02-02 00:00:00',NULL,'사용자가 상담을 거절하였습니다.','신현광',1,4),(14,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','김영주',1,6),(15,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'사용자가 상담을 취소하였습니다.','백정은',1,7),(16,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','성유지',1,8),(17,'2023-02-19 00:00:00','2023-02-19 00:00:00',NULL,'사용자가 상담을 취소하였습니다.','유현수',1,9),(18,'2023-02-21 00:00:00','2023-02-21 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','임서영',1,10),(19,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL,'사용자가 상담을 거절하였습니다.','김민지',1,11),(20,'2023-02-17 00:00:00','2023-02-17 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','김순자',1,12),(21,'2023-02-27 00:00:00','2023-02-27 00:00:00',NULL,'사용자가 상담을 취소하였습니다.','이재용',1,13),(22,'2023-02-14 00:00:00','2023-02-14 00:00:00',NULL,'상담 신청입니다. 목록을 확인해 주세요.','김철수',1,14),(23,'2023-02-20 00:00:00','2023-02-02 00:00:00',NULL,'사용자가 상담을 거절하였습니다.','김혜정',1,5);
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `realtor`
--

DROP TABLE IF EXISTS `realtor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realtor` (
  `realtor_no` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `image_src` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `business_address` varchar(255) DEFAULT NULL,
  `business_number` varchar(255) DEFAULT NULL,
  `corp` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `rating_score` float DEFAULT NULL,
  `registration_number` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  PRIMARY KEY (`realtor_no`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realtor`
--

LOCK TABLES `realtor` WRITE;
/*!40000 ALTER TABLE `realtor` DISABLE KEYS */;
INSERT INTO `realtor` VALUES (1,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','두기철','$2a$10$r4POTpslmCr45qgdTOphyOgYIUseI2LlA1/uGJ3ege5.15C4eNxyW','01037486147','대전광역시 유성구 덕명동','1234567890','싸피공인중개사무소','허위매물은 절대 취급 안 합니다. 15년째 유성구 덕명동 부동산 업계 휘어잡고 있습니다.',4.8,'12345-2022-12345','2022-03-05'),(2,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김순자','$2a$10$r4POTpslmCr45qgdTOphyOgYIUseI2LlA1/uGJ3ege5.15C4eNxyW','01011111111','대전광역시 유성구 갈마동','1111111111','삼성공인중개사무소','별이 무려 세 개! 삼성 부동산으로 상담 예약하세요!',4.6,'12345-2022-12345','1998-04-22'),(3,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','박창호','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01022222222','대전광역시 유성구 덕명동','2222222222','수리부엉이공인중개사무소','낮이나 밤이나 언제든 연락 가능합니다. 부엉부엉',3.7,'12345-2022-12345','2020-05-26'),(4,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김대희','$2a$10$zgQdM3bnvU.6/AA1vbp9EOURvzUxpPoVYqf/IQ6b2uDQPSIvvU7ZC','01033333333','대전광역시 유성구 덕명동','3333333333','한성공인중개사무소','3대째 이어져오는 공인중개사무소 한성! 좋은 집 찾기 내공이 탄탄합니다.',3.6,'12345-2022-12345','2002-02-02'),(5,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','오승준','$2a$10$9hIaSPa2NBV.T8g0.HyC5efXeDI/Kr9NAe4MpW4q0ZF2/3Dd7Dhtq','01044444444','대전광역시 유성구 학하동','4444444444','이성공인중개사무소','인프라 좋은 집 구하시면 연락주세요.',3.1,'12345-2022-12345','2006-02-02'),(6,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','황준희','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01055555555','대전광역시 유성구 덕명동','5555555555','샘터공인중개사무소','여성 안심 매물 최다 보유. 편하게 상담 신청해주세요~',2.9,'12345-2022-12345','2016-02-02'),(7,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','이은주','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01066666666','대전광역시 유성구 세동','6666666666','부엉이공인중개사무소','깔끔한 시설만 취급합니다. 원하시는 분 상담 신청 부탁드려요~',4.3,'12345-2022-12345','2022-02-02'),(8,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','조민성','$2a$10$pNMtt7C4Cnjyyqjg7qW04eItM8T357rBUExdJKEC9RQVhLuQ9DkhG','01077777777','대전광역시 유성구 봉명동','7777777777','한길공인중개사무소','급매, 즉시 입주 가능 매물 많습니다. 연락 주세요.',4.1,'12345-2022-12345','2018-02-02'),(9,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','박창호','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01022222222','대전광역시 유성구 구암동','8888888888','이음공인중개사무소','너와 나의 연결고리. 이음부동산입니다.',4.2,'12345-2022-12345','2003-02-02'),(10,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','오영수','$2a$10$zgQdM3bnvU.6/AA1vbp9EOURvzUxpPoVYqf/IQ6b2uDQPSIvvU7ZC','01033333333','대전광역시 유성구 상대동','9999999999','마음공인중개사무소','정성을 다 하는~ 마음 부동산~ 덕.명.동. 마음부동산~',3.1,'12345-2022-12345','2015-02-02'),(11,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','이영호','$2a$10$9hIaSPa2NBV.T8g0.HyC5efXeDI/Kr9NAe4MpW4q0ZF2/3Dd7Dhtq','01044444444','대전광역시 유성구 장대동','0000000000','한마음공인중개사무소','고객과 한마음이 되어 원하는 매물만 찾아 보여드려요~',3.2,'12345-2022-12345','2022-02-02'),(12,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','박영식','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01055555555','대전광역시 유성구 덕명동','9876543210','유성행복공인중개사무소','행복한 내 집 찾기, 유성행복공인중개사무소와 함께 하세요.',4,'12345-2022-12345','2022-02-02'),(13,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','왕정웅','$2a$10$AQt8shevjbk6HiJ301H1Quig97z0qoA.oqSzvYA38Lo3JbIHM.ocW','01066666666','대전광역시 유성구 노은동','1122334455','수리수리부엉이공인중개사무소','수리수리마수리부엉이 부동산입니다. 편하게 상담 신청해주세요',3.3,'12345-2022-12345','2022-02-02'),(14,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','홍영길','$2a$10$pNMtt7C4Cnjyyqjg7qW04eItM8T357rBUExdJKEC9RQVhLuQ9DkhG','01077777777','대전광역시 유성구 덕명동','6677889900','영우공인중개사무소','즉시 입주 가능한 매물 많습니다. 상담 신청 주세요.',3.4,'12345-2022-12345','2022-02-02'),(15,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','김영일','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 동구 삼정동','1112223334','이레공인중개사무소','친절하게 모십니다~',4.2,'12345-2022-12345','2022-02-02'),(16,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','곽정수','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 동구 천동','2223334445','플라워공인중개사무소','꽃처럼 활짝 필 당신의 미래, 플라워 부동산이 함께 해요~',3.5,'12345-2022-12345','2022-02-02'),(17,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','오정남','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 동구 대동','3334445556','리브공인중개사무소','허위매물은 절대 취급 안 합니다. 10년째 동구 덕명동 부동산 업계 휘어잡고 있습니다.',3.7,'12345-2022-12345','2022-02-02'),(18,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','고광수','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 동구 가오동','4445556667','동그라미공인중개사무소','급매, 즉시 입주 가능 매물 많습니다. 연락 주세요',3.5,'12345-2022-12345','2022-02-02'),(19,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김윤석','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 동구 용전동','5556667778','명공인중개사무소','15년 경력으로 친절하게 모셔용',3.8,'12345-2022-12345','2022-02-02'),(20,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김중수','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 동구 선화동','6667778889','모아공인중개사무소','깔끔한 시설만 취급합니다. 원하시는 분 상담 신청 부탁드려요',3.9,'12345-2022-12345','2022-02-02'),(21,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','이성호','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 동구 목동','7778889990','도리중개사무소','친절하게 모셔용',4,'12345-2022-12345','2022-02-02'),(22,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김영철','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 동구 중촌동','8889990001','신우리공인중개사무소','인프라 좋은 집 구하시면 연락주세요.',3.5,'12345-2022-12345','2022-02-02'),(23,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','한종수','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 동구 신안동','9990001112','더키움공인중개사무소','안심매물만 취급합니다~',4.1,'12345-2022-12345','2022-02-02'),(24,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','함정식','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 동구 홍도동','0001112223','비엔비공인중개사무소','깔끔한 시설만 취급합니다. 원하시는 분 상담 신청 부탁드려요',3.7,'12345-2022-12345','2022-02-02'),(25,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','우정식','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 동구 대흥동','1234123412','명인공인중개사무소','고객과 한마음이 되어 원하는 매물만 찾아 보여드려요~',3.3,'12345-2022-12345','2022-02-02'),(26,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','김영환','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 동구 옥계동','2345234523','플러스공인중개사무소','친절하게 모셔용',2.6,'12345-2022-12345','2022-02-02'),(27,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','방석훈','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 대덕구 송촌동','3456345634','백마공인중개사무소','인프라 좋은 집 구하시면 연락주세요.',2.9,'12345-2022-12345','2022-02-02'),(28,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','박영진','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 대덕구 법동','4567456745','황금알공인중개사무소','허위매물은 절대 취급 안 합니다. 10년째 동구 법동 부동산 업계 휘어잡고 있습니다.',4,'12345-2022-12345','2022-02-02'),(29,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','이진호','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 대덕구 비래동','5678567856','청명공인중개사무소','인프라 좋은 집 구하시면 연락주세요.',4.1,'12345-2022-12345','2022-02-02'),(30,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','임성민','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 대덕구 법동','6789678967','휴먼시아공인중개사무소','15년 경력으로 친절하게 모셔용',4.2,'12345-2022-12345','2022-02-02'),(31,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','박민수','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 대덕구 목상동','7890789078','이음공인중개사무소','너와 나의 연결고리. 이음부동산입니다.',4.3,'12345-2022-12345','2022-02-02'),(32,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','조상현','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 대덕구 문평동','8901890189','샘물공인중개사무소','15년 경력으로 친절하게 모셔용',3.5,'12345-2022-12345','2022-02-02'),(33,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','최준호','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 대덕구 신일동','9012901290','늘봄공인중개사무소','급매 있습니다. 즉시 입주 가능한 매물 많아요.',3.9,'12345-2022-12345','2022-02-02'),(34,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','장민영','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 대덕구 상서동','0123012301','하늘공인중개사무소','급매 있습니다. 즉시 입주 가능한 매물 많아요.',4.2,'12345-2022-12345','2022-02-02'),(35,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','김명자','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 대덕구 평촌동','7894561230','구름공인중개사무소','급매 있습니다. 즉시 입주 가능한 매물 많아요.',4.1,'12345-2022-12345','2022-02-02'),(36,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','이옥자','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 대덕구 장동','8765432109','한일공인중개사무소','16년 경력으로 친절하게 모셔용',3.5,'12345-2022-12345','2022-02-02'),(37,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','한명자','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 중구 은행동','3216549879','영원공인중개사무소','영원히 잊지 못 할 집을 찾으시는 분, 영원공인중개사로 상담 연락 주세요!',4.1,'12345-2022-12345','2022-02-02'),(38,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/man.png','지화자','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 중구 선화동','3216541257','천국공인중개사무소','선화동 좋은 매물 많아요~ 상담 신청해주세요.',3.8,'12345-2022-12345','2022-02-02'),(39,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','한순옥','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 중구 목동','2548963248','엔젤공인중개사무소','10년 경력으로 친절하게 모셔요',3.2,'12345-2022-12345','2022-02-02'),(40,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','김미영','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 중구 부사동','1258960044','나라공인중개사무소','중구 매물 필요하신 분, 편하게 연락주세요!',4.7,'12345-2022-12345','2022-02-02'),(41,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','이은영','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 중구 중촌동','6984521605','둥지공인중개사무소','중촌동 매물 많습니다. 싸고 좋은 방 많아요~',4.9,'12345-2022-12345','2022-02-02'),(42,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','한현주','$2a$10$hk7ugT62DkNDIxDdrCzw1ujwOMQxkJAKnkwqnRhalgU6RiXzxLmzW','01088888888','대전광역시 중구 태평동','2245668510','한경공인중개사무소','친절하게 모셔용',4.9,'12345-2022-12345','2022-02-02'),(43,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','박지영','$2a$10$iAiTniMcxJlLsishNLjS/uGY2yeXmIgzhMFEHQzCp16urf2aZTOuW','01099999999','대전광역시 중구 오류동','2298206553','백구공인중개사무소','급매 있습니다. 즉시 입주 가능한 매물 많아요.',4,'12345-2022-12345','2022-02-02'),(44,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','한경숙','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012341234','대전광역시 중구 호동','8511036953','호동공인중개사무소','15년 경력으로 친절하게 모십니다!',3,'12345-2022-12345','2022-02-02'),(45,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','임은경','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01067896789','대전광역시 중구 옥계동','6314899258','옥계공인중개사무소','대전 매물 최다 보유하고 있습니다. 연락주세요~',4.2,'12345-2022-12345','2022-02-02'),(46,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/live_profile/woman.png','안영미','$2a$10$V3QoiWTI604b3tHYl.tzZu1MNq/EtYHXe.NJQ1exyaXRdjG0DEAy6','01012344321','대전광역시 중구 안영동','9824536225','안영공인중개사무소','인프라 좋은 집 구하시면 연락주세요.',2.4,'12345-2022-12345','2022-02-02');
/*!40000 ALTER TABLE `realtor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `realtor_roles`
--

DROP TABLE IF EXISTS `realtor_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realtor_roles` (
  `realtor_realtor_no` bigint NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  KEY `FKjq4lh6yvp3hlvamp5q3f6llky` (`realtor_realtor_no`),
  CONSTRAINT `FKjq4lh6yvp3hlvamp5q3f6llky` FOREIGN KEY (`realtor_realtor_no`) REFERENCES `realtor` (`realtor_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `realtor_roles`
--

LOCK TABLES `realtor_roles` WRITE;
/*!40000 ALTER TABLE `realtor_roles` DISABLE KEYS */;
INSERT INTO `realtor_roles` VALUES (1,'REALTOR'),(2,'REALTOR'),(3,'REALTOR'),(4,'REALTOR'),(5,'REALTOR'),(6,'REALTOR'),(7,'REALTOR'),(8,'REALTOR'),(9,'REALTOR'),(10,'REALTOR'),(11,'REALTOR'),(12,'REALTOR'),(13,'REALTOR'),(14,'REALTOR'),(15,'REALTOR'),(16,'REALTOR'),(17,'REALTOR'),(18,'REALTOR'),(19,'REALTOR'),(20,'REALTOR'),(21,'REALTOR'),(22,'REALTOR'),(23,'REALTOR'),(24,'REALTOR'),(25,'REALTOR'),(26,'REALTOR'),(27,'REALTOR'),(28,'REALTOR'),(29,'REALTOR'),(30,'REALTOR'),(31,'REALTOR'),(32,'REALTOR'),(33,'REALTOR'),(34,'REALTOR'),(35,'REALTOR'),(36,'REALTOR'),(37,'REALTOR'),(38,'REALTOR'),(39,'REALTOR'),(40,'REALTOR'),(41,'REALTOR'),(42,'REALTOR'),(43,'REALTOR'),(44,'REALTOR'),(45,'REALTOR'),(46,'REALTOR');
/*!40000 ALTER TABLE `realtor_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `record_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `original_file` varchar(255) DEFAULT NULL,
  `save_file` varchar(255) DEFAULT NULL,
  `save_folder` varchar(255) DEFAULT NULL,
  `consulting_no` bigint DEFAULT NULL,
  PRIMARY KEY (`record_no`),
  KEY `FKhb19hpe7wp022efhfjnektlvb` (`consulting_no`),
  CONSTRAINT `FKhb19hpe7wp022efhfjnektlvb` FOREIGN KEY (`consulting_no`) REFERENCES `consulting` (`consulting_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `region` (
  `region_code` varchar(255) NOT NULL,
  `dong_name` varchar(255) DEFAULT NULL,
  `gugun_name` varchar(255) DEFAULT NULL,
  `sido_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`region_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES ('3011010100','원동','동구','대전광역시'),('3011010200','인동','동구','대전광역시'),('3011010300','효동','동구','대전광역시'),('3011010400','천동','동구','대전광역시'),('3011010500','가오동','동구','대전광역시'),('3011010600','신흥동','동구','대전광역시'),('3011010700','판암동','동구','대전광역시'),('3011010800','삼정동','동구','대전광역시'),('3011010900','용운동','동구','대전광역시'),('3011011000','대동','동구','대전광역시'),('3011011100','자양동','동구','대전광역시'),('3011011200','신안동','동구','대전광역시'),('3011011300','소제동','동구','대전광역시'),('3011011400','가양동','동구','대전광역시'),('3011011500','용전동','동구','대전광역시'),('3011011600','성남동','동구','대전광역시'),('3011011700','홍도동','동구','대전광역시'),('3014010100','은행동','중구','대전광역시'),('3014010200','선화동','중구','대전광역시'),('3014010300','목동','중구','대전광역시'),('3014010400','중촌동','중구','대전광역시'),('3014010500','대흥동','중구','대전광역시'),('3014010600','문창동','중구','대전광역시'),('3014010700','석교동','중구','대전광역시'),('3014010800','호동','중구','대전광역시'),('3014010900','옥계동','중구','대전광역시'),('3014011000','대사동','중구','대전광역시'),('3014011100','부사동','중구','대전광역시'),('3014011200','용두동','중구','대전광역시'),('3014011300','오류동','중구','대전광역시'),('3014011400','태평동','중구','대전광역시'),('3014011500','유천동','중구','대전광역시'),('3014011600','문화동','중구','대전광역시'),('3014011700','산성동','중구','대전광역시'),('3014011800','사정동','중구','대전광역시'),('3014011900','안영동','중구','대전광역시'),('3014012000','무수동','중구','대전광역시'),('3014012100','구완동','중구','대전광역시'),('3014012200','침산동','중구','대전광역시'),('3014012300','목달동','중구','대전광역시'),('3014012400','정생동','중구','대전광역시'),('3014012500','어남동','중구','대전광역시'),('3014012600','금동','중구','대전광역시'),('3017010400','정림동','서구','대전광역시'),('3017010500','용문동','서구','대전광역시'),('3017010600','탄방동','서구','대전광역시'),('3017010700','삼천동','서구','대전광역시'),('3017010800','괴정동','서구','대전광역시'),('3017010900','가장동','서구','대전광역시'),('3017011000','내동','서구','대전광역시'),('3017011100','갈마동','서구','대전광역시'),('3017011200','둔산동','서구','대전광역시'),('3017011300','월평동','서구','대전광역시'),('3017011400','가수원동','서구','대전광역시'),('3017011500','도안동','서구','대전광역시'),('3017011600','관저동','서구','대전광역시'),('3017011700','흑석동','서구','대전광역시'),('3017011800','매노동','서구','대전광역시'),('3017011900','산직동','서구','대전광역시'),('3017012000','장안동','서구','대전광역시'),('3017012100','평촌동','서구','대전광역시'),('3017012200','오동','서구','대전광역시'),('3017012300','우명동','서구','대전광역시'),('3017012400','원정동','서구','대전광역시'),('3017012500','용촌동','서구','대전광역시'),('3017012600','봉곡동','서구','대전광역시'),('3017012700','괴곡동','서구','대전광역시'),('3017012800','만년동','서구','대전광역시'),('3020010100','원내동','유성구','대전광역시'),('3020010200','교촌동','유성구','대전광역시'),('3020010300','대정동','유성구','대전광역시'),('3020010400','용계동','유성구','대전광역시'),('3020010500','학하동','유성구','대전광역시'),('3020010600','계산동','유성구','대전광역시'),('3020010700','성북동','유성구','대전광역시'),('3020010800','세동','유성구','대전광역시'),('3020010900','송정동','유성구','대전광역시'),('3020011000','방동','유성구','대전광역시'),('3020011100','봉명동','유성구','대전광역시'),('3020011200','구암동','유성구','대전광역시'),('3020011300','덕명동','유성구','대전광역시'),('3020011400','원신흥동','유성구','대전광역시'),('3020011500','상대동','유성구','대전광역시'),('3020011600','복용동','유성구','대전광역시'),('3020011700','장대동','유성구','대전광역시'),('3020011800','갑동','유성구','대전광역시'),('3020011900','노은동','유성구','대전광역시'),('3020012000','지족동','유성구','대전광역시'),('3020012100','죽동','유성구','대전광역시'),('3020012200','궁동','유성구','대전광역시'),('3020012300','어은동','유성구','대전광역시'),('3020012400','구성동','유성구','대전광역시'),('3020012500','신성동','유성구','대전광역시'),('3020012600','가정동','유성구','대전광역시'),('3020012700','도룡동','유성구','대전광역시'),('3020012800','장동','유성구','대전광역시'),('3020012900','방현동','유성구','대전광역시'),('3020013000','화암동','유성구','대전광역시'),('3020013100','덕진동','유성구','대전광역시'),('3020013200','하기동','유성구','대전광역시'),('3020013300','추목동','유성구','대전광역시'),('3020013400','자운동','유성구','대전광역시'),('3020013500','신봉동','유성구','대전광역시'),('3020013600','수남동','유성구','대전광역시'),('3020013700','안산동','유성구','대전광역시'),('3020013800','외삼동','유성구','대전광역시'),('3020013900','반석동','유성구','대전광역시'),('3020014000','문지동','유성구','대전광역시'),('3020014100','전민동','유성구','대전광역시'),('3020014200','원촌동','유성구','대전광역시'),('3020014300','탑립동','유성구','대전광역시'),('3020014400','용산동','유성구','대전광역시'),('3020014500','봉산동','유성구','대전광역시'),('3020014600','관평동','유성구','대전광역시'),('3020014700','송강동','유성구','대전광역시'),('3020014800','금고동','유성구','대전광역시'),('3020014900','대동','유성구','대전광역시'),('3020015000','금탄동','유성구','대전광역시'),('3020015100','신동','유성구','대전광역시'),('3020015200','둔곡동','유성구','대전광역시'),('3023010700','송촌동','대덕구','대전광역시'),('3023010800','법동','대덕구','대전광역시'),('3023010900','중리동','대덕구','대전광역시'),('3023011000','비래동','대덕구','대전광역시'),('3023011100','석봉동','대덕구','대전광역시'),('3023011200','목상동','대덕구','대전광역시'),('3023011300','문평동','대덕구','대전광역시'),('3023011400','신일동','대덕구','대전광역시'),('3023011500','덕암동','대덕구','대전광역시'),('3023011600','상서동','대덕구','대전광역시'),('3023011700','평촌동','대덕구','대전광역시'),('3023011800','장동','대덕구','대전광역시'),('3023011900','용호동','대덕구','대전광역시'),('3023012000','이현동','대덕구','대전광역시'),('3023012100','갈전동','대덕구','대전광역시'),('3023012200','부수동','대덕구','대전광역시'),('3023012300','황호동','대덕구','대전광역시'),('3023012400','삼정동','대덕구','대전광역시'),('3023012500','미호동','대덕구','대전광역시'),('3023012600','신탄진동','대덕구','대전광역시');
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_no` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `iscontract` int DEFAULT NULL,
  `rating_score` int DEFAULT NULL,
  `review_info` varchar(255) DEFAULT NULL,
  `consulting_no` bigint DEFAULT NULL,
  `realtor_no` bigint DEFAULT NULL,
  `user_no` bigint DEFAULT NULL,
  PRIMARY KEY (`review_no`),
  KEY `FKqh3jrq4hjvq8vjsc5jr91qaqj` (`consulting_no`),
  KEY `FKqtvlokx4255abdkyec04f3y3n` (`realtor_no`),
  KEY `FK5kgga4m0b0o0ffyt31kvjrkll` (`user_no`),
  CONSTRAINT `FK5kgga4m0b0o0ffyt31kvjrkll` FOREIGN KEY (`user_no`) REFERENCES `users` (`user_no`),
  CONSTRAINT `FKqh3jrq4hjvq8vjsc5jr91qaqj` FOREIGN KEY (`consulting_no`) REFERENCES `consulting` (`consulting_no`),
  CONSTRAINT `FKqtvlokx4255abdkyec04f3y3n` FOREIGN KEY (`realtor_no`) REFERENCES `realtor` (`realtor_no`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'2023-02-07 00:00:00','2023-02-07 00:00:00',0,5,'이번 상담 매물들 중 마음에 드는 매물이 있어서 계약까지 이어가보려고 합니다~',10,1,2),(2,'2023-02-02 00:00:00','2023-02-02 00:00:00',0,4,'제가 원하는 매물을 몇 가지 보여주시긴 했지만 완벽하게 마음에 드는 매물이 없어서 계약까지는 어려울 것 같네요.. ㅠ',12,1,4),(3,'2023-01-12 00:00:00','2023-01-12 00:00:00',0,5,'두기철 공인중개사님은 천사이신가요? 제가 요구했던 모든 사항을 고려해주시네요 ㅠ 참고로 잘생기셨습니다.',23,1,1),(4,'2023-01-18 00:00:00','2023-01-18 00:00:00',0,5,'중개사님의 친절과 배려에 무릎을 탁 쳤습니다! 최고최고!!',24,1,1),(5,'2023-02-07 00:00:00','2023-02-07 00:00:00',0,4,'이번 상담 매물들 중 마음에 드는 매물이 있어서 계약까지 이어가보려고 합니다~',2,2,1),(6,'2023-02-02 00:00:00','2023-02-02 00:00:00',0,5,'중개사님의 친절과 배려에 무릎을 탁 쳤습니다! 최고최고!!',3,3,1);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_no` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `image_src` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `id` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `score` float NOT NULL,
  PRIMARY KEY (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김싸피','$2a$10$gJdaVW6nh.2qrFb.87wsY.5V3Ke8HoXpcnOh.dNAjA3p/UNckVRPu','01037486147','남','ssafy1234','장대동',36.5),(2,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김태수','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','ssafy','덕명동',36.5),(3,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이지우','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','snow','봉명동',36.5),(4,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','신현광','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','piggy','궁동',36.5),(5,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','김혜정','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','budongsan','봉명동',36.5),(6,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','김영주','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','moon','덕명동',36.5),(7,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','백정은','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','sugarboy','궁동',36.5),(8,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','성유지','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','dotori','덕명동',36.5),(9,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','유현수','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','choco','봉명동',36.5),(10,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','임서영','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','latte','덕명동',36.5),(11,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','김민지','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','chococo','봉명동',36.5),(12,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','김순자','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','macarong','봉명동',36.5),(13,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이지우','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','happy','덕명동',36.5),(14,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','신현광','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','happy123','궁동',36.5),(15,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','유현수','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','sophia','궁동',36.5),(16,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김재용','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','rain','덕명동',36.5),(17,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이재용','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','sunny','덕명동',36.5),(18,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','박현광','$2a$10$r.5BMZPeOg43HLQ0j0COy.1dbnR9O6br2hefv/y6BfB.J.Jqg3oGO','01037486147','남','ssafy!','장대동',36.5),(19,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김철수','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','ssafy~!','봉명동',36.5),(20,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이현일','$2a$10$B8JXT891gRPTK5XCOJoOuO2LrTeG2ldNQehnAbXNc078GFsInhrlK','01037486147','남','ssafy?','장대동',36.5),(21,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','이영자','$2a$10$5iAgnUH7m9DGZuzM6gzFdu70OSiEOOz53YnKMYuPCbKUUdiYdaE5i','01037486147','남','ssafy9999','덕명동',36.5),(22,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','오정은','$2a$10$hlRJvNzClaQr20ziY/VOU.KLbKGGJXEzHjJzGbcM1vWVblVGP5qJO','01037486147','남','ssafy12345','봉명동',36.5),(23,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','신지우','$2a$10$mTCwKf.jB7UfpW1zZd95..u1oeI3xcFPfzYKiRswYfYg011PUc.Qy','01037486147','남','ssafy1298','덕명동',36.5),(24,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','신영주','$2a$10$hlRJvNzClaQr20ziY/VOU.KLbKGGJXEzHjJzGbcM1vWVblVGP5qJO','01037486147','남','1234','덕명동',36.5),(25,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','박세준','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','qwerty','덕명동',36.5),(26,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이기우','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','asdfg','봉명동',36.5),(27,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','전경찬','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','bongbong','궁동',36.5),(28,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김주성','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','ssappi','봉명동',36.5),(29,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','정도형','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','nyomnyom','덕명동',36.5),(30,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','박서영','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','straberry','궁동',36.5),(31,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','이동휘','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','melon','덕명동',36.5),(32,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','황원빈','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','orange','봉명동',36.5),(33,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','김동훈','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','grape','덕명동',36.5),(34,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','정연진','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','cocomong','봉명동',36.5),(35,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','문동은','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','여','fullmoon','봉명동',36.5),(36,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','유지연','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','halfmoon','덕명동',36.5),(37,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','성유지','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','happyboy','궁동',36.5),(38,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','윤현수','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','wangwang','궁동',36.5),(39,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','이지민','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','samsung','덕명동',36.5),(40,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','이지윤','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','wowman','덕명동',36.5),(41,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','김시은','$2a$10$r.5BMZPeOg43HLQ0j0COy.1dbnR9O6br2hefv/y6BfB.J.Jqg3oGO','01037486147','남','hellossafy','장대동',36.5),(42,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','박소민','$2a$10$0b8Xm3IA0772QGmsKvcCZedXwJmOiF2TMtVxgnW64Qfd1cUT695oK','01037486147','남','mino','봉명동',36.5),(43,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','장수진','$2a$10$B8JXT891gRPTK5XCOJoOuO2LrTeG2ldNQehnAbXNc078GFsInhrlK','01037486147','남','honghong','장대동',36.5),(44,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','임혜지','$2a$10$5iAgnUH7m9DGZuzM6gzFdu70OSiEOOz53YnKMYuPCbKUUdiYdaE5i','01037486147','남','s1s2a3f4y5','덕명동',36.5),(45,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/woman.png','오수정','$2a$10$hlRJvNzClaQr20ziY/VOU.KLbKGGJXEzHjJzGbcM1vWVblVGP5qJO','01037486147','남','ssafy1111','봉명동',36.5),(46,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','황수민','$2a$10$mTCwKf.jB7UfpW1zZd95..u1oeI3xcFPfzYKiRswYfYg011PUc.Qy','01037486147','남','ssafy2222','덕명동',36.5),(47,'sophia2404@naver.com','https://bje-s3-bucket.s3.ap-northeast-2.amazonaws.com/profile/man.png','손상수','$2a$10$hlRJvNzClaQr20ziY/VOU.KLbKGGJXEzHjJzGbcM1vWVblVGP5qJO','01037486147','남','ssafy3333','덕명동',36.5);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `users_user_no` bigint NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  KEY `FKchw7mv1qb36nfsj5m69d72dr6` (`users_user_no`),
  CONSTRAINT `FKchw7mv1qb36nfsj5m69d72dr6` FOREIGN KEY (`users_user_no`) REFERENCES `users` (`user_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,'USER'),(2,'USER'),(3,'USER'),(4,'USER'),(5,'USER'),(6,'USER'),(7,'USER'),(8,'USER'),(9,'USER'),(10,'USER'),(11,'USER'),(12,'USER'),(13,'USER'),(14,'USER'),(15,'USER'),(16,'USER'),(17,'USER'),(18,'USER'),(19,'USER'),(20,'USER'),(21,'USER'),(22,'USER'),(23,'USER'),(24,'USER'),(25,'USER'),(26,'USER'),(27,'USER'),(28,'USER'),(29,'USER'),(30,'USER'),(31,'USER'),(32,'USER'),(33,'USER'),(34,'USER'),(35,'USER'),(36,'USER'),(37,'USER'),(38,'USER'),(39,'USER'),(40,'USER'),(41,'USER'),(42,'USER'),(43,'USER'),(44,'USER'),(45,'USER'),(46,'USER'),(47,'USER');
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17  1:14:55
