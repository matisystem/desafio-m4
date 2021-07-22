function addHomeContent(params = {}) {
  const template = document.querySelector("#home-template");
  const container = document.querySelector(".home-cont");
  template.content.querySelector(".home__content__title").textContent =
    params.title;
  template.content.querySelector(".home__content__subtitle").textContent =
    params.subtitle;
  template.content.querySelector(".about-me__content__subtitle").textContent =
    params.subtitle;
  template.content.querySelector(".about-me__content__text").textContent =
    params.text;
  template.content.querySelector(".about-me__image").src = params.textImage;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getHomeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/qdsj3xo7siz2/environments/master/entries?access_token=hNAUUPUd4tNr3vp-iqDNmMqPFCIHAtcRbbQ93eoeyrI&content_type=home"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldCollection = data.items.map((item) => {
        const obj = {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
          text: item.fields.text,
          imageId: item.fields.textImage.sys.id,
          includes: data.includes.Asset,
        };
        return obj;
      });

      fieldCollection.forEach((i) => {
        let idResult = searchAsset(i.imageId, i.includes);
        i.textImage = idResult.fields.file.url;
      });
      return fieldCollection;
    });
}

function searchAsset(assetId, includes) {
  const result = includes.find((inc) => {
    return inc.sys.id == assetId;
  });
  return result;
}

function main() {
  getHomeContent().then(function (home) {
    for (const h of home) {
      addHomeContent(h);
    }
  });

  headerComponent(document.querySelector(".header-cont"));
  contactComponent(document.querySelector(".form-cont"));
  footerComponent(document.querySelector(".footer-cont"));
}

main();
