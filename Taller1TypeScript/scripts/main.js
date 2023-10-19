import { series } from "./data.js";
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var seriesAvarage = document.getElementById('avarage'); // Nodo tbody que tiene el id="courses"
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                             <td><span class=\"series-name\" style=\"color: blue; cursor: pointer;\">").concat(c.name, "</span></td>\n                             <td>").concat(c.channel, "</td>\n                             <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        // Obtén el elemento del nombre
        var seriesNameElement = trElement.querySelector('.series-name');
        // Verifica si el elemento existe antes de agregar el evento de clic
        if (seriesNameElement) {
            seriesNameElement.addEventListener('click', function () { return showSeriesInfo(c); });
        }
    });
}
function showSeriesInfo(series) {
    var existingInfo = document.querySelector('.series-info');
    if (existingInfo) {
        existingInfo.remove();
    }
    // Crea un contenedor para la información
    var infoContainer = document.createElement('div');
    infoContainer.classList.add('series-info');
    // Agregar la descripción
    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = "Descripci\u00F3n: ".concat(series.description);
    infoContainer.appendChild(descriptionElement);
    // Agregar el enlace web
    var webLinkElement = document.createElement('a');
    webLinkElement.href = series.webUrl;
    webLinkElement.textContent = 'Pagina Web del programa <--------------------------------';
    webLinkElement.target = '_blank'; // Para abrir en una nueva pestaña
    infoContainer.appendChild(webLinkElement);
    // Agregar la imagen
    var imageElement = document.createElement('img');
    imageElement.height = 250;
    imageElement.src = series.image;
    imageElement.alt = series.name; // Agrega un texto alternativo para la imagen (recomendado para accesibilidad)
    infoContainer.appendChild(imageElement);
    // Mostrar la información en algún lugar de la página (por ejemplo, en el body)
    document.body.appendChild(infoContainer);
}
function calcularPromedioSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var promedio = totalSeasons / series.length;
    // Muestra el promedio en el elemento HTML
    seriesAvarage.textContent = "El promedio de temporadas es: ".concat(promedio.toFixed(2));
    return promedio;
}
calcularPromedioSeasons(series);
renderSeriesInTable(series);
