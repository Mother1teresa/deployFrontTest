<template>
  <a class="nav-link" href="#" @click="openModalPro">
    <span class="link">
      <img src="/src/assets/image/profile.png" alt="" />
    </span>
  </a>

  <transition name="slide">
    <div v-if="isModalPro" class="modal-overlay" @click.self="closeModalPro">
      <div
        :class="[
          'modal-content',
          smallScreen ? 'small-screen' : 'large-screen',
        ]"
        @click.stop
      >
        <div class="unification">
          <div class="modal-title">{{ isLogin ? "Вход" : "Регистрация" }}</div>
          <button class="close-button" @click="closeModalPro">&times;</button>
        </div>
        <form class="from" v-if="isLogin">
          <div class="text-field text-field_floating">
            <input
              class="text-field__input"
              type="email"
              id="email"
              placeholder="email"
              autocomplete="off"
              required
            />
            <label class="text-field__label" for="email">e-mail</label>
          </div>
          <div class="text-field text-field_floating">
            <input
              class="text-field__input"
              type="password"
              id="password"
              placeholder="Пароль"
              autocomplete="current-password"
              required
            />
            <label class="text-field__label" for="password">Пароль</label>
          </div>
          <button type="submit" class="btn">
            <span class="btn-text">Войти</span>
          </button>
        </form>
        <form class="from" v-else>
          <div class="text-field text-field_floating">
            <input
              class="text-field__input"
              type="email"
              id="reg-email"
              placeholder="email"
              autocomplete="off"
              required
            />
            <label class="text-field__label" for="reg-email">e-mail</label>
          </div>
          <div class="text-field text-field_floating">
            <input
              class="text-field__input"
              type="password"
              id="reg-password"
              placeholder="Пароль"
              autocomplete="new-password"
              required
            />
            <label class="text-field__label" for="reg-password">Пароль</label>
          </div>
          <div class="text-field text-field_floating">
            <input
              class="text-field__input"
              type="password"
              id="reg-password-repeat"
              placeholder="Пароль"
              autocomplete="new-password"
              required
            />
            <label class="text-field__label" for="reg-password-repeat"
              >повторите пароль</label
            >
          </div>
          <button type="submit" class="btn-reg">
            <span class="btn-reg_text">Регистрация</span>
          </button>
        </form>
        <div class="model-block">
          <div class="model-block_registration" @click="toggleForm">
            <div class="model-block_account">
              {{ isLogin ? "нет аккаунта?" : "" }}
            </div>
            <span v-if="!isLogin" class="arrow-left"> &#10229; </span>

            {{ isLogin ? "Регистрация" : "Вход" }}
            <span v-if="isLogin" class="arrow-right"> &#10230; </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isModalPro: false,
      isLogin: true,
      smallScreen: window.innerWidth <= 400,
    };
  },
  computed: {
    modalStyle() {
      if (this.smallScreen) {
        return {
          width: "360px",
          height: "auto",
          padding: "10px",
        };
      }
      return {
        width: this.smallScreen ? "610px" : "619px",
        height: this.smallScreen ? "516px" : "604px",
      };
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    openModalPro() {
      this.isModalPro = true;
    },
    closeModalPro() {
      this.isModalPro = false;
    },
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    handleResize() {
      this.smallScreen = window.innerWidth <= 400;
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
  width: 610px;
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
.small-screen {
  width: 360px;
  height: auto;
}
.large-screen {
  width: 616px;
  height: auto;
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
}
.item-info {
  width: 393px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
.btn-reg {
  margin-top: 28px;
  width: 188px;
  height: 96px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-7deg);
}
.btn-reg:active {
  border: 2px solid white;
}
.btn-reg_text {
  font-size: 20px;
  text-align: center;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 400;
  position: absolute;
  right: 30px;
  top: 32px;
  transform: rotate(7deg);
}
.btn {
  margin-top: 28px;
  width: 119px;
  height: 85px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-8deg);
}
.btn:active {
  border: 2px solid white;
}
.btn-text {
  font-size: 20px;
  text-align: center;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 400;
  position: absolute;
  right: 30px;
  top: 25px;
  transform: rotate(8deg);
}
.from {
  box-sizing: border-box;
}
.text-field {
  margin-bottom: 1rem;
}
.text-field__label {
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.25rem;
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
  height: calc(3.5rem + 2px);
  line-height: 1.25;
  padding: 16px 0;
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
.model-block {
  display: flex;
  gap: 20px;
  color: rgba(255, 255, 255, 1);
  margin-top: 55px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.model-block_registration {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
}

.arrow-left {
  margin-right: 17px;
  font-size: 40px;
  margin-top: -10px;
}
.arrow-right {
  margin-left: 17px;
  font-size: 40px;
  margin-top: -10px;
}
.model-block_account {
  margin-right: 25px;
}

@media (max-width: 1600px) {
  .modal-content {
    top: 110px;
    width: 450px;
    max-height: 516px;
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
  .item-info {
    width: 270px;
  }
  .modal-title {
    margin-bottom: 20px;
  }
  .item-title {
    font-size: 17px;
    height: 23px;
  }
  .item-content {
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
  .currency {
    left: 100px;
  }
  .item-quantity {
    width: 270px;
  }
  .model-block {
    margin-bottom: 0;
    margin-top: 20px;
  }
  
}
@media (max-width: 1023px) {
  .model-block {
    margin-bottom: 0;
    margin-top: 18px;
  }
}
@media (max-width: 770px) {
  .modal-content {
    top: 100px;
    right: -20px;
    overflow-x: auto;
    max-height: 100%;
  }
  .model-block {
    margin-bottom: 12px;
  }
  .model-block {
    margin-bottom: 0;
    margin-top: 20px;
  }
}
@media (max-width: 430px) {
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
    margin-top: 16px;
    letter-spacing: 1px;
  }
  .model-block {
    margin-bottom: 12px;
  }
  .currency {
    font-size: 13px;
    left: 80px;
  }

  .btn-reg_text {
    font-size: 16px;
    right: 18px;
    top: 15px;
  }
  .model-block_account,
  .model-block_registration {
    font-size: 14px;
  }
  .model-block {
    margin-top: 28px;
  }
  .btn,
  .btn-reg {
    margin-top: 28px;
  }
  .btn-reg {
    width: 134px;
    height: 61px;
    background: rgba(235, 227, 255, 0.19);
    border: 1px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
  }
}

@media (max-width: 400px) {
  .modal-content {
    top: 20px;
    left: 70px;
    width: 360px;
    max-height: 100%;
    padding: 22px 15px 22px 15px;
    border-radius: 20px;
  }
  .close-button {
    font-size: 35px;
    top: -10px;
    right: -8px;
  }
  .text-field__input {
    width: 330px;
  }
  .modal-title {
    font-size: 15px;
    width: 47px;
    margin-left: 5px;
  }
  .unification {
    width: 360px;
  }
  .from {
    width: 360px;
  }
  .btn-text {
    font-size: 16px;
    right: 33px;
    top: 28px;
  }
  .btn-reg_text {
    font-size: 16px;
    right: 28px;
  }
  .model-block_account,
  .model-block_registration {
    font-size: 12px;
  }
  .model-block {
    margin-top: 28px;
  }
  .btn,
  .btn-reg {
    margin-top: 28px;
  }
  .btn-reg {
    width: 154px;
    height: 91px;
    background: rgba(235, 227, 255, 0.19);
    border: 1px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
  }
}
@media (max-width: 321px) {
  .modal-content {
    top: 20px;
    left: 70px;
    width: 300px;
    max-height: 100%;
    top: 20px;
    padding: 22px 15px 15px 18px;
    border-radius: 20px;
  }
  .close-button {
    font-size: 35px;
    top: -10px;
    right: -8px;
  }
  .text-field__input {
    width: 260px;
  }
  .modal-title {
    font-size: 15px;
    width: 47px;
    margin-left: 5px;
  }
  .unification {
    width: 260px;
  }
  .from {
    width: 260px;
  }
  .btn-text {
    font-size: 16px;
    right: 40px;
    top: 15px;
  }
  .btn {
    width: 134px;
    height: 61px;
  }
  .btn-reg_text {
    font-size: 16px;
    right: 18px;
    top: 15px;
  }
  .model-block_account,
  .model-block_registration {
    font-size: 10px;
  }
  .model-block {
    margin-top: 28px;
  }
  .btn,
  .btn-reg {
    margin-top: 28px;
  }
  .btn-reg {
    width: 134px;
    height: 61px;
    background: rgba(235, 227, 255, 0.19);
    border: 1px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
  }
}
</style>
