<template>
  <div class="container-fluid">
    <div
      v-for="(block, index) in blocks"
      :key="block.id"
      :class="['block', { expanded: isActive === index }]"
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
      <!-- Надпись для закрытого блока под изображением -->
      <div v-if="isActive !== index && isActive !== null" class="closed-block">
        <div class="block-label">
          {{ block.closedTitle }}
        </div>
        <div class="block-num">
          {{ block.num }}
        </div>
      </div>
      <!-- Надпись и контент для открытого блока -->
      <div v-if="isActive === index" class="block-content">
        <div class="text-fon" :style="{ color: block.textFonColor }">
          {{ block.textFon }}
        </div>

        <button class="btn">
          <div class="btn-union">
            
          </div>
          <img src="/src/assets/image/Union.png" alt="" class="union" />
            <span class="btn-text">Купить</span>
        </button>

        <div class="block-label-open">
          {{ block.openLabel }}
        </div>
        <div class="block-text">{{ block.content }}</div>
        <div class="border-white"></div>
        <div class="block-price">
          {{ block.price }} <span class="currency">₽</span>
        </div>
      </div>
      <div v-if="isActive === null" class="centered-text">
        <div class="block-label-open">
          {{ block.openLabel }}
        </div>
        <div class="block-text">{{ block.content }}</div>
        <div class="border-white"></div>
        <div class="block-price">
          {{ block.price }} <span class="currency-line">₽</span>
        </div>
      </div>
    </div>
  </div>
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
      isActive: 0, // Индекс активного блока
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
          closedTitle: "Cлайд", // Надпись для закрытого блока
          openLabel: "Светильник", // Надпись для открытого блока
          price: "150 000",
          textFon: "Benjamin Moore",
          textFonColor: "rgba(203, 182, 255, 0.6)",
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
          closedTitle: "Cлайд", // Надпись для закрытого блока
          openLabel: "кресло", // Надпись для открытого блока
          price: "120 000",
          textFon: "Paint Here Glory",
          textFonColor: "rgba(255, 168, 246, 1)",
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
          closedTitle: "Cлайд", // Надпись для закрытого блока
          openLabel: "высокий стол", // Надпись для открытого блока
          price: "235 000",
          textFon: "Benjamin Moore",
          textFonColor: "rgba(190, 216, 255, 1)",
        },
      ],
    };
  },
  methods: {
    toggleBlock(index) {
      this.isActive = this.isActive === index ? null : index;
    },
    getBlockStyle(index) {
      if (this.isActive === null) {
        return {
          width: "614px",
          height: "1038px",
          backgroundColor: this.blocks[index].closedColor,
          opacity: "1",
          position: "relative",
          zIndex: this.isActive === index ? "2" : "1",
          gap: "0px",
        };
      } else if (this.isActive === index) {
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
  },
};
</script>

<style scoped>
.container-fluid {
  position: absolute;
  display: flex;
  width: 100%;
  height: 1080px;
  gap: 20px;
  padding: 0 20px 0 20px;
  top: 30px;
  z-index: -1;
}

.block {
  width: 340px;
  height: 1060px;
  background-color: rgba(197, 176, 250, 0.7);
  margin-bottom: 10px;
  transition: height 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  border-radius: 50px;
  display: grid;
  align-content: center;
  justify-content: center;
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
  width: 494px;
  height: 724px;
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
  bottom: 103px;
  right: 145px;
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
  z-index: -1;
}
.border-white {
  border: 1px solid rgba(255, 255, 255, 0.067);
  width: 274px;
}
.block-label-open {
  font-size: 28px;
  width: 194px;
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
.btn {
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 356px;
  height: 135px;
  
  border: 2px solid rgba(217, 255, 90, 1);
  -webkit-border-radius: 356px / 135px;
  -moz-border-radius: 356px / 135px;
  border-radius: 356px / 135px;
 
}
.btn-text {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 500;
  margin-left: 11px;
  text-align: center;
  
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
  -webkit-border-radius: 356px / 135px;
  -moz-border-radius: 356px / 135px;
  border-radius: 356px / 135px;
  -moz-transform: scale(1) rotate(-10deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -webkit-transform: scale(1) rotate(-10deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -o-transform: scale(1) rotate(-10deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -ms-transform: scale(1) rotate(-10deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  transform: scale(1) rotate(-10deg) translateX(0px) translateY(0px) skewX(0deg)
    skewY(0deg);
}

@media (max-width: 1600px) {
  .closed-block {
    bottom: 103px;
    right: 105px;
  }
  .block-imag {
    width: 234px;
    height: 534px;
  }
}
</style>
