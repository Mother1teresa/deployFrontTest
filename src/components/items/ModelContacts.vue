<template>
  <a class="nav-link" href="#" @click="openModal">
    <span>
      <img class="open-icon" src="/src/assets/image/contacts.png" alt="" />
    </span>
    <span class="delet">Контакты</span></a>

  <transition name="slide">
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" @click.stop>
        <div class="grid-container">
          <button class="close-button" @click="closeModal">&times;</button>
          <div class="column-1">
            <div class="column-add">
              <div class="modal-title">Адрес</div>
              <div class="column-city">Москва</div>
              <div class="column-street">Хохловский переулок д. 11, стр. 3</div>
              <div class="column-map">
                Адрес на карте <span class="column-arrow">&#8595;</span>
              </div>
            </div>
            <div class="column-tel">
              <div class="modal-title">Телефон</div>
              <a href="tel" class="column-number nav-link"
                >+7 (495) 621-26-17</a>
              <div class="column-text">Ответим на все вопросы</div>
              <img
                class="column-image"
                src="/src/assets/image/social.png"
                alt=""/>
            </div>
          </div>
          <div class="column-2">
            <div class="modal-title">Форма обратной связи</div>
            <form class="from">
              <div class="text-field text-field_floating">
                <input class="text-field__input" type="email" id="reg-email" placeholder="email" autocomplete="off" required/>
                <label class="text-field__label" for="reg-email">e-mail</label>
              </div>
              <div class="text-field text-field_floating">
                <input class="text-field__input" type="text" id="message" placeholder="Сообщение" autocomplete="message" required/>
                <label class="text-field__label" for="message">Сообщение</label>
              </div>
              <button type="submit" class="btn">
                <span class="btn-text">Отправить</span>
              </button>
            </form>
          </div>
          <YandexMap />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import YandexMap from "./YandexMap.vue";
export default {
  components: {
    YandexMap,
  },
  data() {
    return {
      isModalOpen: false,
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
.nav-link {
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 60px;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(80px);
  background-color: rgba(51, 32, 101, 0.25);
}
.modal-content {
  width: 100%;
  max-height: 100%; 
  position: static;
  right: 0;
  transition: transform 0.7s ease;
  border-radius: 30px;
  overflow-x: auto; 
}
.close-button {
  position: absolute;
  width: 65px;
  height: 65px;
  top: 50px;
  right: 70px;
  color: rgba(255, 255, 255, 0.826);
  background-color: transparent;
  border: none;
  font-size: 52px;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.modal-title {
  color: rgba(255, 255, 255, 0.5);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 23px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
}
.column-1 {
  background-color: rgba(174, 151, 232, 1);
  border-radius: 30px 0 0 0;
  padding: 83px 181px 78px 83px;
}
.column-2 {
  background-color: rgba(250, 143, 239, 1);
  border-radius: 0 30px 0 0;
  padding: 83px 83px 50px 83px;
}

.btn {
  margin-top: 28px;
  width: 188px;
  height: 96px;
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
  right: 37px;
  top: 30px;
  transform: rotate(8deg);
}
.from {
  box-sizing: border-box;
}
.text-field {
  margin-bottom: 22px;
}
.text-field__label {
  font-size: 15px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 1);
}
.text-field__input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(217, 255, 90, 1);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}
.text-field__input[type="search"]::-webkit-search-decoration,
.text-field__input[type="search"]::-webkit-search-cancel-button,
.text-field__input[type="search"]::-webkit-search-results-button,
.text-field__input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

.text-field__input::placeholder {
  color: rgba(255, 255, 255, 1);
  opacity: 0.4;
}
.text-field__input:focus {
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(217, 255, 90, 1);
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
}
.text-field__input:focus {
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
}
.text-field__input:disabled,
.text-field__input[readonly] {
  background-color: #f5f5f5;
  opacity: 1;
}
.text-field_floating {
  position: relative;
}
.text-field_floating .text-field__input {
  border-bottom: 2px solid rgba(217, 255, 90, 1);
  background-color: transparent;
  height: 50px;
  line-height: 1.25;
  padding: 13px 0;
}
.text-field_floating .text-field__label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 16px 0;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
}
.text-field_floating .text-field__input::-moz-placeholder {
  color: transparent;
}
.text-field_floating .text-field__input::placeholder {
  color: transparent;
}
.text-field_floating .text-field__input:focus,
.text-field_floating .text-field__input:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.text-field_floating .text-field__input:focus ~ .text-field__label,
.text-field_floating
  .text-field__input:not(:placeholder-shown)
  ~ .text-field__label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.75rem) translateX(0.15rem);
}
.column-1 {
  display: flex;
  gap: 153px;
}
.column-city {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 60px;
  font-weight: 500;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
}
.column-street,
.column-text {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  width: 289px;
  margin-top: 10px;
}
.column-map {
  position: relative;
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  margin-top: 90px;
}
.column-number {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
  width: 250px;
  margin-top: 43px;
  padding: 0;
}
.column-text {
  margin-top: 19px;
}
.column-image {
  margin-top: 85px;
}
.column-arrow {
  margin-left: 20px;
  font-size: 33px;
  position: absolute;
  bottom: -13px;
}
.btn:active {
  border: 2px solid white;
}
.open-icon {
  display: none;
}
@media (max-width: 1660px) {
  .column-tel{
    display: none;
  }
}
@media (max-width: 1200px){
  .delet {
    display: none;
  }
  .open-icon{
    display: grid;
  }
}
@media (max-width:770px) {
  .column-city{
    font-size: 28px;
  }
  .column-street{
    font-size: 15px;
    width: 100px;
  }
}
@media (max-width: 430px) {
  .modal-content {
  width: 100%;
  max-height: 100%; 
  position: static;
  right: 0;
  transition: transform 0.7s ease;
  border-radius: 30px;
  overflow-x: auto; 
}
  .modal-overlay {
    max-width: 100%;
    max-height: 100%;
    padding: 19px 15px;
  }
  .grid-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .modal-content {
    width: 100%;
  }
  .close-button {
    font-size: 40px;
    top: 10px;
    right: 10px;
  }
  .column-1 {
    padding: 38px 134px 72px 17px;
    border-radius: 20px 20px 0 0;
  }
  .column-2 {
    padding: 60px 15px 63px 15px;
    border-radius: 0 0 0 0;
  }
  .column-1 {
    display: grid;
    gap: 60px;
  }
  .column-map {
    display: none;
  }
  .column-city {
    font-size: 23px;
  }
  .column-number {
    font-size: 30px;
    margin-top: 0;
  }
  .column-text {
    font-size: 13px;
    margin-top: 0;
  }
  .column-street {
    font-size: 13px;
  }
  .column-image {
    margin-top: 60px;
  }
  .delet {
    display: none;
  }
  .open-icon{
    display: grid;
  }
  .column-city{
    font-size: 30px;
  }
  .column-street{
    font-size: 15px;
    width: 150px;
  }
}
</style>
