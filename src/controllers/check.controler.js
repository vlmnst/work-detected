import puppeteer from "puppeteer";

const checkwsp = (req, res) => {
  //SELECTORES
  //Nombre del contacto
  const div_contenedor_prueba =
      "#pane-side > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div._3OvU8",
    name_contacto_prueba =
      "#pane-side > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div._3OvU8 > div._3vPI2 > div.zoWT4 > span",
    div_de_notificacion_prueba =
      "#pane-side > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div._3OvU8 > div._37FrU",
    notificacion_prueba =
      "#pane-side > div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div._3OvU8 > div._37FrU > div._1i_wG > span:nth-child(1) > div";

  //Url 
  const wsChromeEndpointurl = 'ws://localhost:9222/devtools/browser/866911a8-0e1b-4bdd-8f6c-514d106448ca';
  const url = "https://web.whatsapp.com/";

  //An array of all open pages inside the Browser.
  (async () => {
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsChromeEndpointurl,
  });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle0'
  });
  })();

  //Funcion para abrir la pagina
  async function startBrowser() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    return { browser, page };
  }

  //Funcion para cerrar la pagina
  async function closeBrowser(browser) {
    return browser.close();
  }

  async function playTest(url) {
    try {
      const { browser, page } = await startBrowser();
      page.setViewport({ width: 1366, height: 768 });

      await page.goto(url);

      //    closeBrowser(browser)
    } catch (error) {
      console.log(error);
    }
  }

  // (async () => {
  //   try {
  //     await playTest(url);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })();

  res.send({ msg: "hola" });
};

export default checkwsp;
