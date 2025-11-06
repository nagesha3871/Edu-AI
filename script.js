/* =========================================================
   EduAI Global – Production-Ready script.js
   (replaces the old EcoPulse-only file)
   ========================================================= */

/* ============ 1.  EduAI GLOBAL STATE  =================== */
let questionsSolvedToday = 2_850_000;      // dashboard card
let avgTimePerQuestion   = 47;             // seconds
let globalAccuracy       = 87.4;           // %
let studentsReached      = 1_800_000_000;  // 1.8 B
let questionBankSize     = 100_500;
let countriesActive      = 195;
let aiAccuracy           = 99.87;

/* ============ 2.  LIVE AI ACTIVITY LOG  ================ */
const aiMessages = [
  { text: 'NTA 2025 NEET paper uploaded – 200 new questions auto-tagged', type: 'success' },
  { text: 'College-Board SAT API synced – 3 new practice tests live', type: 'info' },
  { text: 'Khan-Academy integration: 1 400 new maths drills added', type: 'process' },
  { text: 'AI model retrained – JEE-Mains accuracy now 99.91 %', type: 'success' },
  { text: 'ExamSIDE scrape complete – 11 482 UPSC MCQs deduplicated', type: 'process' },
  { text: 'Global study heat-map refreshed – India region +18 % activity', type: 'info' },
  { text: 'Edge-CDN cache purged – latency < 180 ms for 94 % users', type: 'success' },
  { text: 'Blockchain micro-certs issued: 42 017 certificates minted today', type: 'process' },
  { text: 'Adaptive engine: avg. question time reduced by 2.3 s', type: 'info' },
  { text: 'New language pack deployed – support for 17 regional langs', type: 'success' }
];

let aiLogEntries = aiMessages.slice(0, 5).map(m => ({
  time: getCurrentTime(),
  message: m.text,
  type: m.type
}));

/* ============ 3.  PARTNER DATA  ======================== */
const partnerCompanies = [
  { name: 'NTA India', sector: 'Official Exam Body', logo: '📋', established: '2018' },
  { name: 'College Board', sector: 'SAT & AP Provider', logo: '📝', established: '1899' },
  { name: 'Khan Academy', sector: 'Free Learning Content', logo: '🎓', established: '2006' },
  { name: 'ExamSIDE', sector: 'Previous-Year Question Bank', logo: '❓', established: '2015' },
  { name: 'OpenWeatherMap', sector: 'Weather Data API', logo: '🌤️', established: '2012' },
  { name: 'GitHub Education', sector: 'Student Developer Pack', logo: '🐙', established: '2014' },
  { name: 'Google for Education', sector: 'Classroom & APIs', logo: '🔍', established: '2006' },
  { name: 'Cloudflare for Startups', sector: 'Edge CDN', logo: '☁️', established: '2019' }
];

/* ============ 4.  EcoPulse LEGACY STATE  =============== */
let co2Level = 419.5;
let devicesConnected = 7_892_543_210;
let co2Removed = 2_847_392;
let aiEfficiency = 99.87;
let globalReduction = 15.3;
let activeProjects = 1_247;
let realCO2Data = null;
let weatherData = null;
let cryptoData = null;

/* ============ 5.  UTILITIES  =========================== */
function getCurrentTime() {
  const d = new Date();
  return d.toLocaleTimeString('en-GB');
}
function formatNumber(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toString();
}

/* ============ 6.  REAL-TIME METRICS  =================== */
function updateDashboardMetrics() {
  /* gentle drift to feel alive */
  questionsSolvedToday += Math.floor(Math.random() * 1_200 - 400);
  avgTimePerQuestion   = Math.max(35, avgTimePerQuestion + (Math.random() - 0.5));
  globalAccuracy       = Math.min(95, Math.max(80, globalAccuracy + (Math.random() - 0.5) * 0.2));

  const els = {
    questionsSolved: document.getElementById('questionsSolved'),
    avgTime:       document.getElementById('avgTime'),
    accuracy:      document.getElementById('accuracy')
  };
  if (els.questionsSolved) els.questionsSolved.textContent = formatNumber(questionsSolvedToday);
  if (els.avgTime)         els.avgTime.textContent       = Math.round(avgTimePerQuestion);
  if (els.accuracy)        els.accuracy.textContent      = globalAccuracy.toFixed(1);
}

/* ============ 7.  AI LOG  ============================== */
function renderAILog() {
  const box = document.getElementById('aiLog');
  if (!box) return;
  box.innerHTML = aiLogEntries.map(e => `
    <div class="ai-log-entry ${e.type}">
      <span class="log-time">${e.time}</span>
      <span class="log-message">${e.message}</span>
    </div>`).join('');
}
function addAILogEntry(custom = null) {
  const entry = custom || {
    time: getCurrentTime(),
    message: aiMessages[Math.floor(Math.random() * aiMessages.length)].text,
    type: ['info', 'success', 'process'][Math.floor(Math.random() * 3)]
  };
  aiLogEntries.unshift(entry);
  aiLogEntries = aiLogEntries.slice(0, 7);
  renderAILog();
}

/* ============ 8.  PARTNERS RENDER  ===================== */
function renderPartners() {
  const grid = document.getElementById('partnersGrid');
  if (!grid) return;
  grid.innerHTML = partnerCompanies.map((p, i) => `
    <div class="partner-card" data-aos="fade-up" data-aos-delay="${i * 50}">
      <div class="partner-logo">${p.logo}</div>
      <h3 class="partner-name">${p.name}</h3>
      <p class="partner-sector">${p.sector}</p>
      <p class="partner-established">Est. ${p.established}</p>
    </div>`).join('');
}

/* ============ 9.  FORM HANDLER  ======================== */
function handleFormSubmit(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const subject = encodeURIComponent(`EduAI Global – ${data.interest} inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || '–'}
Company: ${data.company || '–'}
Country: ${data.country}
Interest: ${data.interest}

Message:
${data.message}

—
Sent from EduAI Global contact form
Timestamp: ${new Date().toLocaleString()}`
  );
  window.location.href = `mailto:nagesha3103@gmail.com?subject=${subject}&body=${body}`;
  alert('Opening your mail client… just send the pre-filled message to finish.');
  e.target.reset();
}

/* ============ 10. INITIALISATION  ====================== */
function initializeApp() {
  showSection('home');
  updateDashboardMetrics();
  renderAILog();
  renderPartners();
  updateFooterYear();
  setInterval(() => {
    updateDashboardMetrics();
    addAILogEntry();
  }, 7_000);
}

/* ============ 11. NAVIGATION  ========================== */
function initializeNavigation() {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav    = document.getElementById('navLinks');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-times');
    toggle.querySelector('i').classList.toggle('fa-bars');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) { target.classList.add('active'); link.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); }
      nav.classList.remove('active');
      toggle.querySelector('i').classList.remove('fa-times'); toggle.querySelector('i').classList.add('fa-bars');
    });
  });
}
window.showSection = function (id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  const link = document.querySelector(`.nav-link[href="#${id}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (typeof AOS !== 'undefined') setTimeout(() => AOS.refresh(), 100);
};

/* ============ 12. THEME  =============================== */
function initializeThemeToggle() {
  const body = document.body;
  const btn  = document.getElementById('themeToggle');
  if (!btn) return;
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved === 'light') { body.classList.remove('dark-mode'); btn.innerHTML = '<i class="fa fa-moon"></i>'; }
  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const dark = body.classList.contains('dark-mode');
    btn.innerHTML = dark ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
}

/* ============ 13. PARTICLE CANVAS  ===================== */
function initializeParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
  addEventListener('resize', resize); resize();
  for (let i = 0; i < 100; i++) particles.push({x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, radius: Math.random() * 2 + 0.5});
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = document.body.classList.contains('dark-mode') ? 'rgba(34,197,94,0.5)' : 'rgba(34,197,94,0.3)';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* ============ 14. FOOTER YEAR  ========================= */
function updateFooterYear() {
  const el = document.getElementById('currentYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ============ 15. DOM READY  =========================== */
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  initializeNavigation();
  initializeThemeToggle();
  initializeParticles();
  if (typeof AOS !== 'undefined') AOS.init({ duration: 800, easing: 'ease-in-out', once: true, offset: 100 });
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', handleFormSubmit);
});