

<template>
    <div class="wrapper">
        <main class="main">
            <section class="main-block">
                <div class="main-block__container _heading-block">
                    <div class="main-block__body">
                        <div class="login">
                            <div class="login__sing-in">
                                <img src="public/images/login_bg.png" class="login__bg" alt="">
                                <form class="form" id="sign-in" method="" action="">
                                    <div class="form__upper">
                                        <h2 class="form__title title">Авторизация</h2>
                                    </div>
                                    <div class="login__area">
                                        <span class="form__span description">Введите почту и пароль</span>
                                        <input class="form__input" type="text" placeholder="Почта" />
                                        <input class="form__input" type="password" placeholder="Пароль" />
                                        <a class="form__link">Забыли пароль?</a>
                                    </div>
                                    <button class="form__button button ">Войти</button>
                                    <a class="form__link _hidden">Регистрация</a>
                                    <div class="form__icons">
                                        <img class="form__icon" src="public/icons/VK_Compact_Logo.svg" />
                                    </div>
                                </form>
                            </div>
                            <div class="login__sing-up">
                                <img src="public/images/login_bg.png" class="login__bg" alt="">
                                <form class="form" id="sign-up" method="" action="">
                                    <div class="form__upper">
                                        <h2 class="form__title title">Регистрация</h2>
                                    </div>

                                    <div class="login__area">
                                        <span class="form__span description">Заполните необходимые поля </span>
                                        <input class="form__input" type="text" placeholder="Имя" />
                                        <input class="form__input" type="email" placeholder="Почта" />
                                        <input class="form__input" type="password" placeholder="Пароль" />
                                    </div>
                                    <button class="form__button button ">Зарегестрироваться</button>
                                    <a class="form__link _hidden">Регистрация</a>
                                    <div class="form__icons">
                                        <img class="form__icon" src="public/icons/VK_Compact_Logo.svg" />
                                    </div>
                                </form>
                            </div>
                            <div class="switch" id="switch-cnt">
                                <div class="switch__circle"></div>
                                <div class="switch__circle switch__circle--t"></div>
                                <div class="switch__container" id="switch-c1">
                                    <h2 class="switch__title title">Ещё не с нами?</h2>
                                    <p class="switch__description description">Бонусы, история покупок, рекомендации и
                                        многое другое будет доступно после регистрации!</p>
                                    <button class="switch__button button switch-btn">Зарегестрироваться</button>
                                </div>
                                <div class="switch__container is-hidden" id="switch-c2">
                                    <h2 class="switch__title title">C возвращением!</h2>
                                    <p class="switch__description description">Быстрее авторизуйся, чтобы не пропустить
                                        тысячи мероприятий!</p>
                                    <button class="switch__button button switch-btn">Войти</button>
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
export default {
    name: 'LoginPage',
    mounted() {

    }

};
</script>

<style scoped>

</style>