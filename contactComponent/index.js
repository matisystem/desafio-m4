function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="contact">
    <form class="contact__form">
      <div class="subcontainer">
        <div>
          <label class="contact__label">NOMBRE</label>
          <input class="contact__input-name" type="text" />
        </div>
        <div>
          <label class="contact__label">EMAIL</label>
          <input class="contact__input-email" type="email" />
        </div>
        <div>
          <label class="contact__label">Mensaje</label>
          <textarea class="contact__input-message"></textarea>
        </div>
        <div>
          <button class="button">Enviar</button>
        </div>
      </div>
    </form>
  </section>
  `;

  const form = componentEl.querySelector(".contact__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "maticarabajal7@gmail.com",
        message: "test formulario",
      }),
    });
  });

  el.appendChild(componentEl);
}
