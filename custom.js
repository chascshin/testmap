// Изменение прозрачности слоя
var landcover = lyr_ESRILandCover_2;
// Находим ползунок
var opacitySlider = document.getElementById('opacitySlider');
// Находим подпись процента
var opacityValue = document.getElementById('opacityValue');
// При изменении положения ползунка
opacitySlider.addEventListener('input', function() {

    var opacity = parseFloat(this.value);

    // Меняем прозрачность слоя
    landcover.setOpacity(opacity);

    // Показываем значение пользователю
    opacityValue.textContent = Math.round(opacity * 100) + '%';
});
// ----------------------------------------
// ПОИСК ОБЪЕКТОВ СЛОЯ ooptPerm
// ----------------------------------------

var ooptLayer = lyr_ooptPerm_4;

// Находим поле поиска
var searchInput = document.getElementById('ooptSearch');

// Находим кнопку поиска
var searchButton = document.getElementById('ooptSearchButton');

// Находим сообщение о результате
var searchResult = document.getElementById('searchResult');

// Стиль найденного объекта
var highlightStyle = new ol.style.Style({

    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.45)'
    }),

    stroke: new ol.style.Stroke({
        color: '#ff0000',
        width: 4
    })

});


// Функция поиска
function searchOopt() {

    var searchText = searchInput.value.trim().toLowerCase();

    // Если строка поиска пустая
    if (searchText === '') {
        clearSearch();
        return;
    }

    var features = ooptLayer.getSource().getFeatures();

    var foundFeatures = [];

    // Перебираем все объекты
    features.forEach(function(feature) {

        var name = feature.get('NAME');

        if (name) {

            // Поиск по части названия
            if (name.toLowerCase().includes(searchText)) {

                foundFeatures.push(feature);

                // Подсвечиваем объект
                feature.setStyle(highlightStyle);

            } else {

                // Возвращаем обычное отображение
                feature.setStyle(null);
            }
        }

    });


    // Если объекты найдены
    if (foundFeatures.length > 0) {

        searchResult.textContent =
            'Найдено объектов: ' + foundFeatures.length;

        // Получаем границы найденных объектов
        var extent = ol.extent.createEmpty();

        foundFeatures.forEach(function(feature) {

            ol.extent.extend(
                extent,
                feature.getGeometry().getExtent()
            );

        });

        // Масштабируем карту
        map.getView().fit(extent, {

            padding: [80, 80, 80, 80],
            duration: 800,
            maxZoom: 14

        });

    } else {

        searchResult.textContent = 'Объекты не найдены';

    }

}


// Кнопка поиска
searchButton.addEventListener('click', searchOopt);


// Поиск по клавише Enter
searchInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        searchOopt();
    }

});


// Очистка поиска
function clearSearch() {

    var features = ooptLayer.getSource().getFeatures();

    features.forEach(function(feature) {

        // null означает вернуть стиль слоя
        feature.setStyle(null);

    });

    searchInput.value = '';
    searchResult.textContent = '';

}