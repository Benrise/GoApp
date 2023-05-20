<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="subscribe">
        <div class="subscribe__title">
          Подпишитесь на акции и анонсы различных событий
        </div>
        <div class="subscribe__main">
          <form action="" class="subscribe__form">
            <input
              type="text"
              placeholder="Электронная почта"
              class="subscribe__input"
            />
            <SubscribeButton>Подписаться</SubscribeButton>
          </form>
          <div class="subscribe__policy">
            Подписываясь на рассылку, вы соглашаетесь с
            <a href="#" class="subscribe__policy-link"
              >политикой конфиденциальности</a
            >
          </div>
        </div>
      </div>
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
          <img
            src="public/icons/VK - Original.svg"
            alt="social"
            class="footer__media-item"
          />
          <img
            src="public/icons/Telegram - Original.svg"
            alt="social"
            class="footer__media-item"
          />
          <img
            src="public/icons/YouTube - Original.svg"
            alt="social"
            class="footer__media-item"
          />
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
              src="public/icons/Russia Flag.svg"
              class="footer__lang-img"
            />
            <div class="footer__lang-text">Русский</div>
          </div>
        </div>
        <a href="#" class="footer__contact"> Связаться с нами </a>
      </div>
    </div>
    <div class="right-corner-logo">
      <img
        src="public/images/bg-logo.png"
        alt="logo"
        class="right-corner-logo__image"
      />
    </div>
  </footer>
</template>
<script setup>
import SubscribeButton from "@/components/ui/SubscribeButton.vue";
</script>