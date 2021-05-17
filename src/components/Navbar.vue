<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><img src="/img/icon/burger.svg" width="35" height="35"
        /></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#WelcomeH">Главная</a>
          </li>
          <li class="nav-item ms-5">
            <a class="nav-link" href="#AboutH">Обо мне</a>
          </li>
          <li class="nav-item ms-5">
            <a class="nav-link" href="#portfolioH">{{ statePortfolio.H2 }}</a>
          </li>
          <li class="nav-item ms-5">
            <a class="nav-link" href="#contactH">Контакты</a>
          </li>
        </ul>
      </div>
      <div>
        <router-link class="exit" tag="a" to="/enter" @click="logout"
          ><img src="/img/icon/exit.svg" width="27" height="27" />
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component'
import navbarStore from '../store/navbar'
import portfolioStore from '../store/portfolioStore'
export default class Navbar extends Vue {
  logout = navbarStore.actions.logout
  statePortfolio = portfolioStore.state
}
</script>

<style>
.navbar {
  width: 80px;
  background-color: #1f686c;
  font-size: 20px;
  font-family: 'Montserrat regular';
}
.navbar a {
  color: #fff;
  text-decoration: none;
}
</style>
