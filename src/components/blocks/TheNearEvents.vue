<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__upper">
        <div class="main-block__info">
          <h2 class="main-block__title">Мероприятия рядом</h2>
          <h3 class="main-block__subtitle">Карта ближайших мероприятий</h3>
        </div>
        <div class="search-main search">
          <div action="" class="search__form">
            <button type="submit" class="search__button _icon-magnify"></button>
            <input
              autocomplete="off"
              type="text"
              name="form[]"
              data-error="Ошибка"
              placeholder="События, артисты и места"
              class="search__input"
            />
          </div>
          <button type="button" class="main-block__button toggle">Поиск</button>
        </div>
      </div>

      <div class="main-block__body">
        <div class="near-events">
          <div class="near-events__main">
            <div id="map" class="near-events__map"></div>
            <div class="near-events__slider-area">
              <div class="near-events__slider">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="slide-card">
                      <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                          <div class="slide-card__image">
                            <img
                              src="./img/pic/upcoming/yoga-promo.jpg"
                              alt="Название промо"
                            />
                          </div>
                        </div>
                      </a>
                      <div class="slide-card__info-left">
                        <div class="category _category-sportAndFitness">
                          Спорт и фитнес
                        </div>
                        <div class="slide-card__date">
                          <div class="slide-card__day _icon-calendar">10</div>
                          <div class="slide-card__month">мая</div>
                        </div>
                      </div>
                      <div class="slide-card__title">Yoga Material</div>
                      <a href="#" class="slide-card__rating">
                        <div class="slide-card__rating-score _rating-high">
                          7.5
                        </div>
                        <div class="slide-card__rating-desc">
                          Оценка посетителей
                        </div>
                      </a>
                      <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                          <div class="slide-card__geo _icon-city">Москва</div>
                          <div class="slide-card__price _price-low">
                            <span class="_icon-ruble-sign-square-1"></span>
                            <span class="_icon-ruble-sign-square-2"></span>
                            <span class="_icon-ruble-sign-square-3"></span>
                            <div class="price__free _hidden">Бесплатно</div>
                          </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                          <a href="#" class="slide-card__buy-button"
                            >Купить билеты</a
                          >
                          <button
                            class="slide-card__fav-button _icon-heart"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="slide-card">
                      <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                          <div class="slide-card__image">
                            <img
                              src="./img/pic/upcoming/spider-man-promo.jpg"
                              alt="Название промо"
                            />
                          </div>
                        </div>
                      </a>
                      <div class="slide-card__info-left">
                        <div class="category _category-movie">Фильмы</div>
                        <div class="slide-card__date">
                          <div class="slide-card__day _icon-calendar">10</div>
                          <div class="slide-card__month">мая</div>
                        </div>
                      </div>
                      <div class="slide-card__title">Человек-павук</div>
                      <a href="#" class="slide-card__rating">
                        <div class="slide-card__rating-score _rating-high">
                          7.5
                        </div>
                        <div class="slide-card__rating-desc">
                          Оценка на Кинопоиске
                        </div>
                      </a>
                      <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                          <div class="slide-card__geo _icon-city">Москва</div>
                          <div class="slide-card__price _price-low">
                            <span class="_icon-ruble-sign-square-1"></span>
                            <span class="_icon-ruble-sign-square-2"></span>
                            <span class="_icon-ruble-sign-square-3"></span>
                            <div class="price__free _hidden">Бесплатно</div>
                          </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                          <a href="#" class="slide-card__buy-button"
                            >Купить билеты</a
                          >
                          <button
                            class="slide-card__fav-button _icon-heart"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="slide-card">
                      <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                          <div class="slide-card__image">
                            <img
                              src="./img/pic/upcoming/the-beatles-promo.jpg"
                              alt="Название промо"
                            />
                          </div>
                        </div>
                      </a>
                      <div class="slide-card__info-left">
                        <div class="category _category-music">Музыка</div>
                        <div class="slide-card__date">
                          <div class="slide-card__day _icon-calendar">31</div>
                          <div class="slide-card__month">декабря</div>
                        </div>
                      </div>
                      <div class="slide-card__title">Come Together</div>
                      <a href="#" class="slide-card__rating">
                        <div class="slide-card__rating-score _rating-high">
                          7.5
                        </div>
                        <div class="slide-card__rating-desc">
                          Оценка посетителей
                        </div>
                      </a>
                      <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                          <div class="slide-card__geo _icon-city">Москва</div>
                          <div class="slide-card__price _price-low">
                            <span class="_icon-ruble-sign-square-1"></span>
                            <span class="_icon-ruble-sign-square-2"></span>
                            <span class="_icon-ruble-sign-square-3"></span>
                            <div class="price__free _hidden">Бесплатно</div>
                          </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                          <a href="#" class="slide-card__buy-button"
                            >Купить билеты</a
                          >
                          <button
                            class="slide-card__fav-button _icon-heart"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="slide-card">
                      <a href="#" class="slide-card__link">
                        <div class="slide-card__img-blackout">
                          <div class="slide-card__image">
                            <img
                              src="./img/pic/upcoming/art-promo.jpg"
                              alt="Название промо"
                            />
                          </div>
                        </div>
                      </a>
                      <div class="slide-card__info-left">
                        <div class="category _category-art">Культура</div>
                        <div class="slide-card__date">
                          <div class="slide-card__day _icon-calendar">10</div>
                          <div class="slide-card__month">мая</div>
                        </div>
                      </div>
                      <div class="slide-card__title">ART - Цветная полоса</div>
                      <div class="slide-card__rating">
                        <div class="slide-card__rating-score _rating-high">
                          7.5
                        </div>
                        <div class="slide-card__rating-desc">
                          Оценка посетителей
                        </div>
                      </div>
                      <div class="slide-card__functions-right">
                        <div class="slide-card__functions-right-up">
                          <div class="slide-card__geo _icon-city">Москва</div>
                          <div class="slide-card__price _price-low">
                            <span class="_icon-ruble-sign-square-1"></span>
                            <span class="_icon-ruble-sign-square-2"></span>
                            <span class="_icon-ruble-sign-square-3"></span>
                            <div class="price__free _hidden">Бесплатно</div>
                          </div>
                        </div>
                        <div class="slide-card__functions-right-down">
                          <a href="#" class="slide-card__buy-button"
                            >Купить билеты</a
                          >
                          <button
                            class="slide-card__fav-button _icon-heart"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
          <div class="near-events__below">
            <div class="near-events__show-categories-toggle"></div>
            <div class="near-events__categories"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>