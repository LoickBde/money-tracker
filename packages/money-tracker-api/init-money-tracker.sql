--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0 (Debian 15.0-1.pgdg110+1)
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-01 21:42:49

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

--
-- TOC entry 217 (class 1259 OID 16398)
-- Name: expenses; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.expenses (
    id integer NOT NULL,
    value numeric NOT NULL,
    id_user integer NOT NULL,
    object character varying(25) NOT NULL
);


ALTER TABLE public.expenses OWNER TO admin;

--
-- TOC entry 216 (class 1259 OID 16397)
-- Name: expenses_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.expenses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.expenses_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16390)
-- Name: users; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(25) NOT NULL,
    email character varying(40) NOT NULL
);


ALTER TABLE public.users OWNER TO admin;

--
-- TOC entry 214 (class 1259 OID 16389)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3331 (class 0 OID 16398)
-- Dependencies: 217
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.expenses (id, value, id_user, object) FROM stdin;
0	20	3	food
1	15	3	food
2	10	3	sport
3	5	3	subscription
4	10	2	food
5	20	2	sport
\.


--
-- TOC entry 3329 (class 0 OID 16390)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.users (id, name, email) FROM stdin;
2	admin	admin@example.com
3	loick	loick@example.com
\.


--
-- TOC entry 3337 (class 0 OID 0)
-- Dependencies: 216
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.expenses_id_seq', 5, true);


--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- TOC entry 3184 (class 2606 OID 16409)
-- Name: expenses expenses_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT expenses_pkey PRIMARY KEY (id);


--
-- TOC entry 3182 (class 2606 OID 16396)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3185 (class 2606 OID 16403)
-- Name: expenses id_user; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.expenses
    ADD CONSTRAINT id_user FOREIGN KEY (id_user) REFERENCES public.users(id);


-- Completed on 2022-11-01 21:42:49

--
-- PostgreSQL database dump complete
--

