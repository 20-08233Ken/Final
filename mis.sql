PGDMP      2                |            mis    16.2    16.0 n    J           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            K           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            L           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            M           1262    16400    mis    DATABASE     ~   CREATE DATABASE mis WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE mis;
                postgres    false            �            1259    16549    campus    TABLE     �   CREATE TABLE public.campus (
    id bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    campus character varying(255) NOT NULL,
    deleted_at timestamp without time zone
);
    DROP TABLE public.campus;
       public         heap    postgres    false            �            1259    16548    campus_id_seq    SEQUENCE     v   CREATE SEQUENCE public.campus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.campus_id_seq;
       public          postgres    false    221            N           0    0    campus_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.campus_id_seq OWNED BY public.campus.id;
          public          postgres    false    220            �            1259    16542    colleges    TABLE     8  CREATE TABLE public.colleges (
    id bigint NOT NULL,
    collegecode character varying(255) NOT NULL,
    campus_id integer NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    deleted_at timestamp without time zone,
    college character varying(255)
);
    DROP TABLE public.colleges;
       public         heap    postgres    false            �            1259    16541    colleges_id_seq    SEQUENCE     x   CREATE SEQUENCE public.colleges_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.colleges_id_seq;
       public          postgres    false    219            O           0    0    colleges_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.colleges_id_seq OWNED BY public.colleges.id;
          public          postgres    false    218            �            1259    16662    deleted_users    TABLE     ^  CREATE TABLE public.deleted_users (
    id bigint NOT NULL,
    fullname character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    office character varying(255) NOT NULL,
    level character varying(255),
    campus_id integer NOT NULL,
    college_id integer,
    access_token character varying(9999),
    last_login timestamp(0) without time zone,
    token_duration integer,
    active boolean NOT NULL,
    deleted_by integer,
    deleted_at timestamp(0) without time zone,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT deleted_user_level_check CHECK (((level)::text = ANY ((ARRAY['0'::character varying, '1'::character varying, '2'::character varying, '3'::character varying, '4'::character varying, '5'::character varying])::text[]))),
    CONSTRAINT deleted_user_office_check CHECK (((office)::text = ANY ((ARRAY['0'::character varying, '1'::character varying, '2'::character varying, '3'::character varying, '4'::character varying, '5'::character varying, '6'::character varying, '7'::character varying, '8'::character varying, '9'::character varying, '10'::character varying])::text[])))
);
 !   DROP TABLE public.deleted_users;
       public         heap    postgres    false            �            1259    16661    deleted_user_id_seq    SEQUENCE     |   CREATE SEQUENCE public.deleted_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.deleted_user_id_seq;
       public          postgres    false    223            P           0    0    deleted_user_id_seq    SEQUENCE OWNED BY     L   ALTER SEQUENCE public.deleted_user_id_seq OWNED BY public.deleted_users.id;
          public          postgres    false    222            �            1259    16924    failed_jobs    TABLE     &  CREATE TABLE public.failed_jobs (
    id bigint NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.failed_jobs;
       public         heap    postgres    false            �            1259    16923    failed_jobs_id_seq    SEQUENCE     {   CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.failed_jobs_id_seq;
       public          postgres    false    226            Q           0    0    failed_jobs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.failed_jobs_id_seq OWNED BY public.failed_jobs.id;
          public          postgres    false    225            �            1259    17267    hep_oct_ones_attachments    TABLE     C  CREATE TABLE public.hep_oct_ones_attachments (
    id bigint NOT NULL,
    hep_one_id integer NOT NULL,
    supported_file character varying(255) NOT NULL,
    deleted_by integer,
    deleted_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 ,   DROP TABLE public.hep_oct_ones_attachments;
       public         heap    postgres    false            �            1259    17266    hep_oct_one_attachments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hep_oct_one_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.hep_oct_one_attachments_id_seq;
       public          postgres    false    240            R           0    0    hep_oct_one_attachments_id_seq    SEQUENCE OWNED BY     b   ALTER SEQUENCE public.hep_oct_one_attachments_id_seq OWNED BY public.hep_oct_ones_attachments.id;
          public          postgres    false    239            �            1259    16960    hep_oct_ones    TABLE     �  CREATE TABLE public.hep_oct_ones (
    id bigint NOT NULL,
    campus_id integer NOT NULL,
    college_id integer NOT NULL,
    program_id integer NOT NULL,
    exam_date timestamp(0) without time zone NOT NULL,
    number_of_takers integer NOT NULL,
    number_of_passers integer NOT NULL,
    supported_file character varying(9999),
    user_id integer NOT NULL,
    status character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT hep_oct_ones_status_check CHECK (((status)::text = ANY ((ARRAY['1'::character varying, '2'::character varying, '3'::character varying, '4'::character varying, '5'::character varying, '6'::character varying])::text[])))
);
     DROP TABLE public.hep_oct_ones;
       public         heap    postgres    false            �            1259    16959    hep_oct_ones_id_seq    SEQUENCE     |   CREATE SEQUENCE public.hep_oct_ones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.hep_oct_ones_id_seq;
       public          postgres    false    230            S           0    0    hep_oct_ones_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.hep_oct_ones_id_seq OWNED BY public.hep_oct_ones.id;
          public          postgres    false    229            �            1259    17256    hep_oct_ones_transactions    TABLE     _  CREATE TABLE public.hep_oct_ones_transactions (
    id bigint NOT NULL,
    hep_one_id integer NOT NULL,
    approved_by integer NOT NULL,
    status character varying(255),
    current_status character varying(255) NOT NULL,
    remarks character varying(9999),
    deleted_by integer,
    deleted_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    CONSTRAINT hep_oct_ones_transactions_current_status_check CHECK (((current_status)::text = ANY ((ARRAY['1'::character varying, '2'::character varying, '3'::character varying, '4'::character varying, '5'::character varying, '6'::character varying])::text[]))),
    CONSTRAINT hep_oct_ones_transactions_status_check CHECK (((status)::text = ANY ((ARRAY['Approved'::character varying, 'Disapproved'::character varying])::text[])))
);
 -   DROP TABLE public.hep_oct_ones_transactions;
       public         heap    postgres    false            �            1259    17255     hep_oct_ones_transactions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hep_oct_ones_transactions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.hep_oct_ones_transactions_id_seq;
       public          postgres    false    238            T           0    0     hep_oct_ones_transactions_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.hep_oct_ones_transactions_id_seq OWNED BY public.hep_oct_ones_transactions.id;
          public          postgres    false    237            �            1259    17245    hep_quarters    TABLE       CREATE TABLE public.hep_quarters (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    date_from character varying,
    date_to character varying
);
     DROP TABLE public.hep_quarters;
       public         heap    postgres    false            �            1259    17244    hep_quarters_id_seq    SEQUENCE     |   CREATE SEQUENCE public.hep_quarters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.hep_quarters_id_seq;
       public          postgres    false    236            U           0    0    hep_quarters_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.hep_quarters_id_seq OWNED BY public.hep_quarters.id;
          public          postgres    false    235            �            1259    16402 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            �            1259    16401    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          postgres    false    216            V           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          postgres    false    215            �            1259    16510    password_reset_tokens    TABLE     �   CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 )   DROP TABLE public.password_reset_tokens;
       public         heap    postgres    false            �            1259    16917    password_resets    TABLE     �   CREATE TABLE public.password_resets (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 #   DROP TABLE public.password_resets;
       public         heap    postgres    false            �            1259    16936    personal_access_tokens    TABLE     �  CREATE TABLE public.personal_access_tokens (
    id bigint NOT NULL,
    tokenable_type character varying(255) NOT NULL,
    tokenable_id bigint NOT NULL,
    name character varying(255) NOT NULL,
    token character varying(64) NOT NULL,
    abilities text,
    last_used_at timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 *   DROP TABLE public.personal_access_tokens;
       public         heap    postgres    false            �            1259    16935    personal_access_tokens_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personal_access_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.personal_access_tokens_id_seq;
       public          postgres    false    228            W           0    0    personal_access_tokens_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.personal_access_tokens_id_seq OWNED BY public.personal_access_tokens.id;
          public          postgres    false    227            �            1259    17023    programs    TABLE     �   CREATE TABLE public.programs (
    id bigint NOT NULL,
    college_id integer NOT NULL,
    program character varying(9999) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.programs;
       public         heap    postgres    false            �            1259    17022    programs_id_seq    SEQUENCE     x   CREATE SEQUENCE public.programs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.programs_id_seq;
       public          postgres    false    234            X           0    0    programs_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.programs_id_seq OWNED BY public.programs.id;
          public          postgres    false    233            �            1259    17001 
   user_roles    TABLE     �   CREATE TABLE public.user_roles (
    id bigint NOT NULL,
    role character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    17000    user_roles_id_seq    SEQUENCE     z   CREATE SEQUENCE public.user_roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.user_roles_id_seq;
       public          postgres    false    232            Y           0    0    user_roles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;
          public          postgres    false    231            �            1259    17391    users    TABLE     �  CREATE TABLE public.users (
    id bigint NOT NULL,
    fullname character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    office integer NOT NULL,
    campus_id integer NOT NULL,
    college_id integer,
    access_token character varying(9999),
    last_login timestamp(0) without time zone,
    token_duration integer,
    active boolean NOT NULL,
    deleted_by integer,
    deleted_at timestamp(0) without time zone,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    17390    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    242            Z           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    241            `           2604    16552 	   campus id    DEFAULT     f   ALTER TABLE ONLY public.campus ALTER COLUMN id SET DEFAULT nextval('public.campus_id_seq'::regclass);
 8   ALTER TABLE public.campus ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221            _           2604    16545    colleges id    DEFAULT     j   ALTER TABLE ONLY public.colleges ALTER COLUMN id SET DEFAULT nextval('public.colleges_id_seq'::regclass);
 :   ALTER TABLE public.colleges ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            a           2604    16665    deleted_users id    DEFAULT     s   ALTER TABLE ONLY public.deleted_users ALTER COLUMN id SET DEFAULT nextval('public.deleted_user_id_seq'::regclass);
 ?   ALTER TABLE public.deleted_users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            b           2604    16927    failed_jobs id    DEFAULT     p   ALTER TABLE ONLY public.failed_jobs ALTER COLUMN id SET DEFAULT nextval('public.failed_jobs_id_seq'::regclass);
 =   ALTER TABLE public.failed_jobs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            e           2604    16963    hep_oct_ones id    DEFAULT     r   ALTER TABLE ONLY public.hep_oct_ones ALTER COLUMN id SET DEFAULT nextval('public.hep_oct_ones_id_seq'::regclass);
 >   ALTER TABLE public.hep_oct_ones ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            j           2604    17270    hep_oct_ones_attachments id    DEFAULT     �   ALTER TABLE ONLY public.hep_oct_ones_attachments ALTER COLUMN id SET DEFAULT nextval('public.hep_oct_one_attachments_id_seq'::regclass);
 J   ALTER TABLE public.hep_oct_ones_attachments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    239    240    240            i           2604    17259    hep_oct_ones_transactions id    DEFAULT     �   ALTER TABLE ONLY public.hep_oct_ones_transactions ALTER COLUMN id SET DEFAULT nextval('public.hep_oct_ones_transactions_id_seq'::regclass);
 K   ALTER TABLE public.hep_oct_ones_transactions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237    238            h           2604    17248    hep_quarters id    DEFAULT     r   ALTER TABLE ONLY public.hep_quarters ALTER COLUMN id SET DEFAULT nextval('public.hep_quarters_id_seq'::regclass);
 >   ALTER TABLE public.hep_quarters ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    236    236            ^           2604    16405    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            d           2604    16939    personal_access_tokens id    DEFAULT     �   ALTER TABLE ONLY public.personal_access_tokens ALTER COLUMN id SET DEFAULT nextval('public.personal_access_tokens_id_seq'::regclass);
 H   ALTER TABLE public.personal_access_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            g           2604    17026    programs id    DEFAULT     j   ALTER TABLE ONLY public.programs ALTER COLUMN id SET DEFAULT nextval('public.programs_id_seq'::regclass);
 :   ALTER TABLE public.programs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    233    234            f           2604    17004    user_roles id    DEFAULT     n   ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);
 <   ALTER TABLE public.user_roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231    232            k           2604    17394    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    241    242    242            2          0    16549    campus 
   TABLE DATA           P   COPY public.campus (id, created_at, updated_at, campus, deleted_at) FROM stdin;
    public          postgres    false    221   �       0          0    16542    colleges 
   TABLE DATA           k   COPY public.colleges (id, collegecode, campus_id, created_at, updated_at, deleted_at, college) FROM stdin;
    public          postgres    false    219   E�       4          0    16662    deleted_users 
   TABLE DATA           �   COPY public.deleted_users (id, fullname, username, email, email_verified_at, password, office, level, campus_id, college_id, access_token, last_login, token_duration, active, deleted_by, deleted_at, remember_token, created_at, updated_at) FROM stdin;
    public          postgres    false    223   ΐ       7          0    16924    failed_jobs 
   TABLE DATA           a   COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
    public          postgres    false    226   �       ;          0    16960    hep_oct_ones 
   TABLE DATA           �   COPY public.hep_oct_ones (id, campus_id, college_id, program_id, exam_date, number_of_takers, number_of_passers, supported_file, user_id, status, created_at, updated_at) FROM stdin;
    public          postgres    false    230   �       E          0    17267    hep_oct_ones_attachments 
   TABLE DATA           �   COPY public.hep_oct_ones_attachments (id, hep_one_id, supported_file, deleted_by, deleted_at, created_at, updated_at) FROM stdin;
    public          postgres    false    240   %�       C          0    17256    hep_oct_ones_transactions 
   TABLE DATA           �   COPY public.hep_oct_ones_transactions (id, hep_one_id, approved_by, status, current_status, remarks, deleted_by, deleted_at, created_at, updated_at) FROM stdin;
    public          postgres    false    238   B�       A          0    17245    hep_quarters 
   TABLE DATA           \   COPY public.hep_quarters (id, name, created_at, updated_at, date_from, date_to) FROM stdin;
    public          postgres    false    236   _�       -          0    16402 
   migrations 
   TABLE DATA           :   COPY public.migrations (id, migration, batch) FROM stdin;
    public          postgres    false    216   ��       .          0    16510    password_reset_tokens 
   TABLE DATA           I   COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
    public          postgres    false    217   �       5          0    16917    password_resets 
   TABLE DATA           C   COPY public.password_resets (email, token, created_at) FROM stdin;
    public          postgres    false    224   +�       9          0    16936    personal_access_tokens 
   TABLE DATA           �   COPY public.personal_access_tokens (id, tokenable_type, tokenable_id, name, token, abilities, last_used_at, created_at, updated_at) FROM stdin;
    public          postgres    false    228   H�       ?          0    17023    programs 
   TABLE DATA           S   COPY public.programs (id, college_id, program, created_at, updated_at) FROM stdin;
    public          postgres    false    234   e�       =          0    17001 
   user_roles 
   TABLE DATA           F   COPY public.user_roles (id, role, created_at, updated_at) FROM stdin;
    public          postgres    false    232   �       G          0    17391    users 
   TABLE DATA           �   COPY public.users (id, fullname, username, email, email_verified_at, password, office, campus_id, college_id, access_token, last_login, token_duration, active, deleted_by, deleted_at, remember_token, created_at, updated_at) FROM stdin;
    public          postgres    false    242   ��       [           0    0    campus_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.campus_id_seq', 1, false);
          public          postgres    false    220            \           0    0    colleges_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.colleges_id_seq', 1, false);
          public          postgres    false    218            ]           0    0    deleted_user_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.deleted_user_id_seq', 1, false);
          public          postgres    false    222            ^           0    0    failed_jobs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);
          public          postgres    false    225            _           0    0    hep_oct_one_attachments_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.hep_oct_one_attachments_id_seq', 1, false);
          public          postgres    false    239            `           0    0    hep_oct_ones_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.hep_oct_ones_id_seq', 1, false);
          public          postgres    false    229            a           0    0     hep_oct_ones_transactions_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.hep_oct_ones_transactions_id_seq', 1, false);
          public          postgres    false    237            b           0    0    hep_quarters_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.hep_quarters_id_seq', 1, false);
          public          postgres    false    235            c           0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 61, true);
          public          postgres    false    215            d           0    0    personal_access_tokens_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.personal_access_tokens_id_seq', 1, false);
          public          postgres    false    227            e           0    0    programs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.programs_id_seq', 1, false);
          public          postgres    false    233            f           0    0    user_roles_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.user_roles_id_seq', 1, false);
          public          postgres    false    231            g           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    241            x           2606    16554    campus campus_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.campus
    ADD CONSTRAINT campus_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.campus DROP CONSTRAINT campus_pkey;
       public            postgres    false    221            v           2606    16547    colleges colleges_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.colleges
    ADD CONSTRAINT colleges_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.colleges DROP CONSTRAINT colleges_pkey;
       public            postgres    false    219            z           2606    16675 '   deleted_users deleted_user_email_unique 
   CONSTRAINT     c   ALTER TABLE ONLY public.deleted_users
    ADD CONSTRAINT deleted_user_email_unique UNIQUE (email);
 Q   ALTER TABLE ONLY public.deleted_users DROP CONSTRAINT deleted_user_email_unique;
       public            postgres    false    223            |           2606    16671    deleted_users deleted_user_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.deleted_users
    ADD CONSTRAINT deleted_user_pkey PRIMARY KEY (id);
 I   ALTER TABLE ONLY public.deleted_users DROP CONSTRAINT deleted_user_pkey;
       public            postgres    false    223            ~           2606    16673 *   deleted_users deleted_user_username_unique 
   CONSTRAINT     i   ALTER TABLE ONLY public.deleted_users
    ADD CONSTRAINT deleted_user_username_unique UNIQUE (username);
 T   ALTER TABLE ONLY public.deleted_users DROP CONSTRAINT deleted_user_username_unique;
       public            postgres    false    223            �           2606    16932    failed_jobs failed_jobs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_pkey;
       public            postgres    false    226            �           2606    16934 #   failed_jobs failed_jobs_uuid_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE (uuid);
 M   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_uuid_unique;
       public            postgres    false    226            �           2606    17272 5   hep_oct_ones_attachments hep_oct_one_attachments_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.hep_oct_ones_attachments
    ADD CONSTRAINT hep_oct_one_attachments_pkey PRIMARY KEY (id);
 _   ALTER TABLE ONLY public.hep_oct_ones_attachments DROP CONSTRAINT hep_oct_one_attachments_pkey;
       public            postgres    false    240            �           2606    16968    hep_oct_ones hep_oct_ones_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.hep_oct_ones
    ADD CONSTRAINT hep_oct_ones_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.hep_oct_ones DROP CONSTRAINT hep_oct_ones_pkey;
       public            postgres    false    230            �           2606    17265 8   hep_oct_ones_transactions hep_oct_ones_transactions_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.hep_oct_ones_transactions
    ADD CONSTRAINT hep_oct_ones_transactions_pkey PRIMARY KEY (id);
 b   ALTER TABLE ONLY public.hep_oct_ones_transactions DROP CONSTRAINT hep_oct_ones_transactions_pkey;
       public            postgres    false    238            �           2606    17250    hep_quarters hep_quarters_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.hep_quarters
    ADD CONSTRAINT hep_quarters_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.hep_quarters DROP CONSTRAINT hep_quarters_pkey;
       public            postgres    false    236            r           2606    16407    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public            postgres    false    216            t           2606    16516 0   password_reset_tokens password_reset_tokens_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);
 Z   ALTER TABLE ONLY public.password_reset_tokens DROP CONSTRAINT password_reset_tokens_pkey;
       public            postgres    false    217            �           2606    16943 2   personal_access_tokens personal_access_tokens_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.personal_access_tokens DROP CONSTRAINT personal_access_tokens_pkey;
       public            postgres    false    228            �           2606    16946 :   personal_access_tokens personal_access_tokens_token_unique 
   CONSTRAINT     v   ALTER TABLE ONLY public.personal_access_tokens
    ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE (token);
 d   ALTER TABLE ONLY public.personal_access_tokens DROP CONSTRAINT personal_access_tokens_token_unique;
       public            postgres    false    228            �           2606    17030    programs programs_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.programs
    ADD CONSTRAINT programs_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.programs DROP CONSTRAINT programs_pkey;
       public            postgres    false    234            �           2606    17006    user_roles user_roles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    232            �           2606    17402    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public            postgres    false    242            �           2606    17398    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    242            �           2606    17400    users users_username_unique 
   CONSTRAINT     Z   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_unique UNIQUE (username);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_unique;
       public            postgres    false    242                       1259    16922    password_resets_email_index    INDEX     X   CREATE INDEX password_resets_email_index ON public.password_resets USING btree (email);
 /   DROP INDEX public.password_resets_email_index;
       public            postgres    false    224            �           1259    16944 8   personal_access_tokens_tokenable_type_tokenable_id_index    INDEX     �   CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON public.personal_access_tokens USING btree (tokenable_type, tokenable_id);
 L   DROP INDEX public.personal_access_tokens_tokenable_type_tokenable_id_index;
       public            postgres    false    228    228            �           2606    17036    colleges campus_id    FK CONSTRAINT     ~   ALTER TABLE ONLY public.colleges
    ADD CONSTRAINT campus_id FOREIGN KEY (campus_id) REFERENCES public.campus(id) NOT VALID;
 <   ALTER TABLE ONLY public.colleges DROP CONSTRAINT campus_id;
       public          postgres    false    219    221    4728            �           2606    17031    programs program_college_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.programs
    ADD CONSTRAINT program_college_id FOREIGN KEY (college_id) REFERENCES public.colleges(id) NOT VALID;
 E   ALTER TABLE ONLY public.programs DROP CONSTRAINT program_college_id;
       public          postgres    false    234    4726    219            2   T   x�3����Ĥ�|�����<��܂�b�0�T�1'1/=H �C�|2��M��~�ť�I�H2�P�Ĝ��"$�=... ('�      0   y  x��S��� <�W�f#���ce�؃z�G/�b%i�����/��T[�^6�y3�ͼ�nX��N��PSU��ȜQ*���Z�hӵJ˶] &�6�-�@�����*�y����*�+eoh�5/e-���u:��4�g:
%��-� ݧ������Y�&�\\d�X�	?L )��B	'� e9 �EL��D6J��]\��Ly�k@��'���O@3zPe�l�ڍ5�FM}���!��{��K�"���b���4O��;��<@��km��NG�qܫa�T���y�t�x��_�����]��r������d�g9$�!��wT����~S��<~b��?1���L�#�Oθ�%�$���,o�IV>z!�\���[:�Zz�����o�      4      x������ � �      7      x������ � �      ;      x������ � �      E      x������ � �      C      x������ � �      A   E   x�5̱	�0D�����N6Y"����adb��+>Q��:�a�Aq�_��C�$Pqy~��?Ӛ�=Y��ld�I      -   J  x���Kn�0D��a
Q��KBq�$�c���\�rQ���cgH
U�ZFŨs?n��$|s1�}8r�(����>rr�N
4�Ԗ�f]�"SY=���:9�$րv/�E쮷a���&ƀ�F�aU�X7̛�tr�wX��~4�=���]Ǯm%���H='1�rm�ֳ��r:K`9�K��-�Sp�'l�p79�pp}t���G#��F�X�ɍ}��u��(��^J��tm�
Ȯ1�����!��w��S�~02�B7Kh��E[�`e�>��e��q�n����B��+P5�,z���i(��"��\{���)�Z(q�v��p\�lA�� _���      .      x������ � �      5      x������ � �      9      x������ � �      ?   {   x�}�M
1@�u{��@PWn������6�&��#���-�7�!$3͌N�'u*�2��̱7�3
���x/sq��Vb�w퍭��a�G�o*�@�p���TYؼ�����6�%�&��lDd      =   �   x�]���0E�ӯ���|,���Y�ip�&0$-1��VҲ0�͹gnfNp�Whnf����.8w�,Ӭr���0�a�m���A�G/8y�9I�zQb���!��v&�d��8n>�����(�������L^��%[�V�MS�P���]g���QI�m�͎1��2H�      G   *  x���ێ�0���S�boI;fY�� �&���V���6I����kT����U�-����k>]YeqQ�"Uʷ�Oi�LMN��D�;����n/�CP���E������J(*����躸v��N]ԃ�+�Uǹ��%5����1g�^lu�/'��y�����N���ʤ2��<�,�f|X��K1~%�a"��9���\���@��y�c�aqjh7F�f�F6���l(���G��c����G�&��&�L[���[J�������3�Z$]��.��:,�7�uR��'n	���'�8(aM�c(��>�&���elw��#�yq��|aX/��Qb͇I<@��U>1���ڼ���ӝ�e�:
Ѐ��`_~���+�z���#���f��2�+���ǅ��~���*�L�Yqd+~����^���M��:L�gX�z��"D�(�ȗ~n��#�P3l��܅�-fH���9����3��"�l\/ζ���3�'��P������V\��M5���1cu}��T� �߈�E�3�#$�j����^��z�2     