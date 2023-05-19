<template>
  <section class="main-block">
    <div class="main-block__container">
      <div class="main-block__upper">
        <div class="main-block__info">
          <h2 class="main-block__title">Сейчас в прямом эфире</h2>
          <h3 class="main-block__subtitle">
            Прямые трансляции мероприятий и событий
          </h3>
        </div>
      </div>
      <div class="main-block__body">
        <div class="broadcast">
          <div class="broadcast__left">
            <div class="broadcast__spoller" data-spollers data-one-spoller>
              <div class="broadcast__spoller-item">
                <button
                  type="button"
                  tab-index="-1"
                  data-spoller
                  class="broadcast__title"
                >
                  <div class="broadcast__category broadcast__category_no-fill">
                    Концерты
                  </div>
                  <div class="broadcast__count _icon-arrow">3</div>
                </button>
                <div class="broadcast__items">
                  <button class="broadcast__item">
                    Coachella Festifal 2023
                  </button>
                  <button class="broadcast__item">
                    The Weeknd, Metro Boomin & Mike Dean - Live
                  </button>
                  <button class="broadcast__item">Дора</button>
                </div>
              </div>
              <div class="broadcast__spoller-item">
                <button
                  type="button"
                  tab-index="-1"
                  data-spoller
                  class="broadcast__title"
                >
                  <div class="broadcast__category broadcast__category_no-fill">
                    Спорт и фитнесс
                  </div>
                  <div class="broadcast__count _icon-arrow">3</div>
                </button>
                <div class="broadcast__items">
                  <button class="broadcast__item">
                    Coachella Festifal 2023
                  </button>
                  <button class="broadcast__item">
                    The Weeknd, Metro Boomin & Mike Dean - Live
                  </button>
                  <button class="broadcast__item">Дора</button>
                </div>
              </div>
              <div class="broadcast__spoller-item">
                <button
                  type="button"
                  tab-index="-1"
                  data-spoller
                  class="broadcast__title"
                >
                  <div class="broadcast__category broadcast__category_no-fill">
                    Кино
                  </div>
                  <div class="broadcast__count _icon-arrow">1</div>
                </button>
                <div class="broadcast__items">
                  <button class="broadcast__item">
                    Coachella Festifal 2023
                  </button>
                  <button class="broadcast__item">
                    The Weeknd, Metro Boomin & Mike Dean - Live
                  </button>
                  <button class="broadcast__item">Дора</button>
                </div>
              </div>
              <div class="broadcast__spoller-item">
                <button
                  type="button"
                  tab-index="-1"
                  data-spoller
                  class="broadcast__title"
                >
                  <div class="broadcast__category broadcast__category_no-fill">
                    Другие
                  </div>
                  <div class="broadcast__count _icon-arrow">5</div>
                </button>
                <div class="broadcast__items">
                  <button class="broadcast__item">
                    Coachella Festifal 2023
                  </button>
                  <button class="broadcast__item">
                    The Weeknd, Metro Boomin & Mike Dean - Live
                  </button>
                  <button class="broadcast__item">Дора</button>
                </div>
              </div>
            </div>
          </div>
          <div class="broadcast__right">
            <div class="broadcast__video">
              <video loop muted autoplay poster="" controls preload="metadata">
                <source type="video/webm" src="" />
                <source type="video/mp4" src="./video/mp4/videoplayback.mp4" />
              </video>
            </div>
            <div class="broadcast__description">
              <div class="broadcast__heading">
                <div class="broadcast__heading-title">
                  Coachella Festifal 2023
                </div>
                <ul class="broadcast__heading-additionals">
                  <li class="broadcast__heading-additional">New-York</li>
                  <li class="broadcast__heading-additional">18+</li>
                </ul>
              </div>
              <div class="broadcast__text">
                Coachella - одно из самых ожидаемых музыкальных событий года!
                Погрузитесь в атмосферу уникального музыкального фестиваля, не
                выходя из дома.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>