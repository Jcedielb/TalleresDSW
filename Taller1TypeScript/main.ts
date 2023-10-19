import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seriesAvarage: HTMLElement = document.getElementById('avarage')!;

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                             <td><span class="series-name" style="color: blue; cursor: pointer;">${c.name}</span></td>
                             <td>${c.channel}</td>
                             <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        const seriesNameElement = trElement.querySelector('.series-name');

        if (seriesNameElement) {
            seriesNameElement.addEventListener('click', () => showSeriesInfo(c));
        }
    });
}

function showSeriesInfo(series: Serie): void {
    const infoContainer = document.getElementById('series-detail');

    if (infoContainer) {
        infoContainer.innerHTML = ''; // Limpiar contenido anterior

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = 'Detalles de la Serie';

        const nameElement = document.createElement('h6');
        nameElement.classList.add('card-subtitle', 'mb-2', 'text-muted');
        nameElement.textContent = series.name;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('card-text');
        descriptionElement.textContent = `Descripción: ${series.description}`;

        const webLinkElement = document.createElement('a');
        webLinkElement.classList.add('card-link');
        webLinkElement.href = series.webUrl;
        webLinkElement.textContent = 'Pagina Web del programa';
        webLinkElement.target = '_blank';

        const imageElement = document.createElement('img');
        imageElement.classList.add('card-img-top');
        imageElement.height = 250;
        imageElement.src = series.image;
        imageElement.alt = series.name;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(nameElement);
        cardBody.appendChild(descriptionElement);
        cardBody.appendChild(imageElement);
        cardBody.appendChild(webLinkElement);
        infoContainer.appendChild(cardBody);
    }
}



function calcularPromedioSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio = totalSeasons / series.length;

    seriesAvarage.textContent = `El promedio de temporadas es: ${promedio.toFixed(2)}`;

    return promedio;
}

calcularPromedioSeasons(series);
renderSeriesInTable(series);
