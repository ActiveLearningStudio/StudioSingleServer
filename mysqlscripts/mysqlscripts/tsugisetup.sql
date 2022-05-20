-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: currikiprod1-mysql
-- Generation Time: Apr 13, 2021 at 03:00 PM
-- Server version: 5.7.22
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tsugi`
--

-- --------------------------------------------------------

--
-- Table structure for table `blob_blob`
--

CREATE TABLE `blob_blob` (
  `blob_id` int(11) NOT NULL,
  `blob_sha256` char(64) NOT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `content` longblob,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `accessed_at` timestamp NOT NULL DEFAULT '1970-01-02 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `blob_file`
--

CREATE TABLE `blob_file` (
  `file_id` int(11) NOT NULL,
  `file_sha256` char(64) NOT NULL,
  `context_id` int(11) DEFAULT NULL,
  `link_id` int(11) DEFAULT NULL,
  `file_name` varchar(2048) DEFAULT NULL,
  `bytelen` bigint(20) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `contenttype` varchar(256) DEFAULT NULL,
  `path` varchar(2048) DEFAULT NULL,
  `blob_id` int(11) DEFAULT NULL,
  `json` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `accessed_at` timestamp NOT NULL DEFAULT '1970-01-02 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cal_context`
--

CREATE TABLE `cal_context` (
  `context_id` int(11) NOT NULL,
  `context_sha256` char(64) NOT NULL,
  `context_key` text NOT NULL,
  `key_id` int(11) NOT NULL,
  `activity` varbinary(8192) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cal_event`
--

CREATE TABLE `cal_event` (
  `event_id` int(11) NOT NULL,
  `event` int(11) NOT NULL,
  `state` smallint(6) DEFAULT NULL,
  `link_id` int(11) DEFAULT NULL,
  `key_id` int(11) DEFAULT NULL,
  `context_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `nonce` binary(16) DEFAULT NULL,
  `launch` mediumtext,
  `json` mediumtext,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cal_key`
--

CREATE TABLE `cal_key` (
  `key_id` int(11) NOT NULL,
  `key_sha256` char(64) NOT NULL,
  `key_key` text NOT NULL,
  `activity` varbinary(8192) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `curriki`
--

CREATE TABLE `curriki` (
  `link_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `entity` text NOT NULL,
  `entity_id` int(11) NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `key_request`
--

CREATE TABLE `key_request` (
  `request_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(512) NOT NULL,
  `notes` text,
  `admin` text,
  `state` smallint(6) DEFAULT NULL,
  `lti` tinyint(4) DEFAULT NULL,
  `json` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lms_plugins`
--

CREATE TABLE `lms_plugins` (
  `plugin_id` int(11) NOT NULL,
  `plugin_path` varchar(255) NOT NULL,
  `version` bigint(20) NOT NULL,
  `title` varchar(2048) DEFAULT NULL,
  `json` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lms_plugins`
--

INSERT INTO `lms_plugins` (`plugin_id`, `plugin_path`, `version`, `title`, `json`, `created_at`, `updated_at`) VALUES
(1, 'admin/lti/database.php', 202009300851, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28'),
(22, 'admin/install/database.php', 201804301336, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28'),
(25, 'admin/key/database.php', 2014042200, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28'),
(27, 'admin/blob/database.php', 201803281114, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28'),
(30, 'admin/mail/database.php', 1, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28'),
(33, 'mod/curriki/database.php', 202009300851, NULL, NULL, '2021-04-13 14:58:28', '2021-04-13 14:58:28');

-- --------------------------------------------------------

--
-- Table structure for table `lms_tools`
--

CREATE TABLE `lms_tools` (
  `tool_id` int(11) NOT NULL,
  `toolpath` varchar(128) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `clone_url` text NOT NULL,
  `gitversion` varchar(1024) DEFAULT NULL,
  `git_user` varchar(1024) DEFAULT NULL,
  `git_password` varchar(1024) DEFAULT NULL,
  `rank` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `json` mediumtext,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lms_tools_status`
--

CREATE TABLE `lms_tools_status` (
  `tool_id` int(11) NOT NULL,
  `ipaddr` varchar(64) NOT NULL,
  `status_note` text,
  `commit` text,
  `commit_log` text,
  `json` mediumtext,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `git_user` varchar(1024) DEFAULT NULL,
  `git_password` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_context`
--

CREATE TABLE `lti_context` (
  `context_id` int(11) NOT NULL,
  `context_sha256` char(64) NOT NULL,
  `context_key` text NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `secret` varchar(128) DEFAULT NULL,
  `gc_secret` varchar(128) DEFAULT NULL,
  `key_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `path` text,
  `title` text,
  `lessons` mediumtext,
  `json` mediumtext,
  `settings` mediumtext,
  `settings_url` text,
  `ext_memberships_id` text,
  `ext_memberships_url` text,
  `memberships_url` text,
  `lineitems_url` text,
  `lti13_lineitems` text,
  `lti13_membership_url` text,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_domain`
--

CREATE TABLE `lti_domain` (
  `domain_id` int(11) NOT NULL,
  `key_id` int(11) NOT NULL,
  `context_id` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `domain` varchar(128) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `consumer_key` text,
  `secret` text,
  `json` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_external`
--

CREATE TABLE `lti_external` (
  `external_id` int(11) NOT NULL,
  `endpoint` varchar(128) DEFAULT NULL,
  `name` text,
  `url` varchar(128) DEFAULT NULL,
  `description` text,
  `fa_icon` varchar(128) DEFAULT NULL,
  `pubkey` text,
  `privkey` text,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `json` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_issuer`
--

CREATE TABLE `lti_issuer` (
  `issuer_id` int(11) NOT NULL,
  `issuer_title` text,
  `issuer_sha256` char(64) DEFAULT NULL,
  `issuer_guid` char(36) NOT NULL,
  `issuer_key` text NOT NULL,
  `issuer_client` text NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `lti13_oidc_auth` text,
  `lti13_keyset_url` text,
  `lti13_keyset` text,
  `lti13_platform_pubkey` text,
  `lti13_kid` text,
  `lti13_pubkey` text,
  `lti13_privkey` text,
  `lti13_token_url` text,
  `lti13_token_audience` text,
  `json` mediumtext,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_key`
--

CREATE TABLE `lti_key` (
  `key_id` int(11) NOT NULL,
  `key_title` text,
  `key_sha256` char(64) DEFAULT NULL,
  `key_key` text,
  `deploy_sha256` char(64) DEFAULT NULL,
  `deploy_key` text,
  `issuer_id` int(11) DEFAULT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `secret` text,
  `new_secret` text,
  `user_id` int(11) DEFAULT NULL,
  `caliper_url` text,
  `caliper_key` text,
  `json` mediumtext,
  `settings` mediumtext,
  `settings_url` text,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `lti_key`
--

INSERT INTO `lti_key` (`key_id`, `key_title`, `key_sha256`, `key_key`, `deploy_sha256`, `deploy_key`, `issuer_id`, `deleted`, `secret`, `new_secret`, `user_id`, `caliper_url`, `caliper_key`, `json`, `settings`, `settings_url`, `entity_version`, `created_at`, `updated_at`, `deleted_at`, `login_at`, `login_count`, `login_time`) VALUES
(1, NULL, '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '12345', NULL, NULL, NULL, 0, 'secret', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2021-04-13 14:58:28', NULL, NULL, NULL, 0, 0),
(2, NULL, 'd4c9d9027326271a89ce51fcaf328ed673f17be33469ff979e8ab8dd501e664f', 'google.com', NULL, NULL, NULL, 0, 'c550025f4df4ee59c88a48b16e04894a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2021-04-13 14:58:28', NULL, NULL, NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `lti_link`
--

CREATE TABLE `lti_link` (
  `link_id` int(11) NOT NULL,
  `link_sha256` char(64) NOT NULL,
  `link_key` text NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `context_id` int(11) NOT NULL,
  `path` text,
  `lti13_lineitem` text,
  `title` text,
  `json` mediumtext,
  `settings` mediumtext,
  `settings_url` text,
  `placementsecret` varchar(64) DEFAULT NULL,
  `oldplacementsecret` varchar(64) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_link_activity`
--

CREATE TABLE `lti_link_activity` (
  `link_id` int(11) NOT NULL,
  `event` int(11) NOT NULL,
  `link_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `activity` varbinary(1024) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_link_user_activity`
--

CREATE TABLE `lti_link_user_activity` (
  `link_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `event` int(11) NOT NULL,
  `link_user_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `activity` varbinary(1024) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_membership`
--

CREATE TABLE `lti_membership` (
  `membership_id` int(11) NOT NULL,
  `context_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `role` smallint(6) DEFAULT NULL,
  `role_override` smallint(6) DEFAULT NULL,
  `json` mediumtext,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_message`
--

CREATE TABLE `lti_message` (
  `link_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL DEFAULT '0',
  `message` text,
  `micro_time` double NOT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_nonce`
--

CREATE TABLE `lti_nonce` (
  `nonce` char(128) NOT NULL,
  `key_id` int(11) NOT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_result`
--

CREATE TABLE `lti_result` (
  `result_id` int(11) NOT NULL,
  `link_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `result_url` text,
  `sourcedid` text,
  `service_id` int(11) DEFAULT NULL,
  `gc_submit_id` text,
  `ipaddr` varchar(64) DEFAULT NULL,
  `grade` float DEFAULT NULL,
  `note` mediumtext,
  `server_grade` float DEFAULT NULL,
  `json` mediumtext,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `retrieved_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_service`
--

CREATE TABLE `lti_service` (
  `service_id` int(11) NOT NULL,
  `service_sha256` char(64) NOT NULL,
  `service_key` text NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `key_id` int(11) NOT NULL,
  `format` varchar(1024) DEFAULT NULL,
  `json` mediumtext,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `lti_user`
--

CREATE TABLE `lti_user` (
  `user_id` int(11) NOT NULL,
  `user_sha256` char(64) DEFAULT NULL,
  `user_key` text,
  `subject_sha256` char(64) DEFAULT NULL,
  `subject_key` text,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `key_id` int(11) NOT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `displayname` text,
  `email` text,
  `locale` char(63) DEFAULT NULL,
  `image` text,
  `subscribe` smallint(6) DEFAULT NULL,
  `json` mediumtext,
  `login_at` timestamp NULL DEFAULT NULL,
  `login_count` bigint(20) DEFAULT '0',
  `login_time` bigint(20) DEFAULT '0',
  `gc_token` text,
  `ipaddr` varchar(64) DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mail_bulk`
--

CREATE TABLE `mail_bulk` (
  `bulk_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `context_id` int(11) NOT NULL,
  `subject` varchar(256) DEFAULT NULL,
  `body` text,
  `json` text,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mail_sent`
--

CREATE TABLE `mail_sent` (
  `sent_id` int(11) NOT NULL,
  `context_id` int(11) NOT NULL,
  `link_id` int(11) DEFAULT NULL,
  `user_to` int(11) DEFAULT NULL,
  `user_from` int(11) DEFAULT NULL,
  `subject` varchar(256) DEFAULT NULL,
  `body` text,
  `json` text,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL,
  `profile_sha256` char(64) NOT NULL,
  `profile_key` text NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT '0',
  `key_id` int(11) NOT NULL,
  `displayname` text,
  `email` text,
  `image` text,
  `locale` char(63) DEFAULT NULL,
  `subscribe` smallint(6) DEFAULT NULL,
  `google_translate` tinyint(1) NOT NULL DEFAULT '0',
  `json` mediumtext,
  `login_at` timestamp NULL DEFAULT NULL,
  `entity_version` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sess_id` varchar(128) COLLATE utf8_bin NOT NULL,
  `sess_data` blob NOT NULL,
  `sess_time` int(10) UNSIGNED NOT NULL,
  `sess_lifetime` mediumint(9) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tsugi_string`
--

CREATE TABLE `tsugi_string` (
  `string_id` int(11) NOT NULL,
  `domain` varchar(128) NOT NULL,
  `string_text` text,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `string_sha256` char(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blob_blob`
--
ALTER TABLE `blob_blob`
  ADD PRIMARY KEY (`blob_id`),
  ADD UNIQUE KEY `blob_sha256` (`blob_sha256`),
  ADD KEY `blob_indx_3` (`blob_sha256`);

--
-- Indexes for table `blob_file`
--
ALTER TABLE `blob_file`
  ADD PRIMARY KEY (`file_id`),
  ADD KEY `blob_indx_1` (`file_sha256`) USING HASH,
  ADD KEY `blob_indx_2` (`path`(128)),
  ADD KEY `blob_indx_4` (`context_id`);

--
-- Indexes for table `cal_context`
--
ALTER TABLE `cal_context`
  ADD PRIMARY KEY (`context_id`),
  ADD UNIQUE KEY `cal_context_const_1` (`key_id`,`context_sha256`);

--
-- Indexes for table `cal_event`
--
ALTER TABLE `cal_event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `cal_key`
--
ALTER TABLE `cal_key`
  ADD PRIMARY KEY (`key_id`),
  ADD UNIQUE KEY `cal_key_const_1` (`key_sha256`);

--
-- Indexes for table `curriki`
--
ALTER TABLE `curriki`
  ADD UNIQUE KEY `link_id` (`link_id`,`user_id`),
  ADD KEY `curriki_ibfk_2` (`user_id`);

--
-- Indexes for table `key_request`
--
ALTER TABLE `key_request`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `key_request_fk_1` (`user_id`);

--
-- Indexes for table `lms_plugins`
--
ALTER TABLE `lms_plugins`
  ADD PRIMARY KEY (`plugin_id`),
  ADD UNIQUE KEY `plugin_path` (`plugin_path`);

--
-- Indexes for table `lms_tools`
--
ALTER TABLE `lms_tools`
  ADD PRIMARY KEY (`tool_id`),
  ADD UNIQUE KEY `toolpath` (`toolpath`);

--
-- Indexes for table `lms_tools_status`
--
ALTER TABLE `lms_tools_status`
  ADD PRIMARY KEY (`tool_id`,`ipaddr`);

--
-- Indexes for table `lti_context`
--
ALTER TABLE `lti_context`
  ADD PRIMARY KEY (`context_id`),
  ADD UNIQUE KEY `lti_context_const_1` (`key_id`,`context_sha256`),
  ADD KEY `lti_context_ibfk_2` (`user_id`);

--
-- Indexes for table `lti_domain`
--
ALTER TABLE `lti_domain`
  ADD PRIMARY KEY (`domain_id`),
  ADD UNIQUE KEY `lti_domain_const_1` (`key_id`,`context_id`,`domain`,`port`),
  ADD KEY `lti_domain_ibfk_2` (`context_id`);

--
-- Indexes for table `lti_external`
--
ALTER TABLE `lti_external`
  ADD PRIMARY KEY (`external_id`),
  ADD UNIQUE KEY `lti_external_const_1` (`endpoint`);

--
-- Indexes for table `lti_issuer`
--
ALTER TABLE `lti_issuer`
  ADD PRIMARY KEY (`issuer_id`),
  ADD UNIQUE KEY `lti_issuer_const_guid` (`issuer_guid`);

--
-- Indexes for table `lti_key`
--
ALTER TABLE `lti_key`
  ADD PRIMARY KEY (`key_id`),
  ADD UNIQUE KEY `lti_key_const_1` (`key_sha256`,`deploy_sha256`),
  ADD UNIQUE KEY `lti_key_const_2` (`issuer_id`,`deploy_sha256`);

--
-- Indexes for table `lti_link`
--
ALTER TABLE `lti_link`
  ADD PRIMARY KEY (`link_id`),
  ADD UNIQUE KEY `lti_link_const_1` (`link_sha256`,`context_id`),
  ADD KEY `lti_link_ibfk_1` (`context_id`);

--
-- Indexes for table `lti_link_activity`
--
ALTER TABLE `lti_link_activity`
  ADD PRIMARY KEY (`link_id`,`event`);

--
-- Indexes for table `lti_link_user_activity`
--
ALTER TABLE `lti_link_user_activity`
  ADD PRIMARY KEY (`link_id`,`user_id`,`event`),
  ADD KEY `lti_link_user_activity_ibfk_2` (`user_id`);

--
-- Indexes for table `lti_membership`
--
ALTER TABLE `lti_membership`
  ADD PRIMARY KEY (`membership_id`),
  ADD UNIQUE KEY `lti_membership_const_1` (`context_id`,`user_id`),
  ADD KEY `lti_membership_ibfk_2` (`user_id`);

--
-- Indexes for table `lti_message`
--
ALTER TABLE `lti_message`
  ADD PRIMARY KEY (`link_id`,`room_id`,`micro_time`);

--
-- Indexes for table `lti_nonce`
--
ALTER TABLE `lti_nonce`
  ADD UNIQUE KEY `lti_nonce_const_1` (`key_id`,`nonce`),
  ADD KEY `nonce_indx_1` (`nonce`) USING HASH;

--
-- Indexes for table `lti_result`
--
ALTER TABLE `lti_result`
  ADD PRIMARY KEY (`result_id`),
  ADD UNIQUE KEY `lti_result_const_1` (`link_id`,`user_id`),
  ADD KEY `lti_result_ibfk_2` (`user_id`),
  ADD KEY `lti_result_ibfk_3` (`service_id`);

--
-- Indexes for table `lti_service`
--
ALTER TABLE `lti_service`
  ADD PRIMARY KEY (`service_id`),
  ADD UNIQUE KEY `lti_service_const_1` (`key_id`,`service_sha256`);

--
-- Indexes for table `lti_user`
--
ALTER TABLE `lti_user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `lti_user_const_1` (`key_id`,`user_sha256`),
  ADD UNIQUE KEY `lti_user_const_2` (`key_id`,`subject_sha256`);

--
-- Indexes for table `mail_bulk`
--
ALTER TABLE `mail_bulk`
  ADD PRIMARY KEY (`bulk_id`),
  ADD KEY `mail_bulk_ibfk_1` (`context_id`),
  ADD KEY `mail_bulk_ibfk_2` (`user_id`);

--
-- Indexes for table `mail_sent`
--
ALTER TABLE `mail_sent`
  ADD PRIMARY KEY (`sent_id`),
  ADD KEY `mail_sent_ibfk_1` (`context_id`),
  ADD KEY `mail_sent_ibfk_2` (`link_id`),
  ADD KEY `mail_sent_ibfk_3` (`user_to`),
  ADD KEY `mail_sent_ibfk_4` (`user_from`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`profile_id`),
  ADD UNIQUE KEY `profile_sha256` (`profile_sha256`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sess_id`);

--
-- Indexes for table `tsugi_string`
--
ALTER TABLE `tsugi_string`
  ADD PRIMARY KEY (`string_id`),
  ADD UNIQUE KEY `lti_string_const_1` (`domain`,`string_sha256`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blob_blob`
--
ALTER TABLE `blob_blob`
  MODIFY `blob_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blob_file`
--
ALTER TABLE `blob_file`
  MODIFY `file_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cal_context`
--
ALTER TABLE `cal_context`
  MODIFY `context_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cal_event`
--
ALTER TABLE `cal_event`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cal_key`
--
ALTER TABLE `cal_key`
  MODIFY `key_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `key_request`
--
ALTER TABLE `key_request`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lms_plugins`
--
ALTER TABLE `lms_plugins`
  MODIFY `plugin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `lms_tools`
--
ALTER TABLE `lms_tools`
  MODIFY `tool_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_context`
--
ALTER TABLE `lti_context`
  MODIFY `context_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_domain`
--
ALTER TABLE `lti_domain`
  MODIFY `domain_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_external`
--
ALTER TABLE `lti_external`
  MODIFY `external_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_issuer`
--
ALTER TABLE `lti_issuer`
  MODIFY `issuer_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_key`
--
ALTER TABLE `lti_key`
  MODIFY `key_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lti_link`
--
ALTER TABLE `lti_link`
  MODIFY `link_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_membership`
--
ALTER TABLE `lti_membership`
  MODIFY `membership_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_result`
--
ALTER TABLE `lti_result`
  MODIFY `result_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_service`
--
ALTER TABLE `lti_service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lti_user`
--
ALTER TABLE `lti_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mail_bulk`
--
ALTER TABLE `mail_bulk`
  MODIFY `bulk_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mail_sent`
--
ALTER TABLE `mail_sent`
  MODIFY `sent_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tsugi_string`
--
ALTER TABLE `tsugi_string`
  MODIFY `string_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blob_file`
--
ALTER TABLE `blob_file`
  ADD CONSTRAINT `blob_ibfk_1` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `curriki`
--
ALTER TABLE `curriki`
  ADD CONSTRAINT `curriki_ibfk_1` FOREIGN KEY (`link_id`) REFERENCES `lti_link` (`link_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `curriki_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `key_request`
--
ALTER TABLE `key_request`
  ADD CONSTRAINT `key_request_fk_1` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lms_tools_status`
--
ALTER TABLE `lms_tools_status`
  ADD CONSTRAINT `lms_tools_status_ibfk_1` FOREIGN KEY (`tool_id`) REFERENCES `lms_tools` (`tool_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_context`
--
ALTER TABLE `lti_context`
  ADD CONSTRAINT `lti_context_ibfk_1` FOREIGN KEY (`key_id`) REFERENCES `lti_key` (`key_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_context_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_domain`
--
ALTER TABLE `lti_domain`
  ADD CONSTRAINT `lti_domain_ibfk_1` FOREIGN KEY (`key_id`) REFERENCES `lti_key` (`key_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_domain_ibfk_2` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_key`
--
ALTER TABLE `lti_key`
  ADD CONSTRAINT `lti_key_ibfk_1` FOREIGN KEY (`issuer_id`) REFERENCES `lti_issuer` (`issuer_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `lti_link`
--
ALTER TABLE `lti_link`
  ADD CONSTRAINT `lti_link_ibfk_1` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_link_activity`
--
ALTER TABLE `lti_link_activity`
  ADD CONSTRAINT `lti_link_activity_ibfk_1` FOREIGN KEY (`link_id`) REFERENCES `lti_link` (`link_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_link_user_activity`
--
ALTER TABLE `lti_link_user_activity`
  ADD CONSTRAINT `lti_link_user_activity_ibfk_1` FOREIGN KEY (`link_id`) REFERENCES `lti_link` (`link_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_link_user_activity_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_membership`
--
ALTER TABLE `lti_membership`
  ADD CONSTRAINT `lti_membership_ibfk_1` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_membership_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_result`
--
ALTER TABLE `lti_result`
  ADD CONSTRAINT `lti_result_ibfk_1` FOREIGN KEY (`link_id`) REFERENCES `lti_link` (`link_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_result_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lti_result_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `lti_service` (`service_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_service`
--
ALTER TABLE `lti_service`
  ADD CONSTRAINT `lti_service_ibfk_1` FOREIGN KEY (`key_id`) REFERENCES `lti_key` (`key_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lti_user`
--
ALTER TABLE `lti_user`
  ADD CONSTRAINT `lti_user_ibfk_1` FOREIGN KEY (`key_id`) REFERENCES `lti_key` (`key_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mail_bulk`
--
ALTER TABLE `mail_bulk`
  ADD CONSTRAINT `mail_bulk_ibfk_1` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mail_bulk_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mail_sent`
--
ALTER TABLE `mail_sent`
  ADD CONSTRAINT `mail_sent_ibfk_1` FOREIGN KEY (`context_id`) REFERENCES `lti_context` (`context_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mail_sent_ibfk_2` FOREIGN KEY (`link_id`) REFERENCES `lti_link` (`link_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mail_sent_ibfk_3` FOREIGN KEY (`user_to`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mail_sent_ibfk_4` FOREIGN KEY (`user_from`) REFERENCES `lti_user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

DELIMITER $$
--
-- Events
--
CREATE DEFINER=`root`@`%` EVENT `lti_nonce_auto` ON SCHEDULE EVERY 1 HOUR STARTS '2021-04-13 14:58:28' ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM lti_nonce WHERE created_at < (UNIX_TIMESTAMP() - 3600)$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
