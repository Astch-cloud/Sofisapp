function mostrarMensaje(opcion) {
  const popup = document.getElementById('popup');
  const mensajeSi = document.getElementById('mensaje-si');
  const mensajeNo = document.getElementById('mensaje-no');

  if (opcion === 'si') {
    mensajeSi.style.display = 'block';
    mensajeNo.style.display = 'none';
    mostrarChispitas();
  } else {
    mensajeSi.style.display = 'none';
    mensajeNo.style.display = 'block';
  }

  popup.style.display = 'block';
}

function cerrarPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function mostrarChispitas() {
  for (let i = 0; i < 100; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random()}s`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
    setTimeout(() => sparkle.remove(), 3000);
  }
}