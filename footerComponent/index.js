function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <footer class="footer">
      <div class="footer__cont">
        <img src="./footerComponent/logo-final.png" class="footer__logo" />
        <div class="footer__subcont">
          <a class="footer_link-ig" href="">Instagram</a>
          <a class="footer_link-li" href="">Linkedin</a>
          <a class="footer_link-gh" href="">Github</a>
        </div>
      </div>
    </footer>
    `;

  el.appendChild(componentEl);
}
