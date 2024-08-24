<template>
  <div class="content-mian container-fluidd">
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
        <ModalViewing />

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

import ModalViewing from "@/components/items/ModalViewing.vue";
export default {
  components: {
    ModalViewing,
  },
  data() {
    return {
      isActive: 0,
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
        },
      ],
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    toggleBlock(index) {
      this.isActive = this.isActive === index ? null : index;
    },
    getBlockStyle(index) {
      if (this.windowWidth <= 430 && index !== 0) {
        return { display: "none" };
      }
      if (this.isActive == null) {
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
  z-index: -1;
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
  .closed-block {
    bottom: 103px;
    right: 105px;
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
  .block-position {
    overflow: hidden;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }
  
}
</style>
