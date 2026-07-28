/**
 * =====================================================================
 * Global View B2B Marketplace (GV-CPS)
 * Security Utilities — Anti-XSS, Rate Limiting, Data Protection
 * =====================================================================
 * Este módulo deve ser carregado ANTES de app.js
 * Exporta: window.gvSecurity
 */
(function () {
    'use strict';

    // ─── 1. XSS SANITIZATION ──────────────────────────────────────────

    /**
     * Escapa caracteres HTML perigosos para prevenir XSS.
     * Usar em TODOS os dados do utilizador inseridos via innerHTML.
     * @param {*} str — O valor a sanitizar (converte para string)
     * @returns {string} — String segura para inserção em HTML
     */
    function sanitize(str) {
        if (str === null || str === undefined) return '';
        const s = String(str);
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;',
            '/': '&#x2F;',
            '`': '&#x60;'
        };
        return s.replace(/[&<>"'`\/]/g, function (char) {
            return map[char];
        });
    }

    /**
     * Sanitiza um atributo HTML (escapa aspas e caracteres perigosos).
     * Usar quando dados do utilizador são inseridos em atributos de elementos.
     * @param {*} str — O valor do atributo
     * @returns {string} — String segura para atributos HTML
     */
    function sanitizeAttr(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ─── 2. RATE LIMITING (Frontend) ──────────────────────────────────

    const rateLimitStore = {};

    /**
     * Verifica se uma ação está dentro do limite de taxa permitido.
     * @param {string} key — Identificador da ação (ex: 'login')
     * @param {number} maxAttempts — Máximo de tentativas na janela
     * @param {number} windowMs — Tamanho da janela em milissegundos
     * @returns {{ allowed: boolean, remaining: number, resetInSeconds: number }}
     */
    function checkRateLimit(key, maxAttempts, windowMs) {
        var now = Date.now();

        if (!rateLimitStore[key]) {
            rateLimitStore[key] = { attempts: [], blockedUntil: 0 };
        }

        var entry = rateLimitStore[key];

        // Ainda bloqueado?
        if (entry.blockedUntil > now) {
            var resetIn = Math.ceil((entry.blockedUntil - now) / 1000);
            return { allowed: false, remaining: 0, resetInSeconds: resetIn };
        }

        // Limpar tentativas fora da janela
        entry.attempts = entry.attempts.filter(function (t) {
            return t > now - windowMs;
        });

        // Limite atingido?
        if (entry.attempts.length >= maxAttempts) {
            entry.blockedUntil = now + windowMs;
            return { allowed: false, remaining: 0, resetInSeconds: Math.ceil(windowMs / 1000) };
        }

        // Registar tentativa
        entry.attempts.push(now);
        return {
            allowed: true,
            remaining: maxAttempts - entry.attempts.length,
            resetInSeconds: 0
        };
    }

    /**
     * Repõe o contador de rate limiting para uma chave (ex: após login bem-sucedido).
     * @param {string} key — Identificador da ação
     */
    function resetRateLimit(key) {
        delete rateLimitStore[key];
    }

    // ─── 3. DATA PROTECTION (localStorage) ────────────────────────────

    /** Chaves de preferências de UI que devem ser preservadas no logout */
    var UI_PREFERENCE_KEYS = [
        'gvcps_lang',
        'gvcps_dark_mode',
        'gvcps_high_contrast',
        'gvcps_highlight_links',
        'gvcps_font_scale'
    ];

    /**
     * Limpa todos os dados sensíveis do localStorage no logout.
     * Preserva apenas preferências de interface (idioma, tema, acessibilidade).
     */
    function clearSensitiveData() {
        // Salvar preferências de UI
        var preserved = {};
        UI_PREFERENCE_KEYS.forEach(function (key) {
            var val = localStorage.getItem(key);
            if (val !== null) preserved[key] = val;
        });

        // Remover dados de estado da aplicação (contém dados do utilizador)
        localStorage.removeItem('gvcps_state_v1');

        // Remover quaisquer chaves de sync do WhatsApp
        Object.keys(localStorage).forEach(function (key) {
            if (key.startsWith('gvcps_whatsapp_sync_')) {
                localStorage.removeItem(key);
            }
        });

        // Restaurar preferências de UI
        Object.keys(preserved).forEach(function (key) {
            localStorage.setItem(key, preserved[key]);
        });
    }

    /**
     * Remove campos sensíveis do estado da aplicação antes de gravar no localStorage.
     * Retorna uma cópia limpa (não modifica o original).
     * @param {Object} state — O estado da aplicação (appState)
     * @returns {Object} — Cópia segura sem dados sensíveis
     */
    function sanitizeStateForStorage(state) {
        if (!state) return state;

        // Deep clone para não afetar o objeto original
        var cleanState = JSON.parse(JSON.stringify(state));

        // Remover campos sensíveis do utilizador atual
        if (cleanState.currentUser) {
            delete cleanState.currentUser.email;
            delete cleanState.currentUser.contacts;
            delete cleanState.currentUser.whatsapp;
            delete cleanState.currentUser.phone;
        }

        return cleanState;
    }

    // ─── 4. ANTI-TAMPERING HELPERS ────────────────────────────────────

    /**
     * Verifica se o domínio atual corresponde ao domínio autorizado.
     * Útil para detetar se o site foi clonado para phishing.
     * @param {string[]} allowedDomains — Lista de domínios autorizados
     * @returns {boolean}
     */
    function isDomainAuthorized(allowedDomains) {
        var currentHost = window.location.hostname;
        return allowedDomains.some(function (domain) {
            return currentHost === domain || currentHost.endsWith('.' + domain);
        });
    }

    /**
     * Exibe um aviso se o site estiver a ser exibido num iframe não autorizado.
     * Proteção adicional contra clickjacking (complementa X-Frame-Options).
     */
    function preventFrameEmbedding() {
        if (window.self !== window.top) {
            try {
                // Tentar escapar do iframe
                window.top.location = window.self.location;
            } catch (e) {
                // Se bloqueado por CORS, exibir aviso
                document.body.innerHTML =
                    '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Outfit,sans-serif;background:#0f172a;color:#f1f5f9;text-align:center;padding:2rem;">' +
                    '<div>' +
                    '<h1 style="color:#ef4444;font-size:2rem;margin-bottom:1rem;">⚠️ Acesso Não Autorizado</h1>' +
                    '<p style="font-size:1.1rem;color:#94a3b8;">Este site não pode ser exibido num iframe.<br>Aceda diretamente a <strong>global-view-eight.vercel.app</strong></p>' +
                    '</div></div>';
            }
        }
    }

    // ─── 5. DOMAIN VERIFICATION (Anti-Phishing) ──────────────────────

    /** Domínios autorizados da GV-CPS */
    var AUTHORIZED_DOMAINS = [
        'global-view-eight.vercel.app',
        'globalview.co.mz',       // Futuro domínio próprio
        'localhost',               // Desenvolvimento local
        '127.0.0.1'               // Desenvolvimento local
    ];

    /**
     * Inicializa proteções automáticas de segurança.
     * Deve ser chamado uma vez no carregamento da página.
     */
    function initSecurityProtections() {
        // Anti-iframe / clickjacking
        preventFrameEmbedding();

        // Aviso discreto na consola se domínio não autorizado
        if (!isDomainAuthorized(AUTHORIZED_DOMAINS)) {
            console.warn(
                '%c⚠️ GV-CPS SECURITY WARNING: Este site pode ser uma cópia não autorizada. O domínio oficial é global-view-eight.vercel.app',
                'color: #ef4444; font-size: 14px; font-weight: bold;'
            );
        }
    }

    // ─── EXPORTAÇÃO DA API PÚBLICA ────────────────────────────────────

    window.gvSecurity = {
        // XSS
        sanitize: sanitize,
        sanitizeAttr: sanitizeAttr,
        // Rate Limiting
        checkRateLimit: checkRateLimit,
        resetRateLimit: resetRateLimit,
        // Data Protection
        clearSensitiveData: clearSensitiveData,
        sanitizeStateForStorage: sanitizeStateForStorage,
        // Anti-Tampering
        isDomainAuthorized: isDomainAuthorized,
        preventFrameEmbedding: preventFrameEmbedding,
        initSecurityProtections: initSecurityProtections,
        AUTHORIZED_DOMAINS: AUTHORIZED_DOMAINS
    };

    // Auto-inicializar proteções ao carregar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSecurityProtections);
    } else {
        initSecurityProtections();
    }

})();
