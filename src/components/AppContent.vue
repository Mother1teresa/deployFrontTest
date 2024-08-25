<template>
  <div class="content-mian">
    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      :class="[
        'block',
        { expanded: isActive === index, hidden: shouldHideBlock(index) },
      ]"
      @click="toggleBlock(index)"
      :style="getBlockStyle(index)"
    >
      <div
        class="block-image"
        :style="{
          backgroundImage: `url(${
            isActive === index ? block.imageOpen : block.imageClosed
          })`,
          width: isActive === index ? '494px' : block.widthClosed,
          height: isActive === index ? '724px' : block.heightClosed,
        }"
      ></div>

      <div v-if="isActive !== index && isActive !== null" class="closed-block">
        <div class="block-label">
          {{ block.closedTitle }}
        </div>
        <div class="block-num">
          {{ block.num }}
        </div>
      </div>

      <div v-if="isActive === index" class="block-content">
        <div class="text-fon" :style="{ color: block.textFonColor }">
          {{ block.textFon }}
        </div>
        <button class="btn">
          <img src="/src/assets/image/Union.png" alt="" class="union" />
          <span class="btn-text">Купить</span>
          <div class="btn-union"></div>
        </button>

        <div class="block-position">
          <div class="block-box">
            <div class="block-label-open">
              {{ block.openLabel }}
            </div>
            <div class="block-text">{{ block.content }}</div>
            <div class="border-white"></div>
            <div class="block-price">
              {{ block.price }} <span class="currency">₽</span>
            </div>
          </div>
          <div class="slider-box">
            <div class="slider-white">
              <div class="slider-num">01</div>
              <div class="slider-line">｜</div>
              <div class="slider-num">03</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="modal-overlay"
      :style="{ backgroundColor: modalColor }"
      @click="closeModal"
    >
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">
          <span class="close">закрыть</span>✕
        </button>
        <div class="modal-main">
          <div class="modal-info">
            <div class="info-left">
              <div class="article">Арт. GNM007</div>
              <div class="info-color">
                <div class="info-text">цвет:</div>
                <div
                  class="color"
                  :style="{ 'background-color': blocks[isActive].color }"
                ></div>
                <div class="name-color">{{ blocks[isActive].nameColor }}</div>
              </div>
            </div>
            <div class="info-rigth">
              <img
                class="info-favorite"
                src="/src/assets/image/info-favorite.png"
                alt=""
              />

              <div class="info-size">
                Высота: <span class="info-cm">60см</span>
              </div>
            </div>
          </div>
          <div
            class="modal-active"
            :style="{ color: blocks[isActive].textFonColor }"
          >
            {{ blocks[isActive].textFon }}
          </div>
          <img :src="blocks[isActive].imageOpen" class="modal-image" />
          <div class="body-content">
            <div class="body-content_text">
              {{ blocks[isActive].content }}
            </div>
            <div class="body-content_image">
              <div class="modal-title">{{ blocks[isActive].openLabel }}</div>
              <div class="modal-price">
                {{ blocks[isActive].price }}
                <span class="currency-active">₽</span>
              </div>
            </div>
            <div class="body-content_btn">
              <button class="btn-active">
                <img src="/src/assets/image/Union.png" alt="" class="union" />
                <span class="btn-text-active">Купить</span>
                <div class="btn-union-active"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="model-nigth">
        <button class="close-button" @click="closeModal">
          <span class="close">закрыть</span>✕
        </button>
        <div class="info">
          <div class="info-top">
            <div class="article">Арт. GNM 007</div>
            <img
              class="info-favorite"
              src="/src/assets/image/info-favorite.png"
              alt=""
            />
          </div>

          <div
            class="modal-active"
            :style="{ color: blocks[isActive].textFonColor }"
          >
            {{ blocks[isActive].textFon }}
          </div>

          <img :src="blocks[isActive].imageOpen" class="modal-image" />
          <div class="info-bottom">
            <div class="info-size">
              Высота: <span class="info-cm">60см</span>
            </div>
            <div class="info-left">
              <div
                class="color"
                :style="{ 'background-color': blocks[isActive].color }"
              ></div>
              <div class="name-color">{{ blocks[isActive].nameColor }}</div>
            </div>
          </div>
          <div class="info-content">
            <div class="info-title">
              {{ blocks[isActive].openLabel }}
            </div>
            <div class="body-content_text">
              {{ blocks[isActive].content }}
            </div>
            <div class="modal-btn">
              <div class="modal-price">
                {{ blocks[isActive].price }}
                <span class="currency-active">₽</span>
              </div>
              <button class="btn-active">
                <img src="/src/assets/image/Union.png" alt="" class="union" />
                <span class="btn-text-active">Купить</span>
                <div class="btn-union-active"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-if="isActive === null" class="centered-text">
        <div class="block-label-open">
          {{ block.openLabel }}
        </div>
        <div class="block-text">{{ block.content }}</div>
        <div class="border-white"></div>
        <div class="block-price">
          {{ block.price }} <span class="currency-line">₽</span>
        </div>
      </div> -->
</template>

<script>
import table from "/src/assets/image/table.png";
import lamp from "/src/assets/image/lamp.png";
import armchair from "/src/assets/image/armchair.png";
import tablemini from "/src/assets/image/tablemini.png";
import lampmini from "/src/assets/image/lampmini.png";
import armchairmini from "/src/assets/image/armchairmini.png";

export default {
  data() {
    return {
      isActive: 0,
      isModalOpen: false,
      blocks: [
        {
          id: 1,
          imageClosed: lampmini,
          widthClosed: "231px",
          heightClosed: "339px",
          imageOpen: lamp,
          content:
            "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
          closedColor: "rgba(197, 176, 250, 0.7)",
          openColor: "transparent",
          num: "01",
          closedTitle: "Cлайд",
          openLabel: "Santa Trinita",
          price: "150 000",
          textFon: "Benjamin Moore",
          textFonColor: "rgba(203, 182, 255, 0.6)",
          FonColor: "rgba(174, 151, 232, 1)",
          color: "rgba(147, 129, 216, 1)",
          nameColor: "Лаванда",
        },
        {
          id: 2,
          imageClosed: armchairmini,
          widthClosed: "231px",
          heightClosed: "339px",
          imageOpen: armchair,
          content:
            "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
          closedColor: "rgba(250, 143, 239, 1)",
          openColor: "rgba(250, 143, 239, 1)",
          num: "02",
          closedTitle: "Cлайд",
          openLabel: "Santa Trinita",
          price: "120 000",
          textFon: "Paint Here Glory",
          textFonColor: "rgba(255, 168, 246, 1)",
          FonColor: "rgba(250, 143, 239, 1)",
          color: "rgba(250, 143, 239, 1)",
          nameColor: "Лаванда",
        },
        {
          id: 3,
          imageClosed: tablemini,
          widthClosed: "231px",
          heightClosed: "339px",
          imageOpen: table,
          closedColor: "rgba(174, 207, 255, 1)",
          openColor: "rgba(174, 207, 255, 1)",
          content:
            "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
          num: "03",
          closedTitle: "Cлайд",
          openLabel: "Santa Trinita",
          price: "235 000",
          textFon: "Benjamin Moore",
          textFonColor: "rgba(190, 216, 255, 1)",
          FonColor: "rgba(174, 207, 255, 1)",
          color: "rgba(174, 207, 255, 1)",
          nameColor: "Лаванда",
        },
      ],
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    toggleBlock(index) {
      if (this.isActive === index) {
        this.modalColor = this.blocks[index].FonColor;
        this.isModalOpen = true;
      } else {
        this.isActive = index;
        this.isModalOpen = false;
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    getBlockStyle(index) {
      if (this.windowWidth <= 430 && index !== 0) {
        return { display: "none" };
      }
      // if (this.isActive == null) {
      //   return {
      //     width: "614px",
      //     height: "1038px",
      //     backgroundColor: this.blocks[index].closedColor,
      //     opacity: "1",
      //     position: "relative",
      //     zIndex: this.isActive === index ? "2" : "1",
      //     gap: "0px",
      //   };
      // }
      if (this.isActive === index) {
        return {
          backgroundColor: this.blocks[index].openColor,
          width: "1160px",
          height: "1060px",
          opacity: "1",
          position: "relative",
          top: "0px",
          left: "0px",
          zIndex: "2",
        };
      } else {
        return {
          backgroundColor: this.blocks[index].closedColor,
          width: "340px",
          height: "1060px",
          opacity: "1",
        };
      }
    },
    shouldHideBlock(index) {
      return this.windowWidth <= 400 && index !== 0;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.modal-content {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 60px;
  display: grid;
  align-items: flex-end;
}
.close-button {
  position: absolute;
  display: flex;
  align-items: center;
  top: 60px;
  right: 60px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}
.close {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}
.body-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.model-nigth {
  display: none;
}
.body-content_text {
  width: 346px;
  height: 93px;
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 20px;
  line-height: 30px;
}
.body-content_image {
  display: grid;
  justify-items: center;
}
.modal-title {
  font-size: 100px;
  font-family: "Floreste Wavy", sans-serif;
  color: rgba(255, 255, 255, 1);
  height: 80px;
  margin-bottom: 25px;
}
.modal-price {
  font-size: 40px;
  font-family: "Floreste Wavy", sans-serif;
  color: rgba(217, 255, 90, 1);
  position: relative;
  height: 40px;
}
.currency-active {
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 116px;
}
.modal-active {
  font-family: "Floreste Wavy", sans-serif;
  z-index: -1;
  font-size: 354px;
  height: 100%;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.6;
}
.modal-image {
  display: grid;
  justify-content: center;
  position: absolute;
  top: 150px;
  height: 666px;
  width: 400px;
}
.color {
  display: grid;
  align-content: center;
  width: 17px;
  height: 17px;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.name-color {
  color: rgba(255, 255, 255, 1);
  margin-left: -15px;
}
.modal-info {
  display: flex;
  justify-content: space-between;
}
.info-color {
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 120px;
  text-transform: uppercase;
}
.info-size {
  font-size: 18px;
  font-family: "Euclid Circular A", sans-serif;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  text-transform: uppercase;
}
.info-cm {
  color: rgba(255, 255, 255, 1);
  margin-left: 20px;
  text-transform: uppercase;
}
.info-favorite {
  float: right;
  margin-bottom: 72px;
}
.article {
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  text-transform: uppercase;
}
@media (max-width: 1900px) {
  .modal-active {
    font-size: 250px;
  }
}
@media (max-width: 1400px) {
  .modal-active {
    font-size: 180px;
    display: grid;
    align-items: center;
    height: 350px;
  }
  .body-content_text {
    width: 275px;
    height: 120px;
  }
  .btn-active {
    position: relative;
    cursor: pointer;
    text-align: center;
    width: 116px;
    height: 135px;
    background: none;
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    right: 13px;
  }
  .btn-union-active {
    text-align: center;
    width: 116px;
    height: 135px;
    position: absolute;
    bottom: 0;
    right: -3px;
    background: rgba(255, 255, 255, 0.19);
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    transform: rotate(-10deg);
  }
}
/* @media (max-width: 1200px) {
  .modal-content {
    padding: 30px;
  }
  .modal-image {
    top: 91px;
    left: 400px;
  }
} */
@media (max-width: 430px) {
  .modal-content {
    display: none;
  }
  .close-button {
    top: 18px;
    right: 18px;
  }
  .close {
    font-size: 12px;
  }
  .modal-image {
    top: 91px;
    left: 98px;
    width: 220px;
    height: 324px;
  }
  .model-nigth {
    padding: 0 14px 0 15px;
    margin-top: 200px;
    display: grid;
    width: 100%;
    height: 100%;
  }
  .info-top {
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-bottom {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
  }
  .info-favorite {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
  }
  .modal-active {
    font-size: 71px;
    height: 67px;
  }
  .article {
    font-size: 12px;
    height: 39px;
    width: 47px;
  }
  .info-size {
    font-size: 12px;
    height: 9px;
    width: 56px;
    text-align: left;
  }
  .info-cm {
    margin-left: 0;
  }
  .info-left {
    display: grid;
    justify-items: right;
  }
  .info-title {
    font-size: 23px;
    margin-top: 71px;
    color: rgba(255, 255, 255, 1);
    font-family: "Euclid Circular A", sans-serif;
    text-transform: uppercase;
  }
  .body-content_text {
    margin-top: 13px;
    font-size: 13px;
    height: 49px;
    width: 249px;
    line-height: 20px;
  }
  .modal-price {
    font-size: 30px;
    margin-top: 61px;
  }
  .currency-active {
    left: 90px;
    font-size: 20px;
  }
  .modal-btn {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btn-active {
    width: 207px !important;
    height: 78px !important;
  }
  .btn-union-active {
    width: 207px !important;
    height: 78px !important;
    top: 0 !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 16px !important;
  }
}

.content-mian {
  display: flex;
  padding: 20px 20px;
  height: 1100px;
  width: 100%;
  gap: 20px;
  justify-content: center;
}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 100%;
  background-color: rgba(197, 176, 250, 0.7);
  margin-bottom: 10px;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  border-radius: 50px;
  position: relative;
}
.block.expanded {
  width: 1160px;
}
.block-header {
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
.block-image {
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 494px;
  height: auto;
  border-radius: 20px;
  z-index: 1;
}
.block:not(.expanded) .block-content {
  opacity: 1;
}
.block-label {
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  font-size: 15px;
  font-family: "Euclid Circular A", sans-serif;
  border-radius: 10px;
  text-transform: uppercase;
}
.block-num {
  display: grid;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-family: "Floreste Wavy", sans-serif;
  font-size: 40px;
  margin-top: 42px;
}
.closed-block {
  position: absolute;
  bottom: 50px;
}
.block-content {
  position: absolute;
  color: rgba(255, 255, 255, 1);
  padding-left: 49px;
  bottom: 107px;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.text-fon {
  font-family: "Floreste Wavy", sans-serif;
  font-size: 212px;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.6;
}
.border-white {
  border: 1px solid rgba(255, 255, 255, 0.067);
  width: 274px;
}
.block-label-open {
  font-size: 28px;
  width: 270px;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.block-text {
  width: 275px;
  height: 57px;
  font-size: 15px;
  font-family: "Euclid Circular A", sans-serif;
  line-height: 23px;
  margin-bottom: 28px;
}
.block-price {
  font-size: 41px;
  font-family: "Floreste Wavy", sans-serif;
  font-weight: 400;
  line-height: 38px;
  margin-top: 28px;
  position: relative;
}
.currency {
  font-size: 20px;
  position: absolute;
  top: -8px;
  left: 116px;
}
.centered-text {
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-top: 46px;
}
.currency-line {
  font-size: 20px;
  position: absolute;
  top: -8px;
  left: 197px;
}
.slider-white {
  display: none;
}
.btn-active {
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 357px;
  height: 156px;
  background: none;
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
}
.btn-text-active {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 500;
  margin-left: 11px;
  text-align: center;
}
.btn-union-active {
  position: absolute;
  text-align: center;
  top: 3px;
  right: 0;
  width: 357px;
  height: 156px;
  background: rgba(255, 255, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-13deg);
}
.btn {
  right: 0;
  position: absolute;
  cursor: pointer;
  text-align: center;
  width: 357px;
  height: 156px;
  background: none;
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
.btn:active,
.btn-activ:active {
  border: 2px solid white;
}
.btn-union {
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  width: 357px;
  height: 156px;
  background: rgba(255, 255, 255, 0.234);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-10deg);
}
@media (max-width: 1640px){
  .content-mian {
    padding: 0 8px 0 15px;
    height: 655px !important;
  }
  .block {
    width: 100% !important;
    height: 100% !important;
    border-radius: 30px;
  }
  
  .block-image {
    width: 156px !important;
    height: 250px !important;
    margin-top: -100px;
  }
  .text-fon {
    font-size: 41px;
    width: 361px;
    text-align: center;
    margin-bottom: 123px;
  }
  .block-content {
    padding-left: 0;
    bottom: 0;
  }
  .block-label-open {
    font-size: 23px;
    width: 222px;
    margin-bottom: 12px;
  }
  .block-text {
    font-size: 13px;
    line-height: 20px;
    width: 222px;
    margin-bottom: 20px;
  }
  .slider-box {
    display: none;
  }
  .block-position {
    display: flex;
  }
  .slider-line {
    color: rgba(174, 151, 232, 1);
  }
  .block-price {
    color: rgba(217, 255, 90, 1);
    font-size: 30px;
    margin-top: 34px;
    height: 28px;
  }
  .currency {
    font-size: 20px;
    top: -5px;
    left: 80px;
  }
  .slider-box {
    display: grid;
    align-items: end;
  }
  .btn {
    text-align: center;
    position: absolute;
    bottom: 180px;
    right: 65px;
    width: 140px;
    height: 58px;
    background: none;
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: 2;
  }
  .btn-union {
    text-align: center;
    width: 140px;
    height: 58px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: -1;
  }
  .btn-text {
    font-size: 16px;
    margin-left: 11px;
    text-align: center;
  }
  .block-box {
    display: grid;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
  }
  .block-label-open {
    font-size: 18px;
  }
  .block-price {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .block-label {
    font-size: 12px;
  }
  .block-num{
    font-size: 30px;
    margin-top: 20px;
  }
 
}
@media (max-width: 1024px){
  .content-mian {
    padding: 0 8px 0 15px;
    height: 655px !important;
  }
  .block {
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;
  }
  
  .block-image {
    width: 156px !important;
    height: 250px !important;
    margin-top: -100px;
  }
  .text-fon {
    font-size: 41px;
    width: 361px;
    text-align: center;
    margin-bottom: 123px;
  }
  .block-content {
    padding-left: 0;
    bottom: 0;
  }
  .block-label-open {
    font-size: 23px;
    width: 222px;
    margin-bottom: 12px;
  }
  .block-text {
    font-size: 13px;
    line-height: 20px;
    width: 222px;
    margin-bottom: 20px;
  }
  .slider-box {
    display: none;
  }
  .block-position {
    display: flex;
  }
  .slider-line {
    color: rgba(174, 151, 232, 1);
  }
  .block-price {
    color: rgba(217, 255, 90, 1);
    font-size: 30px;
    margin-top: 34px;
    height: 28px;
  }
  .currency {
    font-size: 20px;
    top: -5px;
    left: 80px;
  }
  .slider-box {
    display: grid;
    align-items: end;
  }
  .btn {
    text-align: center;
    position: absolute;
    bottom: 180px;
    right: 65px;
    width: 140px;
    height: 58px;
    background: none;
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: 2;
  }
  .btn-union {
    text-align: center;
    width: 140px;
    height: 58px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: -1;
  }
  .btn-text {
    font-size: 16px;
    margin-left: 11px;
    text-align: center;
  }
  .block-box {
    display: grid;
    justify-content: space-around;
    width: 100%;
   margin-bottom: 10px;
  }
  .block-label-open {
    font-size: 18px;
  }
  .block-price {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .block-label {
    font-size: 12px;
  }
  .block-num{
    font-size: 30px;
    margin-top: 20px;
  }
}
@media (max-width: 777px) {
  .content-mian {
    padding: 0 8px 0 15px;
    height: 655px !important;
  }
  .block {
    width: 366px !important;
    height: 555px !important;
    border-radius: 15px;
  }
  
  .block-image {
    width: 156px !important;
    height: 250px !important;
    margin-top: -100px;
  }
  .text-fon {
    font-size: 41px;
    width: 361px;
    text-align: center;
    margin-bottom: 123px;
  }
  .block-content {
    padding-left: 0;
    bottom: 0;
  }
  .block-label-open {
    font-size: 23px;
    width: 222px;
    margin-bottom: 12px;
  }
  .block-text {
    font-size: 13px;
    line-height: 20px;
    width: 222px;
  }
  .slider-box {
    display: none;
  }
  .block-position {
    display: flex;
  }
  .slider-line {
    color: rgba(174, 151, 232, 1);
  }
  .block-price {
    color: rgba(217, 255, 90, 1);
    font-size: 30px;
    margin-top: 34px;
    height: 28px;
  }
  .currency {
    font-size: 20px;
    top: -5px;
    left: 80px;
  }
  .slider-box {
    display: grid;
    align-items: end;
  }
  .btn {
    text-align: center;
    position: absolute;
    bottom: 180px;
    right: 65px;
    width: 140px;
    height: 58px;
    background: none;
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: 2;
  }
  .btn-union {
    text-align: center;
    width: 140px;
    height: 58px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: -1;
  }
  .btn-text {
    font-size: 16px;
    margin-left: 11px;
    text-align: center;
  }
  .block-box {
    display: grid;
    justify-content: space-around;
    width: 100%;
    margin-left: 50px;
  }
  .block-label-open {
    font-size: 18px;
  }
  .block-price {
    margin-top: 10px;
    margin-bottom: 8px;
  }
  .block-label {
    font-size: 12px;
  }
  .block-num{
    font-size: 30px;
    margin-top: 20px;
  }
}
@media (max-width: 430px) {
  .content-mian {
    padding: 0 8px 0 15px;
    height: 655px !important;
  }
  .block {
    width: 366px !important;
    height: 655px !important;
    border-radius: 0;
  }
  .block-image {
    width: 236px !important;
    height: 346px !important;
    margin-top: -100px;
  }
  .text-fon {
    font-size: 71px;
    width: 361px;
    text-align: left;
    margin-bottom: 123px;
  }
  .block-content {
    padding-left: 0;
    bottom: 0;
  }
  .block-label-open {
    font-size: 23px;
    width: 222px;
    margin-bottom: 12px;
  }
  .block-text {
    font-size: 13px;
    line-height: 20px;
    width: 222px;
  }
  .border-white {
    display: none;
  }
  .block-position {
    display: flex;
    justify-content: space-between;
  }
  .slider-white {
    width: 52px;
    height: 143px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50px;
    display: grid;
    gap: 10px;
    justify-content: center;
    align-content: center;
  }
  .slider-num {
    color: rgba(174, 151, 232, 1);
    font-family: "Floreste Wavy", sans-serif;
    font-size: 25px;
  }
  .slider-line {
    color: rgba(174, 151, 232, 1);
  }
  .block-price {
    color: rgba(217, 255, 90, 1);
    font-size: 30px;
    margin-top: 34px;
    height: 28px;
  }
  .currency {
    font-size: 20px;
    top: -5px;
    left: 80px;
  }
  .slider-box {
    display: grid;
    align-items: end;
  }
  .block-box{
    margin-bottom: 0;
    margin-left: 0;
    display: grid;
    justify-content: left;
  }
  .btn {
    text-align: center;
    position: absolute;
    bottom: 180px;
    right: 30px;
    width: 180px;
    height: 78px;
    background: none;
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: 2;
  }
  .btn-union {
    text-align: center;
    width: 180px;
    height: 78px;
    position: absolute;
    bottom: 0px;
    right: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(217, 255, 90, 1);
    z-index: -1;
  }
  .btn-text {
    font-size: 16px;
    margin-left: 11px;
    text-align: center;
  }
}
@media (max-width: 380px) {
  .content-mian {
    padding: 0 8px 0 8px;
    width: 100%;
  }
  .block {
    width: 100%;
    height: 655px !important;
    border-radius: 0;
  }
  .block-box{
    width: 200px;
  }
  .block-position {
    display: flex;
    justify-content: space-around;
  }
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
/* modal activ */
@media (max-width: 2560px) {
  .content-mian {
    padding: 0 8px 0 8px;
    width: 100%;
  }
  .modal-image {
    top: 90px;
    left: 1170px;
    width: 450px;
    height: 550px;
  }
  .info-text {
    display: grid;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    width: 357px !important;
    height: 150px !important;
  }
  .btn-union-active {
    width: 357px !important;
    height: 150px !important;
    top: -1px !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 16px !important;
  }
  .modal-active {
    margin-top: -10px;
    margin-bottom: 40px;
    font-size: 80px !important;
    width: 100% !important;
    height: 100% !important;
  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .modal-info {
    width: 100%;
    margin-top: 40px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .close-button {
    top: 20px;
    right: 20px;
  }
  .body-content_text {
    line-height: 30px;
    height: 100px;
    width: 470px;
    font-size: 25px;
  }
  .modal-title {
    font-size: 100px;
    margin-bottom: 20px;
    display: grid;
    justify-content: center;
  }
  .modal-price {
    margin-top: 0px;
    font-size: 35px;
    display: grid;
    justify-content: center;
  }
  .currency-active {
    font-size: 18px;
    left: 90px;
  }
  .info-rigth {
    width: 80px;
  }
  .name-color {
    margin-left: 1px;
  }
  .info-color {
    width: 60px;
    gap: 5px;
    flex-wrap: wrap;
  }
  .modal-active {
    font-size: 320px !important;
    margin-top: -110px;
    margin-bottom: 10px;
  }
  .info-favorite {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 1940px) {
  .content-mian {
    padding: 0 8px 0 8px;
    width: 100%;
  }
  .modal-image {
    top: 150px;
    left: 870px;
    width: 380px;
    height: 480px;
  }
  .info-text {
    display: grid;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    width: 257px !important;
    height: 100px !important;
  }
  .btn-union-active {
    width: 257px !important;
    height: 100px !important;
    top: -1px !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 16px !important;
  }
  .modal-active {
    margin-top: -10px;
    margin-bottom: 40px;
    font-size: 80px !important;
    width: 100% !important;
    height: 100% !important;
  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .modal-info {
    width: 100%;
    margin-top: 40px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .close-button {
    top: 20px;
    right: 20px;
  }
  .body-content_text {
    line-height: 30px;
    height: 100px;
    width: 470px;
    font-size: 25px;
  }

  .modal-title {
    font-size: 67px;
    margin-bottom: 10px;
    display: grid;
    justify-content: center;
  }
  .modal-price {
    margin-top: 0px;
    font-size: 25px;
    display: grid;
    justify-content: center;
  }
  .currency-active {
    font-size: 12px;
    left: 70px;
  }
  .info-rigth {
    width: 80px;
  }
  .name-color {
    margin-left: 1px;
  }
  .info-color {
    width: 60px;
    gap: 5px;
    flex-wrap: wrap;
  }
  .modal-active {
    font-size: 270px !important;
    margin-top: -110px;
    margin-bottom: 10px;
  }
  .info-favorite {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 1640px){
  .modal-image {
    position: absolute;
    top: 80px;
    left: 640px;
    width: 330px;
    height: 434px;
  }
  .modal-price{
    height: 50px;
  }
 .body-content_image{
  margin-left: -100px;
 }
 .modal-active{
  height: 300px !important;
 }
}
@media (max-width: 1440px) {
  .content-mian {
    padding: 0 8px 0 8px;
    width: 100%;
  }
  .modal-image {
    position: absolute;
    top: 60px;
    left: 640px;
    width: 260px;
    height: 334px;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    width: 257px !important;
    height: 80px !important;
  }
  .btn-union-active {
    width: 257px !important;
    height: 80px !important;
    top: -1px !important;
    transform: rotate(-8deg) !important;
  }
  .btn-text-active {
    font-size: 12px !important;
  }
  .modal-active {
    margin-top: -10px;
    margin-bottom: 40px;
    font-size: 80px !important;
    width: 100% !important;
    height: 100% !important;
  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .modal-info {
    width: 100%;
    margin-top: 40px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .body-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close-button {
    top: 20px;
    right: 20px;
  }
  .body-content_text {
    line-height: 20px;
    height: 100px;
    font-size: 17px;
    width: 300px;
  }
  .modal-title {
    font-size: 60px;
    height: 50px;
    margin-bottom: 20px;
    
  }
  .body-content_image{
    margin-left: 50px;
  }
  .modal-price {
    margin-top: 0px;
    font-size: 25px;
  }
  .currency-active {
    font-size: 12px;
    left: 70px;
  }
  .info-rigth {
    width: 80px;
  }
  .name-color {
    margin-left: 1px;
  }
  .info-text {
    display: none;
  }
  .info-color {
    width: 60px;
    gap: 5px;
    flex-wrap: wrap;
  }
  .modal-active {
    font-size: 220px !important;
    margin-top: -210px;
    margin-bottom: 10px;
  }
  .info-favorite {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 1030px) {
  .model-nigth {
    margin-top: 120px;
  }
  .content-mian {
    padding: 0 8px 0 8px;
    width: 100%;
  }
  .modal-image {
    position: absolute;
    top: 100px;
    left: 420px;
    width: 250px;
    height: 324px;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    margin-top: 0px !important;
    width: 157px !important;
    height: 60px !important;
  }
  .btn-union-active {
    width: 157px !important;
    height: 60px !important;
    top: -1px !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 12px !important;
  }

  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .modal-info {
    width: 100%;
    margin-top: 40px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .close-button {
    top: 20px;
    right: 20px;
  }
  .body-content_text {
    line-height: 20px;
    height: 100px;
    font-size: 17px;
    width: 260px;
  }
  .body-content_image{
    margin-left: 0;
  }
  .modal-title {
    font-size: 60px;
    height: 50px;
    margin-bottom: 20px;
  }
  .modal-price {
    margin-top: 0px;
    font-size: 25px;
  }
  .currency-active {
    font-size: 12px;
    left: 70px;
  }
  .info-rigth {
    width: 80px;
  }
  .name-color {
    margin-left: 1px;
  }
  .info-text {
    display: none;
  }
  .info-color {
    width: 60px;
    gap: 5px;
    flex-wrap: wrap;
  }
  .modal-active {
    font-size: 160px !important;
    margin-top: -70px;
    margin-bottom: 20px;
    width: 100% !important;
    height: 100% !important;
  }
  .info-favorite {
    width: 50px;
    height: 50px;
  }
}
@media (max-width: 800px) {
  .model-nigth {
    padding: 0 8px 0 8px;
    width: 100%;
    height: 100%;
    margin-top: 120px;
  }
  .modal-image {
    position: absolute;
    top: 90px;
    left: 300px;
    width: 220px;
    height: 304px;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    margin-left: 15px;
    width: 180px !important;
    height: 80px !important;
  }
  .btn-union-active {
    width: 180px !important;
    height: 80px !important;
    top: -1px !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 12px !important;
  }
  .modal-active {
    margin-top: -10px;
    margin-bottom: 40px;
    font-size: 80px !important;
    width: 100% !important;
    height: 100% !important;

  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .modal-info {
    width: 100%;
    margin-top: 20px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .close-button {
    top: 20px;
    right: 20px;
  }
  .body-content_text {
    line-height: 20px;
    height: 100px;
    font-size: 17px;
    width: 260px;
  }
  .modal-title {
    font-size: 40px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .modal-price {
    margin-top: 0px;
  }
  .info-rigth {
    width: 80px;
  }
  .info-text {
    display: none;
  }
  .info-color {
    width: 60px;
    gap: 5px;
    flex-wrap: wrap;
  }
  .modal-active {
    font-size: 120px !important;
    margin-top: -70px;
    margin-bottom: 20px;
    width: 100% !important;
    height: 100% !important;
  }
}
@media (max-width: 430px) {
  .model-nigth {
    margin-top: 80px;
    padding: 0 8px 0 8px;
    width: 100%;
    height: auto;
  }

  .modal-image {
    position: absolute;
    top: 60px;
    left: 100px;
    width: 220px;
    height: 304px;
  }
  .info-title {
    margin-top: 20px;
  }
  .modal-price {
    margin-top: 40px;
    display: grid;
    justify-items: left;
  }
  .modal-btn {
    display: flex;
    justify-content: space-around;
  }
  .btn-active {
    margin-top: 12px;
    width: 147px !important;
    height: 60px !important;
  }
  .btn-union-active {
    width: 147px !important;
    height: 60px !important;
    top: -1px !important;
    transform: rotate(-11deg) !important;
  }
  .btn-text-active {
    font-size: 12px !important;
  }
  .modal-active {
    margin-top: 50px;
    font-size: 70px !important;
    width: 100% !important;
    height: 90px !important;
  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .info-bottom {
    margin-top: 50px;
  }
  .info-top {
    margin-bottom: 55px;
  }
  .body-content_text {
    font-size: 16px;
    height: 60px;
    width: 100%;
    margin-top: 3px;
  }
}
@media (max-width: 322px) {
  .modal-active {
    font-size: 50px !important;
    width: 300px !important;
    height: 70px !important;
  }
  .modal-image {
    top: 60px;
    left: 70px;
    width: 180px;
    height: 254px;
  }
  .model-nigth {
    margin-top: 140px;
  }
  .modal-price {
    margin-top: 20px;
    margin-left: -25px;
  }
  .info-bottom {
    margin-top: 20px;
  }
  .info-top {
    margin-bottom: 50px;
  }
  .info-title {
    margin-top: 10px;
  }
  .body-content_text {
    line-height: 18px;
    font-size: 18px;
    height: 70px;
    width: 100%;
    margin-top: 3px;
  }
}
</style>
