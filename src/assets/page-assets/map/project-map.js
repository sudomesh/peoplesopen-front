const map = L.map('map', {
  zoomControl: false,
  minZoom: 12
}).setView([37.865211, -122.354649], 12);

L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);

L.control.zoom({
  position: 'topright'
}).addTo(map);

fetch('/assets/page-assets/map/active-projects.geojson')
  .then((response) => response.json())
  .then((activeProjects) => renderProjects(activeProjects));

function renderProjects(activeProjects) {
  L.geoJSON(activeProjects, {
    pointToLayer: (geoJsonPoint, latlng) => {
      let { style, id, name } = geoJsonPoint.properties;
      style = style || 'transform: translateX(-50%) translateY(-50%)';
      let projectIcon = L.divIcon({
        iconSize: null,
        className: 'project-icon-container',
        html: `<div class="project-icon ${id}" style="${style}">${name}</div>`
      });
      let marker = L.marker(latlng, { icon: projectIcon });
      marker.on('click', () => showProject(id));
      return marker;
    }
  }).addTo(map);
}

let defaultTextEl = document.querySelector('.default-text');
let projectEls = document.querySelectorAll('.project-info');
function showProject(id) {
  hideProject();
  defaultTextEl.style.display = 'none';
  document.querySelector(`.project-info.${id}`).style.display = 'block';
  document.querySelector(`.project-icon.${id}`).classList.add('toggled');
}

function hideProject() {
  document.querySelectorAll('.project-icon').forEach((el) => el.classList.remove('toggled'));
  projectEls.forEach((el) => el.style.display = 'none');
  defaultTextEl.style.display = 'block';
}
