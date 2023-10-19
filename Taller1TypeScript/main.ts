import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
const seriesAvarage: HTMLElement = document.getElementById('avarage')!; // Nodo tbody que tiene el id="courses"

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${c.id}</td>
                             <td><span class="series-name" style="color: blue; cursor: pointer;">${c.name}</span></td>
                             <td>${c.channel}</td>
                             <td>${c.seasons}</td>`;
      seriesTbody.appendChild(trElement);
  
      // Obtén el elemento del nombre
      const seriesNameElement = trElement.querySelector('.series-name');
  
      // Verifica si el elemento existe antes de agregar el evento de clic
      if (seriesNameElement) {
        seriesNameElement.addEventListener('click', () => showSeriesInfo(c));
      }
    });
  }
  
  
  
  function showSeriesInfo(series: Serie): void {
    const existingInfo = document.querySelector('.series-info');
    if (existingInfo) {
      existingInfo.remove();
    }
  
    // Crea un contenedor para la información
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('series-info');
  
    // Agregar la descripción
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Descripción: ${series.description}`;
    infoContainer.appendChild(descriptionElement);
  
    // Agregar el enlace web
    const webLinkElement = document.createElement('a');
    webLinkElement.href = series.webUrl;
    webLinkElement.textContent = 'Pagina Web del programa <--------------------------------';
    webLinkElement.target = '_blank'; // Para abrir en una nueva pestaña
    infoContainer.appendChild(webLinkElement);
  
    // Agregar la imagen
    const imageElement = document.createElement('img');
    imageElement.height = 250;
    imageElement.src = series.image;
    imageElement.alt = series.name; // Agrega un texto alternativo para la imagen (recomendado para accesibilidad)
    infoContainer.appendChild(imageElement);

    // Mostrar la información en algún lugar de la página (por ejemplo, en el body)
    document.body.appendChild(infoContainer);
  }
  function calcularPromedioSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio = totalSeasons / series.length;
    
    // Muestra el promedio en el elemento HTML
    seriesAvarage.textContent = `El promedio de temporadas es: ${promedio.toFixed(2)}`;
  
    return promedio;
  }
  
  
  
calcularPromedioSeasons(series)
renderSeriesInTable(series)