-- =====================================================================
-- Global View B2B Marketplace (GV-CPS)
-- Esquema de Base de Dados e Configuração de Segurança (Supabase / PostgreSQL)
-- Data: 17 de Julho de 2026
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. LIMPEZA DE ESTRUTURAS EXISTENTES (Se necessário para reinstalação)
-- ---------------------------------------------------------------------
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.check_contact_exposures();
DROP FUNCTION IF EXISTS public.is_consultant();
DROP FUNCTION IF EXISTS public.is_admin();
DROP FUNCTION IF EXISTS public.get_auth_role();

DROP TABLE IF EXISTS public.internal_notes CASCADE;
DROP TABLE IF EXISTS public.chat_messages CASCADE;
DROP TABLE IF EXISTS public.chat_rooms CASCADE;
DROP TABLE IF EXISTS public.negotiations CASCADE;
DROP TABLE IF EXISTS public.offer_contacts CASCADE;
DROP TABLE IF EXISTS public.offers CASCADE;
DROP TABLE IF EXISTS public.requirement_contacts CASCADE;
DROP TABLE IF EXISTS public.requirements CASCADE;
DROP TABLE IF EXISTS public.profile_contacts CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

DROP TYPE IF EXISTS public.negotiation_status;
DROP TYPE IF EXISTS public.offer_status;
DROP TYPE IF EXISTS public.requirement_status;
DROP TYPE IF EXISTS public.user_role;

-- ---------------------------------------------------------------------
-- 2. ENUMS E TIPOS CUSTOMIZADOS
-- ---------------------------------------------------------------------
CREATE TYPE public.user_role AS ENUM ('buyer', 'supplier', 'consultant', 'admin');
CREATE TYPE public.requirement_status AS ENUM ('pending', 'active', 'completed', 'cancelled');
CREATE TYPE public.offer_status AS ENUM ('pending', 'active', 'completed', 'cancelled');
CREATE TYPE public.negotiation_status AS ENUM ('pending', 'negotiating', 'completed', 'cancelled');

-- ---------------------------------------------------------------------
-- 3. TABELA DE PERFIS PÚBLICOS
-- ---------------------------------------------------------------------
CREATE TABLE public.profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name text NOT NULL,
    country text NOT NULL,
    role public.user_role NOT NULL DEFAULT 'buyer',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 4. TABELA DE CONTACTOS PRIVADOS (Acesso Restrito)
-- ---------------------------------------------------------------------
CREATE TABLE public.profile_contacts (
    id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    real_name text NOT NULL,
    email text NOT NULL UNIQUE,
    whatsapp_phone text NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 5. TABELA DE REQUISITOS (Comprador)
-- ---------------------------------------------------------------------
CREATE TABLE public.requirements (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    buyer_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title text NOT NULL,
    category text NOT NULL,
    description text NOT NULL,
    quantity numeric NOT NULL CHECK (quantity > 0),
    country text NOT NULL,
    logistics_included boolean NOT NULL DEFAULT false,
    status public.requirement_status NOT NULL DEFAULT 'pending',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 6. TABELA DE CONTACTOS DO REQUISITO (Acesso Restrito)
-- ---------------------------------------------------------------------
CREATE TABLE public.requirement_contacts (
    requirement_id uuid PRIMARY KEY REFERENCES public.requirements(id) ON DELETE CASCADE,
    contact_email text NOT NULL,
    contact_whatsapp text NOT NULL
);

-- ---------------------------------------------------------------------
-- 7. TABELA DE OFERTAS (Fornecedor)
-- ---------------------------------------------------------------------
CREATE TABLE public.offers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    supplier_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    title text NOT NULL,
    category text NOT NULL,
    description text NOT NULL,
    quantity numeric NOT NULL CHECK (quantity > 0),
    country text NOT NULL,
    logistics_included boolean NOT NULL DEFAULT false,
    status public.offer_status NOT NULL DEFAULT 'pending',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 8. TABELA DE CONTACTOS DA OFERTA (Acesso Restrito)
-- ---------------------------------------------------------------------
CREATE TABLE public.offer_contacts (
    offer_id uuid PRIMARY KEY REFERENCES public.offers(id) ON DELETE CASCADE,
    contact_email text NOT NULL,
    contact_whatsapp text NOT NULL
);

-- ---------------------------------------------------------------------
-- 9. TABELA DE NEGOCIAÇÕES (Correspondências)
-- ---------------------------------------------------------------------
CREATE TABLE public.negotiations (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    requirement_id uuid REFERENCES public.requirements(id) ON DELETE SET NULL,
    offer_id uuid REFERENCES public.offers(id) ON DELETE SET NULL,
    consultant_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
    status public.negotiation_status NOT NULL DEFAULT 'pending',
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 10. TABELA DE SALAS DE CHAT (Separadas Comprador / Fornecedor)
-- ---------------------------------------------------------------------
CREATE TABLE public.chat_rooms (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    negotiation_id uuid NOT NULL REFERENCES public.negotiations(id) ON DELETE CASCADE,
    participant_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    consultant_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 11. TABELA DE MENSAGENS DE CHAT
-- ---------------------------------------------------------------------
CREATE TABLE public.chat_messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id uuid NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
    sender_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE SET NULL,
    message_text text NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ---------------------------------------------------------------------
-- 12. NOTAS INTERNAS (Apenas Consultores e Admins)
-- ---------------------------------------------------------------------
CREATE TABLE public.internal_notes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    negotiation_id uuid NOT NULL REFERENCES public.negotiations(id) ON DELETE CASCADE,
    author_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    note_text text NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =====================================================================
-- FUNÇÕES DE SUPORTE E SEGURANÇA
-- =====================================================================

-- Helper para obter o papel do utilizador autenticado
CREATE OR REPLACE FUNCTION public.get_auth_role()
RETURNS public.user_role SECURITY DEFINER AS $$
BEGIN
  RETURN (
    SELECT role FROM public.profiles 
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql;

-- Helper para verificar se é Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean SECURITY DEFINER AS $$
BEGIN
  RETURN (public.get_auth_role() = 'admin');
END;
$$ LANGUAGE plpgsql;

-- Helper para verificar se é Consultor
CREATE OR REPLACE FUNCTION public.is_consultant()
RETURNS boolean SECURITY DEFINER AS $$
BEGIN
  RETURN (public.get_auth_role() = 'consultant');
END;
$$ LANGUAGE plpgsql;

-- =====================================================================
-- ATIVAÇÃO E REGRAS DE ROW LEVEL SECURITY (RLS)
-- =====================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profile_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.requirement_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offer_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.negotiations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internal_notes ENABLE ROW LEVEL SECURITY;

-- 1. Perfis Públicos (profiles) — RESTRITO a utilizadores autenticados
-- NOTA: Utilizadores anónimos NÃO podem listar perfis (protege roles admin/consultant)
CREATE POLICY "Leitura de perfis por autenticados" ON public.profiles FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Escrita de perfis por Admins ou próprio" ON public.profiles FOR ALL USING (auth.uid() = id OR public.is_admin());

-- 2. Perfis Privados (profile_contacts)
CREATE POLICY "Leitura restrita de contactos de perfis" ON public.profile_contacts FOR SELECT USING (auth.uid() = id OR public.is_admin());
CREATE POLICY "Escrita restrita de contactos de perfis" ON public.profile_contacts FOR ALL USING (auth.uid() = id OR public.is_admin());

-- 3. Requisitos (requirements)
CREATE POLICY "Leitura pública de requisitos" ON public.requirements FOR SELECT USING (true);
CREATE POLICY "Inserção pelo próprio comprador autenticado" ON public.requirements FOR INSERT WITH CHECK (auth.uid() = buyer_id);
CREATE POLICY "Atualização pelo comprador proprietário ou admin" ON public.requirements FOR UPDATE USING (auth.uid() = buyer_id OR public.is_admin());

-- 4. Contactos de Requisitos (requirement_contacts)
CREATE POLICY "Leitura restrita de contactos do requisito" ON public.requirement_contacts FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.requirements WHERE id = requirement_contacts.requirement_id AND buyer_id = auth.uid())
    OR public.is_admin()
);
CREATE POLICY "Inserção de contactos pelo comprador" ON public.requirement_contacts FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.requirements WHERE id = requirement_contacts.requirement_id AND buyer_id = auth.uid())
);

-- 5. Ofertas (offers)
CREATE POLICY "Leitura pública de ofertas" ON public.offers FOR SELECT USING (true);
CREATE POLICY "Inserção pelo próprio fornecedor autenticado" ON public.offers FOR INSERT WITH CHECK (auth.uid() = supplier_id);
CREATE POLICY "Atualização pelo fornecedor proprietário ou admin" ON public.offers FOR UPDATE USING (auth.uid() = supplier_id OR public.is_admin());

-- 6. Contactos de Ofertas (offer_contacts)
CREATE POLICY "Leitura restrita de contactos da oferta" ON public.offer_contacts FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.offers WHERE id = offer_contacts.offer_id AND supplier_id = auth.uid())
    OR public.is_admin()
);
CREATE POLICY "Inserção de contactos pelo fornecedor" ON public.offer_contacts FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.offers WHERE id = offer_contacts.offer_id AND supplier_id = auth.uid())
);

-- 7. Negociações
CREATE POLICY "Acesso a negociações" ON public.negotiations FOR SELECT USING (
    public.is_admin() 
    OR public.is_consultant()
    OR EXISTS (SELECT 1 FROM public.requirements WHERE id = negotiations.requirement_id AND buyer_id = auth.uid())
    OR EXISTS (SELECT 1 FROM public.offers WHERE id = negotiations.offer_id AND supplier_id = auth.uid())
);

-- 8. Salas de Chat
CREATE POLICY "Acesso a salas de chat" ON public.chat_rooms FOR ALL USING (
    public.is_admin()
    OR participant_id = auth.uid()
    OR consultant_id = auth.uid()
);

-- 9. Mensagens de Chat
CREATE POLICY "Acesso a mensagens" ON public.chat_messages FOR ALL USING (
    public.is_admin()
    OR EXISTS (
        SELECT 1 FROM public.chat_rooms
        WHERE id = chat_messages.room_id
        AND (participant_id = auth.uid() OR consultant_id = auth.uid())
    )
);

-- 10. Notas Internas
CREATE POLICY "Acesso a notas internas por Consultores e Admins" ON public.internal_notes FOR ALL USING (
    public.is_admin() OR public.is_consultant()
);

-- =====================================================================
-- FILTRO AUTOMÁTICO ANTI-CONTACTO (Database Trigger)
-- =====================================================================
CREATE OR REPLACE FUNCTION public.check_contact_exposures()
RETURNS trigger AS $$
DECLARE
    contact_regex text := '([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?[0-9\-\s\(\)]{8,20})|(https?:\/\/[^\s]+)|(www\.[^\s]+)';
    text_to_scan text;
BEGIN
    IF TG_TABLE_NAME = 'requirements' OR TG_TABLE_NAME = 'offers' THEN
        text_to_scan := NEW.description;
    ELSIF TG_TABLE_NAME = 'chat_messages' THEN
        text_to_scan := NEW.message_text;
    END IF;

    IF text_to_scan ~ contact_regex THEN
        RAISE EXCEPTION 'Acesso Bloqueado: Por regras de segurança e conformidade da GV-CPS, é estritamente proibido partilhar contactos directos (telefones, e-mails ou links) nesta secção.';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_check_requirement_contacts
    BEFORE INSERT OR UPDATE ON public.requirements
    FOR EACH ROW EXECUTE FUNCTION public.check_contact_exposures();

CREATE TRIGGER trg_check_offer_contacts
    BEFORE INSERT OR UPDATE ON public.offers
    FOR EACH ROW EXECUTE FUNCTION public.check_contact_exposures();

CREATE TRIGGER trg_check_chat_contacts
    BEFORE INSERT OR UPDATE ON public.chat_messages
    FOR EACH ROW EXECUTE FUNCTION public.check_contact_exposures();

-- =====================================================================
-- SINCRONIZAÇÃO E TRIGGERS DO SUPABASE AUTH
-- =====================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, company_name, country, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'company_name', 'Nova Empresa B2B'),
    COALESCE(NEW.raw_user_meta_data->>'country', 'Moçambique'),
    'buyer'
  );
  
  INSERT INTO public.profile_contacts (id, real_name, email, whatsapp_phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'real_name', 'Representante'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'whatsapp_phone', '-')
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================================================================
-- SCRIPT DE ATRIBUIÇÃO DE ROLES DE TESTE (Para executar após criar users no Auth)
-- =====================================================================
-- UPDATE public.profiles SET role = 'buyer' WHERE id = (SELECT id FROM public.profile_contacts WHERE email = 'buyer@gvcps.com');
-- UPDATE public.profiles SET role = 'supplier' WHERE id = (SELECT id FROM public.profile_contacts WHERE email = 'supplier@gvcps.com');
-- UPDATE public.profiles SET role = 'consultant' WHERE id = (SELECT id FROM public.profile_contacts WHERE email = 'consultant@gvcps.com');
-- UPDATE public.profiles SET role = 'admin' WHERE id = (SELECT id FROM public.profile_contacts WHERE email = 'admin@gvcps.com');
