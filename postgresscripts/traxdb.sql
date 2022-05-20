--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE DATABASE "substitute-postgres-database";

\c substitute-postgres-database;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: trax_account_agreement_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_agreement_user (
    agreement_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp(0) without time zone NOT NULL
);


--
-- Name: trax_account_agreements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_agreements (
    id integer NOT NULL,
    published boolean DEFAULT false NOT NULL,
    content text NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_account_agreements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_agreements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_agreements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_agreements_id_seq OWNED BY public.trax_account_agreements.id;


--
-- Name: trax_account_basic_clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_basic_clients (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_account_basic_clients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_basic_clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_basic_clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_basic_clients_id_seq OWNED BY public.trax_account_basic_clients.id;


--
-- Name: trax_account_entities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_entities (
    id integer NOT NULL,
    uuid uuid NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    type_code character varying(255),
    parent_id integer,
    index_id integer
);


--
-- Name: trax_account_entities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_entities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_entities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_entities_id_seq OWNED BY public.trax_account_entities.id;


--
-- Name: trax_account_group_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_group_user (
    group_id integer NOT NULL,
    user_id integer NOT NULL
);


--
-- Name: trax_account_groups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_groups (
    id integer NOT NULL,
    uuid uuid NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    name character varying(255) NOT NULL
);


--
-- Name: trax_account_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_groups_id_seq OWNED BY public.trax_account_groups.id;


--
-- Name: trax_account_password_resets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_password_resets (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);


--
-- Name: trax_account_roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_roles (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    name character varying(255) NOT NULL
);


--
-- Name: trax_account_roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_roles_id_seq OWNED BY public.trax_account_roles.id;


--
-- Name: trax_account_sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_sessions (
    id character varying(255) NOT NULL,
    user_id integer,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);


--
-- Name: trax_account_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_account_users (
    id integer NOT NULL,
    uuid uuid NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    admin boolean DEFAULT false NOT NULL,
    active boolean DEFAULT true NOT NULL,
    data json NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    source_code character varying(255) DEFAULT 'internal'::character varying NOT NULL,
    entity_type_code character varying(255),
    role_id integer,
    organization_id integer,
    entity_id integer,
    firstname character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL
);


--
-- Name: trax_account_users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_account_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_account_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_account_users_id_seq OWNED BY public.trax_account_users.id;


--
-- Name: trax_datastore_data; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_datastore_data (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_datastore_data_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_datastore_data_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_datastore_data_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_datastore_data_id_seq OWNED BY public.trax_datastore_data.id;


--
-- Name: trax_notification; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_notification (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_notification_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_notification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_notification_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_notification_id_seq OWNED BY public.trax_notification.id;


--
-- Name: trax_notification_user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_notification_user (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    notification_id integer NOT NULL,
    user_id integer NOT NULL
);


--
-- Name: trax_notification_user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_notification_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_notification_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_notification_user_id_seq OWNED BY public.trax_notification_user.id;


--
-- Name: trax_xapiserver_activities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_activities (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_activities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_activities_id_seq OWNED BY public.trax_xapiserver_activities.id;


--
-- Name: trax_xapiserver_activity_profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_activity_profiles (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_activity_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_activity_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_activity_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_activity_profiles_id_seq OWNED BY public.trax_xapiserver_activity_profiles.id;


--
-- Name: trax_xapiserver_agent_profiles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_agent_profiles (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_agent_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_agent_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_agent_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_agent_profiles_id_seq OWNED BY public.trax_xapiserver_agent_profiles.id;


--
-- Name: trax_xapiserver_agents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_agents (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_agents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_agents_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_agents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_agents_id_seq OWNED BY public.trax_xapiserver_agents.id;


--
-- Name: trax_xapiserver_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_attachments (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_attachments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_attachments_id_seq OWNED BY public.trax_xapiserver_attachments.id;


--
-- Name: trax_xapiserver_statements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_statements (
    id integer NOT NULL,
    data json NOT NULL,
    voided boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_statements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_statements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_statements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_statements_id_seq OWNED BY public.trax_xapiserver_statements.id;


--
-- Name: trax_xapiserver_states; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trax_xapiserver_states (
    id integer NOT NULL,
    data json NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


--
-- Name: trax_xapiserver_states_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trax_xapiserver_states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trax_xapiserver_states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trax_xapiserver_states_id_seq OWNED BY public.trax_xapiserver_states.id;


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: trax_account_agreements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_agreements ALTER COLUMN id SET DEFAULT nextval('public.trax_account_agreements_id_seq'::regclass);


--
-- Name: trax_account_basic_clients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_basic_clients ALTER COLUMN id SET DEFAULT nextval('public.trax_account_basic_clients_id_seq'::regclass);


--
-- Name: trax_account_entities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_entities ALTER COLUMN id SET DEFAULT nextval('public.trax_account_entities_id_seq'::regclass);


--
-- Name: trax_account_groups id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_groups ALTER COLUMN id SET DEFAULT nextval('public.trax_account_groups_id_seq'::regclass);


--
-- Name: trax_account_roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_roles ALTER COLUMN id SET DEFAULT nextval('public.trax_account_roles_id_seq'::regclass);


--
-- Name: trax_account_users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users ALTER COLUMN id SET DEFAULT nextval('public.trax_account_users_id_seq'::regclass);


--
-- Name: trax_datastore_data id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_datastore_data ALTER COLUMN id SET DEFAULT nextval('public.trax_datastore_data_id_seq'::regclass);


--
-- Name: trax_notification id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification ALTER COLUMN id SET DEFAULT nextval('public.trax_notification_id_seq'::regclass);


--
-- Name: trax_notification_user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification_user ALTER COLUMN id SET DEFAULT nextval('public.trax_notification_user_id_seq'::regclass);


--
-- Name: trax_xapiserver_activities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_activities ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_activities_id_seq'::regclass);


--
-- Name: trax_xapiserver_activity_profiles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_activity_profiles ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_activity_profiles_id_seq'::regclass);


--
-- Name: trax_xapiserver_agent_profiles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_agent_profiles ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_agent_profiles_id_seq'::regclass);


--
-- Name: trax_xapiserver_agents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_agents ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_agents_id_seq'::regclass);


--
-- Name: trax_xapiserver_attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_attachments ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_attachments_id_seq'::regclass);


--
-- Name: trax_xapiserver_statements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_statements ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_statements_id_seq'::regclass);


--
-- Name: trax_xapiserver_states id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_states ALTER COLUMN id SET DEFAULT nextval('public.trax_xapiserver_states_id_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	2018_01_01_000001_trax_datastore_create_data_table	1
2	2018_01_01_001001_trax_account_create_entities_table	1
3	2018_01_01_001002_trax_account_create_roles_table	1
4	2018_01_01_001003_trax_account_create_users_table	1
5	2018_01_01_001004_trax_account_create_password_resets_table	1
6	2018_01_01_001005_trax_account_create_sessions_table	1
7	2018_01_01_001006_trax_account_create_groups_table	1
8	2018_01_01_001007_trax_account_create_group_user_table	1
9	2018_01_01_001008_trax_account_create_basic_clients_table	1
10	2018_01_01_001009_trax_account_create_agreements_table	1
11	2018_01_01_001010_trax_account_create_agreement_user_table	1
12	2018_01_01_002001_trax_notification_create_notification_table	1
13	2018_01_01_002001_trax_xapiserver_create_statements_table	1
14	2018_01_01_002002_trax_notification_create_notification_user_table	1
15	2018_01_01_002002_trax_xapiserver_create_attachments_table	1
16	2018_01_01_002003_trax_xapiserver_create_states_table	1
17	2018_01_01_002004_trax_xapiserver_create_activity_profiles_table	1
18	2018_01_01_002005_trax_xapiserver_create_agent_profiles_table	1
19	2018_01_01_002006_trax_xapiserver_create_activities_table	1
20	2018_01_01_002007_trax_xapiserver_create_agents_table	1
\.


--
-- Data for Name: trax_account_agreement_user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_agreement_user (agreement_id, user_id, created_at) FROM stdin;
\.


--
-- Data for Name: trax_account_agreements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_agreements (id, published, content, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_account_basic_clients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_basic_clients (id, username, password, data, created_at, updated_at) FROM stdin;
1	testsuite	password	[]	2021-05-21 12:43:33	2021-05-21 12:43:33
\.


--
-- Data for Name: trax_account_entities; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_entities (id, uuid, data, created_at, updated_at, type_code, parent_id, index_id) FROM stdin;
\.


--
-- Data for Name: trax_account_group_user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_group_user (group_id, user_id) FROM stdin;
\.


--
-- Data for Name: trax_account_groups; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_groups (id, uuid, data, created_at, updated_at, name) FROM stdin;
\.


--
-- Data for Name: trax_account_password_resets; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_password_resets (email, token, created_at) FROM stdin;
\.


--
-- Data for Name: trax_account_roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_roles (id, data, created_at, updated_at, name) FROM stdin;
\.


--
-- Data for Name: trax_account_sessions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
eXm79V0DnXuXB7hu8qSk3aXmjdwGJKk9ydbqwMDO	1	10.0.1.4	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36	YTo1OntzOjY6Il90b2tlbiI7czo0MDoiMFlTSVNxQzNDVHlaNFFFUE4xa3NvTG9FbjJ4aFpjWTVJb3FQM1NYRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzA6Imh0dHA6Ly9vcmFjbGUtdHJheC5jdXJyaWtpc3R1ZGlvLm9yZy90cmF4L3VpL2FjY291bnQvYmFzaWMtY2xpZW50L2NydWQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9	1621601589
5eIqxBEm8tYdMjNJuRF9B4oP055MhPpeEmmcKA1W	1	10.0.1.4	Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36	YTo1OntzOjY6Il90b2tlbiI7czo0MDoiU3A1b2J6TUVwMHdCZWlqaXo4NnFyOHFDcTFoeUJraGhtNVVyRnRUVSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NzA6Imh0dHA6Ly9vcmFjbGUtdHJheC5jdXJyaWtpc3R1ZGlvLm9yZy90cmF4L3VpL2FjY291bnQvYmFzaWMtY2xpZW50L2NydWQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjM6InVybCI7YTowOnt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9	1621601420
\.


--
-- Data for Name: trax_account_users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_account_users (id, uuid, username, email, email_verified_at, password, admin, active, data, remember_token, created_at, updated_at, source_code, entity_type_code, role_id, organization_id, entity_id, firstname, lastname) FROM stdin;
1	5fc64875-5d43-3c29-9e89-65ada3a79d34	admin@trax.test	admin@trax.test	\N	$2y$10$HFnWxZl7YVM5yc5Ruh.Ht.JlLNTBx9IjVxwg2iy1oygVJuAg8u1O6	t	t	{"firstname":"Super","lastname":"Admin","lang":"en","rights_level_code":"global","status":{"loggedin":"2021-05-21 12:53:05"}}	\N	2021-05-21 12:42:44	2021-05-21 12:53:05	internal	\N	\N	\N	\N	Super	Admin
\.


--
-- Data for Name: trax_datastore_data; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_datastore_data (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_notification; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_notification (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_notification_user; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_notification_user (id, data, created_at, updated_at, notification_id, user_id) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_activities; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_activities (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_activity_profiles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_activity_profiles (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_agent_profiles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_agent_profiles (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_agents; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_agents (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_attachments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_attachments (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_statements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_statements (id, data, voided, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: trax_xapiserver_states; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.trax_xapiserver_states (id, data, created_at, updated_at) FROM stdin;
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 20, true);


--
-- Name: trax_account_agreements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_agreements_id_seq', 1, false);


--
-- Name: trax_account_basic_clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_basic_clients_id_seq', 1, true);


--
-- Name: trax_account_entities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_entities_id_seq', 1, false);


--
-- Name: trax_account_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_groups_id_seq', 1, false);


--
-- Name: trax_account_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_roles_id_seq', 1, false);


--
-- Name: trax_account_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_account_users_id_seq', 1, true);


--
-- Name: trax_datastore_data_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_datastore_data_id_seq', 1, false);


--
-- Name: trax_notification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_notification_id_seq', 1, false);


--
-- Name: trax_notification_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_notification_user_id_seq', 1, false);


--
-- Name: trax_xapiserver_activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_activities_id_seq', 1, false);


--
-- Name: trax_xapiserver_activity_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_activity_profiles_id_seq', 1, false);


--
-- Name: trax_xapiserver_agent_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_agent_profiles_id_seq', 1, false);


--
-- Name: trax_xapiserver_agents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_agents_id_seq', 1, false);


--
-- Name: trax_xapiserver_attachments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_attachments_id_seq', 1, false);


--
-- Name: trax_xapiserver_statements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_statements_id_seq', 1, false);


--
-- Name: trax_xapiserver_states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trax_xapiserver_states_id_seq', 1, false);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: trax_account_agreement_user trax_account_agreement_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_agreement_user
    ADD CONSTRAINT trax_account_agreement_user_pkey PRIMARY KEY (agreement_id, user_id);


--
-- Name: trax_account_agreements trax_account_agreements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_agreements
    ADD CONSTRAINT trax_account_agreements_pkey PRIMARY KEY (id);


--
-- Name: trax_account_basic_clients trax_account_basic_clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_basic_clients
    ADD CONSTRAINT trax_account_basic_clients_pkey PRIMARY KEY (id);


--
-- Name: trax_account_basic_clients trax_account_basic_clients_username_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_basic_clients
    ADD CONSTRAINT trax_account_basic_clients_username_unique UNIQUE (username);


--
-- Name: trax_account_entities trax_account_entities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_entities
    ADD CONSTRAINT trax_account_entities_pkey PRIMARY KEY (id);


--
-- Name: trax_account_entities trax_account_entities_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_entities
    ADD CONSTRAINT trax_account_entities_uuid_unique UNIQUE (uuid);


--
-- Name: trax_account_group_user trax_account_group_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_group_user
    ADD CONSTRAINT trax_account_group_user_pkey PRIMARY KEY (group_id, user_id);


--
-- Name: trax_account_groups trax_account_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_groups
    ADD CONSTRAINT trax_account_groups_pkey PRIMARY KEY (id);


--
-- Name: trax_account_groups trax_account_groups_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_groups
    ADD CONSTRAINT trax_account_groups_uuid_unique UNIQUE (uuid);


--
-- Name: trax_account_roles trax_account_roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_roles
    ADD CONSTRAINT trax_account_roles_pkey PRIMARY KEY (id);


--
-- Name: trax_account_sessions trax_account_sessions_id_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_sessions
    ADD CONSTRAINT trax_account_sessions_id_unique UNIQUE (id);


--
-- Name: trax_account_users trax_account_users_email_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_email_unique UNIQUE (email);


--
-- Name: trax_account_users trax_account_users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_pkey PRIMARY KEY (id);


--
-- Name: trax_account_users trax_account_users_username_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_username_unique UNIQUE (username);


--
-- Name: trax_account_users trax_account_users_uuid_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_uuid_unique UNIQUE (uuid);


--
-- Name: trax_datastore_data trax_datastore_data_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_datastore_data
    ADD CONSTRAINT trax_datastore_data_pkey PRIMARY KEY (id);


--
-- Name: trax_notification trax_notification_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification
    ADD CONSTRAINT trax_notification_pkey PRIMARY KEY (id);


--
-- Name: trax_notification_user trax_notification_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification_user
    ADD CONSTRAINT trax_notification_user_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_activities trax_xapiserver_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_activities
    ADD CONSTRAINT trax_xapiserver_activities_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_activity_profiles trax_xapiserver_activity_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_activity_profiles
    ADD CONSTRAINT trax_xapiserver_activity_profiles_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_agent_profiles trax_xapiserver_agent_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_agent_profiles
    ADD CONSTRAINT trax_xapiserver_agent_profiles_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_agents trax_xapiserver_agents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_agents
    ADD CONSTRAINT trax_xapiserver_agents_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_attachments trax_xapiserver_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_attachments
    ADD CONSTRAINT trax_xapiserver_attachments_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_statements trax_xapiserver_statements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_statements
    ADD CONSTRAINT trax_xapiserver_statements_pkey PRIMARY KEY (id);


--
-- Name: trax_xapiserver_states trax_xapiserver_states_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_xapiserver_states
    ADD CONSTRAINT trax_xapiserver_states_pkey PRIMARY KEY (id);


--
-- Name: trax_account_entities_type_code_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trax_account_entities_type_code_index ON public.trax_account_entities USING btree (type_code);


--
-- Name: trax_account_password_resets_email_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trax_account_password_resets_email_index ON public.trax_account_password_resets USING btree (email);


--
-- Name: trax_account_users_entity_type_code_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trax_account_users_entity_type_code_index ON public.trax_account_users USING btree (entity_type_code);


--
-- Name: trax_account_users_source_code_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX trax_account_users_source_code_index ON public.trax_account_users USING btree (source_code);


--
-- Name: trax_account_agreement_user trax_account_agreement_user_agreement_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_agreement_user
    ADD CONSTRAINT trax_account_agreement_user_agreement_id_foreign FOREIGN KEY (agreement_id) REFERENCES public.trax_account_agreements(id) ON DELETE CASCADE;


--
-- Name: trax_account_agreement_user trax_account_agreement_user_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_agreement_user
    ADD CONSTRAINT trax_account_agreement_user_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.trax_account_users(id) ON DELETE CASCADE;


--
-- Name: trax_account_entities trax_account_entities_parent_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_entities
    ADD CONSTRAINT trax_account_entities_parent_id_foreign FOREIGN KEY (parent_id) REFERENCES public.trax_account_entities(id) ON DELETE CASCADE;


--
-- Name: trax_account_group_user trax_account_group_user_group_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_group_user
    ADD CONSTRAINT trax_account_group_user_group_id_foreign FOREIGN KEY (group_id) REFERENCES public.trax_account_groups(id) ON DELETE CASCADE;


--
-- Name: trax_account_group_user trax_account_group_user_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_group_user
    ADD CONSTRAINT trax_account_group_user_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.trax_account_users(id) ON DELETE RESTRICT;


--
-- Name: trax_account_users trax_account_users_entity_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_entity_id_foreign FOREIGN KEY (entity_id) REFERENCES public.trax_account_entities(id) ON DELETE RESTRICT;


--
-- Name: trax_account_users trax_account_users_organization_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_organization_id_foreign FOREIGN KEY (organization_id) REFERENCES public.trax_account_entities(id) ON DELETE RESTRICT;


--
-- Name: trax_account_users trax_account_users_role_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_account_users
    ADD CONSTRAINT trax_account_users_role_id_foreign FOREIGN KEY (role_id) REFERENCES public.trax_account_roles(id) ON DELETE RESTRICT;


--
-- Name: trax_notification_user trax_notification_user_notification_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification_user
    ADD CONSTRAINT trax_notification_user_notification_id_foreign FOREIGN KEY (notification_id) REFERENCES public.trax_notification(id) ON DELETE CASCADE;


--
-- Name: trax_notification_user trax_notification_user_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trax_notification_user
    ADD CONSTRAINT trax_notification_user_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.trax_account_users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--