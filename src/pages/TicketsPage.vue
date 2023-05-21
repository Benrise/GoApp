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
                            <BaseSelect
                                :options="statuses"
                                @select="sortByStatus"
                                :selected="selected"
                            />
                        </div>
                    </div>
                    <div class="main-block__body">
                        <div class="tickets">
                            <TicketsSlider @statusUpdated="sortByStatus"/>
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
import BonusCard from "@/components/blocks/BonusCard.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
export default {
    components: {
        BaseSelect,
        BonusCard,
        TicketsSlider
    },
    name: "Tickets",
    data() {
        return {
            statuses: [
                {name: 'Активные', value: 1},
                {name: 'Архив', value: 0}
            ],
            selected: "Активные",
            sorted: []
        }
    },
    computed:{
      filteredTickets(){
          if (this.sorted.length){
              return this.sorted
          }else{
              this.tickets //Как я могу достать её из родительского компонента TicketsSlider???
          }
      }
    },
    methods:{
        sortByStatus(status){
            this.sorted = [];
            let vm = this;
            this.tickets.map(function (item){
                if (item.status === status.name){
                    vm.sorted.push(item);
                }
            })

        }

    }
}
</script>

<style lang="scss" scoped>

</style>