const hamburger = document.querySelector(".hamburger");
const menuContent = document.querySelector(".menu-content");
const overlay = document.querySelector(".overlay");

// Funkcja otwierania menu
const openMenu = () => {
  menuContent.classList.add("active");
  hamburger.classList.add("active");
  overlay.classList.add("active"); // Pokazanie półprzezroczystej warstwy
};

// Funkcja zamykania menu
const closeMenu = () => {
  menuContent.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.classList.remove("active"); // Ukrycie półprzezroczystej warstwy
};

// Obsługa kliknięcia hamburgera
hamburger.addEventListener("click", () => {
  if (!menuContent.classList.contains("active")) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Obsługa kliknięcia poza menu
overlay.addEventListener("click", () => {
  closeMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  // Stwórz element kursorowy
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  cursor.textContent = "+"; // Znak kursora
  document.body.appendChild(cursor);

  // Śledzenie ruchu myszy
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  // Ukrycie domyślnego kursora
  document.body.style.cursor = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".parent img"); // Wszystkie obrazy
  const divText3 = document.querySelector(".divText3"); // Kontener na dynamiczny tekst

  // Dodaj nasłuchiwanie zdarzeń dla każdego obrazu
  images.forEach((img) => {
    img.addEventListener("mouseover", () => {
      divText3.textContent = img.alt; // Wyświetl tekst alt zdjęcia
    });

    img.addEventListener("mouseout", () => {
      divText3.textContent = ""; // Usuń tekst po zjechaniu myszką
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

  // Funkcja otwierająca modalne okno
  const openModal = () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
  };

  // Funkcja zamykająca modalne okno
  const closeModal = () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  };

  // Dodaj obsługę kliknięcia w overlay i przycisk zamykania
  modalOverlay.addEventListener("click", closeModal);
  modalClose.addEventListener("click", closeModal);

  // Test: Otwórz modal po kliknięciu na dowolny element (np. divText5)
  const trigger = document.querySelector(".divText5");
  if (trigger) {
    trigger.addEventListener("click", openModal);
  }
});
