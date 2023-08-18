document.addEventListener('DOMContentLoaded', function () {
    const togglePassword1 = document.querySelector('#togglePassword1');
    const togglePassword2 = document.querySelector('#togglePassword2');
    const password1 = document.querySelector('#id_password');
    const password2 = document.querySelector('#re_id_password');

    togglePassword1.addEventListener('click', function () {
      const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
      password1.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });

    togglePassword2.addEventListener('click', function () {
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });
  });