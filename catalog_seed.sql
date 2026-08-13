-- =====================================================================
-- GV-CPS — Seed de Catálogo de Produtos Químicos
-- Fonte: catalog/Chemical Products Mozamique Leaf Tobacco.docx
-- Setor: chemicals | Marca: Merck | Data: 13 de Agosto de 2026
-- =====================================================================
-- Executar no Supabase SQL Editor APÓS aplicar o supabase_schema.sql
-- =====================================================================

-- Limpar dados anteriores do setor chemicals (seguro para re-execução)
DELETE FROM public.catalog_products WHERE sector = 'chemicals';

-- -----------------------------------------------------------------------
-- SUBCATEGORIA: acidos — Ácidos & Solventes
-- -----------------------------------------------------------------------
INSERT INTO public.catalog_products (sector, category, name_pt, name_en, pack_unit, quantity, price_usd, price_notes, brand, origin, notes) VALUES
('chemicals', 'acidos', 'Ácido Acético Glacial', 'Glacial Acetic Acid', '2.5L', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #10'),
('chemicals', 'acidos', 'Ácido Clorídrico 32%', 'Hydrochloric Acid 32%', '2.5L', 4, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #11'),
('chemicals', 'acidos', 'Ácido Clorídrico 37%', 'Hydrochloric Acid 37%', '2.5L', 2, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #23'),
('chemicals', 'acidos', 'Ácido Fosfórico', 'Phosphoric Acid', '250ml', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #24'),
('chemicals', 'acidos', 'Metanol', 'Methanol', '2.5L', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #29');

-- -----------------------------------------------------------------------
-- SUBCATEGORIA: sais — Sais & Compostos Inorgânicos
-- -----------------------------------------------------------------------
INSERT INTO public.catalog_products (sector, category, name_pt, name_en, pack_unit, quantity, price_usd, price_notes, brand, origin, notes) VALUES
('chemicals', 'sais', 'Sulfato de Amónia', 'Ammonium Sulfate', '100g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #2'),
('chemicals', 'sais', 'Cloreto de Cálcio Hexahidratado', 'Calcium Chloride Hexahydrate', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #4'),
('chemicals', 'sais', 'Cloreto de Sódio', 'Sodium Chloride', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #12'),
('chemicals', 'sais', 'Hidróxido de Sódio', 'Sodium Hydroxide', '500g', 6, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #13'),
('chemicals', 'sais', 'Hipoclorito de Sódio', 'Sodium Hypochlorite', '2.5L', 4, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #14'),
('chemicals', 'sais', 'Nitroprussiato de Sódio Dihidratado', 'Sodium Nitroprusside Dihydrate', '100g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #15'),
('chemicals', 'sais', 'Salicilato de Sódio', 'Sodium Salicylate', '500g', 2, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #16'),
('chemicals', 'sais', 'Tetraborato de Sódio Decahidratado', 'Sodium Tetraborate Decahydrate', '500g', 2, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #17'),
('chemicals', 'sais', 'Nitrato de Sódio', 'Sodium Nitrate', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #30'),
('chemicals', 'sais', 'Nitrato de Potássio', 'Potassium Nitrate', '50g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #31'),
('chemicals', 'sais', 'Fosfato de Sódio Dibásico Dihidratado', 'Sodium hydrogenPhosphate dibasic dihydrate', '500g', 4, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #32'),
('chemicals', 'sais', 'Cianeto de Potássio', 'Potassium Cyanide', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #34 — Manuseamento com EPI obrigatório'),
('chemicals', 'sais', 'Sulfato de Cobre II Pentahidratado', 'Copper II sulfate pentahydrate', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #21 e #36 (duplicado)'),
('chemicals', 'sais', 'Di-Fosfato de Sódio Monohidratado', 'Di-Sodium Hydrogenophosphate', '500g', 3, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #9');

-- -----------------------------------------------------------------------
-- SUBCATEGORIA: reagentes — Reagentes Analíticos
-- -----------------------------------------------------------------------
INSERT INTO public.catalog_products (sector, category, name_pt, name_en, pack_unit, quantity, price_usd, price_notes, brand, origin, notes) VALUES
('chemicals', 'reagentes', '4-Hidroxibenzoico Acid Hidrazina', '4-Hydroxybenzoic Acid Hydrazine', '25g', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #1'),
('chemicals', 'reagentes', 'BRIJ-35', 'BRIJ-35', '100ml', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #3'),
('chemicals', 'reagentes', 'Cloramina T Tri-hidratada', 'Chloramine T Trihydrate', '250g', 4, 100.00, 'U$ 100,00', 'Merck', 'Moçambique', 'Referência MLT #5'),
('chemicals', 'reagentes', 'Ácido Cítrico Monohidratado', 'Citric Acid Monohydrate', '500g', 2, NULL, 'R$ 8.000,00 (BRL)', 'Merck', 'Moçambique', 'Referência MLT #6'),
('chemicals', 'reagentes', 'D(-) Frutose', 'D(-) Fructose', '250g', 1, 50.00, 'U$ 50,00', 'Merck', 'Moçambique', 'Referência MLT #7'),
('chemicals', 'reagentes', 'D(+) Glucose Anidra', 'D(+) Glucose Anhydrous', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #8'),
('chemicals', 'reagentes', 'Ácido Sulfanílico', 'Sulfanilic Acid', '250g', 2, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #18'),
('chemicals', 'reagentes', 'Sulfato de Hidrazina', 'Hydrazine Sulfate', '100g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #22'),
('chemicals', 'reagentes', 'Sulfanilamida', 'Sulfanilamide', '100g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #25'),
('chemicals', 'reagentes', 'Amostra de Controlo Químico GLS', 'GLS Control Chemical Sample', '100g', 6, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #33'),
('chemicals', 'reagentes', 'N-(1-naftil)etilenodiamina Dicloridrato', 'N-(1-naphtyl)ethylenediamine dihydrochloride', '250g', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #35');

-- -----------------------------------------------------------------------
-- SUBCATEGORIA: consumiveis — Consumíveis de Laboratório
-- -----------------------------------------------------------------------
INSERT INTO public.catalog_products (sector, category, name_pt, name_en, pack_unit, quantity, price_usd, price_notes, brand, origin, notes) VALUES
('chemicals', 'consumiveis', 'Extran AP 11 — Detergente Alcalino', 'Extran AP 11 — Alkaline Detergent', '2Kg', 1, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #19'),
('chemicals', 'consumiveis', 'Extran MA 01 — Detergente Neutro', 'Extran MA 01 — Neutral Detergent', '1L', 2, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #20'),
('chemicals', 'consumiveis', 'Papéis de Filtro Qualitativos No.40 125mm', 'Qualitative Filter Papers No.40 125mm', '100 unidades', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #26'),
('chemicals', 'consumiveis', 'Papéis de Filtro Qualitativos No.11 80mm', 'Qualitative Filter Papers No.11 80mm', '100 unidades', 50, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #27'),
('chemicals', 'consumiveis', 'Carbono Ativado', 'Activated Carbon', '500g', 10, NULL, 'Sob consulta', 'Merck', 'Moçambique', 'Referência MLT #28');

-- -----------------------------------------------------------------------
-- Verificar contagem final
-- -----------------------------------------------------------------------
SELECT sector, category, COUNT(*) AS total
FROM public.catalog_products
WHERE sector = 'chemicals'
GROUP BY sector, category
ORDER BY category;

-- Resultado esperado:
-- chemicals | acidos       | 5
-- chemicals | consumiveis  | 5
-- chemicals | reagentes    | 11
-- chemicals | sais         | 12
-- TOTAL: 33 linhas únicas (3 duplicados na fonte original foram consolidados)
