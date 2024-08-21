<template>
  <div id="map" ></div>
</template>

<script>
export default {
  name: "YandexMap",
  mounted() {
    this.loadMap();
  },
  methods: {
    loadMap() {
    
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=5f2fb3bc-4f36-4af2-b420-52b267e41a89&lang=ru_RU";
      script.onload = this.initMap;
      document.head.appendChild(script);
    },
    initMap() {
      ymaps.ready(() => {
        const map = new ymaps.Map("map", {
          center: [55.756756, 37.643408], // Координаты вашего магазина
          zoom: 15,
        });

        const myPlacemark = new ymaps.Placemark(
          [55.756756, 37.643408], // Координаты метки
          {
            balloonContent: 'Это современная метка Яндекс.Карт', // Текст для всплывающего окна
          },
          {
            preset: 'islands#redDotIcon', // Современная метка Яндекс.Карт
          }
        );

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
}
@media (max-width: 400px) {
  .map {
    width: 360px;
    height: 400px;
    border-radius: 0 0 30px 30px;
  }
}
</style>
