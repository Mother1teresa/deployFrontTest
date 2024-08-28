<template>
  <div class="container-fluid" id="catalog">
    <div class="catalog-title">категории</div>
    <div class="items">
      <swiper
        :slides-per-view="slidesToShow"
        :space-between="30"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="catalog in catalogs"
          :key="catalog.id"
          :class="{ active: activeCatalogId === catalog.id }"
        >
          <div class="item">
            <div class="item-subtract">
              <img
                class="image-subtarct"
                src="/src/assets/image/Subtract.png"
                alt=""
              />
              <div class="item-title">{{ catalog.title }}</div>
              <div class="item-quantity">
                <span class="quantity-numder">4</span>
                <span class="quantity-text">шт</span>
              </div>
              <div class="item-btn">
                <img
                  class="image-mirror"
                  :src="catalog.imageCatalog"
                  alt="Image"
                />
                <button
                  class="subtract-btn"
                  :class="{ active: activeCatalogId === catalog?.id }"
                  @click="setActiveCatalog(catalog?.id)"
                >
                  <span
                    class="arrow-bottom"
                    :class="{ active: activeCatalogId === catalog?.id }"
                  >
                    <img
                      :src="
                        activeCatalogId === catalog.id
                          ? activeArrow
                          : inactiveArrow
                      "
                      alt="arrow"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="active-catalog-wrapper" v-if="activeCatalogId !== null">
      <div
        class="active-catalog"
        v-for="catalog in catalogs"
        :key="catalog.id"
        v-show="activeCatalogId === catalog.id"
      >
        <div class="active-title">
          <div class="filter">
            <span>
              <img
                class="image-filter"
                src="/src/assets/image/filter.png"
                alt=""
              />
            </span>
            фильтры
          </div>
          <div class="product-positions">20 позиций в категории</div>
        </div>
        <div class="items-filter">
          <div class="item-filter" v-for="item in catalog.items" :key="item.id">
            <div class="image-main">
              <div
                class="color"
                :style="{ 'background-color': item.color }"
              ></div>
              <img
                class="active-catalog-mirror"
                :src="item.imageActive"
                alt="Image"
              />
            </div>
            <div class="active-catalog-content">
              <div class="active-catalog_title">{{ item.title }}</div>
              <div class="active-catalog_text">{{ item.text }}</div>
            </div>
            <div class="border-line"></div>
            <div class="amount">
              <div class="amount-result">
                150 000 <span class="currency-line">₽</span>
              </div>
              <div class="btn-union">
                <img src="/src/assets/image/Union.png" alt="" class="union" />
                <span class="union-text">Купить</span>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-position">
          <button class="btn">
            <span class="btn-text">Загрузить еще</span>
            <span class="column-arrow">
              <img src="/src/assets/image/arrow-down.png" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import activeArrow from "/src/assets/image/arr.png";
import inactiveArrow from "/src/assets/image/arr-lime.png";

import tableimg1 from "/src/assets/image/table/tableimg1.png";
import tableimg2 from "/src/assets/image/table/tableimg2.png";
import tableimg3 from "/src/assets/image/table/tableimg3.png";
import tableimg4 from "/src/assets/image/table/tableimg4.png";
import tableimg5 from "/src/assets/image/table/tableimg5.png";
import chairimg1 from "/src/assets/image/chair/chairimg1.png";
import chairimg2 from "/src/assets/image/chair/chairimg2.png";
import chairimg3 from "/src/assets/image/chair/chairimg3.png";
import chairimg4 from "/src/assets/image/chair/chairimg4.png";
import chairimg5 from "/src/assets/image/chair/chairimg5.png";
import lampimg1 from "/src/assets/image/lamp/lampim1.png";
import lampimg2 from "/src/assets/image/lamp/lampim2.png";
import lampimg3 from "/src/assets/image/lamp/lampim3.png";
import lampimg4 from "/src/assets/image/lamp/lampim4.png";
import lampimg5 from "/src/assets/image/lamp/lampim5.png";
import mirrorimag1 from "/src/assets/image/mirror/mirrorimag1.png";
import mirrorimag2 from "/src/assets/image/mirror/mirrorimag2.png";
import mirrorimag3 from "/src/assets/image/mirror/mirrorimag3.png";
import mirrorimag4 from "/src/assets/image/mirror/mirrorimag4.png";
import mirrorimag5 from "/src/assets/image/mirror/mirrorimag5.png";
import mirror from "/src/assets/image/mirror.png";
import floorLamps from "/src/assets/image/floor-lamps.png";
import armchair from "/src/assets/image/armchair2.png";
import pedestal from "/src/assets/image/pedestal.png";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activeCatalogId: null,
      catalogs: [
        {
          id: 1,
          imageCatalog: mirror,
          title: "напольные зеркала",
          items: [
            {
              id: 1,
              imageActive: mirrorimag1,
              color: "rgba(165, 212, 255, 1)",
              title: "Kristin",
              text: "Зеркало напольное",
            },
            {
              id: 2,
              imageActive: mirrorimag2,
              color: "rgba(240, 179, 234, 1)",
              title: "Arlene",
              text: "Зеркало напольное",
            },
            {
              id: 3,
              imageActive: mirrorimag3,
              color: "rgba(142, 205, 250, 1)",
              title: "Colleen",
              text: "Зеркало напольное",
            },
            {
              id: 4,
              imageActive: mirrorimag4,
              color: "rgba(251, 228, 202, 1)",
              title: "coppelia",
              text: "Зеркало напольное",
            },
            {
              id: 5,
              imageActive: mirrorimag5,
              color: "rgba(240, 181, 250, 1)",
              title: "artemide",
              text: "Зеркало напольное",
            },
          ],
        },
        {
          id: 2,
          imageCatalog: floorLamps,
          title: "торшеры и лампы",
          items: [
            {
              id: 1,
              imageActive: lampimg1,
              color: "rgba(255, 196, 165, 1)",
              title: "Aubrey",
              text: "Лампа настольная",
            },
            {
              id: 2,
              imageActive: lampimg2,
              color: "rgba(136, 227, 121, 1)",
              title: "Leslie",
              text: "Лампа настольная",
            },
            {
              id: 3,
              imageActive: lampimg3,
              color: "rgba(250, 142, 239, 1)",
              title: "Darrell",
              text: "Лампа настольная",
            },
            {
              id: 4,
              imageActive: lampimg4,
              color: "rgba(41, 208, 217, 1)",
              title: "coppelia",
              text: "Лампа настольная",
            },
            {
              id: 5,
              imageActive: lampimg5,
              color: "rgba(137, 213, 255, 1)",
              title: "artemide",
              text: "Лампа настольная",
            },
          ],
        },
        {
          id: 3,
          imageCatalog: armchair,
          title: "кресла и стулья",
          items: [
            {
              id: 1,
              imageActive: chairimg1,
              color: "rgba(251, 228, 202, 1)",
              title: "Kathryn",
              text: "Зеркало напольное",
            },
            {
              id: 2,
              imageActive: chairimg2,
              color: "rgba(240, 179, 234, 1)",
              title: "Wendy",
              text: "Зеркало напольное",
            },
            {
              id: 3,
              imageActive: chairimg3,
              color: "rgba(241, 142, 250, 1)",
              title: "Judith",
              text: "Зеркало напольное",
            },
            {
              id: 4,
              imageActive: chairimg4,
              color: "rgba(92, 84, 74, 1)",
              title: "Jane",
              text: "Зеркало напольное",
            },
            {
              id: 5,
              imageActive: chairimg5,
              color: "rgba(240, 181, 250, 1)",
              title: "Darlene",
              text: "Зеркало напольное",
            },
          ],
        },
        {
          id: 4,
          imageCatalog: pedestal,
          title: "столы и тумбы",
          items: [
            {
              id: 1,
              imageActive: tableimg1,
              color: "rgba(165, 212, 255, 1)",
              title: "Kathryn",
              text: "Зеркало напольное",
            },
            {
              id: 2,
              imageActive: tableimg2,
              color: "rgba(240, 223, 179, 1)",
              title: "Wendy",
              text: "Зеркало напольное",
            },
            {
              id: 3,
              imageActive: tableimg3,
              color: "rgba(248, 142, 250, 1)",
              title: "Judith",
              text: "Зеркало напольное",
            },
            {
              id: 4,
              imageActive: tableimg4,
              color: "rgba(202, 207, 251, 1)",
              title: "Jane",
              text: "Зеркало напольное",
            },
            {
              id: 5,
              imageActive: tableimg5,
              color: "rgba(240, 181, 250, 1)",
              title: "Darlene",
              text: "Зеркало напольное",
            },
          ],
        },
      ],
      slidesToShow: 1,
      activeArrow,
      inactiveArrow,
    };
  },
  methods: {
    setActiveCatalog(id) {
      this.activeCatalogId = this.activeCatalogId === id ? null : id;
    },
    onSlideChange(swiper) {
      console.log("Слайд изменился:", swiper.activeIndex);
    },
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    updateSlidesToShow() {
      const width = window.innerWidth;
      if (width >= 1000) {
        this.slidesToShow = 4;
      } else if (width >= 992) {
        this.slidesToShow = 3;
      } else if (width >= 768) {
        this.slidesToShow = 2;
      } else if (width >= 425) {
        this.slidesToShow = 1;
      } else {
        this.slidesToShow = 1;
      }
    },
  },
  mounted() {
    this.updateSlidesToShow();
    window.addEventListener("resize", this.updateSlidesToShow);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlidesToShow);
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0 60px 0 60px;
  margin-top: 170px;
}
.catalog-title {
  display: grid;
  justify-content: center;
  font-size: 60px;
  font-family: "Euclid Circular A", sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
}
.items {
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 170px;
  justify-content: center;
  gap: 30px;
}
.item {
  width: 428px;
  height: 517px;
  position: relative;
}
.item-subtract {
  width: 388px;
  height: 517px;
  display: grid;
  justify-items: center;
}
.image-subtarct {
  width: 388px;
  height: 460px;
  position: absolute;
  z-index: -1;
}
.subtract-btn {
  border: 2px solid rgba(217, 255, 90, 1);
  background: rgba(235, 227, 255, 0.19);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  bottom: -180px;
  left: 16px;
}
.subtract-btn.active {
  background: rgba(217, 255, 90, 1);
}
.item-btn {
  display: grid;
  align-self: center;
  justify-items: center;
  gap: 60px;
}
.arrow-bottom {
  margin-top: -20px;
  width: 20px;
  height: 34px;
  font-size: 40px;
  color: rgba(217, 255, 90, 1);
}
.arrow-bottom.active {
  color: rgba(235, 227, 255, 0.19);
}
.arrow-bottom img {
  width: 20px;
  height: 34px;
}
.image-mirror {
  height: 248px;
  width: 200px;
  margin-top: 110px;
}
.item-title {
  font-size: 28px;
  font-family: "Euclid Circular A", sans-serif;
  width: 168px;
  height: 72px;
  z-index: 1;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 37px;
  left: 0;
}
.item-quantity {
  width: 81px;
  height: 72px;
  position: absolute;
  right: 10px;
  top: 153px;
  background: rgba(250, 143, 239, 1);
  border-radius: 50%;
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  font-family: "Euclid Circular A", sans-serif;
  transform: rotate(-23deg);
}
.quantity-numder {
  font-size: 40px;
  font-family: "Floreste Wavy", sans-serif;
  font-weight: 400;
}
.quantity-text {
  margin-top: 5px;
}
.item-production {
  width: 89px;
  height: 196px;
  color: rgba(255, 255, 255, 1);
  white-space: nowrap;
}

/* ActiveCatalog */
.active-catalog-wrapper {
  height: 100%;
  transition: height 0.3s ease;
}
.active-catalog-wrapper.active {
  height: 100%;
}
.btn-position {
  margin-top: 51px;
  height: 203px;
  display: grid;
  justify-items: center;
  align-content: center;
}
.btn {
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 319px;
  height: 135px;
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-13deg);
  background: rgba(255, 255, 255, 0.19);
}
.btn:active {
  border: 2px solid white;
}
.btn-text {
  display: grid;
  align-items: center;
  height: 40px;
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 500;
  text-align: center;

  transform: rotate(13deg);
  margin-bottom: -60px;
}
.column-arrow img {
  transform: rotate(13deg);
  color: rgba(217, 255, 90, 1);
  height: 25px;
  /* margin-top: -10px; */
}
.union-text {
  font-size: 20px;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 500;
  margin-left: 11px;
  text-align: center;
  cursor: pointer;
}
.active-catalog {
  margin-top: 63px;
  height: 100%;
}
.active-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 73px;
}
.filter {
  font-size: 18px;
  font-family: "Euclid Circular A", sans-serif;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
}
.image-filter {
  width: 21px;
  height: 22px;
  margin-right: 11px;
}
.product-positions {
  font-family: "Euclid Circular A", sans-serif;
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
}
.item-filter {
  display: grid;
  justify-content: center;
  width: 275px;
  height: 415px;
}
.items-filter {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 107px;
}
.image-main {
  display: flex;
  justify-content: center;
  margin-left: -34px;
}
.color {
  width: 17px;
  height: 17px;
  border: 3px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  margin-right: 18px;
  margin-left: -5px;
}
.border-line {
  border: 2px solid rgba(217, 255, 90, 1);
  width: 274px;
}
.active-catalog-content {
  display: grid;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-family: "Euclid Circular A", sans-serif;
  margin-top: 32px;
  margin-bottom: 17px;
}
.active-catalog_title {
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.amount-result {
  font-weight: 400;
  font-family: "Floreste Wavy", sans-serif;
  font-size: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 3px;
  position: relative;
  margin-top: -3px;
}
.currency-line {
  font-size: 20px;
  position: absolute;
  top: 3px;
  left: 97px;
}
.union {
  margin-top: -6px;
}
.amount {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
@media (max-width: 1600px) {
  .container-fluid {
    padding: 0 10px 0 25px;
    margin-top: 120px;
  }
  .items {
    gap: 40px;
  }
  .item {
    width: 330px;
    height: 417px;
    position: relative;
  }
  .item-subtract {
    width: 300px;
    height: 417px;
  }
  .image-subtarct {
    width: 300px;
    height: 360px;
  }
  .image-mirror {
    height: 200px;
    width: 155px;
    margin-top: 80px;
  }
  .subtract-btn {
    border: 2px solid rgba(217, 255, 90, 1);
    background: rgba(235, 227, 255, 0.19);
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  .item-btn {
    gap: 30px;
  }
  .item-quantity {
    width: 71px;
    height: 62px;
    right: -3px;
    top: 113px;
  }
  .item-title {
    font-size: 25px;
  }
  .items-filter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .active-catalog-mirror {
    width: 130px;
    height: 190px;
  }
  .active-catalog_title {
    font-size: 25px;
  }
  .active-catalog-content {
    margin-top: 20px;
    margin-bottom: 13px;
    height: 70px;
  }
  .item-filter {
    display: grid;
    justify-content: center;
    width: 260px;
    height: 315px;
    margin-bottom: 30px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    width: 200px;
    height: 2px;
    background: rgba(217, 255, 90, 1);
  }
  .btn-union {
    height: 30px;
  }
  .union-text {
    font-size: 17px;
    margin-top: 10px;
  }
  .union {
    width: 18px;
    height: 20px;
  }
  .amount {
    margin-top: 10px;
  }
  .amount-result {
    font-size: 23px;
  }
  .currency-line {
    font-size: 13px;
    top: 0;
    left: 80px;
  }
}
@media (max-width: 1024px) {
  .catalog-title {
    font-size: 34px;
  }
  .items {
    margin-top: 35px;
    margin-bottom: 0;
    gap: 24px;
  }
  .image-subtarct {
    width: 200px;
    height: 256px;
  }
  .item {
    width: 208px;
    height: 288px;
  }
  .item-subtract {
    width: 100%;
    height: 288px;
    justify-items: left;
  }
  .item-title {
    font-size: 15px;
    width: 99px;
    height: 39px;
  }
  .image-mirror {
    margin-top: 60px;
    width: 111px;
    height: 138px;
  }
  .item-btn {
    margin-left: 45px;
    gap: 30px;
  }
  .item-quantity {
    width: 46px;
    height: 40px;
    transform: rotate(-22deg);
    top: 85px;
    right: -10px;
  }
  .quantity-numder {
    font-size: 25px;
  }
  .quantity-text {
    font-size: 10px;
  }
  .subtract-btn {
    width: 56px;
    height: 56px;
  }
  .arrow-bottom img {
    width: 15px;
    height: 19px;
    margin-top: -20px;
  }
  .product-positions {
    font-size: 13px;
    width: 100px;
  }
  .items-filter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
  .item-filter {
    display: grid;
    justify-content: center;
    width: 160px;
    height: 315px;
  }
  .active-catalog-mirror {
    width: 120px;
    height: 170px;
  }
  .active-catalog_title {
    font-size: 22px;
  }
  .active-catalog_text {
    font-size: 14px;
  }
  .active-catalog-content {
    height: 50px;
    margin-top: 20px;
    margin-bottom: 13px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    width: 148px;
    height: 1px;
  }
  .amount-result {
    font-size: 16px;
    letter-spacing: 0.5px;
  }
  .currency-line {
    font-size: 13px;
    top: 0;
    left: 50px;
  }
  .btn-union {
    display: flex;
    justify-content: center;
    height: 22px;
  }
  .union-text {
    margin-top: -3px;
    font-size: 13px;
    margin-left: 2px;
    font-weight: 100;
  }
  .union {
    width: 15px;
    height: 15px;
    margin-top: 0;
  }
  .amount {
    margin-top: 10px;
  }
}
@media (max-width: 768px) {
  .container-fluid {
    padding: 0 30px 0 30px;
  }
  .catalog-title {
    font-size: 30px;
    justify-content: left;
  }
  .items {
    margin-top: 35px;
    margin-bottom: 0;
    height: 400px;
  }
  .image-subtarct {
    width: 305px;
    height: 356px;
  }
  .item {
    width: 339px;
    height: 356px;
  }
  .item-subtract {
    overflow: hidden;
    width: 100%;
    justify-items: left;
    height: 400px;
  }
  .item-title {
    font-size: 18px;
    width: 99px;
    height: 39px;
  }
  .image-mirror {
    margin-top: 20px;
    width: 180px;
    height: 200px;
  }
  .item-btn {
    display: grid;
    justify-self: center;
    align-content: center;
    margin-left: -30px;
    margin-top: 50px;
    gap: 40px;
    height: 356px;
  }
  .item-quantity {
    width: 66px;
    height: 60px;
    transform: rotate(-22deg);
    top: 115px;
    right: 5px;
  }
  .quantity-numder {
    font-size: 26px;
  }
  .quantity-text {
    font-size: 14px;
  }
  .subtract-btn {
    width: 80px;
    height: 80px;
  }
  .arrow-bottom img {
    width: 15px;
    height: 19px;
    margin-top: -20px;
  }
  .product-positions {
    font-size: 13px;
    width: 100px;
  }
  /* ActiveCatalog */
  .btn-position {
    margin-top: 51px;
    height: 203px;
    display: grid;
    justify-items: center;
    align-content: center;
  }
  .btn {
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 319px;
    height: 135px;
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    transform: rotate(-13deg);
    background: rgba(255, 255, 255, 0.19);
  }
  .btn:active {
    border: 2px solid white;
  }
  .btn-text {
    display: grid;
    align-items: center;
    height: 40px;
    font-size: 20px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    text-align: center;
    transform: rotate(13deg);
    margin-bottom: -60px;
  }
  .column-arrow img {
    transform: rotate(13deg);
    color: rgba(217, 255, 90, 1);
    height: 25px;
  }
  .union-text {
    font-size: 20px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    margin-left: 11px;
    text-align: center;
    cursor: pointer;
  }
  .active-catalog {
    margin-top: 63px;
    height: 100%;
  }
  .active-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 73px;
  }
  .filter {
    font-size: 16px;
    font-family: "Euclid Circular A", sans-serif;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
  .image-filter {
    width: 21px;
    height: 22px;
    margin-right: 11px;
  }
  .product-positions {
    font-size: 12px;
  }
  .item-filter {
    display: grid;
    justify-content: center;
    width: 275px;
    height: 415px;
  }
  .items-filter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 107px;
  }
  .image-main {
    display: flex;
    justify-content: center;
    margin-left: -34px;
  }
  .color {
    width: 17px;
    height: 17px;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-right: 18px;
    margin-left: -5px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    background: rgba(217, 255, 90, 1);
    width: 274px;
  }
  .active-catalog-content {
    display: grid;
    justify-content: center;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-family: "Euclid Circular A", sans-serif;
    margin-top: 32px;
    margin-bottom: 17px;
  }
  .active-catalog_title {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .active-catalog_text {
    font-size: 16px;
  }
  .active-catalog-mirror {
    /* height: 240px; */
    width: 140px;
  }
  .amount-result {
    font-weight: 400;
    font-family: "Floreste Wavy", sans-serif;
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 3px;
    position: relative;
    margin-top: -3px;
  }
  .currency-line {
    font-size: 20px;
    position: absolute;
    top: 3px;
    left: 97px;
  }
  .union {
    width: 20px;
    height: 20px;
    margin-top: 0;
  }
  .amount {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
}
@media (max-width: 430px) {
  .container-fluid {
    padding: 0 14px 0 14px;
    margin-top: 120px;
  }
  .catalog-title {
    font-size: 38px;
    justify-content: left;
  }
  .items {
    margin-top: 35px;
    margin-bottom: 0;
    height: 440px;
  }
  .image-subtarct {
    width: 380px;
    height: 400px;
  }
  .item {
    width: 380px;
    height: 400px;
  }
  .item-subtract {
    overflow: hidden;
    width: 100%;
    justify-items: left;
    height: 440px;
  }
  .item-title {
    font-size: 23px;
    width: 120px;
    height: 39px;
  }
  .image-mirror {
    margin-top: 50px;
    width: 190px;
    height: 220px;
  }
  .item-btn {
    margin-left: 4px;
    gap: 30px;
  }
  .item-quantity {
    width: 66px;
    height: 60px;
    transform: rotate(-22deg);
    top: 133px;
    right: -15px;
  }
  .quantity-numder {
    font-size: 30px;
  }
  .quantity-text {
    font-size: 15px;
  }
  .subtract-btn {
    width: 76px;
    height: 76px;
  }
  .arrow-bottom img {
    width: 15px;
    height: 19px;
    margin-top: -20px;
  }
  .product-positions {
    font-size: 13px;
    width: 100px;
  }
  /* ActiveCatalog */
  .btn-position {
    margin-top: 51px;
    height: 203px;
    display: grid;
    justify-items: center;
    align-content: center;
  }
  .btn {
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 319px;
    height: 135px;
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    transform: rotate(-13deg);
    background: rgba(255, 255, 255, 0.19);
  }
  .btn:active {
    border: 2px solid white;
  }
  .btn-text {
    display: grid;
    align-items: center;
    height: 40px;
    font-size: 20px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    text-align: center;
    transform: rotate(13deg);
    margin-bottom: -60px;
  }
  .column-arrow img {
    transform: rotate(13deg);
    color: rgba(217, 255, 90, 1);
    height: 25px;
  }
  .union-text {
    font-size: 20px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    margin-left: 11px;
    text-align: center;
    cursor: pointer;
  }
  .active-catalog {
    margin-top: 63px;
    height: 100%;
  }
  .active-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 73px;
  }
  .filter {
    font-size: 16px;
    font-family: "Euclid Circular A", sans-serif;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
  .image-filter {
    width: 21px;
    height: 22px;
    margin-right: 11px;
  }
  .product-positions {
    font-size: 12px;
  }
  .item-filter {
    display: grid;
    justify-content: center;
    width: 275px;
    height: 415px;
  }
  .items-filter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 107px;
  }
  .image-main {
    display: flex;
    justify-content: center;
    margin-left: -34px;
  }
  .color {
    width: 17px;
    height: 17px;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-right: 18px;
    margin-left: -5px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    background: rgba(217, 255, 90, 1);
    width: 274px;
  }
  .active-catalog-content {
    display: grid;
    justify-content: center;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-family: "Euclid Circular A", sans-serif;
    margin-top: 32px;
    margin-bottom: 17px;
  }
  .active-catalog_title {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .active-catalog_text {
    font-size: 16px;
  }
  .active-catalog-mirror {
    /* height: 240px; */
    width: 140px;
  }
  .amount-result {
    font-weight: 400;
    font-family: "Floreste Wavy", sans-serif;
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 3px;
    position: relative;
    margin-top: -3px;
  }
  .currency-line {
    font-size: 20px;
    position: absolute;
    top: 3px;
    left: 97px;
  }
  .union {
    width: 20px;
    height: 20px;
    margin-top: 0;
  }
  .amount {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
}
@media (max-width: 400px) {
  .container-fluid {
    padding: 0 50px 0 70px;
    margin-top: 120px;
  }
  .catalog-title {
    font-size: 37px;
    justify-content: center;
    width: 230px;
  }
  .items {
    margin-top: 35px;
    margin-bottom: 0;
    height: 288px;
  }
  .image-subtarct {
    width: 236px;
    height: 256px;
    
  }
  .item {
    width: 236px;
    height: 288px;
  }
  .item-subtract {
    overflow: hidden;
    width: 100%;
    justify-items: left;
    height: 288px;
  }
  .item-title {
    font-size: 15px;
    width: 99px;
    height: 39px;
  }
  .image-mirror {
    margin-top: -10px;
    width: 111px;
    height: 138px;
  }
  .item-btn {
    margin-left: 0px;
    margin-top: 0px;
    gap: 30px;
  }
  .item-quantity {
    width: 46px;
    height: 40px;
    transform: rotate(-22deg);
    top: 83px;
    right: -20px;
  }
  .quantity-numder {
    font-size: 25px;
  }
  .quantity-text {
    font-size: 10px;
  }
  .subtract-btn {
    width: 56px;
    height: 56px;
  }
  .arrow-bottom img {
    width: 15px;
    height: 19px;
    margin-top: -20px;
  }
  .product-positions {
    font-size: 13px;
    width: 100px;
  }
  /* ActiveCatalog */
  .btn-position {
    margin-top: 51px;
    height: 203px;
    display: grid;
    justify-items: center;
    align-content: center;
  }
  .btn {
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 115px;
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    transform: rotate(-13deg);
    background: rgba(255, 255, 255, 0.19);
  }
  .btn:active {
    border: 2px solid white;
  }
  .btn-text {
    display: grid;
    align-items: center;
    height: 40px;
    font-size: 18px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    text-align: center;
    transform: rotate(13deg);
    margin-bottom: -50px;
  }
  .column-arrow img {
    transform: rotate(13deg);
    color: rgba(217, 255, 90, 1);
    height: 25px;
  }
  .union-text {
    font-size: 20px;
    font-family: "Euclid Circular A", sans-serif;
    color: white;
    font-weight: 500;
    margin-left: 11px;
    text-align: center;
    cursor: pointer;
  }
  .active-catalog {
    margin-top: 63px;
    height: 100%;
  }
  .active-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 73px;
    width: 300px;
    margin-left: -20px;
  }
  .filter {
    font-size: 16px;
    font-family: "Euclid Circular A", sans-serif;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
  }
  .image-filter {
    width: 21px;
    height: 22px;
    margin-right: 11px;
  }
  .product-positions {
    font-size: 12px;
  }
  .item-filter {
    display: grid;
    justify-content: center;
    width: 275px;
    height: 355px;
    margin-bottom: 0px;
  }
  .items-filter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 90px;
  }
  .image-main {
    display: flex;
    justify-content: center;
    margin-left: -34px;
  }
  .color {
    width: 17px;
    height: 17px;
    border: 3px solid rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin-right: 18px;
    margin-left: -5px;
  }
  .border-line {
    border: 1px solid rgba(217, 255, 90, 1);
    background: rgba(217, 255, 90, 1);
    width: 274px;
  }
  .active-catalog-content {
    display: grid;
    justify-content: center;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-family: "Euclid Circular A", sans-serif;
    margin-top: 32px;
    margin-bottom: 17px;
  }
  .active-catalog_title {
    font-size: 26px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .active-catalog_text {
    font-size: 16px;
  }
  .active-catalog-mirror {
    width: 130px;
  }
  .amount-result {
    font-weight: 400;
    font-family: "Floreste Wavy", sans-serif;
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    letter-spacing: 3px;
    position: relative;
    margin-top: -3px;
  }
  .currency-line {
    font-size: 20px;
    position: absolute;
    top: 3px;
    left: 97px;
  }
  .union {
    width: 20px;
    height: 20px;
    margin-top: 0;
  }
  .amount {
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
  }
}
@media (max-width: 321px) {
  .container-fluid {
    padding: 0 14px 0 34px;
    margin-top: 120px;
  }
  .btn {
    cursor: pointer;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 115px;
    border: 2px solid rgba(217, 255, 90, 1);
    border-radius: 50%;
    transform: rotate(-13deg);
    background: rgba(255, 255, 255, 0.19);
  }
  .catalog-title {
    font-size: 30px;
    justify-content: left;
    width: 230px;
  }
}
</style>
