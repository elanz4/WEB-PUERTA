//Slider Principal-Animación
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.getElementsByClassName("slide");
  let currentIndex = 0; // Inicia con el índice 0 para mostrar la primera imagen
  let timer = setInterval(nextSlide, 9000); // Cambia la imagen cada 9 segundos

  // Asegurarse de que la primera imagen se muestre al cargar
  if (slides.length > 0) {
    slides[currentIndex].style.display = "block";
  }

  function nextSlide() {
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = "block";
  }

  function goToSlide(n) {
    clearInterval(timer); // Detiene el cambio automático al interactuar
    slides[currentIndex].style.display = "none";
    currentIndex = n;
    slides[currentIndex].style.display = "block";
    timer = setInterval(nextSlide, 9000); // Reinicia el cambio automático con el intervalo original
  }

  // Event listeners para los botones de navegación
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      goToSlide(i);
    });
  }

  // Event listeners para detener el cambio automático al hacer clic en las imágenes
  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", function () {
      clearInterval(timer); // Detiene el cambio automático al interactuar con la imagen
    });
  }
});

//menu desplegable
document.addEventListener("DOMContentLoaded", function () {
  const hamburguesa = document.getElementById("hamburguesa");
  const menuDesplegado = document.getElementById("menu-desplegado");
  const submenuDesplegado = document.getElementById("submenu-desplegado");
  const cerrar = document.getElementById("cerrar");
  const cerrarSubmenu = document.getElementById("cerrar-submenu");
  const volver = document.getElementById("volver");
  const lenguajeOpcion = document.getElementById("lenguaje-opcion");
  const languageButton = document.getElementById("languageButton");
  const languageDropdown = document.getElementById("languageDropdown");

  // Mostrar el menú desplegable
  hamburguesa.addEventListener("click", function () {
    menuDesplegado.style.display = "block";
    setTimeout(() => (menuDesplegado.style.opacity = "1"), 10);
    document.body.style.overflow = "hidden"; // Evitar scroll
  });

  // Ocultar el menú desplegable
  cerrar.addEventListener("click", function () {
    menuDesplegado.style.opacity = "0";
    setTimeout(() => {
      menuDesplegado.style.display = "none";
      document.body.style.overflow = "auto"; // Permitir scroll
    }, 500);
  });

  // Mostrar el submenú desplegable
  lenguajeOpcion.addEventListener("click", function () {
    submenuDesplegado.style.display = "block";
    setTimeout(() => (submenuDesplegado.style.opacity = "1"), 10);
    document.body.style.overflow = "hidden"; // Evitar scroll
  });

  cerrarSubmenu.addEventListener("click", function () {
    submenuDesplegado.style.opacity = "0";
    setTimeout(() => (submenuDesplegado.style.display = "none"), 500);
  });

  volver.addEventListener("click", function () {
    submenuDesplegado.style.opacity = "0";
    setTimeout(() => {
      submenuDesplegado.style.display = "none";
      menuDesplegado.style.display = "block";
      setTimeout(() => (menuDesplegado.style.opacity = "1"), 10);
    }, 500);
  });

  // Ocultar el submenú desplegable
  cerrarSubmenu.addEventListener("click", function () {
    submenuDesplegado.style.opacity = "0";
    setTimeout(() => {
      submenuDesplegado.style.display = "none";
      document.body.style.overflow = "auto"; // Permitir scroll
    }, 500);
  });

  // Volver al menú principal desde el submenú
  volver.addEventListener("click", function () {
    submenuDesplegado.style.opacity = "0";
    setTimeout(() => {
      submenuDesplegado.style.display = "none";
      menuDesplegado.style.display = "block";
      setTimeout(() => (menuDesplegado.style.opacity = "1"), 10);
    }, 500);
  });

  // Mostrar el menú de idiomas en la vista normal (no móvil)
  languageButton.addEventListener("click", function () {
    if (languageDropdown.style.display === "block") {
      languageDropdown.style.display = "none";
    } else {
      languageDropdown.style.display = "block";
    }
  });
});

//lenguaje
document.getElementById("languageButton").onclick = function () {
  document.getElementById("languageDropdown").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches("#languageButton")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function setLanguage(lang) {
  console.log("Idioma seleccionado: " + lang);
  // Aquí puedes añadir la lógica para cambiar el idioma de la página
}

// Menu fijo en la parte superior//
document.addEventListener("DOMContentLoaded", function () {
  var mainMenu = document.getElementById("mainMenu");
  var navbarDefaultHeight =
    document.querySelector(".navbar-default").offsetHeight;
  window.addEventListener("scroll", function () {
    if (window.scrollY >= navbarDefaultHeight) {
      mainMenu.classList.add("fixed");
    } else {
      mainMenu.classList.remove("fixed");
    }
  });
});

//Video //

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-01");
  function checkVisibility() {
    var rect = video.getBoundingClientRect();
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Verificar visibilidad al cargar la página
  checkVisibility();

  // Verificar visibilidad al hacer scroll
  window.addEventListener("scroll", checkVisibility);
});

//Animación de texto para el área de vídeo al realizar scroll//
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        target.style.opacity = 1; //se visualiza el titulo//
        typeWriter();
        observer.disconnect(); // Detiene la observación después de activarse
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector(".container-title-quiality");
  observer.observe(target);

  function typeWriter() {
    const text = document.querySelector(".titulo-quality");
    const spans = text.querySelectorAll("span");
    const textContent = Array.from(spans)
      .map((span) => span.innerText)
      .join("");
    text.innerHTML = "";
    let i = 0;

    function type() {
      if (i < textContent.length) {
        const currentSpan = Array.from(spans).find((span) =>
          span.innerText.includes(textContent.charAt(i))
        );
        const colorClass = currentSpan.className;
        text.innerHTML += `<span class="${colorClass}">${textContent.charAt(
          i
        )}</span>`;
        i++;
        setTimeout(type, 100); // Controla la velocidad de escritura
      } else {
        text.style.borderRight = "none"; // Remueve el borde después de terminar
      }
    }

    type();
  }
});

//Animación para slider numero 2 de sectores industriales
var swiper;

function initializeSwiper(slidesPerView) {
  swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 400,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    loopAdditionalSlides: 5,
    autoplay: {
      delay: 6000, // Cambia el delay según tu preferencia (en milisegundos)
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function updateSwiper() {
  var windowWidth = window.innerWidth;
  if (swiper) {
    swiper.destroy(true, true);
  }

  if (windowWidth <= 430) {
    initializeSwiper(1); // Cambia el número de slides visibles en pantalla pequeña
  } else {
    initializeSwiper(1.5); // Número de slides visibles en pantalla normal
  }
}

window.addEventListener("resize", updateSwiper);
document.addEventListener("DOMContentLoaded", function () {
  updateSwiper();
});

//Titulo de soluciones inicia con scroll desde opacidad 0 a 1
document.addEventListener("DOMContentLoaded", function () {
  const solutionText = document.getElementById("solution");

  function checkVisibility() {
    const rect = solutionText.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
      solutionText.style.opacity = 1;
    }
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);

  // Initial check in case the element is already in view
  checkVisibility();
});

/*Animación de sección de los numeros 3A*/

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end; // Asegura que el valor final sea el correcto
      obj.classList.remove("blink"); // Elimina la clase de parpadeo
    }
  };
  window.requestAnimationFrame(step);
}

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerHTML = end; // Asegura que el valor final sea el correcto
      obj.classList.remove("blink"); // Elimina la clase de parpadeo
      obj.classList.add("no-blink"); // Añade la clase para signo fijo
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue("animation-30", 0, 20, 3000);
          animateValue("animation-890", 0, 890, 3000);
          animateValue("animation-5", 0, 5, 3000);
          observer.disconnect(); // Dejar de observar una vez que se haya activado la animación
        }
      });
    },
    { threshold: 0.5 }
  );

  const section = document.querySelector(".content-number3A");
  observer.observe(section);
});

// rotación de las flechas desplegables
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los títulos y secciones
  const titles = document.querySelectorAll(
    ".legal-footer, .solution-footer, .contact-footer"
  );
  const sections = {
    ".legal-footer": document.querySelector(".Legal-section1"),
    ".solution-footer": document.querySelector(".solution-section2"),
    ".contact-footer": document.querySelector(".contact-section3"),
  };

  // Verificar si los títulos y las secciones fueron encontrados
  titles.forEach((title) => {
    const section = sections[`.${title.classList[0]}`];
    if (title && section) {
      console.log("Elementos encontrados:", title, section);

      title.addEventListener("click", function () {
        console.log("Título clicado:", title.classList[0]);
        if (section.style.display === "none" || section.style.display === "") {
          section.style.display = "block";
          title.classList.add("rotated");
          console.log("Sección mostrada:", title.classList[0]);
        } else {
          section.style.display = "none";
          title.classList.remove("rotated");
          console.log("Sección oculta:", title.classList[0]);
        }
      });
    } else {
      console.log("No se encontraron los elementos para:", title.classList[0]);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".content-calidad-certificada");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(section);
});

//Animación y clic para boton
function redirectToURL() {
  window.location.href = "/index.html";
}

//Clic en imagen para ampliarla
function openPopup(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = img.src;
  popup.style.display = "flex";
}

function redirectToURL() {
  window.location.href = "URL_AQUI"; // Reemplaza "URL_AQUI" con la URL deseada
}

document.getElementById("popup").onclick = function () {
  this.style.display = "none";
};

document
  .querySelector(".custom-select-wrapper")
  .addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        ?.classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select-trigger"
      ).textContent = this.textContent;
      this.closest(".custom-select-wrapper").querySelector(
        ".hidden-select"
      ).value = this.getAttribute("data-value");
    }
  });
}

window.addEventListener("click", function (e) {
  const select = document.querySelector(".custom-select");
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});
