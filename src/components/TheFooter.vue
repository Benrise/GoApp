<template>
  <footer class="footer">
    <div class="footer__container">
      <TheSubscribe :title="`Подпишитесь на акции и анонсы различных событий`"/>
      <div class="footer__main">
        <nav class="footer__menu menu-footer">
          <ul class="menu-footer__list">
            <li class="menu-footer__item">
              <a href="" class="menu-footer__link">О нас</a>
            </li>
            <li class="menu-footer__item">
              <a href="" class="menu-footer__link">Возврат билетов</a>
            </li>
            <li class="menu-footer__item">
              <a href="" class="menu-footer__link">Подарочные сертификаты</a>
            </li>
            <li class="menu-footer__item">
              <a href="" class="menu-footer__link">Соглашение</a>
            </li>
            <li class="menu-footer__item">
              <a href="" class="menu-footer__link">Реклама</a>
            </li>
          </ul>
        </nav>

        <div class="footer__media">
            <a href="https://vk.com/rtuitlab" target="_blank" class="footer__link">
                <img
                        src="/icons/vk-logo.svg"
                        alt="social"
                        class="footer__media-item"
                />
            </a>
            <a href="https://t.me/rtuitlab_2023_enrollment"  target="_blank" class="footer__link">
                <img
                        src="/icons/telegram.svg"
                        alt="social"
                        class="footer__media-item"
                />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  target="_blank" class="footer__link">
                <img
                  src="/icons/youtube-logo.svg"
                  alt="social"
                  class="footer__media-item"
                />
            </a>
        </div>
      </div>
      <div class="footer__below">
        <div class="footer__copyright">
          <div class="footer__copyright-date">©2016 - 2023 RTUITLab</div>
          <div class="footer__copyright-text">Все права защищены</div>
        </div>
        <div class="footer__geo-lang">
          <div class="footer__geo _icon-location-pin">Москва</div>
          <div class="footer__lang">
            <img
              src="/icons/russia-flag.svg"
              class="footer__lang-img"
             alt="russia-flag"/>
            <div class="footer__lang-text">Русский</div>
          </div>
        </div>
        <a href="#" class="footer__contact"> Связаться с нами </a>
      </div>
    </div>
    <div class="right-corner-logo">
      <img
        src="/images/bg-logo.png"
        alt="logo"
        class="right-corner-logo__image"
      />
    </div>
  </footer>
</template>
<script setup>
import TheSubscribe from "@/components/blocks/TheSubscribe.vue";
</script>