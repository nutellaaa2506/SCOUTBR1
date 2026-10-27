/* ==========================================================================
   CONFIGURAZIONE RAPIDA CONTATTI — GRUPPO SCOUT AGESCI BRANCALEONE 1
   Inserisci qui i recapiti ufficiali del gruppo quando pubblichi il sito!
   ========================================================================== */
const CONFIG_CONTATTI = {
  whatsappPhone: "", // Es. "393331234567" (con prefisso 39, senza +)
  email: "brancaleone1@calabria.agesci.it",
  socialUrl: "https://www.instagram.com/",
};

/* ==========================================================================
   DATI SEZIONE "CHI SIAMO" (4 TAB IDENTITARI + SIMBOLO AGESCI)
   ========================================================================== */
const IDENTITY_TABS_DATA = {
  gruppo: {
    tag: "Brancaleone (RC) · Tra il mare Jonio e i boschi",
    title: "Una grande famiglia unita dal fazzolettone blu e rosso",
    body1:
      "Il <strong>Gruppo Scout AGESCI Brancaleone 1</strong> è una comunità viva di bambini, ragazzi, giovani e adulti educatori radicata nel nostro territorio. Quando incontri per le strade del paese la camicia azzurra e il nostro <strong>fazzolettone blu con le due fettucce rosse incrociate sulla punta</strong>, vedi ragazzi che scelgono la vita vera all’aria aperta invece dell’isolamento dietro uno schermo.",
    body2:
      "Nel nostro gruppo <strong>ragazzi e ragazze crescono insieme alla pari</strong> (coeducazione). Non esistono selezioni né panchine: chiunque arriva viene accolto per nome, ascoltato e aiutato a tirare fuori il meglio di sé.",
    stats: [
      { title: "8 – 21 anni", desc: "Un percorso educativo completo diviso in 3 fasce d’età" },
      { title: "100% Volontariato", desc: "Educatori adulti formati che donano tempo e passione gratuitamente" },
    ],
  },
  metodo: {
    tag: "Associazione Guide e Scouts Cattolici Italiani",
    title: "Il Simbolo AGESCI e un metodo educativo che funziona da oltre un secolo",
    body1:
      "L’<strong>AGESCI</strong> conta oltre <strong>180.000 soci in tutta Italia</strong> ed è riconosciuta dai movimenti mondiali WOSM e WAGGGS. Nel nostro emblema ufficiale il <strong>Giglio viola</strong> e il <strong>Trifoglio giallo oro</strong> sono racchiusi da una corda legata con il <strong>Nodo Piano</strong>: il segno concreto della fraternità mondiale e dell’educazione comune di ragazzi e ragazze.",
    body2:
      "Il metodo ideato da Robert Baden-Powell si fonda sull’<strong>imparare facendo</strong> (<em>learning by doing</em>): niente lezioni teoriche dietro un banco, ma avventura nella natura, gioco di squadra, responsabilità progressiva e servizio al prossimo.",
    stats: [
      { title: "4 Punti di B.-P.", desc: "Carattere, Abilità manuale, Salute fisica, Servizio al prossimo" },
      { title: "Giglio & Trifoglio", desc: "Parte di una grande fraternità scout presente in Italia e nel mondo" },
    ],
  },
  anno: {
    tag: "Da ottobre all’estate · Sempre in movimento",
    title: "Come si svolge concretamente un anno nel nostro gruppo?",
    body1:
      "L’anno scout segue il ritmo dell’anno scolastico: ci ritroviamo nel <strong>fine settimana nella nostra sede a Brancaleone</strong> per le attività di branca (giochi, progettazioni, costruzioni, canti). Circa una volta al mese viviamo le <strong>Uscite</strong> di uno o due giorni zaino in spalla sul territorio.",
    body2:
      "I momenti più attesi sono i <strong>Campi Invernali</strong> e soprattutto il <strong>Campo Estivo</strong> (in casa per i più piccoli, in tenda nei boschi per il Reparto, in cammino per i più grandi), oltre a <strong>viaggi nazionali meravigliosi come salire tutti insieme in treno verso Roma!</strong>",
    stats: [
      { title: "Weekend + Uscite", desc: "Perfettamente compatibile con lo studio e con altri sport" },
      { title: "Campi & Viaggi", desc: "Esperienze forti di autonomia, amicizia vera e scoperta" },
    ],
  },
  promessa: {
    tag: "Uno stile di vita che cambia lo sguardo",
    title: "La Promessa, la Legge Scout e valori che restano per sempre",
    body1:
      "Si dice “Scout una volta, Scout per sempre” perché lo scautismo non finisce quando ti togli lo zaino: cambia completamente in meglio il tuo modo di guardare il mondo. Con la <strong>Promessa Scout</strong> ciascun ragazzo sceglie liberamente di fare <em>del proprio meglio</em> per aiutare gli altri e vivere con lealtà.",
    body2:
      "Nella nostra proposta si intrecciano l’<strong>amicizia sincera</strong> (nessuno resta da solo in disparte!), una <strong>fede vissuta con semplicità e gioia</strong> nella vita concreta, la custodia del creato e la gratitudine per le cose essenziali.",
    stats: [
      { title: "“Estote Parati”", desc: "Siate Pronti: affrontare la vita con competenza, coraggio e sorriso" },
      { title: "Custodi del Creato", desc: "Lasciare il mondo un po’ migliore di quanto l’abbiamo trovato" },
    ],
  },
};

/* ==========================================================================
   DATI BRANCHE PER LE CARD SCALATE E L'ESPLORATORE D'ETÀ (8-21 ANNI)
   ========================================================================== */
const BRANCHES_INFO = {
  lc: {
    colorKey: "lc",
    badge: "Branca L/C · 8–11 anni",
    title: "Lupetti e Coccinelle — Imparare giocando nella “Famiglia Felice”",
    desc: "Dagli 8 agli 11 anni bambini e bambine vivono un ambiente gioioso, accogliente e ricco di fantasia. Attraverso il gioco, i racconti, l’abilità manuale e le Vacanze di Branco estive imparano a fare amicizia con tutti, a rispettare le regole comuni e a conquistare con fierezza le prime piccole autonomie.",
    keyword: "“Del nostro meglio!” · Gioco e Gioia",
    growth: "Socialità, fantasia, rispetto degli altri e fiducia in sé",
    photo: "IMG-20261018-WA0040.jpg",
    photoCaption: "Accoglienza, sorrisi e crescita insieme nel Gruppo Brancaleone 1",
    formValue: "Lupetti/Coccinelle (8-11 anni)",
  },
  eg: {
    colorKey: "eg",
    badge: "Branca E/G · 11–16 anni",
    title: "Reparto (Esploratori e Guide) — L’età della grande avventura",
    desc: "Dagli 11 ai 16 anni ragazzi e ragazze sono veri protagonisti nella propria Squadriglia! Costruiscono tavoli da campo con nodi e legature, montano la tenda, cucinano, accendono il fuoco in sicurezza, viaggiano fino a Roma e mettono in campo la propria creatività — proprio come hanno fatto ideando le scene del nostro video!",
    keyword: "“Estote Parati” (Siate Pronti) · Avventura",
    growth: "Autonomia pratica, autostima, senso di squadra e protagonismo",
    photo: "IMG-20261018-WA0038.jpg",
    photoCaption: "Il nostro Reparto immerso nei boschi tra costruzioni, natura e amicizia vera",
    formValue: "Reparto Esploratori e Guide (11-16 anni)",
  },
  rs: {
    colorKey: "rs",
    badge: "Branca R/S · 16–21 anni",
    title: "Noviziato e Clan/Fuoco (Rover e Scolte) — Strada, Comunità e Servizio",
    desc: "Dai 16 ai 21 anni i giovani camminano zaino in spalla lungo i sentieri e le strade d’Italia (le Route), si confrontano sui grandi temi della vita e della fede, sperimentano la forza della comunità e vivono il servizio gratuito verso il prossimo, preparandosi a scelte mature da cittadini attivi e solidali.",
    keyword: "“Servire” · Strada, Comunità e Scelte",
    growth: "Maturità, spirito critico, solidarietà e cittadinanza attiva",
    photo: "IMG-20261018-WA0006.jpg",
    photoCaption: "Comunità, valori profondi e scelte che accompagnano verso l’età adulta",
    formValue: "Clan/Fuoco Rover e Scolte (16-21 anni)",
  },
};

/* ==========================================================================
   DATI LIGHTBOX (TUTTE LE 8 FOTO REALI DELLA CARTELLA)
   ========================================================================== */
const GALLERY_PHOTOS = [
  {
    src: "IMG-20261018-WA0041.jpg",
    title: "Forza di Squadra tra Mare e Cielo",
    desc: "Sulle colline affacciate sul mare Jonio: nello scautismo si arriva in alto solo reggendosi l’uno con l’altro.",
  },
  {
    src: "IMG-20261018-WA0000.jpg",
    title: "Il Tavolo Costruito con Nodi e Legature",
    desc: "Pranzo nel bosco seduti su panche e tavolo realizzati interamente dai ragazzi con pali di legno e corde.",
  },
  {
    src: "IMG-20261018-WA0020.jpg",
    title: "Chitarre e Amicizia attorno al Fuoco Sicuro",
    desc: "Il fuoco di bivacco acceso in sicurezza dentro il cerchio di pietre, tra chitarre, canti e la presenza vigile dei Capi.",
  },
  {
    src: "IMG-20261018-WA0039.jpg",
    title: "Zaino in Spalla: In Treno verso Roma!",
    desc: "Alla stazione davanti all’InterCity con zaini, stuoie e guidoni: viaggi bellissimi che allargano gli orizzonti.",
  },
  {
    src: "IMG-20261018-WA0038.jpg",
    title: "Vita di Reparto nel Cuore del Bosco",
    desc: "Esploratori, Guide e Capi riuniti nella radura del campo estivo, con le costruzioni da campo sullo sfondo.",
  },
  {
    src: "IMG-20261018-WA0045.jpg",
    title: "La Comunità Capi di Brancaleone 1 con i Ragazzi",
    desc: "Educatori adulti che hanno affrontato un percorso formativo AGESCI serio e strutturato per accompagnare i vostri figli.",
  },
  {
    src: "IMG-20261018-WA0040.jpg",
    title: "Il Gruppo Unito in Ogni Stagione",
    desc: "Una grande famiglia educativa che cammina insieme dall’autunno all’estate.",
  },
  {
    src: "IMG-20261018-WA0006.jpg",
    title: "Comunità, Fede e Senso di Appartenenza",
    desc: "Con i guidoni di Squadriglia alzati nei momenti comunitari del gruppo.",
  },
];

/* ==========================================================================
   AVVIO DI TUTTI I MODULI INTERATTIVI
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgressAndReveals();
  initMobileNav();
  initThemeToggle();
  initIdentityTabs();
  initBrancaReelPlayer();
  initMythCards();
  initPhotoHotspots();
  initTrueReefKnotLab();
  initAgeExplorer();
  initGalleryAndLightbox();
  initTrialMessageBuilder();
});

/* 1. Barra progresso corda + animazioni scroll reveal */
function initScrollProgressAndReveals() {
  const ropeFill = document.getElementById("scrollRopeFill");
  const updateRope = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    if (ropeFill) ropeFill.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", updateRope, { passive: true });
  updateRope();

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
}

/* 2. Menu Mobile */
function initMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (!menuToggle || !mainNav) return;

  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* 3. Switcher Atmosfera "Giorno al Campo" <-> "Sera al Bivacco" */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const heroTrigger = document.getElementById("heroCampfireTrigger");
  const iconEl = document.getElementById("themeIcon");
  const labelEl = document.getElementById("themeLabel");

  const applyTheme = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    const isCampfire = mode === "campfire";
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", String(isCampfire));
    if (iconEl) iconEl.textContent = isCampfire ? "☀️" : "🔥";
    if (labelEl) labelEl.textContent = isCampfire ? "Giorno" : "Bivacco";
  };

  const switchTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "day";
    const next = current === "day" ? "campfire" : "day";
    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  };

  if (toggleBtn) toggleBtn.addEventListener("click", switchTheme);
  if (heroTrigger) heroTrigger.addEventListener("click", switchTheme);
}

/* 4. Sezione Interattiva "Chi Siamo" (4 Tab Identitari) */
function initIdentityTabs() {
  const tabs = document.querySelectorAll(".identity-tab");
  const tagEl = document.getElementById("identityTag");
  const titleEl = document.getElementById("identityTitle");
  const body1El = document.getElementById("identityBody1");
  const body2El = document.getElementById("identityBody2");
  const highlightsEl = document.getElementById("identityHighlights");

  const renderIdentity = (key) => {
    const data = IDENTITY_TABS_DATA[key];
    if (!data) return;

    tabs.forEach((t) => {
      const active = t.getAttribute("data-identity") === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    if (tagEl) tagEl.textContent = data.tag;
    if (titleEl) titleEl.textContent = data.title;
    if (body1El) body1El.innerHTML = data.body1;
    if (body2El) body2El.innerHTML = data.body2;
    if (highlightsEl) {
      highlightsEl.innerHTML = data.stats
        .map(
          (s) => `
          <div class="id-stat">
            <strong>${s.title}</strong>
            <span>${s.desc}</span>
          </div>`
        )
        .join("");
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-identity");
      if (document.startViewTransition) {
        document.startViewTransition(() => renderIdentity(key));
      } else {
        renderIdentity(key);
      }
    });
  });
}

/* ==========================================================================
   5. PLAYER INTERATTIVO DEL VIDEO GIRATO A BRANCALEONE
   ========================================================================== */
function initBrancaReelPlayer() {
  const reelFrame = document.getElementById("reelFrame");
  const video = document.getElementById("brancaVideo");
  const bigPlayBtn = document.getElementById("reelBigPlayBtn");
  const playPauseBtn = document.getElementById("reelPlayPauseBtn");
  const muteBtn = document.getElementById("reelMuteBtn");
  const scrubber = document.getElementById("reelScrubber");

  if (!video || !reelFrame) return;

  const syncUi = () => {
    const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 37.8;
    const cur = video.currentTime || 0;
    const isPlaying = !video.paused && !video.ended;

    reelFrame.classList.toggle("is-playing", isPlaying);
    if (playPauseBtn) {
      playPauseBtn.textContent = isPlaying ? "⏸ Pausa" : "▶ Riproduci";
    }
    if (muteBtn) {
      muteBtn.textContent = video.muted ? "🔇 Riattiva audio" : "🔊 Audio attivo";
    }
    if (scrubber) {
      scrubber.max = String(dur);
      scrubber.value = String(cur);
    }
  };

  const togglePlay = () => {
    if (video.paused || video.ended) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  if (bigPlayBtn) bigPlayBtn.addEventListener("click", togglePlay);
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      syncUi();
    });
  }

  if (scrubber) {
    scrubber.addEventListener("input", () => {
      video.currentTime = Number(scrubber.value);
      syncUi();
    });
  }

  ["loadedmetadata", "timeupdate", "play", "pause", "ended", "volumechange"].forEach((ev) => {
    video.addEventListener(ev, syncUi);
  });

  syncUi();
}

/* 6. Flip Cards 3D "Sfata gli Stereotipi" */
function initMythCards() {
  const cards = document.querySelectorAll(".myth-card");
  const progressBar = document.getElementById("mythProgressBar");
  const progressText = document.getElementById("mythProgressText");
  const unlockedBanner = document.getElementById("mythUnlockedBanner");
  const discovered = new Set();

  cards.forEach((card) => {
    const btn = card.querySelector(".myth-card__btn");
    const id = card.getAttribute("data-myth-id");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      btn.setAttribute("aria-expanded", String(flipped));
      discovered.add(id);

      const count = discovered.size;
      const pct = (count / cards.length) * 100;
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) {
        progressText.innerHTML =
          count === cards.length
            ? `🎉 Tutti i luoghi comuni sfatati: <strong>4 su 4</strong>!`
            : `Stereotipi sfatati: <strong>${count} su ${cards.length}</strong> — tocca anche le altre carte!`;
      }
      if (count === cards.length && unlockedBanner) {
        unlockedBanner.hidden = false;
      }
    });
  });
}

/* 7. Hotspots Interattivi sulle Foto Reali (Tavolo Costruzioni WA0000 + Treno per Roma WA0039) */
function initPhotoHotspots() {
  const bindHotspotGroup = (frameId, readoutId) => {
    const frame = document.getElementById(frameId);
    const readout = document.getElementById(readoutId);
    if (!frame || !readout) return;

    const pins = frame.querySelectorAll(".hotspot-pin");
    pins.forEach((pin) => {
      pin.addEventListener("click", () => {
        pins.forEach((p) => p.classList.remove("is-selected"));
        pin.classList.add("is-selected");
        readout.textContent = pin.getAttribute("data-spot-text") || "";
      });
    });
  };

  bindHotspotGroup("craftHotspotFrame", "craftSpotReadout");
  bindHotspotGroup("romeHotspotFrame", "romeSpotReadout");
}

/* ==========================================================================
   8. VERO LABORATORIO TECNICO DEL NODO PIANO (TOPOLOGIA ESATTA A 6 INCROCI)
   - Passo 1: Due cime separate (Dormienti e Correnti)
   - Passo 2: 1° Mezzo Nodo ("Destra sopra Sinistra e gira sotto")
   - Passo 3: 2° Mezzo Nodo opposto ("Sinistra sopra Destra") -> VERO NODO PIANO
     (Nell'asola sinistra entrambi i rami blu passano SOPRA l'archetto rosso;
      nell'asola destra entrambi i rami rossi passano SOTTO l'archetto blu;
      al centro i due rami rossi passano SOPRA quelli blu -> 6 incroci alternati!)
   - Passo 4: Confronto educativo con il NODO DELL'ASINO (errore asimmetrico)
   ========================================================================== */
function initTrueReefKnotLab() {
  const svg = document.getElementById("knotSvg");
  const statusPill = document.getElementById("knotStatusPill");
  const captionBox = document.getElementById("knotCaption");
  const stepBtns = document.querySelectorAll(".knot-step-btn");
  if (!svg) return;

  const drawRopeLayers = (d, color, withGap = false) => {
    const gap = withGap ? `<path d="${d}" class="rope-gap" />` : "";
    return `
      ${gap}
      <path d="${d}" class="rope-border rope-border--${color}" />
      <path d="${d}" class="rope-core rope-core--${color}" />
      <path d="${d}" class="rope-twist" />
    `;
  };

  // Piccola fascetta gialla d'impalmatura vicino alla punta del capo corrente (libero)
  const drawWhippedTip = (x, y, angleDeg = 0) => `
    <rect x="${x - 4}" y="${y - 9}" width="7" height="18" rx="2"
      fill="#fbbf24" stroke="#78350f" stroke-width="1.5"
      transform="rotate(${angleDeg} ${x} ${y})" />
  `;

  // Geometria simmetrica perfetta (capi aperti a ventaglio come nei manuali tecnici AGESCI/WOSM)
  const FULL_BLUE =
    "M 42 192 L 172 150 C 212 138, 282 178, 322 178 C 396 178, 396 82, 322 82 C 282 82, 212 122, 172 110 L 68 74";
  const FULL_RED =
    "M 458 192 L 328 150 C 288 138, 218 178, 178 178 C 104 178, 104 82, 178 82 C 218 82, 288 122, 328 110 L 432 74";

  const KNOT_STEPS = {
    1: {
      pillText: "Passo 1 di 3 · Capi di fronte",
      isError: false,
      caption:
        "<strong>1. Avvicina le due cime:</strong> prendi due corde dello <strong>stesso spessore</strong>. In basso vedi i due <em>dormienti</em> (la parte fissa della corda), in alto con la fascetta gialla i due <em>capi correnti</em> (i capi liberi che muoveremo con le mani).",
      renderSvg: () => {
        const b1 = "M 42 188 C 110 175, 155 142, 208 92";
        const r1 = "M 458 188 C 390 175, 345 142, 292 92";
        return `
          ${drawRopeLayers(r1, "red", false)}
          ${drawRopeLayers(b1, "blue", false)}
          ${drawWhippedTip(201, 98, -42)}
          ${drawWhippedTip(299, 98, 42)}
          <text x="38" y="218" class="rope-label">Dormiente Blu</text>
          <text x="128" y="72" class="rope-label">Corrente Blu</text>
          <text x="372" y="218" class="rope-label">Dormiente Rosso</text>
          <text x="292" y="72" class="rope-label">Corrente Rosso</text>
        `;
      },
    },

    2: {
      pillText: "Passo 2 di 3 · 1° Mezzo Nodo",
      isError: false,
      caption:
        "<strong>2. Primo mezzo nodo («Destra sopra Sinistra»):</strong> incrocia i due capi correnti facendo passare uno sotto l’altro. Ora il capo blu punta in alto a destra e il capo rosso punta in alto a sinistra.",
      renderSvg: () => {
        const b2 =
          "M 42 192 L 172 150 C 212 138, 282 178, 322 178 C 368 178, 372 128, 398 64";
        const r2 =
          "M 458 192 L 328 150 C 288 138, 218 178, 178 178 C 132 178, 128 128, 102 64";
        return `
          <defs>
            <clipPath id="clipStep2Center">
              <rect x="185" y="132" width="130" height="64" />
            </clipPath>
          </defs>
          ${drawRopeLayers(r2, "red", false)}
          ${drawRopeLayers(b2, "blue", true)}
          <g clip-path="url(#clipStep2Center)">
            ${drawRopeLayers(r2, "red", true)}
          </g>
          ${drawWhippedTip(393, 74, -66)}
          ${drawWhippedTip(107, 74, 66)}
          <text x="58" y="50" class="rope-label">Corrente Rosso</text>
          <text x="352" y="50" class="rope-label">Corrente Blu</text>
        `;
      },
    },

    3: {
      pillText: "✓ Vero Nodo Piano (Simmetrico)",
      isError: false,
      caption:
        "<strong>3. Secondo mezzo nodo opposto («Sinistra sopra Destra») — NODO PIANO PERFETTO!</strong> Guarda le due asole: a sinistra <strong>entrambi i rami blu escono SOPRA</strong> l’archetto rosso dallo stesso lato; a destra <strong>entrambi i rami rossi escono SOTTO</strong> l’archetto blu. Più tiri, più tiene senza scorrere!",
      renderSvg: () => `
        <defs>
          <!-- Al centro (M1 e M2) il rosso passa SOPRA il blu; ai lati (L1, L2, R1, R2) il blu passa SOPRA il rosso -->
          <clipPath id="clipReefCenter">
            <rect x="185" y="65" width="130" height="130" />
          </clipPath>
        </defs>
        ${drawRopeLayers(FULL_RED, "red", false)}
        ${drawRopeLayers(FULL_BLUE, "blue", true)}
        <g clip-path="url(#clipReefCenter)">
          ${drawRopeLayers(FULL_RED, "red", true)}
        </g>
        ${drawWhippedTip(79, 78, 19)}
        ${drawWhippedTip(421, 78, -19)}
        <text x="24" y="58" class="rope-label">Corrente Blu (stesso lato!)</text>
        <text x="24" y="218" class="rope-label">Dormiente Blu</text>
        <text x="318" y="58" class="rope-label">Corrente Rosso (stesso lato!)</text>
        <text x="366" y="218" class="rope-label">Dormiente Rosso</text>
      `,
    },

    4: {
      pillText: "✗ Errore: Nodo dell’Asino!",
      isError: true,
      caption:
        "<strong>⚠️ Attenzione all’errore classico (Nodo dell’Asino):</strong> se fai il secondo incrocio nello <em>stesso verso</em> del primo invece che al contrario, guarda le due asole laterali: in ogni lato <strong>un ramo passa SOPRA e l’altro passa SOTTO</strong>! È asimmetrico e sotto trazione scorre.",
      renderSvg: () => `
        <defs>
          <!-- Nel Nodo dell'Asino l'intreccio superiore è invertito: L1 e R1 diventano Rosso SOPRA Blu, mentre M2 resta Rosso SOPRA Blu -->
          <clipPath id="clipGranny">
            <rect x="185" y="135" width="130" height="60" />
            <rect x="105" y="65" width="80" height="62" />
            <rect x="315" y="65" width="80" height="62" />
          </clipPath>
        </defs>
        ${drawRopeLayers(FULL_RED, "red", false)}
        ${drawRopeLayers(FULL_BLUE, "blue", true)}
        <g clip-path="url(#clipGranny)">
          ${drawRopeLayers(FULL_RED, "red", true)}
        </g>
        ${drawWhippedTip(79, 78, 19)}
        ${drawWhippedTip(421, 78, -19)}
        <text x="24" y="58" class="rope-label">✗ Uno sopra e uno sotto!</text>
        <text x="322" y="58" class="rope-label">✗ Asimmetrico (scorre!)</text>
      `,
    },
  };

  const setStep = (stepNum) => {
    const stepData = KNOT_STEPS[stepNum];
    if (!stepData) return;

    svg.innerHTML = stepData.renderSvg();

    if (statusPill) {
      statusPill.textContent = stepData.pillText;
      statusPill.classList.toggle("is-error", stepData.isError);
    }
    if (captionBox) {
      captionBox.innerHTML = stepData.caption;
      captionBox.classList.toggle("is-warning", stepData.isError);
    }

    stepBtns.forEach((btn) => {
      btn.classList.toggle("is-active", Number(btn.getAttribute("data-knot-step")) === stepNum);
    });
  };

  stepBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const n = Number(btn.getAttribute("data-knot-step"));
      setStep(n);
    });
  });

  // Avvia direttamente sul Passo 3 (il Vero Nodo Piano completo)
  setStep(3);
}

/* 9. Card Scalate Stile Odoo + Esploratore Interattivo per Età (8-21 anni) */
function initAgeExplorer() {
  const ageInput = document.getElementById("ageRangeInput");
  const ageDisplay = document.getElementById("ageValueDisplay");
  const showcase = document.getElementById("branchShowcase");
  const badgeEl = document.getElementById("branchBadge");
  const titleEl = document.getElementById("branchTitle");
  const descEl = document.getElementById("branchDesc");
  const keywordEl = document.getElementById("branchKeyword");
  const growthEl = document.getElementById("branchGrowth");
  const photoEl = document.getElementById("branchPhoto");
  const captionEl = document.getElementById("branchPhotoCaption");
  const ctaBtn = document.getElementById("branchCtaBtn");
  const staggerCards = document.querySelectorAll(".stagger-card");
  const childBranchSelect = document.getElementById("childBranch");

  const getBranchKey = (age) => {
    if (age <= 11) return "lc";
    if (age <= 16) return "eg";
    return "rs";
  };

  const updateAge = (age) => {
    const key = getBranchKey(age);
    const info = BRANCHES_INFO[key];
    if (!info) return;

    if (ageDisplay) ageDisplay.textContent = `${age} anni`;
    if (showcase) showcase.setAttribute("data-branch-color", info.colorKey);
    if (badgeEl) badgeEl.textContent = info.badge;
    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc;
    if (keywordEl) keywordEl.textContent = info.keyword;
    if (growthEl) growthEl.textContent = info.growth;
    if (photoEl && photoEl.getAttribute("src") !== info.photo) {
      photoEl.src = info.photo;
    }
    if (captionEl) captionEl.textContent = info.photoCaption;
    if (ctaBtn) {
      const shortName =
        key === "lc" ? "Lupetti/Coccinelle" : key === "eg" ? "il Reparto" : "il Clan/Fuoco";
      ctaBtn.textContent = `Chiedi una prova per ${shortName} (${age} anni) →`;
    }

    staggerCards.forEach((card) => {
      const cardKey = card.getAttribute("data-branch-card");
      card.classList.toggle("is-selected", cardKey === key);
    });

    if (childBranchSelect) {
      childBranchSelect.value = info.formValue;
      childBranchSelect.dispatchEvent(new Event("change"));
    }
  };

  if (ageInput) {
    ageInput.addEventListener("input", () => updateAge(Number(ageInput.value)));
  }

  staggerCards.forEach((card) => {
    const activateCard = () => {
      const targetAge = Number(card.getAttribute("data-target-age") || 13);
      if (ageInput) ageInput.value = String(targetAge);
      updateAge(targetAge);
    };

    card.addEventListener("click", activateCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateCard();
      }
    });
  });

  updateAge(13);
}

/* 10. Galleria Filtrabile + Lightbox Nativo <dialog> */
function initGalleryAndLightbox() {
  const filterChips = document.querySelectorAll(".filter-chip");
  const items = document.querySelectorAll(".gallery-item");
  const dialog = document.getElementById("photoLightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbDesc = document.getElementById("lightboxDesc");
  const lbCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  let currentIndex = 0;

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter");
      filterChips.forEach((c) => c.classList.toggle("is-active", c === chip));

      const applyFilter = () => {
        items.forEach((item) => {
          const cat = item.getAttribute("data-category");
          item.hidden = !(filter === "all" || cat === filter);
        });
      };

      if (document.startViewTransition) {
        document.startViewTransition(applyFilter);
      } else {
        applyFilter();
      }
    });
  });

  const showSlide = (idx) => {
    currentIndex = (idx + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    const item = GALLERY_PHOTOS[currentIndex];
    if (lbImg) {
      lbImg.src = item.src;
      lbImg.alt = item.title;
    }
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbDesc) lbDesc.textContent = item.desc;
    if (lbCounter) lbCounter.textContent = `Foto ${currentIndex + 1} di ${GALLERY_PHOTOS.length}`;
  };

  document.querySelectorAll(".gallery-item__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-index"));
      showSlide(idx);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  if (closeBtn && dialog) closeBtn.addEventListener("click", () => dialog.close());
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
      if (e.key === "ArrowRight") showSlide(currentIndex + 1);
    });
  }
}

/* 11. Costruttore Messaggio Prova Gratuita + Banner Finale */
function initTrialMessageBuilder() {
  const roleEl = document.getElementById("senderRole");
  const nameEl = document.getElementById("childName");
  const branchEl = document.getElementById("childBranch");
  const goalEl = document.getElementById("contactGoal");
  const previewEl = document.getElementById("generatedMessagePreview");
  const copyBtn = document.getElementById("copyMsgBtn");
  const waBtn = document.getElementById("whatsappBtn");
  const closingWaBtn = document.getElementById("closingWhatsappBtn");
  const emailBtn = document.getElementById("emailBtn");
  const footerEmailLink = document.getElementById("footerEmailLink");
  const socialBtn = document.getElementById("instagramLink");

  if (socialBtn && CONFIG_CONTATTI.socialUrl) {
    socialBtn.href = CONFIG_CONTATTI.socialUrl;
  }
  if (footerEmailLink && CONFIG_CONTATTI.email) {
    footerEmailLink.href = `mailto:${CONFIG_CONTATTI.email}`;
    footerEmailLink.textContent = CONFIG_CONTATTI.email;
  }

  const buildMessage = () => {
    const role = roleEl ? roleEl.value : "genitore";
    const rawName = nameEl ? nameEl.value.trim() : "";
    const branch = branchEl ? branchEl.value : "Reparto Esploratori e Guide (11-16 anni)";
    const goal = goalEl ? goalEl.value : "prova";

    let intro = "";
    if (role === "genitore") {
      intro = rawName
        ? `Ciao Capi del Gruppo AGESCI Brancaleone 1! Sono un genitore e vi scrivo per ${rawName} (fascia ${branch}).`
        : `Ciao Capi del Gruppo AGESCI Brancaleone 1! Sono un genitore e vi scrivo per la fascia ${branch}.`;
    } else {
      intro = rawName
        ? `Ciao Capi del Gruppo AGESCI Brancaleone 1! Mi chiamo ${rawName} e vi scrivo per la fascia ${branch}.`
        : `Ciao Capi del Gruppo AGESCI Brancaleone 1! Vorrei avvicinarmi agli scout nella fascia ${branch}.`;
    }

    let actionText = "";
    if (goal === "prova") {
      actionText =
        "Ho visitato il vostro sito e mi piacerebbe passare in sede a conoscervi e fare un’attività di prova gratuita senza impegno. Quando possiamo passare?";
    } else if (goal === "info") {
      actionText =
        "Vorrei sapere quali sono i giorni e gli orari delle attività e dove si trova esattamente la sede per venire a salutarvi!";
    } else {
      actionText =
        "Mi ha colpito molto il vostro sito! Avrei piacere di fare due chiacchiere con voi per avere qualche informazione in più sul percorso scout.";
    }

    const fullMsg = `${intro} ${actionText} Grazie mille!`;

    if (previewEl) previewEl.textContent = fullMsg;

    const encoded = encodeURIComponent(fullMsg);
    const waUrl = CONFIG_CONTATTI.whatsappPhone
      ? `https://wa.me/${CONFIG_CONTATTI.whatsappPhone}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;

    if (waBtn) waBtn.href = waUrl;
    if (closingWaBtn) closingWaBtn.href = waUrl;

    if (emailBtn) {
      const subject = encodeURIComponent("Informazioni / Prova Gratuita - AGESCI Brancaleone 1");
      emailBtn.href = `mailto:${CONFIG_CONTATTI.email}?subject=${subject}&body=${encoded}`;
    }

    return fullMsg;
  };

  [roleEl, nameEl, branchEl, goalEl].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", buildMessage);
    el.addEventListener("change", buildMessage);
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const msg = buildMessage();
      try {
        await navigator.clipboard.writeText(msg);
        copyBtn.textContent = "✓ Copiato!";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copia testo";
        }, 2200);
      } catch {
        copyBtn.textContent = "Seleziona il testo qui sotto";
      }
    });
  }

  buildMessage();
}
