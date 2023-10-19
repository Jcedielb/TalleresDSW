import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var seriesAvarage = document.getElementById('avarage');
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                             <td><span class=\"series-name\" style=\"color: blue; cursor: pointer;\">").concat(c.name, "</span></td>\n                             <td>").concat(c.channel, "</td>\n                             <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var seriesNameElement = trElement.querySelector('.series-name');
        if (seriesNameElement) {
            seriesNameElement.addEventListener('click', function () { return showSeriesInfo(c); });
        }
    });
}
function showSeriesInfo(series) {
    var infoContainer = document.getElementById('series-detail');
    if (infoContainer) {
        infoContainer.innerHTML = ''; // Limpiar contenido anterior
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = 'Detalles de la Serie';
        var nameElement = document.createElement('h6');
        nameElement.classList.add('card-subtitle', 'mb-2', 'text-muted');
        nameElement.textContent = series.name;
        var descriptionElement = document.createElement('p');
        descriptionElement.classList.add('card-text');
        descriptionElement.textContent = "Descripci\u00F3n: ".concat(series.description);
        var webLinkElement = document.createElement('a');
        webLinkElement.classList.add('card-link');
        webLinkElement.href = series.webUrl;
        webLinkElement.textContent = 'Pagina Web del programa';
        webLinkElement.target = '_blank';
        var imageElement = document.createElement('img');
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
function calcularPromedioSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var promedio = totalSeasons / series.length;
    seriesAvarage.textContent = "El promedio de temporadas es: ".concat(promedio.toFixed(2));
    return promedio;
}
calcularPromedioSeasons(series);
renderSeriesInTable(series);
