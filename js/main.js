/**
 * BitcoinMaster Landing Page - Скрипты мобильного меню
 * @description Управление открытием и закрытием мобильного меню
 */

// Инициализация мобильного меню после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  // Получение элементов
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const closeMenu = document.getElementById("closeMenu");
  const menuLinks = document.querySelectorAll(".mobile-menu-link");

  // Проверка наличия всех необходимых элементов
  if (!menuToggle || !mobileMenu || !mobileMenuOverlay || !closeMenu) {
    console.error("Не все элементы мобильного меню найдены");
    return;
  }

  /**
   * Открытие мобильного меню
   */
  function openMenu() {
    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  /**
   * Закрытие мобильного меню
   */
  function closeMenuHandler() {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Открытие меню по клику на гамбургер
  menuToggle.addEventListener("click", openMenu);

  // Закрытие меню по кнопке закрытия
  closeMenu.addEventListener("click", closeMenuHandler);

  // Закрытие меню по клику на затемненный фон
  mobileMenuOverlay.addEventListener("click", closeMenuHandler);

  // Закрытие меню при клике на любую ссылку
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenuHandler);
  });

  // Закрытие меню по клавише Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenuHandler();
    }
  });
});
