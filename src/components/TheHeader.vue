<template>
  <header class="header">
    <div class="header__container">
      <a href="./index.html" class="header__logo">
        <img
          src="public/icons/Logo_group.svg"
          class="header__image header__image_adaptive"
          alt="Logo"
        />
      </a>
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
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="./calendar.html" class="menu__link _icon-calendar"
              >Календарь мероприятий</a
            >
          </li>
          <li class="menu__item">
            <a href="./tickets.html" class="menu__link _icon-ticket"
              >Мои билеты</a
            >
          </li>
          <li class="menu__item">
            <a href="" class="menu__link _icon-message">Будьте в курсе</a>
          </li>
          <li class="menu__item">
            <a href="" class="menu__link _icon-geo">Москва</a>
          </li>
          <li class="menu__item _hidden">
            <a href="./profile.html#general" class="menu__link _icon-profile"
              >Профиль</a
            >
          </li>
        </ul>
      </nav>
      <!-- <div class="header__profile">
            <a href="./profile.html#general"><img src="./img/pic/profile.png" alt="profile"
                class="header__profile header__image_adaptive"></a>
          </div> -->
      <div class="header__sign-in sign-in">
        <a class="sign-in__link" href="./login.html">
          <button class="sign-in__button">
            <span class="_icon-exit"></span>
          </button>
        </a>
      </div>

      <div class="header__menu-icon"><span></span></div>
    </div>
  </header>
</template>
