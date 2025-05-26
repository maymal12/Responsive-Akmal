// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Fokus efek pada input
  document.querySelectorAll('.input-box input').forEach(function(input) {
    input.addEventListener('focus', function() {
      this.style.outline = '2px solid violet';
      this.style.transition = 'outline 0.2s';
    });
    input.addEventListener('blur', function() {
      this.style.outline = '';
    });
  });

  // Validasi sederhana pada submit
  document.getElementById('registrationForm').addEventListener('submit', function(e) {
    let valid = true;

    document.querySelectorAll('.input-box input[required]').forEach(function(input) {
      if (!input.value) {
        input.style.borderColor = 'red';
        valid = false;
      } else {
        input.style.borderColor = 'mediumorchid';
      }
    });

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
      confirmPassword.style.borderColor = 'red';
      valid = false;
      alert("Password dan Konfirmasi Password tidak sama!");
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Registrasi berhasil!");
    }
  });

  // Animasi tombol
  const btn = document.querySelector('.button input[type="submit"]');
  if (btn) {
    btn.addEventListener('mouseover', function() {
      btn.style.background = "linear-gradient(90deg, violet 0%, mediumorchid 100%)";
      btn.style.color = "#fff";
      btn.style.boxShadow = '0 0 10px violet';
      btn.style.transition = "all 0.25s";
    });
    btn.addEventListener('mouseout', function() {
      btn.style.background = "";
      btn.style.color = "";
      btn.style.boxShadow = "";
    });
  }
});