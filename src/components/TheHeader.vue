<template>
  <header class="header">
    <div class="header__container">
            <router-link to="/" class="header__logo">
                <img
                        src="/images/go-logo.png"
                        class="header__image header__image_adaptive"
                        alt="Logo"
                />
                <div class="header__logo-title">Go</div>
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
            <li class="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">
                <a v-if="menuItem.action" class="menu__link" :class="menuItem.iconClass" @click.prevent="openModal">
                    {{menuItem.label}}
                </a>
                <router-link v-else :to="menuItem.route" class="menu__link" :class="menuItem.iconClass">
                    {{menuItem.label}}
                </router-link>
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
            isModalOpen: false,
            menuItems: [
                {
                    id: 1,
                    label: "Календарь мероприятий",
                    route: "/calendar",
                    iconClass: "_icon-calendar",
                    ariaLabel: "Go to event calendar"

                },
                {
                    id: 2,
                    label: "Мои билеты",
                    route: "/tickets",
                    iconClass: "_icon-ticket",
                    ariaLabel: "Go to tickets"
                },
                {
                    id: 3,
                    label: "Будьте в курсе",
                    route: "#",
                    iconClass: "_icon-message",
                    ariaLabel: "Subscribe to new events",
                    action: true
                },
                {
                    id: 4,
                    label: "Москва",
                    route: "#",
                    iconClass: "_icon-geo",
                    ariaLabel: "Change city",
                    action: true
                },
                {
                    id: 5,
                    label: "Профиль",
                    route: "/profile",
                    iconClass: "_icon-profile",
                    hidden: true,
                    ariaLabel: "Go to profile"
                }
            ]
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
            document.body.classList.remove('_lock');
        }
    }

}
</script>

<style>
</style>


