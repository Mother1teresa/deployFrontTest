<template>
  <div class="container-fluid">
    <div class="catalog-title">категории</div>
    <div class="items">
      <div class="item" v-for="block in blocks" :key="block.id">
        <div class="item-subtract">
          <img
            class="image-subtarct"
            src="/src/assets/image/Subtract.png"
            alt=""
          />
          <div class="item-title">напольные зеркала</div>
          <div class="item-quantity"><span class="quantity-numder">4</span>шт</div>
          <img class="image-mirror" src="/src/assets/image/mirror.png" alt="" />
          <button class="subtract-btn">
            <span class="arrow-bottom">&#x2193;</span>
          </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      blocks: [{}],
    };
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
  margin-top: 70px;
  display: flex;
  gap: 65px;
  height: 517px;
  margin-bottom: 170px;
}
.item {
  width: 428px;
  height: 517px;
  position: relative;
}
.item-subtract {
  width: 428px;
  height: 517px;
  display: grid;
  align-content: center;
  justify-content: center;
}
.image-subtarct {
  width: 388px;
  height: 500px;
  position: absolute;
  z-index: -1;
}
.subtract-btn {
  border: 2px solid rgba(217, 255, 90, 1);
  background: rgba(235, 227, 255, 0.19);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  bottom: -180px;
  left: 16px;
}
.arrow-bottom {
  width: 20px;
  height: 34px;
  font-size: 40px;
  color: rgba(217, 255, 90, 1);
}
.image-mirror {
  width: 199px;
  height: 248px;
  margin-left: -30px;
  margin-bottom: -120px;
}
.item-title {
  font-size: 28px;
  font-family: "Euclid Circular A", sans-serif;
  width: 184px;
  height: 72px;
  z-index: 1;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 30px;
}
.item-quantity{
  width: 81px;
  height: 72px;
  position: absolute;
  background: rgba(250, 143, 239, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
}
.quantity-numder{
  font-size: 40px;
  font-family: "Floreste Wavy", sans-serif;
  font-weight: 400;
}
</style>
