<template>
  <button class="btn">
    <img src="/src/assets/image/Union.png" alt="" class="union" />
    <span class="btn-text">Купить</span>
    <div class="btn-union"></div>
  </button>
  <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button @click="closeModal">Закрыть</button>
        <div>
          <!-- Ваше содержимое модального окна -->
          <p>Это модальное окно открывается по нажатию на кнопку.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isModalVisible: false, // Изначально скрыто
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true; // Открытие модального окна
    },
    closeModal() {
      this.isModalVisible = false; // Закрытие модального окна
    }
  }
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 356px;
  height: 135px;
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
}
.btn-text {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 500;
  margin-left: 11px;
  text-align: center;
}
.btn:active {
  border: 2px solid white;
}
.btn-union {
  text-align: center;
  width: 356px;
  height: 135px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-10deg);
}

@media (max-width: 380px) {
  .btn {
    text-align: center;
    position: absolute;
    bottom: 180px;
    right: 30px;
    width: 180px;
    height: 78px;
    border: 1px solid rgba(217, 255, 90, 1);
  }
  .btn-union {
    text-align: center;
    width: 180px;
    height: 78px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(217, 255, 90, 1);
  }
  .btn-text {
    font-size: 16px;
    margin-left: 11px;
    text-align: center;
  }
}
</style>
