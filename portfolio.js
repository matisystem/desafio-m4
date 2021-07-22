function addPortfolioCard(params = {}) {
  const template = document.querySelector("#services-card");
  const container = document.querySelector(".services__content");
  template.content.querySelector(".content__title").textContent = params.title;
  template.content.querySelector(".content__text").textContent =
    params.description;
  template.content.querySelector(".content__image").src = params.image;
  template.content.querySelector(".content__url").textContent = params.url;
  template.content.querySelector(".content__url").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/qdsj3xo7siz2/environments/master/entries?access_token=hNAUUPUd4tNr3vp-iqDNmMqPFCIHAtcRbbQ93eoeyrI&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldCollection = data.items.map((item) => {
        const obj = {
          title: item.fields.title,
          description: item.fields.description,
          imageId: item.fields.image.sys.id,
          includes: data.includes.Asset,
          url: item.fields.url,
        };
        return obj;
      });

      fieldCollection.forEach((i) => {
        let idResult = searchAsset(i.imageId, i.includes);
        i.image = idResult.fields.file.url;
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
  headerComponent(document.querySelector(".header-cont"));
  footerComponent(document.querySelector(".footer-cont"));

  getPortfolio().then(function (portfolio) {
    for (const p of portfolio) {
      addPortfolioCard(p);
      addPortfolioCard(p);
      addPortfolioCard(p);
      addPortfolioCard(p);
    }
  });
}

main();
