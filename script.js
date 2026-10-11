const loginTab = document.querySelector('[data-target="login"]');
const signupTab = document.querySelector('[data-target="signup"]');
const loginForm = document.getElementById('login');
const signupForm = document.getElementById('signup');

if (loginTab && signupTab && loginForm && signupForm) {
  const toggleForms = (target) => {
    if (target === 'signup') {
      signupTab.classList.add('active');
      loginTab.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    } else {
      loginTab.classList.add('active');
      signupTab.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    }
  };

  loginTab.addEventListener('click', () => toggleForms('login'));
  signupTab.addEventListener('click', () => toggleForms('signup'));
}

const forms = document.querySelectorAll('.auth-form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Submitted';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      form.reset();
    }, 1200);
  });
});

