<template>
  <div class="container-fluid">
    <div class="footer-num">@2023</div>
    <button class="btn">
      <span class="btn-text">
        <img src="/src/assets/image/group.png" alt="" />
        <div class="btn-word">
          <span class="request-text">Request </span>
          <span class="design-text">Design</span>
        </div>
      </span>
    </button>
    <div class="footer-title">Все права защищены</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  padding: 0 56px 46px 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-num {
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  font-family: "SVN-Gilroy", sans-serif;
}
.footer-title {
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  font-family: "SVN-Gilroy", sans-serif;
}
.design-text {
  font-family: "Circe Rounded Alt", sans-serif;
  font-weight: 400;
  font-size: 18px;
}
.request-text {
  font-family: "Circe Rounded", sans-serif;
  font-weight: 700;
  font-size: 18px;
}
.btn-word{
    margin-top: -7px;
}
.btn {
  width: 200px;
  height: 100px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  -webkit-border-radius: 200px / 100px;
  -moz-border-radius: 200px / 100px;
  border-radius: 200px / 100px;
  -moz-transform: scale(1) rotate(-15deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -webkit-transform: scale(1) rotate(-15deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -o-transform: scale(1) rotate(-15deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -ms-transform: scale(1) rotate(-15deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  transform: scale(1) rotate(-15deg) translateX(0px) translateY(0px) skewX(0deg)
    skewY(0deg);
}
.btn-text {
  display: grid;
  justify-items: center;
  font-size: 18px;
  text-align: center;
  font-family: "Euclid Circular A", sans-serif;
  color: white;
  font-weight: 400;
  position: absolute;
  right: 35px;
  top: 5px;
  -moz-transform: scale(1) rotate(-4deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -webkit-transform: scale(1) rotate(-4deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -o-transform: scale(1) rotate(-4deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  -ms-transform: scale(1) rotate(-4deg) translateX(0px) translateY(0px)
    skewX(0deg) skewY(0deg);
  transform: scale(1) rotate(-4deg) translateX(0px) translateY(0px) skewX(0deg)
    skewY(0deg);
}
</style>
