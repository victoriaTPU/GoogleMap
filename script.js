//ЗАГРУЗКА КАРТЫ И ПРИМЕР...
var map = L.map('map').setView([51.505, -0.09], 3); // Устанавливаем центр и масштаб

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//https://github.com/pointhi/leaflet-color-markers/tree/master/img
var redIcon = new L.Icon({
	iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34]
});

//NEW-YORK
L.marker([40.7128, -74.0060], {icon: redIcon}).addTo(map)
	.bindPopup('New York City')

//САНКТ-ПЕТЕРБУРГ
L.marker([59.9343, 30.3351], {icon: redIcon}).addTo(map)
	.bindPopup('Saint Petersburg')

//АНТАРКТИДА
L.marker([-82.8628, 135], {icon: redIcon}).addTo(map)
	.bindPopup('Зима, холода!')
	.openPopup();


fetch('Coordinates.csv')
.then(response => response.text())
.then(data => {
	// Разбиваем данные на строки
	var rows = data.split('\n');

	// Перебираем строки (кроме заголовка)
	for (var i = 1; i < rows.length; i++) {
		var columns = rows[i].split(','); // Разбиваем строку на столбцы

		var country = columns[0];
		var capital = columns[1];
		var latitude = parseFloat(columns[2]); // Преобразуем строку в число - центр страны
		var longitude = parseFloat(columns[3]); // Преобразуем строку в число - центр страны

		L.marker([latitude, longitude], {icon: redIcon})
			.addTo(map)
			.bindPopup(country + ' ' + capital) // Всплывающее окно с информацией о стране и столице
			.openPopup();
	}
});











































//ЗДЕСЬ ВСЕ ЦВЕТА
//https://github.com/pointhi/leaflet-color-markers/tree/master/img

//НАШИ КАСТОМНЫЕ ИКОНКИ...
/*var redIcon = new L.Icon({
	iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34]

});

var purpleIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

// Создаем голубую иконку маркера/*
var catIcon = new L.icon({
    iconUrl: '/Tomas.jpg', // Путь к изображению фиолетовой иконки на вашем сервере
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [1, -34]
});
//...НАШИ КАСТОМНЫЕ ИКОНКИ


//NEW-YORK
L.marker([40.7128, -74.0060], {icon: redIcon}).addTo(map)
	.bindPopup('New York City')

//САНКТ-ПЕТЕРБУРГ
L.marker([59.9343, 30.3351], {icon: purpleIcon}).addTo(map)
	.bindPopup('Saint Petersburg')

//АНТАРКТИДА
L.marker([-82.8628, 135], {icon: catIcon}).addTo(map)
	.bindPopup('Зима, холода!')

//ПАРСИНГ ДАННЫХ ЧЕРЕЗ АПИ...
fetch('Coordinates.csv')
	.then(response => response.text())
	.then(data => {
		// Разбиваем данные на строки
		var rows = data.split('\n');

		// Перебираем строки (кроме заголовка)
		for (var i = 1; i < rows.length; i++) {
			var columns = rows[i].split(','); // Разбиваем строку на столбцы

			var country = columns[0];
			var capital = columns[1];
			var latitude = parseFloat(columns[2]); // Преобразуем строку в число - центр страны
			var longitude = parseFloat(columns[3]); // Преобразуем строку в число - центр страны

			console.log('Страна', columns)
			// Добавляем маркер на карту
			L.marker([latitude, longitude], {icon: purpleIcon})
				.addTo(map)
				.bindPopup('<b>' + country + '</b><br>' + capital) // Всплывающее окно с информацией о стране и столице
				.openPopup();
		}
	});
//...ПАРСИНГ ДАННЫХ ЧЕРЕЗ АПИ

// Создаем круг с центром в заданных координатах и радиусом 500 метров
var circle = L.circle([51.505, -0.09], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);

// Открываем всплывающее окно с информацией о круге
circle.bindPopup("I am a circle.");


// Определяем координаты вершин полигона
var polygonCoords = [
    [10, 0],
    [10, 10],
    [30, 10],
    [30, 0]
];

// Создаем полигон с определенными координатами
var polygon = L.polygon(polygonCoords, {color: 'red'}).addTo(map);

// Открываем всплывающее окно с информацией о полигоне
polygon.bindPopup("I am a polygon.");*/