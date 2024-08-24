<template>
  <div class="container-fluid">
    <div class="footer-num">@2023</div>
    <button class="btn">
      <span class="btn-text">
        <img class="group" src="/src/assets/image/group.png" alt="" />
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
  width: 100%;
  margin-top: 170px;
  height: 129px;
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
.btn-word {
  margin-top: -7px;
}
.btn {
  width: 200px;
  height: 100px;
  background: rgba(235, 227, 255, 0.19);
  border: 2px solid rgba(217, 255, 90, 1);
  border-radius: 50%;
  transform: rotate(-15deg);
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
  transform: rotate(-4deg);
}
.btn:active {
  border: 2px solid white;
}
@media (max-width: 430px) {
  .container-fluid {
    width: 100%;
    height: auto;
    padding: 15px;
    margin-top: 120px;
    display: grid;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .footer-num,
  .footer-title {
    display: block;
    font-size: 14px;
    text-align: left;
  }
  .footer-num {
    margin-bottom: 5px;
  }
  .btn {
    right: 15px;
    bottom: 25px;
    position: absolute;
    width: 146px;
    height: 86px;
    transform: rotate(-15deg);
    align-self: flex-start;
  }
  .btn-text{
    margin-top: 5px;
    margin-right: -8px;
  }
  .request-text,
  .design-text {
    font-size: 13px;
  }
  .btn-word {
    margin-top: -8px;
  }
  .container-fluid {
    flex-direction: row;
  }
  .footer-title {
    order: 1;
    width: 98px;
    margin-bottom: 18px;
  }
  .footer-num {
    order: 2;
  }
  .group {
    width: 30px;
    height: 30px;
  }
}
@media (max-width: 380px){
  .container-fluid {
    padding: 0 8px 0 8px;
  }
  .btn {
    right: 15px;
    bottom: 15px;
    position: absolute;
    width: 136px;
    height: 76px;
    transform: rotate(-15deg);
    align-self: flex-start;
  }
  .btn-text{
    margin-top: 3px;
    margin-right: -15px;
  }
}
</style>
