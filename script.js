// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    siteNav.classList.toggle('show');
  });
}
// Close nav on link click (mobile)
Array.from(document.querySelectorAll('#site-nav a')).forEach(a=>{
  a.addEventListener('click', ()=> siteNav.classList.remove('show'))
});

// Fake contact handler
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = form.name.value.trim();
    alert(`Thanks, ${name || 'there'}! Your message was received (demo).`);
    form.reset();
  });
}

// Resume button toggle
const ctaButton = document.querySelector('.cta[href="#resume"]');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const resumeSection = document.getElementById('resume');
const contactSection = document.getElementById('contact');
const backHomeButton = document.getElementById('back-home');
const navLinks = document.querySelectorAll('#site-nav a');
const footer = document.querySelector('.site-footer');

if(ctaButton){
  ctaButton.addEventListener('click', e=>{
    e.preventDefault();
    homeSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');
    resumeSection.classList.remove('hidden');
    contactSection.classList.remove('hidden');
    navLinks.forEach(link => link.classList.remove('hidden'));
    footer.classList.remove('hidden');
    window.scrollTo(0, 0);
  });
}

if(backHomeButton){
  backHomeButton.addEventListener('click', ()=>{
    homeSection.classList.remove('hidden');
    aboutSection.classList.add('hidden');
    resumeSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    navLinks.forEach(link => link.classList.add('hidden'));
    footer.classList.add('hidden');
    window.scrollTo(0, 0);
  });
}
