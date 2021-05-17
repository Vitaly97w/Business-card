<template>
  <div class="container E404">
    <div class="row">
      <div class="col cat">
        <img src="/img/bbwpin32q8o.png" width="560" height="461" />
      </div>
      <div class="col err">
        <h1>404 Ошибка</h1>

        <h2>Страница не найдена:(</h2>
        <h3>Попробуй еще...</h3>
        <router-link tag="button" class="btn" to="/enter"
          >Перейти на главную</router-link
        >
      </div>
    </div>
  </div>
</template>
<style>
.E404 {
  text-align: center;
  margin-top: 0;
}
.E404 h1 {
  font-size: 80px;
  font-weight: 700;
  margin-top: 130px;
  color: #1f686c;
}
.E404 .cat {
  margin-top: 5%;
}
.E404 .err {
  margin-top: 0%;
}
.err .btn {
  padding-top: 20px;
  margin: 0;

  font-size: 25px;
  width: 360px;
  height: 80px;
  color: #f1f1f1;
  background-color: #1f686c;
}
.E404 h2 {
  font-size: 40px;
  font-weight: 700;
  padding-top: 0;
}
.E404 h3 {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 40px;
}
.E404 img {
  min-width: 560px;
  min-height: 461px;
}
</style>
