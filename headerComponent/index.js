function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <header class="header">
        <div class="header__cont">
        <a href="./index.html">
        <img src="./headerComponent/logo-final2.png" class="header__logo" />
    </a>
          <div class="header__menu-ham">
            <button class="open-window"></button>
          </div>
          <div class="header__menu-desktop">
            <a href="./portfolio.html" class="menu-desktop__link">Portfolio</a>
            <a href="./services.html" class="menu-desktop__link">Servicios</a>
            <a href="./contact.html" class="menu-desktop__link">Contacto</a>
          </div>
          <div class="window">
            <button class="window__close-window"></button>
            <div class="window__window-content">
              <a href="./portfolio.html" class="window-content__link">Portfolio</a>
              <a href="./services.html" class="window-content__link">Servicios</a>
              <a href="./contact.html" class="window-content__link">Contacto</a>
            </div>
          </div>
        </div>
      </header>
    `;

  el.appendChild(componentEl);

  const windowEl = document.querySelector(".window");
  const buttonOpenEl = document.querySelector(".open-window");
  const buttonCloseEl = document.querySelector(".window__close-window");

  buttonOpenEl.addEventListener("click", () => {
    windowEl.style.display = "inherit";
  });
  buttonCloseEl.addEventListener("click", () => {
    windowEl.style.display = "";
  });
}
