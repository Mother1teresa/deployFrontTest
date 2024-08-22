<template>
  <div id="map"></div>
</template>

<script>
import yandexLogo from '/src/assets/image/yandexLogo.png';

export default {
  name: "YandexMap",
  mounted() {
    this.loadYandexMapsScript().then(this.initMap);
  },
  methods: {
    loadYandexMapsScript() {
      return new Promise((resolve, reject) => {
        if (typeof ymaps !== 'undefined') {
          resolve(); 
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=5f2fb3bc-4f36-4af2-b420-52b267e41a89&lang=ru_RU';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Yandex Maps API could not be loaded."));
        document.head.appendChild(script);
      });
    },
    initMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map("map", {
          center: [55.756756, 37.643408],
          zoom: 15,
        });

        const myPlacemark = new ymaps.Placemark([55.756756, 37.643408], null, {
          iconLayout: 'default#image',
          iconImageHref: yandexLogo, 
          iconImageSize: [70, 96],
          iconImageOffset: [-35, -96] 
        });

        map.geoObjects.add(myPlacemark);
      });
    },
  },
};

</script>

<style scoped>
#map {
  grid-column: span 2;
  position: relative;
  height: 466px;
  width: 100%;
  border-radius: 0 0 30px 30px;
  overflow: hidden; 
}

@media (max-width: 400px) {
  #map {
    width: 100%;
    height: 400px;
    border-radius: 0 0 30px 30px;
  }
}
</style>
