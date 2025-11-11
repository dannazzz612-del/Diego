document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('abrir-carta').addEventListener('click', function() {
    const cartaInicial = document.getElementById('carta-inicial');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    this.style.transform = 'scale(0.9)';
    cartaInicial.style.opacity = '0';

    setTimeout(() => {
      cartaInicial.style.display = 'none';
      contenidoPrincipal.style.display = 'block';
      iniciarCarros();
      animarFotos();
    }, 1000);
  });
});

function iniciarCarros() {
  setInterval(crearCarro, 500);
}

function crearCarro() {
  const carro = document.createElement('div');
  carro.classList.add('carro');
  const carros = ['🚗', '🏎️', '🚙', '🚘', '🔥', '💨'];
  carro.innerHTML = carros[Math.floor(Math.random() * carros.length)];
  carro.style.left = Math.random() * 100 + 'vw';
  carro.style.animationDuration = (3 + Math.random() * 4) + 's';
  carro.style.fontSize = (18 + Math.random() * 20) + 'px';
  carro.style.opacity = (0.6 + Math.random() * 0.4);
  document.body.appendChild(carro);

  setTimeout(() => carro.remove(), 7000);
}

function animarFotos() {
  const contenedores = document.querySelectorAll('.foto-container');
  contenedores.forEach((contenedor, index) => {
    contenedor.style.animation = `flotar ${8 + Math.random() * 4}s infinite ease-in-out`;
    contenedor.style.animationDelay = `${index * 0.2}s`;
  });
}

document.addEventListener('click', function(e) {
  if (document.getElementById('contenido-principal').style.display === 'block') {
    crearExplosionCarros(e.clientX, e.clientY);
  }
});

function crearExplosionCarros(x, y) {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const carro = document.createElement('div');
      carro.classList.add('carro');
      carro.innerHTML = '🏎️';
      carro.style.left = x + 'px';
      carro.style.top = y + 'px';
      carro.style.animationDuration = '2s';
      carro.style.fontSize = '25px';
      document.body.appendChild(carro);
      setTimeout(() => carro.remove(), 2000);
    }, i * 100);
  }
}
