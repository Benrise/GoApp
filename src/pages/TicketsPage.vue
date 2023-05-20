<template>
    <div class="wrapper">
        <main class="main">
            <section class="main-block ">
                <div class="main-block__container _heading-block">
                    <div class="main-block__upper">
                        <div class="main-block__info">
                            <h2 class="main-block__title">
                                Ваши билеты
                            </h2>
                            <h3 class="main-block__subtitle">
                                Все билеты должны также приходить на электронную почту.
                            </h3>
                        </div>
                        <div class="main-block__buttons">
                            <div class="main-block__radio">
                                <div class="radio">
                                    <input type="radio" name="select" id="active" checked>
                                    <input type="radio" name="select" id="archive">
                                    <label for="active" class="option active">
                                        <div class="dot"></div>
                                        <span>Активные</span>
                                    </label>
                                    <label for="archive" class="option archive">
                                        <div class="dot"></div>
                                        <span>Архив</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-block__body">
                        <div class="tickets">
                            <TicketsSlider/>
                        </div>
                    </div>



                </div>




            </section>

            <section class="main-block">
                <div class="main-block__container _profile-margin">
                    <div class="main-block__upper">
                        <div class="main-block__info">
                            <h2 class="main-block__title">
                                Бонусная программа
                            </h2>
                            <h3 class="main-block__subtitle">
                                Единая бонусная программа для всех мероприятий и событий года
                            </h3>
                        </div>
                    </div>
                    <div class="main-block__body">
                        <div class="bonus">
                            <div class="bonus__main">
                                <div class="bonus__left">
                                    <div class="bonus__card b-card">
                                        <img src="public/images/noise-filter.png" class="b-card__filter" alt="">
                                        <!--          Проверка на адаптивность согласно макету карточки             -->
                                        <!-- <img src="public/images/bonus-card.png" class="b-card__filter" alt=""> -->
                                        <div class="b-card__sign">
                                            GO
                                        </div>
                                        <div class="b-card__info">
                                            <div class="b-card__name">
                                                LATYPOV ARTEM
                                            </div>
                                            <div class="b-card__number">
                                                9002950409356
                                            </div>
                                        </div>
                                        <div class="b-card__logo">
                                            <div class="b-card__img">
                                                <img src="public/images/logo.png" alt="">
                                            </div>
                                            <div class="b-card__label">
                                                Бонус
                                            </div>
                                        </div>
                                        <button class="b-card__upc _icon-upc-scan">
                                        </button>
                                    </div>



                                </div>
                                <div class="bonus__right">
                                    <div class="bonus__scores">
                                        <div class="bonus__option">
                                            Бонусных баллов:
                                        </div>
                                        <div class="bonus__value">
                                            1488
                                        </div>
                                    </div>
                                    <div class="bonus__discount">
                                        <div class="bonus__option">
                                            Твоя скидка:
                                        </div>
                                        <div class="bonus__value">
                                            15%
                                        </div>
                                    </div>
                                    <div class="bonus__data">
                                        <div class="bonus__option">
                                            Данные:
                                        </div>
                                        <div class="bonus__value bonus__value_small">
                                            Латыпов Артём Равилевич
                                        </div>
                                        <div class="bonus__value bonus__value_small">
                                            ben******@mail.ru
                                        </div>
                                        <div class="bonus__value bonus__value_small">
                                            +7 *** *** 777 5
                                        </div>
                                    </div>
                                    <div class="bonus__free-ticket">
                                        <div class="bonus__option">
                                            Бесплатный билет:
                                        </div>
                                        <div class="bonus__value">
                                            2000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bonus__about">
                                <div class="bonus__project">
                                    <div class="bonus__subtitle">
                                        Государственный проект “Городские события”
                                    </div>
                                    <div class="bonus__text">
                                        Спонсированная государством бонусная программа предлагает уникальную возможность получать бонусы за
                                        участие во всех мероприятиях и событиях вашего города!
                                        Просто укажите свою бонусную <span>GO-карту</span>  при оплате и получайте бонусы на свой счёт.
                                    </div>
                                </div>
                                <div class="bonus__special">
                                    <div class="bonus__subtitle">
                                        Специальные предложения
                                    </div>
                                    <ul class="bonus__list list ">
                                        <li class="list__item ">Чем <span class="_bold">чаще</span> вы покупаете билеты по программе, тем <span class="_bold">больше</span> бонусов вы получаете
                                        </li>
                                        <li class="list__item ">Бонусы можно потратить на покупку <span class="_bold">любых</span> предстоящих мероприятий или событий
                                        </li>
                                        <li class="list__item ">Бонусы <span class="_bold">не</span> сгорают</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>




            </section>
        </main>
    </div>
</template>

<script>

import TicketsSlider from "@/components/sliders/TicketsSlider.vue";
export default {
    components: {
        TicketsSlider
    },
    name: "Tickets",
}
</script>

<style lang="scss" scoped>

</style>