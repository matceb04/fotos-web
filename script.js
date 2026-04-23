/* ============================================================
   script.js — Miguel Costemalle Carrandi
   ============================================================ */

'use strict';

const AVAIL_LABEL = {
  green:  'Disponible',
  yellow: 'Disponible para exhibir',
  red:    'No disponible'
};

const SERIES_INFO = {
  'La caída al bailar de las calacas': 'Esta serie describe los sucesos cotidianos a través del pensar de las calaveras, donde cada calavera canta un poema.',
  'Resantes': 'Toda esta serie cuenta con un precio de adquisición completa de $85,000 MXN.',
  'Murciélagos': null,
  'Carbones': null,
  'Pared Maria': null,
};

const IMG = f => f;

/* ── CATÁLOGO ──────────────────────────────────────────────────
   tipo: 'pintura' | 'dibujo' | 'grabado' | 'escultura' | 'exposicion'
   avail: 'green' (disponible) | 'yellow' (para exhibir) | 'red' (no disponible)
   ─────────────────────────────────────────────────────────── */
const OBRAS = [
  /* ── PINTURAS ─────────────────────────────────────────── */
   {
    id: 'pared-maria-1', tipo: 'pintura',
    title: '"PARED MARIA 1"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 1.jpg')
  },
  {
    id: 'pared-maria-2', tipo: 'pintura',
    title: '"PARED MARIA 2"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 2.jpg')
  },
  {
    id: 'pared-maria-3', tipo: 'pintura',
    title: '"PARED MARIA 3"', dim: '30×24 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: 'Pared Maria',
    img: IMG('PARED MARIA 3.jpg')
  },
  {
    id: 'me-das-mi-domingo', tipo: 'pintura',
    title: '"¿ME DAS MI DOMINGO? 1"', dim: '197×192 cm',
    tecnica: 'Óleo sobre lino',
    year: '2026', price: null, avail: 'yellow',
    serie: null,
    img: IMG('ME DAS MI DOMINGO 1.jpg')
  },
  {
    id: 'ekta-calaca-27', tipo: 'pintura',
    title: 'EKTA CALACA 27', dim: '35×178 cm',
    tecnica: 'Óleo, acuarelas, plumones de acrílico, pasteles de óleo y pintura acrílica sobre lienzo',
    year: '2023', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('EKTA CALACA 27.jpg')
  },
  {
    id: 'fer-calaca-24', tipo: 'pintura',
    title: '"FER" CALACA 24', dim: '179×60 cm',
    tecnica: 'Óleo, acuarelas, plumones de acrílico y pintura acrílica sobre lino',
    year: '2023', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('FER CALACA 24.jpg')
  },
  {
    id: 'calacazul-2-olvera', tipo: 'pintura',
    title: 'CALACAZUL 2 "OLVERA"', dim: '120×150 cm',
    tecnica: 'Acrílico y pasteles de óleo sobre lino',
    year: '2024', price: null, avail: 'green',
    serie: 'La caída al bailar de las calacas',
    img: IMG('CALACAZUL 2 OLVERA.jpg')
  },
  {
    id: 'mural-ekta-calaca-25', tipo: 'pintura',
    title: 'MURAL "EKTA" CALACA 25', dim: '220×345 cm',
    tecnica: 'Plumones sobre papel, pintura para pared, plumones acrílicos, pasteles de óleo y pintura acrílica sobre muro',
    year: '2024', price: null, avail: 'red',
    serie: 'La caída al bailar de las calacas',
    img: IMG('MURAL EKTA CALACA 25.jpg')
  },
  {
    id: 'ekta-4-calaca-26', tipo: 'pintura',
    title: '"EKTA 4" CALACA 26', dim: '155×80 cm',
    tecnica: 'Óleo, acuarelas, arena, plumones de acrílico y pintura acrílica sobre lino',
    year: '2024', price: null, avail: 'green',
    serie: 'La caída al bailar de las calacas',
    img: IMG('EKTA 4 CALACA 26.jpg')
  },
  {
    id: 'lou', tipo: 'pintura',
    title: '"LOU"', dim: '200×300 cm',
    tecnica: 'Acrílico y óleo sobre lino',
    year: '2024', price: '170,000 MXN', avail: 'green',
    serie: null,
    img: IMG('LOU.jpg')
  },
  {
    id: '7-en-guerra', tipo: 'pintura',
    title: '"7 EN GUERRA"', dim: '216×250 cm',
    tecnica: 'Acrílico y óleo sobre lino',
    year: '2024', price: null, avail: 'red',
    serie: null,
    img: IMG('7 EN GUERRA.jpg')
  },
  {
    id: 'umbral', tipo: 'pintura',
    title: '"UMBRAL"', dim: '130×245 cm',
    tecnica: 'Óleos sobre hoja de concreto',
    year: '2025', price: '50,000 MXN', avail: 'green',
    serie: 'Resantes',
    img: IMG('UMBRAL.jpg')
  },
  {
    id: 'el-hombre', tipo: 'pintura',
    title: '"El hombre"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('El hombre.jpg')
  },
  {
    id: 'la-mujer', tipo: 'pintura',
    title: '"La mujer"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('La mujer.jpg')
  },
  {
    id: 'el-altar', tipo: 'pintura',
    title: '"El altar"', dim: '130×135 cm',
    tecnica: 'Acrílico sobre hoja de cemento',
    year: '2025', price: '30,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (El hombre + La mujer + El altar): $85,000 MXN',
    serie: 'Resantes',
    img: IMG('El altar.jpg')
  },
  {
    id: 'mutilado-1', tipo: 'pintura',
    title: '"Mutilado 1"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 1.jpg')
  },
  {
    id: 'mutilado-2', tipo: 'pintura',
    title: '"Mutilado 2"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 2.jpg')
  },
  {
    id: 'la-cabeza', tipo: 'pintura',
    title: '"La cabeza"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('La cabeza.jpg')
  },
  {
    id: 'mutilado-3', tipo: 'pintura',
    title: '"Mutilado 3"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 3.jpg')
  },
  {
    id: 'mutilado-4', tipo: 'pintura',
    title: '"Mutilado 4"', dim: '30×30 cm',
    tecnica: 'Acrílico sobre cemento',
    year: '2025', price: '15,000 MXN', avail: 'green',
    nota: 'Precio si se compra toda la serie (Mutilado 1–4 + La cabeza): $65,000 MXN',
    serie: 'Resantes',
    img: IMG('Mutilado 4.jpg')
  },

  /* ── DIBUJO (Carbones) ─────────────────────────────────── */
  {
    id: 'paredes', tipo: 'dibujo',
    title: '"PAREDES"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('PAREDES.jpg')
  },
  {
    id: 'callejon', tipo: 'dibujo',
    title: '"CALLEJON"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('CALLEJON.jpg')
  },
  {
    id: 'ventanas', tipo: 'dibujo',
    title: '"VENTANAS"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('VENTANAS.jpg')
  },
  {
    id: 'esquina', tipo: 'dibujo',
    title: '"ESQUINA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('ESQUINA.jpg')
  },
  {
    id: 'desde-un-balcon', tipo: 'dibujo',
    title: '"DESDE UN BALCÓN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('DESDE UN BALCON.jpg')
  },
  {
    id: 'esquina-2', tipo: 'dibujo',
    title: '"ESQUINA 2"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('ESQUINA 2.jpg')
  },
  {
    id: 'maria-carbon', tipo: 'dibujo',
    title: '"MARIA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('MARIA.jpg')
  },
  {
    id: 'vista-carro-helado', tipo: 'dibujo',
    title: '"VISTA DESDE CARRO DE HELADO"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('VISTA DESDE CARRO DE HELADO.jpg')
  },
  {
    id: 'nino-lloron', tipo: 'dibujo',
    title: '"NIÑO LLORON"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('NIÑO LLORON.jpg')
  },
  {
    id: 'en-construccion', tipo: 'dibujo',
    title: '"EN CONSTRUCCIÓN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('EN CONSTRUCCION.jpg')
  },
  {
    id: 'jardin', tipo: 'dibujo',
    title: '"JARDÍN"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('JARDIN.jpg')
  },
  {
    id: 'cama', tipo: 'dibujo',
    title: '"CAMA"', dim: '60×70 cm',
    tecnica: 'Carbón sobre papel de algodón',
    year: '2026', price: null, avail: 'green',
    serie: 'Carbones',
    img: IMG('CAMA.jpg')
  },
  

  /* ── GRABADO ───────────────────────────────────────────── */
  {
    id: 'murcielagos-grabado', tipo: 'grabado',
    title: '"MURCIÉLAGOS"', dim: '60×70 cm',
    tecnica: 'Grabado sobre hoja de algodón',
    year: '2025', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGOS 1.jpg')
  },
  {
    id: 'solo-los-muertos', tipo: 'grabado',
    title: '"solo los muertos pueden juzgar"', dim: '60×70 cm',
    tecnica: 'Grabado',
    year: '2025', price: '7,000 MXN', avail: 'green',
    serie: 'Murciélagos',
    img: IMG('solo los muertos pueden juzgar.jpg')
  },
  {
    id: 'murcielago-icniuhyotl-s', tipo: 'grabado',
    title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '8.5×8.5 cm',
    tecnica: 'Grabado',
    year: '2026', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGO Icniuhyotl pequeño.jpg')
  },
  {
    id: 'murcielago-icniuhyotl-l', tipo: 'grabado',
    title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '24×17.5 cm',
    tecnica: 'Grabado',
    year: '2026', price: null, avail: 'green',
    serie: 'Murciélagos',
    img: IMG('MURCIÉLAGO Icniuhyotl.jpg')
  },

  /* ── ESCULTURA ─────────────────────────────────────────── */
  {
    id: 'instalacion-murcielagos', tipo: 'escultura',
    title: 'INSTALACIÓN MURCIÉLAGOS', dim: 'Variable',
    tecnica: 'Escultura e instalación',
    year: '2024',
    price: 'desde $18,000 MXN por pieza',
    nota: 'Con cúpula: desde $30,000 MXN el par hasta $190,000 MXN por ocho piezas.',
    avail: 'green',
    serie: 'Murciélagos',
    img: IMG('INSTALACIÓN MURCIÉLAGOS 5.jpg'),
    imgs: [
      'INSTALACIÓN MURCIÉLAGOS 1.jpg','INSTALACIÓN MURCIÉLAGOS 2.jpg',
      'INSTALACIÓN MURCIÉLAGOS 3.jpg','INSTALACIÓN MURCIÉLAGOS 4.jpg',
      'INSTALACIÓN MURCIÉLAGOS 5.jpg','INSTALACIÓN MURCIÉLAGOS 6.jpg',
      'INSTALACIÓN MURCIÉLAGOS 7.jpg','INSTALACIÓN MURCIÉLAGOS 8.jpg',
      'INSTALACIÓN MURCIÉLAGOS 9.jpg','INSTALACIÓN MURCIÉLAGOS 10.jpg',
      'INSTALACIÓN MURCIÉLAGOS 11.jpg','INSTALACIÓN MURCIÉLAGOS 12.jpg',
      'INSTALACIÓN MURCIÉLAGOS 13.jpg'
    ]
  },

  /* ── EXPOSICIÓN (solo para exhibir) ───────────────────── */
 
];


/* ══════════════════════════════════════════════════════════════
   GALLERY — state machine
   ══════════════════════════════════════════════════════════════ */
let gCat   = 'all';   // category filter
let gAvail = 'all';   // availability filter
let gView  = 'grid';  // 'slide' | 'grid'
let gIdx   = 0;       // current obra index in filtered list
let gSub   = 0;       // current sub-image index (multi-image obras)

function getFiltered() {
  return OBRAS.filter(o =>
    (gCat   === 'all' || o.tipo  === gCat) &&
    (gAvail === 'all' || o.avail === gAvail)
  );
}

/* ── DOM refs ─────────────────────────────────────────────── */
const slideView    = document.getElementById('slide-view');
const gridView     = document.getElementById('grid-view');
const obraEmpty    = document.getElementById('obra-empty');
const obraGrid     = document.getElementById('obra-grid');
const slideImgWrap = document.getElementById('slide-img-wrap');
const slideCounter = document.getElementById('slide-counter');
const slideTitle   = document.getElementById('slide-title');
const slideMeta    = document.getElementById('slide-meta');
const slideDef     = document.getElementById('slide-def');
const slidePrice   = document.getElementById('slide-price');
const slideNota    = document.getElementById('slide-nota');
const slideAvail   = document.getElementById('slide-avail');
const slideSubNav  = document.getElementById('slide-sub-nav');
const slideSubCtr  = document.getElementById('slide-sub-counter');

/* ── Render slideshow ─────────────────────────────────────── */
function renderSlide() {
  const list = getFiltered();

  slideView.style.display  = 'none';
  gridView.style.display   = 'none';
  obraEmpty.style.display  = 'none';

  if (!list.length) {
    obraEmpty.style.display = 'flex';
    return;
  }

  slideView.style.display = 'flex';
  gIdx = Math.min(gIdx, list.length - 1);

  const obra = list[gIdx];
  const imgs = obra.imgs || (obra.img ? [obra.img] : []);
  gSub = Math.min(gSub, Math.max(imgs.length - 1, 0));

  /* image */
  const prev = slideImgWrap.querySelector('img');
  if (prev) {
    prev.style.opacity = '0';
    setTimeout(() => prev.remove(), 350);
  }
  if (imgs[gSub]) {
    const img = document.createElement('img');
    img.alt = obra.title;
    img.style.opacity = '0';
    slideImgWrap.appendChild(img);
    img.onload = () => { img.style.opacity = '1'; };
    img.src = encodeURI(imgs[gSub]);
  }

  /* counter */
  slideCounter.textContent = `${gIdx + 1} / ${list.length}`;

  /* title */
  slideTitle.textContent = obra.title;

  /* meta */
  let meta = '';
  if (obra.serie) meta += `<span>${obra.serie}</span>`;
  meta += `<span>${obra.dim}</span>`;
  meta += `<span>${obra.tecnica}</span>`;
  meta += `<span>${obra.year}</span>`;
  slideMeta.innerHTML = meta;

  /* series description */
  const def = obra.serie && SERIES_INFO[obra.serie] ? SERIES_INFO[obra.serie] : '';
  slideDef.textContent = def;
  slideDef.style.display = def ? '' : 'none';

  /* price */
  slidePrice.textContent = obra.price || '';
  slidePrice.style.display = obra.price ? '' : 'none';

  /* nota */
  slideNota.textContent = obra.nota || '';
  slideNota.style.display = obra.nota ? '' : 'none';

  /* availability */
  slideAvail.innerHTML =
    `<span class="avail-dot dot-${obra.avail}"></span>${AVAIL_LABEL[obra.avail]}`;

  /* sub-image nav */
  if (imgs.length > 1) {
    slideSubNav.style.display = 'flex';
    slideSubCtr.textContent = `${gSub + 1} / ${imgs.length}`;
  } else {
    slideSubNav.style.display = 'none';
  }
}

/* ── Render grid ──────────────────────────────────────────── */
function renderGrid() {
  const list = getFiltered();

  slideView.style.display  = 'none';
  gridView.style.display   = 'none';
  obraEmpty.style.display  = 'none';

  if (!list.length) {
    obraEmpty.style.display = 'flex';
    return;
  }

  gridView.style.display = 'block';
  obraGrid.innerHTML = '';

  list.forEach((obra, i) => {
    const item = document.createElement('div');
    item.className = 'grid-item';

    const wrap = document.createElement('div');
    wrap.className = 'grid-img-wrap';

    if (obra.img) {
      const img = document.createElement('img');
      img.src     = encodeURI(obra.img);
      img.alt     = obra.title;
      img.loading = 'lazy';
      wrap.appendChild(img);
    }

    const dot = document.createElement('span');
    dot.className = `grid-dot dot-${obra.avail}`;
    wrap.appendChild(dot);

    const cap = document.createElement('div');
    cap.className = 'grid-caption';
    cap.innerHTML =
      `<span class="grid-title">${obra.title}</span>` +
      `<span class="grid-dims">${obra.dim}</span>`;

    item.append(wrap, cap);
    item.addEventListener('click', () => {
      gIdx = i; gSub = 0;
      setView('slide');
    });
    obraGrid.appendChild(item);
  });
}

/* ── View switcher ────────────────────────────────────────── */
function setView(v) {
  gView = v;
  document.querySelectorAll('.view-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.view === v)
  );
  if (controlsSecondary) { controlsSecondary.classList.remove('open'); mobileFilterBtn.classList.remove('active'); }
  if (v === 'slide') { window.scrollTo({ top: 0, behavior: 'instant' }); renderSlide(); }
  else renderGrid();
}

/* ── Navigate obras ───────────────────────────────────────── */
function goObra(delta) {
  const list = getFiltered();
  if (!list.length) return;
  gIdx = (gIdx + delta + list.length) % list.length;
  gSub = 0;
  renderSlide();
}

function goSub(delta) {
  const list = getFiltered();
  if (!list.length) return;
  const obra = list[gIdx];
  const imgs = obra.imgs || (obra.img ? [obra.img] : []);
  gSub = (gSub + delta + imgs.length) % imgs.length;
  renderSlide();
}

/* ── Hamburger menu ───────────────────────────────────────── */
(function () {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('open', open);
  });
  nav.querySelectorAll('.mobile-nav-link').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
    });
  });
})();

/* ── Controls: category ───────────────────────────────────── */
document.getElementById('cat-nav').addEventListener('click', e => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  gCat = btn.dataset.cat;
  gIdx = 0; gSub = 0;
  document.querySelectorAll('.cat-btn').forEach(b =>
    b.classList.toggle('active', b === btn)
  );
  setView('grid');
});


/* ── Controls: availability (desktop + mobile) ────────────── */
function handleAvailClick(e) {
  const btn = e.target.closest('.avail-btn');
  if (!btn) return;
  gAvail = btn.dataset.avail;
  gIdx = 0; gSub = 0;
  document.querySelectorAll('.avail-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.avail === gAvail)
  );
  if (gView === 'slide') renderSlide();
  else renderGrid();
}
document.getElementById('avail-filter').addEventListener('click', handleAvailClick);
document.getElementById('avail-filter-mobile').addEventListener('click', handleAvailClick);

/* ── Controls: view toggle (desktop + mobile) ─────────────── */
function handleViewToggle(e) {
  const btn = e.target.closest('.view-btn');
  if (!btn) return;
  setView(btn.dataset.view);
}
document.getElementById('view-toggle').addEventListener('click', handleViewToggle);
document.getElementById('view-toggle-mobile').addEventListener('click', handleViewToggle);

/* ── Mobile filter button ─────────────────────────────────── */
const mobileFilterBtn = document.getElementById('mobile-filter-btn');
const controlsSecondary = document.getElementById('controls-secondary');
mobileFilterBtn.addEventListener('click', () => {
  const open = controlsSecondary.classList.toggle('open');
  mobileFilterBtn.classList.toggle('active', open);
});

/* ── Slide navigation buttons ─────────────────────────────── */
document.getElementById('slide-prev-obra').addEventListener('click', () => goObra(-1));
document.getElementById('slide-next-obra').addEventListener('click', () => goObra(1));
document.getElementById('slide-sub-prev').addEventListener('click', () => goSub(-1));
document.getElementById('slide-sub-next').addEventListener('click', () => goSub(1));

/* ── Keyboard navigation ──────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (gView !== 'slide') return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goObra(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goObra(-1);
});

/* ── Touch swipe ──────────────────────────────────────────── */
let _tx = 0, _ty = 0;
slideView.addEventListener('touchstart', e => {
  _tx = e.touches[0].clientX;
  _ty = e.touches[0].clientY;
}, { passive: true });
slideView.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - _tx;
  const dy = e.changedTouches[0].clientY - _ty;
  if (Math.abs(dy) > Math.abs(dx)) return;               // ignore vertical
  if (dx > window.innerWidth * 0.55) { setView('grid'); return; } // long →  = back to grid
  if (Math.abs(dx) > 48) goObra(dx < 0 ? 1 : -1);       // short ←→ = entre obras
}, { passive: true });

/* ── Init ─────────────────────────────────────────────────── */
renderGrid();
