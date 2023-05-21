<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">
        <img
          src="/icons/go-logo-group.svg"
          class="header__image header__image_adaptive"
          alt="Logo"
        />
      </router-link>
      <div class="header__search _hidden">
        <div class="search">
          <form action="" class="search__form">
            <button type="submit" class="search__button _icon-magnify"></button>
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              data-error="Ошибка"
              placeholder="Поиск"
              class="search__input"
            />
          </form>
        </div>
      </div>
      <nav class="header__menu menu" :class="{ '_active': isMenuOpen }">
        <ul class="menu__list">
          <li class="menu__item">
            <router-link to="/calendar" class="menu__link _icon-calendar"
              >Календарь мероприятий</router-link
            >
          </li>
          <li class="menu__item">
            <router-link to="/tickets" class="menu__link _icon-ticket"
              >Мои билеты</router-link
            >
          </li>
          <li class="menu__item">
            <a href="" class="menu__link _icon-message"
               @click.prevent="openModal"

            >Будьте в курсе</a>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link _icon-geo" >Москва</a>
          </li>
          <li class="menu__item _hidden">
            <router-link to="/profile" class="menu__link _icon-profile"
              >Профиль</router-link
            >
          </li>
            <li class="menu__item _hidden">
                <router-link to="/profile" class="menu__link _icon-exit"
                >Войти</router-link
                >
            </li>
        </ul>
      </nav>
        <!-- Показать в случае авторизации -->
      <div class="header__profile">
            <router-link to="profile"><img src="/images/profile.png" alt="profile"
                class="header__profile header__image_adaptive"></router-link>
      </div>
      <div class="header__sign-in sign-in">
        <router-link to="/login" class="sign-in__link" >
          <button class="sign-in__button">
            <span class="_icon-exit"></span>
          </button>
        </router-link>
      </div>

      <div class="header__menu-icon"  @click="toggleMenu"><span></span></div>
    </div>
  </header>
    <transition name="fade">
      <SubscribeModal v-model:show="isModalOpen"

      />
    </transition>
</template>

<script>

import BaseModal from "@/components/ui/modal/BaseModal.vue";
import SubscribeButton from "@/components/ui/SubscribeButton.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import SubscribeModal from "@/components/ui/modal/SubscribeModal.vue";
export default {
    components:{
        SubscribeModal,
        BaseButton,
        SubscribeButton,
        BaseModal
    },
    data() {
        return {
            isMenuOpen: false,
            isModalOpen: false
        };
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle('_lock');
            this.isMenuOpen = !this.isMenuOpen;
        },
        openModal(){
            this.isModalOpen = true;
        },
        closeModal(){
            this.isModalOpen = false;
        }

    },
    watch: {
        '$route' () {
            this.isMenuOpen = false
        }
    }

}
</script>

<style>
</style>


