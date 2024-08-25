<template>
  <a class="nav-link" href="#" @click="openModal">
    <span class="link">
      <img src="/src/assets/image/basket.png" alt="" />
    </span>
  </a>
  <transition name="slide">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div class="unification">
          <div class="modal-title">Ваша корзина</div>
          <button class="close-button" @click="closeModal">&times;</button>
        </div>
        <div class="items">
          <div class="item" v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" alt="Image" class="imageUrl" />
            <div class="item-info">
              <div class="item-content">
                <div class="item-titles">
                  <div class="item-title_lamp">
                    <div class="color" :style="{ 'background-color': product.color }"></div>
                    <div class="item-title">{{ product.title }}</div>
                  </div>
                  <div class="item-content_text">{{ product.text }}</div>
                </div>
                <a href="#" @click.prevent="removeProduct(product.id)">
                  <span>
                    <img class="trash-lime" src="/src/assets/image/tarsh-lime.png" alt="trash"/>
                  </span>
                </a>
              </div>
              <div class="border-line"></div>
              <div class="item-quantity">
                <div class="item-quantity-result">
                  {{ product.result }}<span class="currency">₽</span>
                </div>
                <div class="item-button">
                  <div class="minus-btn">-</div>
                  <span class="figure">{{ product.quantity }}</span>
                  <div class="plus-btn">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="model-result">
          <div class="amount">
            <div class="amount-text">Итого:</div>
            <div class="amount-result">
              {{ totalAmount }} <span class="currency-line">₽</span>
            </div>
          </div>
          <button class="btn">
            <span class="btn-text">Оформить</span>
          </button>
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
      isModalOpen: false,
      products: [
        {
          id: 1,
          imageUrl: image1,
          color: "rgba(41, 208, 217, 1)",
          title: "coppelia",
          text: "Лампа настольная",
          quantity: 1,
          result: "150 000",
        },
        {
          id: 2,
          imageUrl: image2,
          color: "rgba(255, 196, 165, 1)",
          title: "Facchetta",
          text: "Лампа настольная",
          quantity: 1,
          result: "150 000",
        },
        {
          id: 3,
          imageUrl: image3,
          color: "rgba(250, 142, 239, 1)",
          title: "coppelia",
          text: "Лампа настольная",
          quantity: 1,
          result: "150 000",
        },
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    removeProduct(productId) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
  },
  computed: {
    totalAmount() {
      return this.products.reduce((total, product) => {
        return total + parseInt(product.result.replace(/\D/g, ""));
      }, 0);
    },
  },
};
</script>

<style scoped>
.model-result {
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
}
.amount-text {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
}
.minus-btn,
.figure,
.plus-btn {
  align-content: center;
  color: white;
}
.minus-btn {
  text-align: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.19);
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  opacity: 50%;
}
.plus-btn {
  text-align: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.19);
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.item-image img {
  width: 89px;
  height: 142px;
}
.item-info {
  width: 393px;
}
.item-quantity-result {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 3px;
  margin-top: 20px;
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
  position: absolute;
  right: 330px;
}
.border-line {
  border: 2px solid rgba(217, 255, 90, 1);
}
.item-button {
  display: flex;
  gap: 10px;
  width: 117px;
  height: 45px;
  margin-top: 15px;
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
.btn {
  width: 200px;
  height: 100px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-8deg);
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
  transform: rotate(8deg);
}
.item-content {
  display: flex;
  justify-content: space-between;
}
.item-quantity {
  display: flex;
  justify-content: space-between;
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
  right: 61px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.modal-content {
  width: 619px;
  max-height: 100%;
  background-color: rgba(52, 32, 101, 0.174);
  backdrop-filter: blur(80px);
  padding: 48px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 130px;
  right: 0;
  transition: transform 0.7s ease;
  border-radius: 30px; 
  overflow-x: auto; 
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
.item {
  width: 523px;
  height: 145px;
  padding: 10px;
  display: flex;
  gap: 41px;
}
.items {
  height: 555px;
  gap: 60px;
  display: grid;
  align-content: start;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.imageUrl {
  width: 82px;
}
.currency-line {
  font-size: 20px;
  position: absolute;
  left: 180px;
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
.btn:active{
  border: 2px solid white;
}
@media (max-width: 1900px){

  .modal-content {
    top: 110px;
    width: 450px;
    max-height: 550px;
    padding: 30px;
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
    margin-top: 15px;
    width: 140px;
    height: 70px;
  }
  .btn-text {
    font-size: 18px;
    right: 22px;
    top: 21px;
  }
  .close-button {
    font-size: 34px;
  }
  .item {
    width: 370px;
    height: 80px;
    padding: 6px;
    display: flex;
    gap: 31px;
  }
  .items {
    gap: 30px;
  }
  .modal-title {
    margin-bottom: 20px;
  }
  .item-content {
    width: 310px;
    height: 53px;
  }
  .item-title {
    font-size: 17px;
    height: 23px;
  }
  .item-content_text {
    margin: 0;
    height: 25px;
    font-size: 16px;
  }
  .minus-btn,
  .plus-btn {
    width: 30px;
    height: 30px;
  }
  .item-quantity {
    width: 310px;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 10px;
  }
  .item-button {
    justify-content: right;
    height: 30px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
  }
  .trash-lime {
    width: 20px;
  }
  .personal {
    gap: 6px;
    margin-right: 10px;
  }
  .border-line {
    width: 310px;
  }
  .currency {
    left: 207px;
    font-size: 13px;
  }
  .currency-line {
    left: 150px;
  }
  .imageUrl {
    width: 42px;
  }

}
@media (max-width: 1600px) {
  .modal-content {
    top: 110px;
    width: 450px;
    max-height: 500px;
    padding: 30px;
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
    margin-top: 15px;
    width: 140px;
    height: 70px;
  }
  .btn-text {
    font-size: 18px;
    right: 22px;
    top: 21px;
  }
  .close-button {
    font-size: 34px;
  }
  .item {
    width: 370px;
    height: 80px;
    padding: 6px;
    display: flex;
    gap: 31px;
  }
  .items {
    gap: 30px;
  }
  .modal-title {
    margin-bottom: 20px;
  }
  .item-content {
    width: 310px;
    height: 53px;
  }
  .item-title {
    font-size: 17px;
    height: 23px;
  }
  .item-content_text {
    margin: 0;
    height: 25px;
    font-size: 16px;
  }
  .minus-btn,
  .plus-btn {
    width: 30px;
    height: 30px;
  }
  .item-quantity {
    width: 310px;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 10px;
  }
  .item-button {
    justify-content: right;
    height: 30px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
  }
  .trash-lime {
    width: 20px;
  }
  .personal {
    gap: 6px;
    margin-right: 10px;
  }
  .border-line {
    width: 310px;
  }
  .currency {
    left: 207px;
    font-size: 13px;
  }
  .currency-line {
    left: 150px;
  }
  .imageUrl {
    width: 42px;
  }
}
@media (max-width:770px) {
  .modal-content {
  top: 100px;
  right: -20px;
  overflow-x: auto; 
  max-height: 100%;
}
}
@media (max-width: 430px){
  .modal-overlay {
    width: 100%;
    height: 100%;
    padding: 20px 15px;
  }
  .modal-content {
    top: 20px;
    left: 80px;
    width: 390px;
    max-height: 100%;
    top: 20px;
    padding: 22px 15px 15px 18px;
    border-radius: 20px;
    
  }
  .item {
    height: 120px;
    width: 330px;
  }
  .imageUrl {
    width: 67px;
  }
  .modal-title {
    font-size: 15px;
    margin-bottom: 50px;
  }
  .item-title {
    font-size: 15px;
  }
  .border-line {
    width: 220px;
  }
  .modal-title {
    margin-bottom: 42px;
  }
  .item-content_text {
    font-size: 13px;
  }
  .trash-lime {
    width: 30px;
    height: 33px;
  }
  .item-content {
    width: 224px;
    height: 53px;
    margin-bottom: 0;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 26px;
    letter-spacing: 1px;
  }
  .currency {
    font-size: 13px;
    left: 195px;
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
  .minus-btn {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .plus-btn {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .amount-text {
    text-transform: capitalize;
    font-size: 13px;
  }
  .amount-result {
    font-size: 30px;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  .currency-line {
    font-size: 20px;
    left: 110px;
  }
  .btn{
   margin-top: -5px;
  }
  .btn-text {
    font-size: 16px;
    right: 30px;
    top: 20px;
  }
  .item-quantity {
    width: 224px;
  }
  .item-button {
    justify-content: right;
    height: 45px;
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
    left: 70px;
    width: 350px;
    max-height: 100%;
    top: 20px;
    padding: 22px 15px 15px 18px;
    border-radius: 20px;
  }
  .item {
    height: 120px;
    width: 320px;
  }
  .imageUrl {
    width: 67px;
  }
  .modal-title {
    font-size: 15px;
    margin-bottom: 50px;
  }
  .item-title {
    font-size: 15px;
  }
  .border-line {
    width: 200px;
  }
  .modal-title {
    margin-bottom: 42px;
  }
  .item-content_text {
    font-size: 13px;
  }
  .trash-lime {
    width: 30px;
    height: 33px;
  }
  .item-content {
    width: 200px;
    height: 53px;
    margin-bottom: 0;
  }
  .item-quantity-result {
    font-size: 25px;
    margin-top: 26px;
    letter-spacing: 1px;
  }
  .currency {
    font-size: 13px;
    left: 195px;
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
  .minus-btn {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .plus-btn {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .amount-text {
    text-transform: capitalize;
    font-size: 13px;
  }
  .amount-result {
    font-size: 30px;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  .currency-line {
    font-size: 20px;
    left: 110px;
  }
  .btn {
    width: 155px;
    height: 91px;
    border: 1px solid rgba(217, 255, 90, 1);
   border-radius: 50%;
  }
  .btn-text {
    font-size: 16px;
    right: 34px;
    top: 30px;
  }
  .item-quantity {
    width: 200px;
  }
  .item-button {
    justify-content: right;
    height: 45px;
  }
}
@media (max-width:321px) {
  .modal-content {
    top: 20px;
    left: 70px;
    width: 300px;
    max-height: 100%;
    top: 20px;
    padding: 22px 15px 15px 18px;
    border-radius: 20px;
  }
  .item {
    height: 120px;
    width: 280px;
  }
  .imageUrl {
    width: 67px;
  }
  .modal-title {
    font-size: 15px;
    margin-bottom: 50px;
  }
  .item-title {
    font-size: 15px;
  }
  .border-line {
    width: 160px;
  }
  .modal-title {
    margin-bottom: 42px;
  }
  .item-content_text {
    font-size: 13px;
  }
  .trash-lime {
    width: 30px;
    height: 33px;
  }
  .item-content {
    width: 160px;
    height: 53px;
    margin-bottom: 0;
  }
  .item-quantity-result {
    font-size: 16px;
    margin-top: 16px;
    letter-spacing: 0;
  }
  .currency {
    font-size: 13px;
    left: 170px;
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
    width: 160px;
  }
  .minus-btn {
    width: 30px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .plus-btn {
    width: 30px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .amount-text {
    text-transform: capitalize;
    font-size: 12px;
  }
  .amount-result {
    font-size: 30px;
    margin-top: 4px;
    letter-spacing: 1px;
  }
  .currency-line {
    font-size: 20px;
    left: 110px;
  }
  .btn {
    width: 120px;
    height: 61px;
    border: 1px solid rgba(217, 255, 90, 1);
   border-radius: 50%;
  }
  .btn-text {
    font-size: 16px;
    top: 14px;
    left: 18px;
  }
  .item-quantity {
    width: 160px;
  }
  .item-button {
    justify-content: right;
    height: 30px;
  }
}
</style>
