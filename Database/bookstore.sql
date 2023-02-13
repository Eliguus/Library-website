-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2023 at 08:30 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `pages` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`ID`, `title`, `genre`, `description`, `author`, `publisher`, `pages`, `img_url`, `year`, `status`, `price`) VALUES
(1, 'Lela Sew', 'Entertainment', 'A book By Dr. Mihret Debebe that tells about mental illness and ..', 'Dr. Mihret Debebe', 'Mega', '293', '4876feb6-7f0b-400c-aac0-7904d9392c83.jpg', '2000', 'rented', '550'),
(2, 'Atomic Habits', 'Entertainment', 'Packed with evidence-based strategies, Atomic Habits will teach you how to make small changes that will transform your habits and deliver amazing result.', 'James Clear', 'Avery', '215', 'e4baa93c-ae3c-4d85-8d2a-58525fd6daba.jpg', '2005', 'available', '300'),
(3, 'Lijnet', 'Fiction', 'A book about childhood ... ', 'Debebe Seifu', 'EPA', '199', 'b76d025b-08df-49ab-bee7-3602444cb12d.jpg', '1999', 'available', '200'),
(5, 'Fikr Eske Mekabir', 'Fiction', 'Fikr eske mekabir is a about the love story of a girl from the royal family and a boy from the lower class. ', 'Addis Alemayehu', 'Birhan Ena Selam ', '422', '0d84619d-2a0d-4f52-9f0d-af15ac0a8cbc.jpg', '1955', 'available', '499'),
(6, 'New book', 'Entertainment', 'A book written by Martha about God.', 'Martha ', 'Mega ', '296', '99b4d61f-adaf-4f44-941a-9f2c628f18d8.jpg', '2025', 'available', '350');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Name`, `Email`, `Password`) VALUES
(3, 'Admin', 'admin@gmail.com', '$2b$10$tr3JHaBhC2SrG73LSMAz1eDThgpGWbvjal/JV3q0zd7lvUV5/SlNy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
