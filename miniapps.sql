-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Sep 2024 pada 08.34
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `miniapps`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` enum('l','p') NOT NULL,
  `birthDate` date NOT NULL,
  `birthPlace` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `store_id` bigint(20) NOT NULL,
  `customer_types_id` bigint(20) UNSIGNED DEFAULT NULL,
  `insert_user` varchar(11) NOT NULL,
  `update_user` varchar(11) NOT NULL,
  `insert_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `customers`
--

INSERT INTO `customers` (`id`, `name`, `gender`, `birthDate`, `birthPlace`, `email`, `phone`, `address`, `store_id`, `customer_types_id`, `insert_user`, `update_user`, `insert_date`, `update_date`, `deleted_at`) VALUES
(1, 'John Doe', 'l', '1990-01-15', 'New York', 'johndoe@example.com', '1234567890', '123 Main St', 1, 1, 'admin', 'admin', '2024-09-24 18:37:11', '2024-09-24 18:37:11', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_types`
--

CREATE TABLE `customer_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL DEFAULT 1 COMMENT '0 -> not active. 1 ->active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `customer_types`
--

INSERT INTO `customer_types` (`id`, `type`, `is_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Regular', 1, '2024-09-24 18:36:52', '2024-09-24 18:36:52', NULL),
(2, 'Premium', 1, '2024-09-24 18:36:52', '2024-09-24 18:36:52', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_users`
--

CREATE TABLE `customer_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nik` varchar(255) NOT NULL COMMENT 'or Username',
  `email` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `locationCode` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `can_download` int(11) NOT NULL DEFAULT 0 COMMENT 'Cannot -> 0, Can -> 1',
  `role_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'Admin : 1, Toko : 2, Regional & Head Office : 3',
  `store_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`store_id`)),
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `customer_users`
--

INSERT INTO `customer_users` (`id`, `name`, `nik`, `email`, `location`, `locationCode`, `company`, `can_download`, `role_id`, `store_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', '1234567890', 'johndoe@example.com', 'New York', 'NY01', 'Tech Corp', 1, 2, '[\"Store A\", \"Store B\"]', NULL, '2024-09-24 18:39:12', '2024-09-24 18:39:12');

-- --------------------------------------------------------

--
-- Struktur dari tabel `departement`
--

CREATE TABLE `departement` (
  `id` int(11) NOT NULL,
  `divisi_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `departement`
--

INSERT INTO `departement` (`id`, `divisi_id`, `name`) VALUES
(1, 1, 'Dapur'),
(2, 1, 'Alat Rumah Tangga'),
(3, 1, 'Alat OlahRaga'),
(4, 2, 'snack'),
(5, 2, 'alat mandi'),
(6, 2, 'pangan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `divisi`
--

CREATE TABLE `divisi` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `divisi`
--

INSERT INTO `divisi` (`id`, `name`) VALUES
(1, 'TransLiving'),
(2, 'TransMart');

-- --------------------------------------------------------

--
-- Struktur dari tabel `family`
--

CREATE TABLE `family` (
  `id` int(11) NOT NULL,
  `group_family_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `family`
--

INSERT INTO `family` (`id`, `group_family_id`, `name`) VALUES
(1, 1, 'piring mangkuk'),
(2, 1, 'sendok garpu'),
(3, 2, 'pisau panci'),
(4, 2, 'kompor oven'),
(5, 3, 'alat lari'),
(6, 3, 'Macam bola'),
(7, 4, 'bola tangan'),
(8, 4, 'bola tendang');

-- --------------------------------------------------------

--
-- Struktur dari tabel `group_family`
--

CREATE TABLE `group_family` (
  `id` int(11) NOT NULL,
  `departement_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `group_family`
--

INSERT INTO `group_family` (`id`, `departement_id`, `name`) VALUES
(1, 1, 'alat makan'),
(2, 1, 'alat masak'),
(3, 2, 'kelistrikan'),
(4, 2, 'alat tukang'),
(5, 3, 'running'),
(6, 3, 'bola'),
(7, 4, 'snack makanan manis'),
(8, 4, 'snack makanan asin'),
(9, 6, 'makanan'),
(10, 6, 'minuman');

-- --------------------------------------------------------

--
-- Struktur dari tabel `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `sub_family_id` int(11) NOT NULL,
  `item_code` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `unit` varchar(20) NOT NULL,
  `harga` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `item`
--

INSERT INTO `item` (`id`, `sub_family_id`, `item_code`, `item_name`, `unit`, `harga`) VALUES
(1, 1, 1001, 'piring 1', '100', 15000.00),
(2, 1, 1002, 'piring 2', '100', 20000.50),
(3, 2, 1003, 'mangkuk 1', '100', 25000.00),
(4, 2, 1004, 'mangkuk 2', '100', 30000.75),
(5, 3, 1005, 'sendok 1', '100', 25000.00),
(6, 3, 1006, 'sendok 2', '100', 25000.00),
(7, 4, 1007, 'garpu 1', '100', 25000.00),
(8, 4, 1008, 'garpu 2', '100', 25000.00),
(9, 5, 1009, 'pisau 1', '100', 25000.00),
(10, 5, 1010, 'pisau 2', '100', 25000.00),
(11, 6, 1011, 'panci 1', '100', 25000.00),
(12, 6, 1012, 'panci 2', '100', 25000.00),
(13, 7, 1013, 'kompor 1', '100', 25000.00),
(14, 7, 1014, 'kompor 2', '100', 25000.00),
(15, 8, 1015, 'oven 1', '100', 25000.00),
(16, 8, 1016, 'oven 2', '100', 25000.00);

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu_dtl`
--

CREATE TABLE `menu_dtl` (
  `md_code` tinyint(3) UNSIGNED NOT NULL,
  `md_name` varchar(50) NOT NULL,
  `md_mh_code` tinyint(4) NOT NULL,
  `md_path` varchar(50) DEFAULT NULL,
  `md_public` enum('Y','N') NOT NULL DEFAULT 'Y',
  `md_icon` varchar(50) NOT NULL,
  `md_order` tinyint(4) DEFAULT NULL,
  `md_actived` enum('Y','N') DEFAULT 'Y'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `menu_dtl`
--

INSERT INTO `menu_dtl` (`md_code`, `md_name`, `md_mh_code`, `md_path`, `md_public`, `md_icon`, `md_order`, `md_actived`) VALUES
(1, 'eMotor - Receive', 1, 'receiving-bike.php', 'N', 'nav-icon fas fa-cloud-download-alt', 1, 'Y'),
(2, 'eMotor - Sales Order', 1, 'create-sales-order-ebike.php', 'N', 'nav-icon fas fa-folder-plus', 2, 'Y'),
(3, 'eMotor - Cancellation SO', 1, 'cancelation-order.php', 'N', 'nav-icon fas fa-folder-minus', 4, 'Y'),
(4, 'eMotor - Stock Movement', 1, 'stock-movement.php', 'N', 'nav-icon fas fa-people-carry', 5, 'Y'),
(5, 'eMorot - Update SO', 1, 'update-sales-order-ebike.php', 'N', 'nav-icon fas fa-folder-open', 3, 'Y'),
(6, 'eMotor - Invoice', 1, 'invoice-emotor.php', 'N', 'nav-icon fas fa-file-invoice', 6, 'Y'),
(7, 'eMotor - User', 3, 'create-user-emotor.php', 'N', 'nav-icon fas fa-user', 7, 'Y'),
(8, 'eMotor - eMotor Subsidies', 3, 'create-emotor-subsidi.php', 'N', 'nav-icon fas fa-motorcycle', 8, 'Y'),
(9, 'eMotor - BBN', 3, 'create-bbn.php', 'N', 'nav-icon fas fa-money-bill', 9, 'Y'),
(10, 'eMotor - Delete Sales Order', 3, 'delete-sales-order.php', 'N', 'nav-icon fas fa-trash', 10, 'Y'),
(11, 'eMotor - Report Sales Order', 3, 'report-sales-order.php', 'N', 'nav-icon fas fa-table', 11, 'Y'),
(12, 'eMotor - VIN Revision', 3, 'revision-of-vin.php', 'N', 'nav-icon fas fa-edit', 12, 'Y'),
(13, 'eMotor - Maintenance Stock', 3, 'emotor-stock-maintenance.php', 'N', 'nav-icon fas fa-cubes', 13, 'Y'),
(14, 'eDoc - Upload eDocument', 4, 'upload-document.php', 'N', 'nav-icon fas fa-upload', 14, 'Y'),
(15, 'eDoc - Create Category', 4, 'create-category.php', 'N', 'nav-icon fas fa-list', 15, 'Y'),
(16, 'eDoc - Document', 4, 'http://10.153.193.103:8082/', 'N', 'nav-icon fas fa-folder', 16, 'Y'),
(17, 'Customer - Dashboard', 5, 'dashboard.php', 'N', 'nav-icon fas fa-home', 17, 'Y'),
(18, 'Customer - User Customer', 5, 'user.php', 'N', 'nav-icon fas fa-solid fa-user-plus', 18, 'Y'),
(19, 'Customer - Data Customer', 5, 'customer.php', 'N', 'nav-icon fas fa-users', 19, 'Y'),
(20, 'Customer - Customer Types', 5, 'customer_types.php', 'N', 'nav-icon fas fa-user-tag', 20, 'Y'),
(21, 'Saber - Expired Item', 2, 'saber-expired.php', 'Y', 'nav-icon fas fa-box', 21, 'Y'),
(22, 'Saber - MDH List', 3, 'saber-mdh.php', 'Y', 'nav-icon fas fa-box', 22, 'Y');

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu_group_rights`
--

CREATE TABLE `menu_group_rights` (
  `mgr_ug_id` tinyint(4) NOT NULL,
  `mgr_menu_code` mediumint(9) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `menu_group_rights`
--

INSERT INTO `menu_group_rights` (`mgr_ug_id`, `mgr_menu_code`) VALUES
(2, 11),
(2, 12),
(2, 16),
(2, 21);

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu_hdr`
--

CREATE TABLE `menu_hdr` (
  `mh_code` tinyint(3) UNSIGNED NOT NULL,
  `mh_name` varchar(30) DEFAULT NULL,
  `mh_order` tinyint(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `menu_hdr`
--

INSERT INTO `menu_hdr` (`mh_code`, `mh_name`, `mh_order`) VALUES
(1, 'TRANSACTION', 1),
(2, 'REPORT', 2),
(3, 'MASTER', 3),
(4, 'STORE', 4),
(5, 'DATA CUSTOMER', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `store_map`
--

CREATE TABLE `store_map` (
  `code` varchar(100) NOT NULL,
  `flag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `store_map`
--

INSERT INTO `store_map` (`code`, `flag`) VALUES
('STORE001', 'Indomaret'),
('STORE002', 'Alfamart'),
('STORE003', 'Circle K'),
('STORE004', '7-Eleven'),
('STORE005', 'Giant');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_family`
--

CREATE TABLE `sub_family` (
  `id` int(11) NOT NULL,
  `family_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `sub_family`
--

INSERT INTO `sub_family` (`id`, `family_id`, `name`) VALUES
(1, 1, 'piring'),
(2, 1, 'mangkuk'),
(3, 2, 'sendok'),
(4, 2, 'garpu'),
(5, 3, 'pisau'),
(6, 3, 'panci'),
(7, 4, 'kompor'),
(8, 4, 'oven'),
(9, 5, 'cone'),
(10, 5, 'stopwatch'),
(11, 6, 'bola tendang'),
(12, 6, 'bola basket');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_group`
--

CREATE TABLE `user_group` (
  `ug_id` tinyint(3) UNSIGNED NOT NULL,
  `ug_name` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_group`
--

INSERT INTO `user_group` (`ug_id`, `ug_name`) VALUES
(1, 'ADMINISTRATOR'),
(2, 'SALESMAN'),
(3, 'RECEIVING'),
(4, 'ADMIN HO'),
(5, 'CUSTOMER SERVICES'),
(6, 'ADMIN HO DATA CUSTOMER'),
(7, 'ADMIN HO eDOCUMENT');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_group_member`
--

CREATE TABLE `user_group_member` (
  `ugm_ug_id` tinyint(4) NOT NULL,
  `ugm_user` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_group_member`
--

INSERT INTO `user_group_member` (`ugm_ug_id`, `ugm_user`) VALUES
(2, 'xxxxxxxxxxx');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_store_priv`
--

CREATE TABLE `user_store_priv` (
  `usp_user` varchar(11) NOT NULL,
  `usp_store` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user_store_priv`
--

INSERT INTO `user_store_priv` (`usp_user`, `usp_store`) VALUES
('xxxxxxxxxxx', '10011');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `vmenu`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `vmenu` (
`CODE` varchar(7)
,`hdr` varchar(30)
,`dtl` varchar(50)
,`PATH` varchar(50)
,`icon` varchar(50)
,`mh_order` tinyint(4)
,`md_order` tinyint(4)
,`md_public` enum('Y','N')
);

-- --------------------------------------------------------

--
-- Struktur untuk view `vmenu`
--
DROP TABLE IF EXISTS `vmenu`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vmenu`  AS SELECT concat(`menu_dtl`.`md_mh_code`,`menu_dtl`.`md_code`) AS `CODE`, `menu_hdr`.`mh_name` AS `hdr`, `menu_dtl`.`md_name` AS `dtl`, `menu_dtl`.`md_path` AS `PATH`, `menu_dtl`.`md_icon` AS `icon`, `menu_hdr`.`mh_order` AS `mh_order`, `menu_dtl`.`md_order` AS `md_order`, `menu_dtl`.`md_public` AS `md_public` FROM (`menu_hdr` join `menu_dtl`) WHERE `menu_dtl`.`md_actived` = 1 AND `menu_hdr`.`mh_code` = `menu_dtl`.`md_mh_code` ORDER BY `menu_hdr`.`mh_order` ASC, `menu_dtl`.`md_order` ASC ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`),
  ADD UNIQUE KEY `customers_phone_unique` (`phone`),
  ADD KEY `customers_customer_types_id_foreign` (`customer_types_id`);

--
-- Indeks untuk tabel `customer_types`
--
ALTER TABLE `customer_types`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customer_users`
--
ALTER TABLE `customer_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_nik_unique` (`nik`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `divisi_id` (`divisi_id`);

--
-- Indeks untuk tabel `divisi`
--
ALTER TABLE `divisi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`id`),
  ADD KEY `group_family_id` (`group_family_id`);

--
-- Indeks untuk tabel `group_family`
--
ALTER TABLE `group_family`
  ADD PRIMARY KEY (`id`),
  ADD KEY `departement_id` (`departement_id`);

--
-- Indeks untuk tabel `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `item_code` (`item_code`),
  ADD KEY `sub_family_id` (`sub_family_id`);

--
-- Indeks untuk tabel `menu_dtl`
--
ALTER TABLE `menu_dtl`
  ADD PRIMARY KEY (`md_code`),
  ADD UNIQUE KEY `md_idx2` (`md_name`,`md_mh_code`);

--
-- Indeks untuk tabel `menu_group_rights`
--
ALTER TABLE `menu_group_rights`
  ADD PRIMARY KEY (`mgr_ug_id`,`mgr_menu_code`);

--
-- Indeks untuk tabel `menu_hdr`
--
ALTER TABLE `menu_hdr`
  ADD PRIMARY KEY (`mh_code`);

--
-- Indeks untuk tabel `store_map`
--
ALTER TABLE `store_map`
  ADD PRIMARY KEY (`code`,`flag`);

--
-- Indeks untuk tabel `sub_family`
--
ALTER TABLE `sub_family`
  ADD PRIMARY KEY (`id`),
  ADD KEY `family_id` (`family_id`);

--
-- Indeks untuk tabel `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`ug_id`),
  ADD UNIQUE KEY `ug_idx1` (`ug_name`);

--
-- Indeks untuk tabel `user_group_member`
--
ALTER TABLE `user_group_member`
  ADD PRIMARY KEY (`ugm_user`,`ugm_ug_id`);

--
-- Indeks untuk tabel `user_store_priv`
--
ALTER TABLE `user_store_priv`
  ADD PRIMARY KEY (`usp_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1228;

--
-- AUTO_INCREMENT untuk tabel `customer_types`
--
ALTER TABLE `customer_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `customer_users`
--
ALTER TABLE `customer_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT untuk tabel `departement`
--
ALTER TABLE `departement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `divisi`
--
ALTER TABLE `divisi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `family`
--
ALTER TABLE `family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `group_family`
--
ALTER TABLE `group_family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `menu_dtl`
--
ALTER TABLE `menu_dtl`
  MODIFY `md_code` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `menu_hdr`
--
ALTER TABLE `menu_hdr`
  MODIFY `mh_code` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `sub_family`
--
ALTER TABLE `sub_family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `user_group`
--
ALTER TABLE `user_group`
  MODIFY `ug_id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_customer_types_id_foreign` FOREIGN KEY (`customer_types_id`) REFERENCES `customer_types` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `departement`
--
ALTER TABLE `departement`
  ADD CONSTRAINT `departement_ibfk_1` FOREIGN KEY (`divisi_id`) REFERENCES `divisi` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `family`
--
ALTER TABLE `family`
  ADD CONSTRAINT `family_ibfk_1` FOREIGN KEY (`group_family_id`) REFERENCES `group_family` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `group_family`
--
ALTER TABLE `group_family`
  ADD CONSTRAINT `group_family_ibfk_1` FOREIGN KEY (`departement_id`) REFERENCES `departement` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`sub_family_id`) REFERENCES `sub_family` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `sub_family`
--
ALTER TABLE `sub_family`
  ADD CONSTRAINT `sub_family_ibfk_1` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
