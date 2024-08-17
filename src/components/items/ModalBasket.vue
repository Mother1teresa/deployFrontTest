<template>
  <div class="personal">
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span><img src="/src/assets/image/favourites.png" alt="" /></span>
    </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span><img src="/src/assets/image/profile.png" alt="" /></span>
    </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="openModal">
        <span><img src="/src/assets/image/basket.png" alt="" /></span>
      </a>
    </li>
  </div>
  <transition name="slide">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-title">Ваша корзина</div>
        <button class="close-button" @click="closeModal">&times;</button>

        <!-- Список товаров -->
        <div class="item" v-for="product in products" :key="product.id" >
          <img :src="product.imageUrl" :alt="Image"/>
          <div class="item-info">
            <div class="item-content">
              <div class="item-titles">
                <div class="item-title_lamp">
                    <div class="color"></div>
                    <div class="item-title">{{ product.title }}</div>
                </div>
                <div class="item-content_text">{{ product.text }}</div>
              </div>
              <a class="nav-link" href="#">
                <span><img src="/src/assets/image/basket-lime.png" alt="" /></span>
              </a>
            </div>
            <div class="border"></div>
            <div class="item-quantity">
                <div class="amount-result">
                    150 000 <span class="currency">₽</span>
                </div>
                <div class="item-button">
                    <div class="minus-btn"></div>
                    <span class="figure"></span>
                    <div class="plus-btn"></div>
                </div>
            </div>
          </div>
          <!-- <p>Product {{ index + 1 }}</p> -->
          <!-- Здесь можно поместить информацию о товаре -->
        </div>

        <div class="model-result">
          <div class="amount">
            <div class="amount-text">Итог:</div>
            <div class="amount-result">
              450 000 <span class="currency">₽</span>
            </div>
          </div>
          <button class="btn"><span class="btn-text">Оформить</span></button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      products: [
        {
            id: 1,
            imageUrl:"src/assets/s7.png",
            Image:'fd',
            color:'',
            title:'coppelia',
            text:'Лампа настольная',
        },
        {
            id: 2,
            imageUrl:"/src/assets/image/redLamp.jpg",
            color:'',
            title:'coppelia',
            text:'Лампа настольная',
        },
    ], // Здесь можно разместить реальные данные о товарах
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
.nav-interesting,
.personal {
  display: flex;
}
.personal {
  margin-bottom: 10px;
}
.model-result {
  display: flex;
  justify-content: space-between;
  margin-top: 83px;
}
.amount-text {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
}
.item-image img{
    width: 89px;
    height: 142px;
}
.amount-result {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 3px;
  margin-top: 15px;
}
.currency {
  font-size: 20px;
}
.btn {
  width: 200px;
  height: 100px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  -webkit-border-radius: 100px / 50px;
  -moz-border-radius: 100px / 50px;
  border-radius: 100px / 50px;
  -moz-transform: scale(1) rotate(-8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -webkit-transform: scale(1) rotate(-8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -o-transform: scale(1) rotate(-8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -ms-transform: scale(1) rotate(-8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  transform: scale(1) rotate(-8deg) translateX(0px) translateY(0px) skewX(0deg)
    skewY(0deg);
}
.btn-text {
  font-size: 20px;
  text-align: center;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 400;
  position: absolute;
  right: 46px;
  top: 35px;
  -moz-transform: scale(1) rotate(8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -webkit-transform: scale(1) rotate(8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -o-transform: scale(1) rotate(8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -ms-transform: scale(1) rotate(8deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  transform: scale(1) rotate(8deg) translateX(0px) translateY(0px) skewX(0deg)
    skewY(0deg);
}

.modal-title {
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 53px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  right: 21px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.modal-content {
  width: 619px;
  height: 906px;
  background-color: rgba(51, 32, 101, 0.18);
  padding: 48px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 115px;
  right: 0;
  transition: transform 0.7s ease;
  border-radius: 30px;
}
.close-button {
  position: absolute;
  width: 56px;
  height: 56px;
  top: 0;
  right: 0;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}
.close-button:hover {
  opacity: 1;
}
/* .item {
  width: 523px;
  height: 145px;
  padding: 10px;
  display: flex;

  
} */
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

@media (max-width: 1600px) {
  .modal-content {
    width: 450px;
    height: 550px;
  }
  .item {
    width: 100%;
  }
  .amount-result {
    font-size: 37px;
  }
  .model-result {
    margin-top: 38px;
  }
  .btn {
    width: 140px;
    height: 70px;
  }
  .btn-text {
    font-size: 18px;
    right: 22px;
    top: 21px;
  }
}
</style>
