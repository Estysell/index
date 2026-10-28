// Navigation between portfolio sections via floating bottom dock
const dockItems = document.querySelectorAll('.dock-item, .nav-item');
const pages = document.querySelectorAll('.page');

function switchTab(target) {
  dockItems.forEach(item => {
    const isTarget = item.dataset.target === target;
    item.classList.toggle('active', isTarget);
    item.setAttribute('aria-selected', isTarget);
  });

  pages.forEach(page => {
    if (page.id === `section-${target}`) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });
}

dockItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = item.dataset.target;
    switchTab(target);
  });
});

// Claude Light/Dark theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  const themeIcon = themeToggle.querySelector('i');
  let isLight = localStorage.getItem('portfolio-light-mode') === 'true';

  if (isLight) {
    document.body.classList.add('light-mode');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  themeToggle.addEventListener('click', () => {
    isLight = !isLight;
    document.body.classList.toggle('light-mode', isLight);
    localStorage.setItem('portfolio-light-mode', isLight);
    if (themeIcon) {
      themeIcon.classList.toggle('fa-moon', !isLight);
      themeIcon.classList.toggle('fa-sun', isLight);
    }
  });
}

// ==========================================
// 20 DYNAMIC COLOR PALETTES & GRADIENT PATTERNS
// ==========================================
const COLOR_PALETTES = [
  // 1. Classic Terracotta (Claude signature)
  {
    id: 'terracotta',
    name: 'Terracotta',
    preview: 'linear-gradient(135deg, #cc785c, #d97757, #e89578)',
    primary: '#d97757',
    hover: '#e28a6f',
    active: '#c5684a',
    soft: 'rgba(217, 119, 87, 0.15)',
    glow: '0 0 20px rgba(217, 119, 87, 0.35)',
    shimmer: 'linear-gradient(135deg, #cc785c 0%, #d97757 50%, #e89578 100%)',
    orb: 'rgba(217, 119, 87, 0.22)'
  },
  // 2. Electric Violet
  {
    id: 'violet',
    name: 'Violet',
    preview: 'linear-gradient(135deg, #7c3aed, #8b5cf6, #c4b5fd)',
    primary: '#8b5cf6',
    hover: '#a78bfa',
    active: '#7c3aed',
    soft: 'rgba(139, 92, 246, 0.15)',
    glow: '0 0 20px rgba(139, 92, 246, 0.4)',
    shimmer: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #c4b5fd 100%)',
    orb: 'rgba(139, 92, 246, 0.25)'
  },
  // 3. Emerald Matrix
  {
    id: 'emerald',
    name: 'Emerald',
    preview: 'linear-gradient(135deg, #059669, #10b981, #6ee7b7)',
    primary: '#10b981',
    hover: '#34d399',
    active: '#059669',
    soft: 'rgba(16, 185, 129, 0.15)',
    glow: '0 0 20px rgba(16, 185, 129, 0.35)',
    shimmer: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #6ee7b7 100%)',
    orb: 'rgba(16, 185, 129, 0.25)'
  },
  // 4. Cyberpunk Cyan
  {
    id: 'cyan',
    name: 'Cyan',
    preview: 'linear-gradient(135deg, #0891b2, #06b6d4, #67e8f9)',
    primary: '#06b6d4',
    hover: '#22d3ee',
    active: '#0891b2',
    soft: 'rgba(6, 182, 212, 0.15)',
    glow: '0 0 20px rgba(6, 182, 212, 0.35)',
    shimmer: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #67e8f9 100%)',
    orb: 'rgba(6, 182, 212, 0.25)'
  },
  // 5. Sunset Amber
  {
    id: 'amber',
    name: 'Amber',
    preview: 'linear-gradient(135deg, #d97706, #f59e0b, #fde68a)',
    primary: '#f59e0b',
    hover: '#fbbf24',
    active: '#d97706',
    soft: 'rgba(245, 158, 11, 0.15)',
    glow: '0 0 20px rgba(245, 158, 11, 0.35)',
    shimmer: 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fde68a 100%)',
    orb: 'rgba(245, 158, 11, 0.25)'
  },
  // 6. Crimson Ruby
  {
    id: 'crimson',
    name: 'Crimson',
    preview: 'linear-gradient(135deg, #e11d48, #f43f5e, #fda4af)',
    primary: '#f43f5e',
    hover: '#fb7185',
    active: '#e11d48',
    soft: 'rgba(244, 63, 94, 0.15)',
    glow: '0 0 20px rgba(244, 63, 94, 0.35)',
    shimmer: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 50%, #fda4af 100%)',
    orb: 'rgba(244, 63, 94, 0.25)'
  },
  // 7. Royal Indigo
  {
    id: 'indigo',
    name: 'Indigo',
    preview: 'linear-gradient(135deg, #4f46e5, #6366f1, #a5b4fc)',
    primary: '#6366f1',
    hover: '#818cf8',
    active: '#4f46e5',
    soft: 'rgba(99, 102, 241, 0.15)',
    glow: '0 0 20px rgba(99, 102, 241, 0.35)',
    shimmer: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #a5b4fc 100%)',
    orb: 'rgba(99, 102, 241, 0.25)'
  },
  // 8. Hacker Lime
  {
    id: 'lime',
    name: 'Lime',
    preview: 'linear-gradient(135deg, #65a30d, #84cc16, #bef264)',
    primary: '#84cc16',
    hover: '#a3e635',
    active: '#65a30d',
    soft: 'rgba(132, 204, 22, 0.15)',
    glow: '0 0 20px rgba(132, 204, 22, 0.35)',
    shimmer: 'linear-gradient(135deg, #65a30d 0%, #84cc16 50%, #bef264 100%)',
    orb: 'rgba(132, 204, 22, 0.25)'
  },
  // 9. Luxury Gold
  {
    id: 'gold',
    name: 'Gold',
    preview: 'linear-gradient(135deg, #b89628, #d4af37, #fae8a4)',
    primary: '#d4af37',
    hover: '#e6ca65',
    active: '#b89628',
    soft: 'rgba(212, 175, 55, 0.15)',
    glow: '0 0 20px rgba(212, 175, 55, 0.35)',
    shimmer: 'linear-gradient(135deg, #b89628 0%, #d4af37 50%, #fae8a4 100%)',
    orb: 'rgba(212, 175, 55, 0.25)'
  },
  // 10. Hot Magenta
  {
    id: 'magenta',
    name: 'Magenta',
    preview: 'linear-gradient(135deg, #db2777, #ec4899, #fbcfe8)',
    primary: '#ec4899',
    hover: '#f472b6',
    active: '#db2777',
    soft: 'rgba(236, 72, 153, 0.15)',
    glow: '0 0 20px rgba(236, 72, 153, 0.35)',
    shimmer: 'linear-gradient(135deg, #db2777 0%, #ec4899 50%, #fbcfe8 100%)',
    orb: 'rgba(236, 72, 153, 0.25)'
  },
  // 11. Oceanic Wave (Gradient)
  {
    id: 'ocean',
    name: 'Ocean Wave',
    preview: 'linear-gradient(135deg, #00c6ff, #0072ff)',
    primary: '#00a2ff',
    hover: '#38bdf8',
    active: '#0072ff',
    soft: 'rgba(0, 162, 255, 0.15)',
    glow: '0 0 20px rgba(0, 162, 255, 0.4)',
    shimmer: 'linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)',
    orb: 'rgba(0, 162, 255, 0.25)'
  },
  // 12. Sunset Fire (Gradient)
  {
    id: 'sunset-fire',
    name: 'Sunset Fire',
    preview: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
    primary: '#ff4b2b',
    hover: '#ff6b4a',
    active: '#e03314',
    soft: 'rgba(255, 75, 43, 0.15)',
    glow: '0 0 20px rgba(255, 75, 43, 0.4)',
    shimmer: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
    orb: 'rgba(255, 75, 43, 0.25)'
  },
  // 13. Aurora Glow (Gradient)
  {
    id: 'aurora',
    name: 'Aurora',
    preview: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    primary: '#fd1d1d',
    hover: '#ff4d4d',
    active: '#cc1111',
    soft: 'rgba(253, 29, 29, 0.15)',
    glow: '0 0 20px rgba(253, 29, 29, 0.35)',
    shimmer: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    orb: 'rgba(253, 29, 29, 0.25)'
  },
  // 14. Cyber Synth (Gradient)
  {
    id: 'cyber-synth',
    name: 'Cyber Synth',
    preview: 'linear-gradient(135deg, #f72585, #7209b7, #4cc9f0)',
    primary: '#f72585',
    hover: '#ff4099',
    active: '#d60067',
    soft: 'rgba(247, 37, 133, 0.15)',
    glow: '0 0 20px rgba(247, 37, 133, 0.4)',
    shimmer: 'linear-gradient(135deg, #7209b7 0%, #f72585 50%, #4cc9f0 100%)',
    orb: 'rgba(247, 37, 133, 0.25)'
  },
  // 15. Jade Forest (Gradient)
  {
    id: 'jade',
    name: 'Jade Forest',
    preview: 'linear-gradient(135deg, #11998e, #38ef7d)',
    primary: '#10b981',
    hover: '#34d399',
    active: '#059669',
    soft: 'rgba(17, 153, 142, 0.15)',
    glow: '0 0 20px rgba(56, 239, 125, 0.35)',
    shimmer: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    orb: 'rgba(56, 239, 125, 0.22)'
  },
  // 16. Solar Flare (Gradient)
  {
    id: 'solar',
    name: 'Solar Flare',
    preview: 'linear-gradient(135deg, #ff8c00, #e52d27)',
    primary: '#ff8c00',
    hover: '#ffa033',
    active: '#d97700',
    soft: 'rgba(255, 140, 0, 0.15)',
    glow: '0 0 20px rgba(255, 140, 0, 0.38)',
    shimmer: 'linear-gradient(135deg, #e52d27 0%, #ff8c00 100%)',
    orb: 'rgba(255, 140, 0, 0.25)'
  },
  // 17. Deep Twilight (Gradient)
  {
    id: 'twilight',
    name: 'Twilight',
    preview: 'linear-gradient(135deg, #3a7bd5, #3a6073)',
    primary: '#3a7bd5',
    hover: '#5993e5',
    active: '#2662b5',
    soft: 'rgba(58, 123, 213, 0.15)',
    glow: '0 0 20px rgba(58, 123, 213, 0.35)',
    shimmer: 'linear-gradient(135deg, #3a6073 0%, #3a7bd5 100%)',
    orb: 'rgba(58, 123, 213, 0.25)'
  },
  // 18. Flamingo Rose (Gradient)
  {
    id: 'flamingo',
    name: 'Flamingo',
    preview: 'linear-gradient(135deg, #ee0979, #ff6a00)',
    primary: '#ee0979',
    hover: '#f43493',
    active: '#c80060',
    soft: 'rgba(238, 9, 121, 0.15)',
    glow: '0 0 20px rgba(238, 9, 121, 0.38)',
    shimmer: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    orb: 'rgba(238, 9, 121, 0.25)'
  },
  // 19. Glacier Ice (Gradient)
  {
    id: 'glacier',
    name: 'Glacier Ice',
    preview: 'linear-gradient(135deg, #00b4db, #0083b0)',
    primary: '#00b4db',
    hover: '#26c6eb',
    active: '#0083b0',
    soft: 'rgba(0, 180, 219, 0.15)',
    glow: '0 0 20px rgba(0, 180, 219, 0.38)',
    shimmer: 'linear-gradient(135deg, #0083b0 0%, #00b4db 100%)',
    orb: 'rgba(0, 180, 219, 0.25)'
  },
  // 20. Cosmic Plum (Gradient)
  {
    id: 'plum',
    name: 'Cosmic Plum',
    preview: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
    primary: '#8e2de2',
    hover: '#a54bf0',
    active: '#6f1bc2',
    soft: 'rgba(142, 45, 226, 0.15)',
    glow: '0 0 20px rgba(142, 45, 226, 0.4)',
    shimmer: 'linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%)',
    orb: 'rgba(142, 45, 226, 0.25)'
  }
];

function applyColorPalette(paletteId) {
  const palette = COLOR_PALETTES.find(p => p.id === paletteId) || COLOR_PALETTES[0];
  const root = document.documentElement;

  root.style.setProperty('--claude-terracotta', palette.primary);
  root.style.setProperty('--claude-terracotta-hover', palette.hover);
  root.style.setProperty('--claude-terracotta-active', palette.active);
  root.style.setProperty('--claude-terracotta-soft', palette.soft);
  root.style.setProperty('--claude-terracotta-glow', palette.glow);
  root.style.setProperty('--claude-shimmer', palette.shimmer);

  // Update ambient glow spotlight
  const ambientOrb = document.querySelector('.ambient-orb');
  if (ambientOrb) {
    ambientOrb.style.background = `radial-gradient(ellipse at center, ${palette.orb} 0%, rgba(20,20,18,0.06) 50%, transparent 70%)`;
  }

  // Update active swatch state
  document.querySelectorAll('.palette-swatch').forEach(swatch => {
    swatch.classList.toggle('active', swatch.dataset.id === palette.id);
  });

  localStorage.setItem('portfolio-accent-theme', palette.id);
}

// Initialize 20 Color Picker Swatches
const palettesGrid = document.getElementById('palettesGrid');
const settingsBtn = document.getElementById('settingsBtn');
const colorPickerOverlay = document.getElementById('colorPickerOverlay');
const colorPickerPanel = document.getElementById('colorPickerPanel');
const closePickerBtn = document.getElementById('closePickerBtn');

if (palettesGrid) {
  const savedPalette = localStorage.getItem('portfolio-accent-theme') || 'terracotta';

  COLOR_PALETTES.forEach(palette => {
    const btn = document.createElement('button');
    btn.className = `palette-swatch ${palette.id === savedPalette ? 'active' : ''}`;
    btn.dataset.id = palette.id;
    btn.title = `Switch to ${palette.name} theme`;
    btn.innerHTML = `
      <div class="swatch-circle" style="background: ${palette.preview}; color: ${palette.primary};"></div>
      <span class="swatch-name">${palette.name}</span>
    `;
    btn.addEventListener('click', () => {
      applyColorPalette(palette.id);
    });
    palettesGrid.appendChild(btn);
  });

  // Apply initial saved palette
  applyColorPalette(savedPalette);
}

// Centered Modal Open/Close handlers
if (settingsBtn && colorPickerOverlay) {
  const openColorPicker = () => {
    colorPickerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeColorPicker = () => {
    colorPickerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openColorPicker();
  });

  if (closePickerBtn) {
    closePickerBtn.addEventListener('click', closeColorPicker);
  }

  // Close when clicking outside card on the overlay
  colorPickerOverlay.addEventListener('click', (e) => {
    if (e.target === colorPickerOverlay) {
      closeColorPicker();
    }
  });
}

// ==========================================
// SETTINGS TABS (COLORS vs FONTS)
// ==========================================
const settingsTabBtns = document.querySelectorAll('.settings-tab-btn');
const tabPanes = {
  colors: document.getElementById('tabColors'),
  fonts: document.getElementById('tabFonts')
};

settingsTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    settingsTabBtns.forEach(b => b.classList.toggle('active', b === btn));
    if (tabPanes.colors) tabPanes.colors.classList.toggle('active', tabName === 'colors');
    if (tabPanes.fonts) tabPanes.fonts.classList.toggle('active', tabName === 'fonts');
  });
});

// ==========================================
// 20 FONT FAMILIES DYNAMIC SELECTOR
// ==========================================
const FONT_FAMILIES = [
  { id: 'inter', name: 'Inter', category: 'Modern Sans', stack: "'Inter', sans-serif" },
  { id: 'newsreader', name: 'Newsreader', category: 'Claude Serif', stack: "'Newsreader', Georgia, serif" },
  { id: 'poppins', name: 'Poppins', category: 'Geometric Sans', stack: "'Poppins', sans-serif" },
  { id: 'roboto', name: 'Roboto', category: 'Neo-Grotesque', stack: "'Roboto', sans-serif" },
  { id: 'plus-jakarta', name: 'Plus Jakarta', category: 'Tech Sans', stack: "'Plus Jakarta Sans', sans-serif" },
  { id: 'montserrat', name: 'Montserrat', category: 'Urban Sans', stack: "'Montserrat', sans-serif" },
  { id: 'open-sans', name: 'Open Sans', category: 'Humanist Sans', stack: "'Open Sans', sans-serif" },
  { id: 'lora', name: 'Lora', category: 'Elegant Serif', stack: "'Lora', serif" },
  { id: 'playfair', name: 'Playfair Display', category: 'Luxury Serif', stack: "'Playfair Display', serif" },
  { id: 'space-grotesk', name: 'Space Grotesk', category: 'Cyber Sans', stack: "'Space Grotesk', sans-serif" },
  { id: 'fira-code', name: 'Fira Code', category: 'Code Monospace', stack: "'Fira Code', monospace" },
  { id: 'outfit', name: 'Outfit', category: 'Futuristic Sans', stack: "'Outfit', sans-serif" },
  { id: 'cinzel', name: 'Cinzel', category: 'Classical Serif', stack: "'Cinzel', serif" },
  { id: 'dm-sans', name: 'DM Sans', category: 'Clean Sans', stack: "'DM Sans', sans-serif" },
  { id: 'manrope', name: 'Manrope', category: 'Semi-Geometric', stack: "'Manrope', sans-serif" },
  { id: 'merriweather', name: 'Merriweather', category: 'Editorial Serif', stack: "'Merriweather', serif" },
  { id: 'syne', name: 'Syne', category: 'Design Sans', stack: "'Syne', sans-serif" },
  { id: 'epilogue', name: 'Epilogue', category: 'Bold Sans', stack: "'Epilogue', sans-serif" },
  { id: 'fraunces', name: 'Fraunces', category: 'Vintage Serif', stack: "'Fraunces', serif" },
  { id: 'raleway', name: 'Raleway', category: 'Refined Sans', stack: "'Raleway', sans-serif" }
];

function applyFontFamily(fontId) {
  const font = FONT_FAMILIES.find(f => f.id === fontId) || FONT_FAMILIES[0];
  document.documentElement.style.setProperty('--font-sans', font.stack);
  document.body.style.fontFamily = font.stack;

  document.querySelectorAll('.font-card-btn').forEach(card => {
    card.classList.toggle('active', card.dataset.id === font.id);
  });

  localStorage.setItem('portfolio-font-family', font.id);
}

const fontsGrid = document.getElementById('fontsGrid');
if (fontsGrid) {
  const savedFont = localStorage.getItem('portfolio-font-family') || 'inter';

  FONT_FAMILIES.forEach(font => {
    const card = document.createElement('button');
    card.className = `font-card-btn ${font.id === savedFont ? 'active' : ''}`;
    card.dataset.id = font.id;
    card.style.fontFamily = font.stack;
    card.innerHTML = `
      <span class="font-card-name" style="font-family: ${font.stack};">${font.name}</span>
      <span class="font-card-badge">${font.category}</span>
      <span class="font-card-sample" style="font-family: ${font.stack};">Aa Bb Gg 123</span>
    `;
    card.addEventListener('click', () => {
      applyFontFamily(font.id);
    });
    fontsGrid.appendChild(card);
  });

  applyFontFamily(savedFont);
}

// ==========================================
// RESUME MODAL VIEWER
// ==========================================
const resumeBtn = document.querySelector('.resume-btn');
const resumeModal = document.getElementById('resumeModal');
const closeResumeBtn = document.getElementById('closeResumeBtn');
const printResumeBtn = document.getElementById('printResumeBtn');

if (resumeBtn && resumeModal) {
  resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', closeModal);
  }

  // Click on backdrop to close
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      closeModal();
    }
  });

  // Print / Save PDF
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Escape key closes both modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      if (colorPickerOverlay) {
        colorPickerOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
  });
}

// ==========================================
// CONTACT FORM SUBMISSION
// ==========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitText = submitBtn.querySelector('span');
    const submitIcon = submitBtn.querySelector('i');
    
    submitBtn.disabled = true;
    if (submitText) submitText.textContent = 'Sending...';
    if (submitIcon) submitIcon.className = 'fa-solid fa-spinner fa-spin';
    if (formStatus) {
      formStatus.textContent = 'Submitting message...';
      formStatus.className = 'form-status info';
    }

    const formData = new FormData(contactForm);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      _subject: `New Portfolio Message from ${formData.get('name')}`,
      _replyto: formData.get('email')
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/akhilthadaka97@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        if (formStatus) {
          formStatus.textContent = '✓ Message successfully sent to akhilthadaka97@gmail.com!';
          formStatus.className = 'form-status success';
        }
        contactForm.reset();
      } else {
        throw new Error('API submission error');
      }
    } catch (err) {
      const mailtoUrl = `mailto:akhilthadaka97@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(payload.name)}&body=${encodeURIComponent(payload.message + '\n\nFrom: ' + payload.email)}`;
      window.location.href = mailtoUrl;
      if (formStatus) {
        formStatus.textContent = 'Redirecting to your email client to send to akhilthadaka97@gmail.com...';
        formStatus.className = 'form-status info';
      }
    } finally {
      submitBtn.disabled = false;
      if (submitText) submitText.textContent = 'Send Message';
      if (submitIcon) submitIcon.className = 'fa-solid fa-paper-plane';
    }
  });
}
