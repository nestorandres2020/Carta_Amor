const frases = [
    "Eres el amor que no sabía que estaba buscando hasta que te encontré.",
    "Cuando pienso en ti, mi corazón sonríe antes que mis labios.",
    "Contigo aprendí que amar no es mirarse el uno al otro, sino mirar juntos en la misma dirección.",
    "Eres mi pensamiento favorito, mi sonrisa inevitable y el amor de mi vida.",
    "En un mundo lleno de personas, mis ojos siempre te buscarán a ti.",
    "Amarte es fácil porque eres todo lo que siempre soñé y más.",
    "Estar contigo es como estar en casa; cálido, seguro y donde pertenezco.",
    "Tu amor me da fuerzas cuando estoy débil y me hace creer cuando dudo.",
    "Eres la melodía más bonita que mi corazón jamás ha cantado.",
    "No sé dónde termina mi sonrisa cuando pienso en ti.",
    "Gracias por convertir mis días ordinarios en momentos extraordinarios.",
    "Eres la razón por la que creo en el amor a primera vista.",
    "Cada latido de mi corazón tiene tu nombre escrito en él.",
    "Mi lugar favorito en el mundo es junto a ti, sin importar dónde estemos.",
    "Si pudiera darte una cosa en la vida, te daría la capacidad de verte a través de mis ojos para que pudieras ver lo especial que eres para mí."
  ];
  
  let indice = -1;
  const fraseActual = document.getElementById("fraseActual");
  const contador = document.getElementById("contador");
  
  // Crear elementos de confeti
  function crearConfeti() {
    for (let i = 0; i < 50; i++) {
      const confeti = document.createElement("div");
      confeti.classList.add("confeti");
      
      // Colores aleatorios para el confeti
      const colores = ["#ff66a3", "#ff1a75", "#ffb3d1", "#ffcce0", "#ffffff"];
      confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
      
      // Posición horizontal aleatoria
      confeti.style.left = Math.random() * 100 + "vw";
      
      // Tamaño aleatorio
      const size = Math.random() * 8 + 5;
      confeti.style.width = size + "px";
      confeti.style.height = size + "px";
      
      // Retraso de animación aleatorio
      confeti.style.animationDelay = Math.random() * 5 + "s";
      confeti.style.animationDuration = Math.random() * 3 + 4 + "s";
      
      document.body.appendChild(confeti);
      
      // Eliminar el confeti después de la animación para evitar sobrecargar el DOM
      setTimeout(() => {
        document.body.removeChild(confeti);
      }, 7000);
    }
  }
  
  function actualizarContador() {
    contador.textContent = `${indice + 1} de ${frases.length}`;
  }
  
  function mostrarSiguiente() {
    indice++;
    
    if (indice < frases.length) {
      // Efecto de transición
      fraseActual.style.opacity = 0;
      fraseActual.style.transform = "translateY(-20px)";
      
      setTimeout(() => {
        fraseActual.textContent = frases[indice];
        fraseActual.style.opacity = 1;
        fraseActual.style.transform = "translateY(0)";
        actualizarContador();
        
        // Lanzar confeti cada 3 frases
        if (indice % 3 === 0) {
          crearConfeti();
        }
      }, 300);
    } else {
      // Mostrar confeti final antes de redirigir
      crearConfeti();
      
      setTimeout(() => {
        window.location.href = "sorpresa.html"; // redirige cuando termina
      }, 1500);
    }
  }
  
  // Inicializar el contador
  actualizarContador();