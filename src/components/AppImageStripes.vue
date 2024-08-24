<template>
  <div class="strip-container">
    <div class="strip blue-strip">
      <div class="moving-text">
        creating a great art <span class="item-star">✦</span> creating a great
        art <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span>
      </div>
    </div>
    <div class="strip purple-strip">
      <div class="moving-text">
        creating a great art <span class="item-star">✦</span> creating a great
        art <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span> creating a great art
        <span class="item-star">✦</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animationSpeed: "40s",
    };
  },
  computed: {
    movingTextStyle() {
      return {
        animationDuration: this.animationSpeed,
      };
    },
  },
};
</script>

<style scoped>
.strip-container {
  margin-top: 170px;
  overflow: hidden;
  position: relative;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.strip {
  position: absolute;
  width: 2169px;
  height: 72px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.blue-strip {
  background-color: rgba(174, 206, 255, 1);
  transform: rotate(2deg);
  width: 100%;
}
.purple-strip {
  background-color: rgba(203, 182, 255, 1);
  transform: rotate(-5deg);
  width: 100%;
}
.moving-text {
  text-transform: uppercase;
  font-family: "Floreste Wavy", sans-serif;
  white-space: nowrap;
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
  animation: scrollText 5s linear infinite;
}
.item-star {
  margin-left: 50px;
  margin-right: 50px;
  font-size: 22px;
}
@keyframes scrollText {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-30%);
  }
}
@media (max-width: 2560px){
  .strip-container {
    height: 300px;
  }
}
@media (max-width: 400px) {
  .strip-container {
    margin-top: 120px;
    height: 108px;
  }
  .strip {
    height: 47px;
    width: 1113px;
    display: flex;
    align-items: center;
  }
  .moving-text {
    font-size: 25px;
    display: flex;
    align-items: center;
    font-weight: 400;
  }
  .item-star {
    font-size: 12px;
    margin-left: 12px;
    margin-right: 12px;
  }
}
</style>
