<template>
  <a class="nav-link" href="#" @click="openModalFav">
    <span class="link">
      <img src="/src/assets/image/favourites.png" alt="" />
    </span>
  </a>
  <transition name="slide">
    <div v-if="isModalFav" class="modal-overlay" @click.self="closeModalFav">
      <div class="modal-content" @click.stop>
        <div class="unification">
          <div class="modal-title">товары в избранном</div>
          <button class="close-button" @click="closeModalFav">&times;</button>
        </div>
        <div class="items">
          <div class="item" v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" alt="Image" class="imageUrl" />
            <div class="item-info">
              <div class="item-content">
                <div class="item-titles">
                  <div class="item-title_lamp">
                    <div
                      class="color"
                      :style="{ 'background-color': product.color }"
                    ></div>
                    <div class="item-title">{{ product.title }}</div>
                  </div>
                  <div class="item-content_text">{{ product.text }}</div>
                </div>
                <a class="" href="#">
                  <span class="circle-heart">
                    <img
                      class="heart-image"
                      src="/src/assets/image/heart.png"
                    />
                  </span>
                </a>
              </div>
              <div class="border-line"></div>
              <div class="item-quantity">
                <div class="item-quantity-result">
                  {{ product.result }}<span class="currency">₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import image1 from "/src/assets/image/sophi.png";
import image2 from "/src/assets/image/sophistica.png";
import image3 from "/src/assets/image/sophisticated-.png";
export default {
  data() {
    return {
      isModalFav: false,
      products: [
        {
          id: 1,
          imageUrl: image1,
          color: "rgba(41, 208, 217, 1)",
          title: "coppelia",
          text: "Лампа настольная",
          result: "150 000",
        },
        {
          id: 2,
          imageUrl: image2,
          color: "rgba(255, 196, 165, 1)",
          title: "Facchetta",
          text: "Лампа настольная",
          result: "150 000",
        },
        {
          id: 3,
          imageUrl: image3,
          color: "rgba(250, 142, 239, 1)",
          title: "coppelia",
          text: "Лампа настольная",
          result: "150 000",
        },
      ],
    };
  },
  methods: {
    openModalFav() {
      this.isModalFav = true;
    },
    closeModalFav() {
      this.isModalFav = false;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  right: 61px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.modal-content {
  width: 619px;
  height: 735px;
  background-color: rgba(52, 32, 101, 0.174);
  backdrop-filter: blur(80px);
  padding: 48px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 130px;
  right: 0;
  transition: transform 0.7s ease;
  border-radius: 30px;
}
.close-button {
  position: absolute;
  width: 65px;
  height: 65px;
  top: 0;
  right: 7px;
  color: rgba(255, 255, 255, 0.826);
  background-color: transparent;
  border: none;
  font-size: 52px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.modal-title {
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 53px;
}
.item {
  width: 522px;
  height: 145px;
  display: flex;
  gap: 40px;
}
.items {
  display: grid;
  gap: 60px;
  height: 100%;
}
.item-info {
  width: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.model-result {
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
}
.currency {
  font-size: 20px;
  position: absolute;
  left: 100px;
}
.border-line {
  border: 2px solid rgba(217, 255, 90, 1);
}
.item-content_text {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  margin-top: 4px;
  margin-bottom: 16px;
}
.item-title {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.item-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-quantity {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.item-quantity-result {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 3px;
  margin-top: 20px;
}
.circle-heart {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 177, 247, 1);
  background: rgba(255, 255, 255, 0.19);
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
.heart-image {
  width: 16px;
  height: 14px;
}
.block-price {
  font-size: 41px;
  font-family: "Floreste Wavy", sans-serif;
  font-weight: 400;
  line-height: 38px;
  margin-top: 28px;
  position: relative;
}
.item-quantity {
  width: 380px;
}
.imageUrl {
  width: 90px;
}
.item-title_lamp {
  display: flex;
  align-items: center;
  gap: 12px;
}
.color {
  width: 17px;
  height: 17px;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
}
@media (max-width: 1600px) {
  .modal-overlay {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
  }
  .modal-content {
    width: 450px;
    height: 530px;
    padding: 30px;
  }
  .model-result {
    margin-top: 38px;
  }
  .close-button {
    font-size: 34px;
  }
  .item {
    width: 380px;
    height: 120px;
    padding: 6px;
    display: flex;
    gap: 31px;
  }
  .items {
    gap: 30px;
  }
  .item-info{
    width: 270px;
  }
  .modal-title {
    margin-bottom: 20px;
  }
  .item-title {
    font-size: 17px;
    height: 23px;
  }
  .item-content{
    margin-bottom: 12px;
  }
  .item-content_text {
    margin: 0;
    height: 25px;
    font-size: 16px;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 10px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    width: 270px;
  }
  .circle-heart {
    width: 50px;
    height: 50px;
  }
  .imageUrl {
    width: 67px;
  }
  .currency{
   left: 100px;
  }
  .item-quantity{
    width: 270px;
  }
}
@media (max-width: 400px) {
  .modal-overlay {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
  }
  .modal-content {
    top: 20px;
    left: 80px;
    width: 360px;
    height: 562px;
    padding: 22px 15px 15px 18px;
    border-radius: 20px;
    overflow: hidden;
  }
  .item {
    height: 121px;
    width: 331px;
  }
  .item-title {
    font-size: 15px;
  }
  .border-line {
    width: 220px;
  }
  .modal-title {
    margin-bottom: 42px;
    font-size: 15px;
    letter-spacing: 2px;
  }
  .item-content_text {
    font-size: 13px;
  }
  .item-content {
    width: 220px;
    height: 53px;
    margin-bottom: 10px;
  }
  .imageUrl {
    width: 67px;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 29px;
  }
  .currency {
    font-size: 13px;
    left: 205px;
  }
  .circle-heart {
    width: 50px;
    height: 50px;
  }
  .heart-image {
    width: 22px;
    height: 20px;
  }
  .item-quantity {
    width: 220px;
  }
}
</style>
