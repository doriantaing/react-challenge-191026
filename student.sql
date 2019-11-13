-- -------------------------------------------------------------
-- TablePlus 2.11.2(278)
--
-- https://tableplus.com/
--
-- Database: student_list
-- Generation Time: 2019-11-13 14:13:00.1100
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `student` (
  `first_name` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_side_programming` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `back_side_programming` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ui_design` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ux_design` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `project_management` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `student` (`back_side_programming`, `client_side_programming`, `description`, `email`, `first_name`, `last_name`, `project_management`, `student_id`, `ui_design`, `ux_design`) VALUES ('A', 'A', 'Locomotive', 'dorian.taing@hetic.net', 'Dorian', 'Taing', 'A', '1', 'A', 'A'),
('C', 'B', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'billal.ouaali@hetic.net', 'Billal', 'Ouaali', 'D', '2', 'E', 'D'),
('D', 'C', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'fabien.marques@hetic.net', 'Fabien', 'Marques', 'D', '4', 'E', 'E'),
('D', 'C', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'theo.larue@hetic.net', 'Théo', 'Larue', 'E', '5', 'D', 'E'),
('F', 'E', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'kevin.ozdemir@hetic.net', 'Kévin ', 'Ozdemir', 'D', '6', 'B', 'C'),
('F', 'D', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'victor.roche@hetic.net', 'Victor', 'Roche', 'B', '7', 'B', 'A'),
('D', 'B', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'romain.metayer@hetic.net', 'Romain ', 'Metayer', 'E', '8', 'C', 'C'),
('B', 'A', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'salah.lamkadem@hetic.net', 'Salah', 'Lamkadem', 'D', '9', 'C', 'B'),
('A', 'A', '', 'qsqlksdj@qkljsd', 'jkqsdk', 'qsdjn', 'C', '85', 'A', 'A');


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;