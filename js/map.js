export function init() {
    let geolocation = ymaps.geolocation,
        map = new ymaps.Map('map', {
            center: [55.7522, 37.6156],
            zoom: 16,
        }
        );

    map.controls.remove('typeSelector');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');

    geolocation.get({
        provider: 'auto',
        mapStateAutoApply: true
    }).then(function (result) {

        const userCoords = result.geoObjects.get(0).geometry.getCoordinates();
        map.setCenter(userCoords);
        map.setZoom(16);

        const myPlacemark = new ymaps.Placemark(map.getCenter(), {
        }, {
            preset: 'islands#violetCircleDotIcon'
        });

        // добавляем метку на карту
        map.geoObjects.add(myPlacemark);

    },
        function (err) {
            console.log('Ошибка: ' + err)
        }
    );
}



