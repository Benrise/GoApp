<template>
<div class="wrapper">
    <main class="main">
        <section class="main-block">
            <div class="main-block__container _profile-margin">
                <div class="main-block__info">
                    <h2 class="main-block__title">
                        Мой профиль
                    </h2>
                    <h3 class="main-block__subtitle">
                        Ваши GO Данные и пользовательские настройки хранятся здесь
                    </h3>
                </div>
                <div class="main-block__body">
                    <div class="profile">
                        <div class="profile__upper">
                            <div class="profile__exit">
                                <button class="profile__exit-button">
                                    <span class="_icon-exit"></span>
                                </button>
                                <div class="profile__exit-title">
                                    Выйти
                                </div>
                            </div>
                            <div class="profile__center">
                                <div class="profile__pic"><img src="public/icons/Logo.svg" alt=""></div>
                                <div class="profile__name">
                                    <div class="profile__name-title">
                                        Латыпов Артём Равилевич
                                    </div>
                                    <div class="profile__name-subtitle">
                                        (отображается в билете)
                                    </div>
                                </div>
                            </div>
                            <div class="profile__add">
                                <button class="profile__add-button">
                                    <span class="_icon-plus"></span>
                                </button>
                                <div class="profile__add-title">
                                    Добавить
                                </div>
                            </div>
                        </div>

                        <div class="profile__sections">
                            <BaseTabbar>
                                <BaseTab title="Общее">
                                    <div id="general" class="tabbar__section section">
                                        <div class="profile__phone ">
                                            <div class="section__item">
                                                <div class="section__title">
                                                    Телефон
                                                </div>
                                                <div class="section__form search">
                                                    <form action="" class="search__form">
                                                        <input autocomplete="off" type="tel" name="form[]" data-error="Ошибка" disabled
                                                               placeholder="+7-***-***-77-75" class="search__input">
                                                    </form>
                                                    <button class="section__edit _icon-pencil">

                                                    </button>
                                                    <div class="section__status section__status_success">
                                                        Подтверждено
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="profile__mail ">
                                            <div class="section__item">
                                                <div class="section__title">
                                                    Почта
                                                </div>
                                                <div class="section__form search">
                                                    <form action="" class="search__form">
                                                        <input autocomplete="off" type="email" name="form[]" data-error="Ошибка" disabled
                                                               placeholder="benrise_x@mail.ru" class="search__input">
                                                    </form>
                                                    <div class="section__edit _icon-pencil">

                                                    </div>
                                                    <div class="section__status section__status_fail">
                                                        Не подтверждена
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="profile__username ">
                                            <div class="section__item">
                                                <div class="section__title">
                                                    Короткое имя<span class="section__extra"></span>
                                                </div>
                                                <div class="section__form search">
                                                    <form action="" class="search__form">
                                                        <input autocomplete="off" type="text" name="form[]" data-error="Ошибка" disabled
                                                               placeholder="Benrise" class="search__input">
                                                    </form>
                                                    <button class="section__edit _icon-pencil">

                                                    </button>
                                                    <div class="section__status section__status_in-progress">
                                                        В обработке
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="profile__passport ">
                                            <div class="section__item">
                                                <div class="section__title">
                                                    Паспортные данные
                                                </div>
                                                <div class="section__form">
                                                    <div class="section__status section__status_success">
                                                        Безопасно импортированы из
                                                    </div>
                                                    <div class="section__img">
                                                        <img src="public/icons/Gosuslugi Logo.svg" alt="">
                                                    </div>
                                                    <div class="section__edit _icon-pencil">

                                                    </div>
                                                </div>

                                                <div class="section__p">
                                                    Паспортные данные нужны для подтверждения возраста и личности.
                                                </div>
                                                <div class="section__p">
                                                    Ваши данные в безопасности. GO совместно с гос.услугами хранит их в защищённом виде.
                                                </div>
                                                <div class="section__p">
                                                    Если возникли какие-то вопросы вы всегда сможете связаться с нами по кнопке ниже.
                                                </div>
                                                <BaseButton :label="`Связаться с нами`" class="section__button"/>
                                            </div>
                                        </div>
                                    </div>
                                </BaseTab>
                                <BaseTab title="Предпочтения">
                                    <div id="preferences" class="tabbar__section"></div>
                                </BaseTab>
                                <BaseTab title="Оплата">
                                    <div id="payment" class="tabbar__section"></div>
                                </BaseTab>
                                <BaseTab title="Бонусы">
                                    <div id="bonus" class="tabbar__section section">
                                        <div class="bonus__main">
                                            <div class="bonus__left">
                                                <BonusCard/>
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
                                    </div>
                                </BaseTab>
                                <BaseTab title="Чеки">
                                    <div id="receipts" class="tabbar__section"></div>
                                </BaseTab>
                                <BaseTab title="Отзывы">
                                    <div id="reviews" class="tabbar__section"></div>
                                </BaseTab>
                            </BaseTabbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<script>

import {defineComponent} from "vue";
import BonusCard from "@/components/blocks/BonusCard.vue";
import BaseTab from "@/components/ui/BaseTab.vue";
import BaseTabbar from "@/components/ui/BaseTabbar.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default defineComponent({
    components: {BaseButton, BaseTab, BaseTabbar, BonusCard}
})
</script>