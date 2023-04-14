


const express = require('express');
const puppeteer = require("puppeteer");
const cheerio = require('cheerio');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Corriendo en le puerto  ${PORT}`);
});

app.use(cors());

app.get('/scrape/:query', async (req, res) => {
    const { query } = req.params;
    const url = `https://www.seccionamarilla.com.mx/resultados/${query}/1`;
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    // Realiza el scraping aquí
    // Espera a que se cargue la página
    await page.waitForSelector('.listado');
    // Obtiene el contenido HTML de la página
    const html = await page.content();
    
      // Carga el contenido HTML en Cheerio
    const $ = cheerio.load(html);
    
    // Busca todos los elementos de la lista de resultados y extrae la información
  const resultados = [];
  $('.list .row .six').each((i, el) => {
    const nombre = $(el).find('a h2').text().trim();
    const direccion = $(el).find('.l-address').text().trim();
    const telefono = $(el).find('.l-tel').text().trim();

    resultados.push({
      nombre,
      direccion,
      telefono,
    });
  });

    // Guarda el arreglo de resultados en formato JSON
    await browser.close();
    res.json(resultados);
    });



    //////////////
  

    
    
//////////////////////////////////////////////////////////

// app.get('/', (req, res) => {
//     res.send('¡Hola, mundo!');
//   });

//   app.listen(3000, () => {
//     console.log('Servidor iniciado en el puerto 3000');
//   });
