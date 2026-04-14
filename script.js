/* ============================================================
   script.js — Miguel Costemalle Carrandi
   ============================================================ */

'use strict';

const AVAIL_LABEL = {
  green:  'Disponible',
  red:    'No disponible',
  yellow: 'Disponible para exponer — vendido'
};

const SERIES_INFO = {
  'La caída al bailar de las calacas': 'Esta serie describe los sucesos cotidianos a través del pensar de las calaveras, donde cada calavera canta un poema.',
  'Murciélagos': null,
  'Resantes': 'Toda esta serie cuenta con un precio de adquisición completa de $85,000 MXN.',
  'Pared Maria': null,
  'Carbones': null,
};

const IMG = f => f;

/* ── CATÁLOGO ──────────────────────────────────────────────── */
const OBRAS = [
  { id: 'fer-calaca-24', title: '"FER" CALACA 24', dim: '179×60 cm', tecnica: 'Óleo, acuarelas, plumones de acrílico y pintura acrílica sobre lino', year: '2023', price: null, avail: 'red', bg: '#c8303a', serie: 'La caída al bailar de las calacas', img: IMG('FER CALACA 24.jpg') },
  { id: 'calacazul-2-olvera', title: 'CALACAZUL 2 "OLVERA"', dim: '120×150 cm', tecnica: 'Acrílico y pasteles de óleo sobre lino', year: '2024', price: null, avail: 'red', bg: '#c8303a', serie: 'La caída al bailar de las calacas', img: IMG('CALACAZUL 2 OLVERA.jpg') },
  { id: 'mural-ekta-calaca-25', title: 'MURAL "EKTA" CALACA 25', dim: '220×345 cm', tecnica: 'Plumones sobre papel, pintura para pared, plumones acrílicos, pasteles de óleo y pintura acrílica sobre muro', year: '2024', price: null, avail: 'red', bg: '#8bc4d8', serie: 'La caída al bailar de las calacas', img: IMG('MURAL EKTA CALACA 25.jpg') },
  { id: 'ekta-4-calaca-26', title: '"EKTA 4" CALACA 26', dim: '155×80 cm', tecnica: 'Óleo, acuarelas, arena, plumones de acrílico y pintura acrílica sobre lino', year: '2024', price: null, avail: 'red', bg: '#78b0d0', serie: 'La caída al bailar de las calacas', img: IMG('EKTA 4 CALACA 26.jpg') },
  { id: 'ekta-calaca-27', title: 'EKTA CALACA 27', dim: '35×178 cm', tecnica: 'Óleo, acuarelas, plumones de acrílico, pasteles de óleo y pintura acrílica sobre lienzo', year: '2023', price: null, avail: 'red', bg: '#1a2a4a', serie: 'La caída al bailar de las calacas', img: IMG('EKTA CALACA 27.jpg') },
  { id: 'lou', title: '"LOU"', dim: '200×300 cm', tecnica: 'Acrílico y óleo sobre lino', year: '2024', price: '170,000 MXN', avail: 'green', bg: '#1a2060', serie: null, img: IMG('LOU.jpg') },
  { id: '7-en-guerra', title: '"7 EN GUERRA"', dim: '216×250 cm', tecnica: 'Acrílico y óleo sobre lino', year: '2024', price: null, avail: 'red', bg: '#f0c020', serie: null, img: IMG('7 EN GUERRA.jpg') },
  { id: 'me-das-mi-domingo', title: '"¿ME DAS MI DOMINGO?1"', dim: '197×192 cm', tecnica: 'Grabado', year: '2026', price: null, avail: 'yellow', bg: '#8b1a20', serie: null, img: IMG('ME DAS MI DOMINGO 1.jpg') },
  { id: 'murcielagos-grabado', title: '"MURCIÉLAGOS"', dim: '60×70 cm', tecnica: 'Grabado sobre hoja de algodón', year: '2025', price: null, avail: 'green', bg: '#e8e8e8', serie: 'Murciélagos', img: IMG('MURCIÉLAGOS 1.jpg') },
  { id: 'solo-los-muertos', title: '"solo los muertos pueden juzgar"', dim: '60×70 cm', tecnica: 'Grabado', year: '2025', price: '7,000 MXN', avail: 'green', bg: '#c8c800', serie: 'Murciélagos', img: IMG('solo los muertos pueden juzgar.jpg') },
  { id: 'instalacion-murcielagos', title: 'INSTALACIÓN MURCIÉLAGOS', dim: 'Variable', tecnica: 'Escultura e instalación', year: '2024', price: 'desde $18,000 MXN por pieza', nota: 'Con cúpula: desde $30,000 MXN el par hasta $190,000 MXN por ocho piezas.', avail: 'green', bg: '#c8b060', serie: 'Murciélagos', img: IMG('INSTALACIÓN MURCIÉLAGOS 5.jpg'), imgs: ['INSTALACIÓN MURCIÉLAGOS 1.jpg','INSTALACIÓN MURCIÉLAGOS 2.jpg','INSTALACIÓN MURCIÉLAGOS 3.jpg','INSTALACIÓN MURCIÉLAGOS 4.jpg','INSTALACIÓN MURCIÉLAGOS 5.jpg','INSTALACIÓN MURCIÉLAGOS 6.jpg','INSTALACIÓN MURCIÉLAGOS 7.jpg','INSTALACIÓN MURCIÉLAGOS 8.jpg','INSTALACIÓN MURCIÉLAGOS 9.jpg','INSTALACIÓN MURCIÉLAGOS 10.jpg','INSTALACIÓN MURCIÉLAGOS 11.jpg','INSTALACIÓN MURCIÉLAGOS 12.jpg','INSTALACIÓN MURCIÉLAGOS 13.jpg'] },
  { id: 'murcielago-icniuhyotl-s', title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '8.5×8.5 cm', tecnica: 'Grabado', year: '2026', price: null, avail: 'green', bg: '#5a0818', serie: 'Murciélagos', img: IMG('MURCIÉLAGO Icniuhyotl pequeño.jpg') },
  { id: 'murcielago-icniuhyotl-l', title: '"MURCIÉLAGO Icnīuhyōtl"', dim: '24×17.5 cm', tecnica: 'Grabado', year: '2026', price: null, avail: 'green', bg: '#5a0818', serie: 'Murciélagos', img: IMG('MURCIÉLAGO Icniuhyotl.jpg') },
  { id: 'umbral', title: '"UMBRAL"', dim: '130×245 cm', tecnica: 'Óleos sobre hoja de concreto', year: '2025', price: '50,000 MXN', avail: 'green', bg: '#d8d8d8', serie: 'Resantes', img: IMG('UMBRAL.jpg') },
  { id: 'el-hombre', title: '"El hombre"', dim: '130×135 cm', tecnica: 'Acrílico sobre hoja de cemento', year: '2025', price: '30,000 MXN', avail: 'green', bg: '#1a50c0', serie: 'Resantes', img: IMG('El hombre.jpg') },
  { id: 'la-mujer', title: '"La mujer"', dim: '130×135 cm', tecnica: 'Acrílico sobre hoja de cemento', year: '2025', price: '30,000 MXN', avail: 'green', bg: '#a8c8e8', serie: 'Resantes', img: IMG('La mujer.jpg') },
  { id: 'el-altar', title: '"El altar"', dim: '130×135 cm', tecnica: 'Acrílico sobre hoja de cemento', year: '2025', price: '30,000 MXN', avail: 'green', bg: '#e0e0e0', serie: 'Resantes', img: IMG('El altar.jpg') },
  { id: 'mutilado-1', title: '"Mutilado 1"', dim: '30×30 cm', tecnica: 'Acrílico sobre cemento', year: '2025', price: '15,000 MXN', avail: 'green', bg: '#c82030', serie: 'Resantes', img: IMG('Mutilado 1.jpg') },
  { id: 'mutilado-2', title: '"Mutilado 2"', dim: '30×30 cm', tecnica: 'Acrílico sobre cemento', year: '2025', price: '15,000 MXN', avail: 'green', bg: '#c030c0', serie: 'Resantes', img: IMG('Mutilado 2.jpg') },
  { id: 'la-cabeza', title: '"La cabeza"', dim: '30×30 cm', tecnica: 'Acrílico sobre cemento', year: '2025', price: '15,000 MXN', avail: 'green', bg: '#e8e8e8', serie: 'Resantes', img: IMG('La cabeza.jpg') },
  { id: 'mutilado-3', title: '"Mutilado 3"', dim: '30×30 cm', tecnica: 'Acrílico sobre cemento', year: '2025', price: '15,000 MXN', avail: 'green', bg: '#d8e860', serie: 'Resantes', img: IMG('Mutilado 3.jpg') },
  { id: 'mutilado-4', title: '"Mutilado 4"', dim: '30×30 cm', tecnica: 'Acrílico sobre cemento', year: '2025', price: '15,000 MXN', avail: 'green', bg: '#1888f0', serie: 'Resantes', img: IMG('Mutilado 4.jpg') },
  { id: 'pared-maria-1', title: '"PARED MARIA 1"', dim: '30×24 cm', tecnica: 'Óleo sobre lino', year: '2026', price: null, avail: 'green', bg: '#8b1a30', serie: 'Pared Maria', img: IMG('PARED MARIA 1.jpg') },
  { id: 'pared-maria-2', title: '"PARED MARIA 2"', dim: '30×24 cm', tecnica: 'Óleo sobre lino', year: '2026', price: null, avail: 'green', bg: '#c09840', serie: 'Pared Maria', img: IMG('PARED MARIA 2.jpg') },
  { id: 'pared-maria-3', title: '"PARED MARIA 3"', dim: '30×24 cm', tecnica: 'Óleo sobre lino', year: '2026', price: null, avail: 'green', bg: '#4aaa50', serie: 'Pared Maria', img: IMG('PARED MARIA 3.jpg') },
  { id: 'paredes', title: '"PAREDES"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#2a2a2a', serie: 'Carbones', img: IMG('PAREDES.jpg') },
  { id: 'callejon', title: '"CALLEJON"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#1e1e1e', serie: 'Carbones', img: IMG('CALLEJON.jpg') },
  { id: 'ventanas', title: '"VENTANAS"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#303030', serie: 'Carbones', img: IMG('VENTANAS.jpg') },
  { id: 'esquina', title: '"ESQUINA"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#252525', serie: 'Carbones', img: IMG('ESQUINA.jpg') },
  { id: 'desde-un-balcon', title: '"DESDE UN BALCÓN"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#282828', serie: 'Carbones', img: IMG('DESDE UN BALCON.jpg') },
  { id: 'esquina-2', title: '"ESQUINA 2"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#1a1a1a', serie: 'Carbones', img: IMG('ESQUINA 2.jpg') },
  { id: 'maria-carbon', title: '"MARIA"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#222222', serie: 'Carbones', img: IMG('MARIA.jpg') },
  { id: 'vista-carro-helado', title: '"VISTA DESDE CARRO DE HELADO"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#2e2e2e', serie: 'Carbones', img: IMG('VISTA DESDE CARRO DE HELADO.jpg') },
  { id: 'nino-lloron', title: '"NIÑO LLORON"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#202020', serie: 'Carbones', img: IMG('NIÑO LLORON.jpg') },
  { id: 'en-construccion', title: '"EN CONSTRUCCIÓN"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#262626', serie: 'Carbones', img: IMG('EN CONSTRUCCION.jpg') },
  { id: 'jardin', title: '"JARDÍN"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#1c1c1c', serie: 'Carbones', img: IMG('JARDIN.jpg') },
  { id: 'cama', title: '"CAMA"', dim: '60×70 cm', tecnica: 'Carbón sobre papel de algodón', year: '2026', price: null, avail: 'green', bg: '#242424', serie: 'Carbones', img: IMG('CAMA.jpg') }
];

const SERIES_ORDER = [
  'La caída al bailar de las calacas',
  null,          
  'Murciélagos',
  'Resantes',
  'Pared Maria',
  'Carbones',
];

function findById(id) {
  return OBRAS.find(o => o.id === id) || null;
}

/* ── HERO CROSSFADE SLIDESHOW (Usa todas las imágenes) ── */
function initHeroSlideshow() {
  // Extraemos todas las rutas de imágenes existentes
  const allImages = OBRAS.map(o => o.img).filter(Boolean);
  
  // Opcional: Revolvemos el array para que empiece diferente cada vez
  allImages.sort(() => Math.random() - 0.5);

  if (!allImages.length) return;

  const bg1 = document.getElementById('hero-bg-1');
  const bg2 = document.getElementById('hero-bg-2');
  
  let currentIndex = 0;
  let activeBg = 1;

  // Imagen inicial
  bg1.style.backgroundImage = `url('${encodeURI(allImages[currentIndex])}')`;
  bg1.style.opacity = 1;

  // Inicia el intervalo de cambio de imagen
  setInterval(() => {
    currentIndex = (currentIndex + 1) % allImages.length;
    const nextImgUrl = `url('${encodeURI(allImages[currentIndex])}')`;

    if (activeBg === 1) {
      bg2.style.backgroundImage = nextImgUrl;
      bg2.style.opacity = 1;
      bg1.style.opacity = 0;
      activeBg = 2;
    } else {
      bg1.style.backgroundImage = nextImgUrl;
      bg1.style.opacity = 1;
      bg2.style.opacity = 0;
      activeBg = 1;
    }
  }, 4500); // Cambia de imagen cada 4.5 segundos
}

initHeroSlideshow();

/* ── HEADER SCROLL LOGIC ── */
(function () {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.7) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  }, { passive: true });
})();

/* ── BUILD A SINGLE OBRA ITEM ── */
function makeItem(obra) {
  const a = document.createElement('a');
  a.href = '#';
  a.className = 'obra-item';
  a.dataset.id = obra.id;
  a.setAttribute('aria-label', obra.title);

  const div = document.createElement('div');
  div.className = 'obra-thumb';
  div.style.backgroundColor = obra.bg || '#f0f0f0';

  if (obra.img) {
    const img = document.createElement('img');
    img.src = encodeURI(obra.img);
    img.alt = obra.title;
    img.loading = 'lazy';
    div.appendChild(img);
  }

  if (obra.avail !== 'red') {
    const dot = document.createElement('span');
    dot.className = `item-dot dot-${obra.avail}`;
    div.appendChild(dot);
  }

  a.appendChild(div);
  a.addEventListener('click', e => { 
    e.preventDefault(); 
    openModal(obra.id); 
  });
  return a;
}

/* ── BUILD SERIES GRID ── */
function buildSeriesSections() {
  const container = document.getElementById('obra-series');
  if (!container) return;

  SERIES_ORDER.forEach(serieName => {
    const items = OBRAS.filter(o => o.serie === serieName);
    if (!items.length) return;

    const section = document.createElement('div');
    section.className = 'serie-section';

    const grid = document.createElement('div');
    grid.className = 'serie-grid';
    items.forEach(obra => grid.appendChild(makeItem(obra)));
    section.appendChild(grid);

    container.appendChild(section);
  });
}

buildSeriesSections();

/* ── MODAL ───────────────────────────────────────────────── */
const modalEl          = document.getElementById('modal');
const modalClose       = document.getElementById('modal-close');
const modalTitle       = document.getElementById('modal-title');
const modalMeta        = document.getElementById('modal-meta');
const modalSerieDef    = document.getElementById('modal-serie-def');
const modalPrice       = document.getElementById('modal-price');
const modalNota        = document.getElementById('modal-nota');
const modalAvail       = document.getElementById('modal-avail');
const modalPlaceholder = document.getElementById('modal-placeholder');
const modalImgNav      = document.getElementById('modal-img-nav');
const modalImgPrev     = document.getElementById('modal-img-prev');
const modalImgNext     = document.getElementById('modal-img-next');
const modalImgCounter  = document.getElementById('modal-img-counter');

let _imgs = [];
let _imgIdx = 0;

function setModalImg(idx) {
  _imgIdx = (idx + _imgs.length) % _imgs.length;
  modalPlaceholder.innerHTML = '';
  if (_imgs[_imgIdx]) {
    const img = document.createElement('img');
    img.src = encodeURI(_imgs[_imgIdx]);
    img.alt = '';
    modalPlaceholder.appendChild(img);
  }
  if (_imgs.length > 1) {
    modalImgCounter.textContent = `${_imgIdx + 1} / ${_imgs.length}`;
  }
}

modalImgPrev.addEventListener('click', () => setModalImg(_imgIdx - 1));
modalImgNext.addEventListener('click', () => setModalImg(_imgIdx + 1));

function openModal(id) {
  const obra = findById(id);
  if (!obra) return;

  modalTitle.textContent = obra.title;

  let metaHTML = '';
  if (obra.serie) metaHTML += `<span>${obra.serie}</span>`;
  metaHTML += `<span>${obra.dim}</span>`;
  metaHTML += `<span>${obra.tecnica}</span>`;
  metaHTML += `<span>${obra.year}</span>`;
  modalMeta.innerHTML = metaHTML;

  const serieDef = obra.serie && SERIES_INFO[obra.serie] ? SERIES_INFO[obra.serie] : '';
  modalSerieDef.textContent = serieDef;
  modalSerieDef.style.display = serieDef ? '' : 'none';

  modalPrice.textContent = obra.price || '';

  const nota = obra.nota || '';
  modalNota.textContent = nota;
  modalNota.style.display = nota ? '' : 'none';

  modalAvail.innerHTML = `
    <span class="modal-avail-dot dot-${obra.avail}"></span>
    ${AVAIL_LABEL[obra.avail]}
  `;

  _imgs = obra.imgs || (obra.img ? [obra.img] : []);
  const multiple = _imgs.length > 1;
  modalImgNav.style.display = multiple ? 'flex' : 'none';
  setModalImg(0);

  modalEl.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalEl.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });