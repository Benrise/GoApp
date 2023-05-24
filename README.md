<br/>
<p align="center">
  <a href="https://github.com/Benrise/https://github.com/Benrise/GoApp">
    <img src="https://github.com/Benrise/GoApp/assets/55480132/2487aba4-e4b8-405f-9c20-c3cf269844cb" alt="Logo" width="300" height="300">
  </a>

  
  <h3 align="center">Go! <br>
Мероприятия - сегодня!</h3>

  <p align="center">
    Веб-приложение для отслеживания мероприятий
  </p>
</p>
<div align="center">
  <strong> Google диск проекта </strong>
    <br>
    https://drive.google.com/drive/folders/1Ah_MyeXhIqf0CdkQuggmI6invulp7cL1
</div>
<br>



## Структура

* [О проекте](#о-проекте)
* [Технологии](#технологии)
* [Способы взаимодействия с проектом](#способы-взаимодействия-с-проектом)
  * [Ознакомление](#ознакомление)
* [Развертывание проекта](#развертывание-проекта-с-помощью-npm)
* [Авторы](#авторы)

## О проекте

![image](https://github.com/Benrise/GoApp/assets/55480132/f29e5c59-958b-4867-9680-e2b67013176e)

![image](https://github.com/Benrise/GoApp/assets/55480132/caff568d-5422-45b7-9afc-2fba0adda2c7)

![image](https://github.com/Benrise/GoApp/assets/55480132/3b5bb294-5950-4f11-bd47-7d23a1b654d1)



В будущем **GO** - это веб-приложение, которое позволит **быстро** и **легко** отслеживать мероприятия и события крупных городов России. Go предлагает единую бонусную программу, спонсируемую государством, которая позволяет получать бонусы за участие в различных активностях. Пользователи могут использовать бонусы для приобретения билетов к большинству возможных мероприятий и событий города. 

Отличительной чертой веб-приложения является карта с отображением всех возможных ближайших мероприятий и событий, а также раздел с прямыми трансляциями, где пользователь может выбирать трансляцию для просмотра из списка действующих.

 <p align="center">
  <img src="https://github.com/Benrise/GoApp/assets/55480132/74d86ce0-c13c-4677-aaf5-99f0b8766662">
 <p>

## Технологии

Приложение разработано на связке Vue 3 + Vite с использованием Vuex и Router.

* Vite - для сборки и конфигурации
* Vuex - для хранения данных формата Json
* Router - для навигации

Карта реализована с помощью API сервиса Mapbox.

* [Vue 3](https://ru.vuejs.org/)
* [Vite](https://vitejs.ru/)
* [Mapbox](https://www.mapbox.com/)


## Взаимодействие с проектом
   
### Проект разделен на следующие этапы:

* Дизайн проект (опционально, но рекомендуется ознакомиться): Дизайн-проект в Figma, который показывает визуальное представление и стилистку веб-приложения. Из него можно оценить подход pixel perfect.
* Верстка с некоторым JavaScript (ветка layout): Ветка, на которой выполнена верстка основных компонентов и добавлены некоторые интерактивные элементы с использованием ванильного JavaScript.
* Vue приложение (ветка master): Главная ветка проекта, содержащая разработанное веб-приложение на основе фреймворка Vue 3. Здесь реализованы все функциональные возможности приложения.

### Сам процесс ознакомления с проектом может включать в себя следующие шаги:
1. Первичный просмотр видео
2. Ознакомление с дизайн-макетом 
3. Просмотр вёрстки (локально/pages)
4. Запуск веб-приложения в локальной среде или просмотр с помощью Netifty (ссылка ниже).

*Поэтапное ознакомление позволит вам получить более полное представление о проекте и его технической реализации.*
   
### Ознакомление

**Локально**

*sh:*
```sh
git clone https://github.com/Benrise/GoApp.git
```
*Netify:*

https://resplendent-belekoy-f53266.netlify.app/

**Для быстрого просмотра HTML5 верстки:**

https://benrise.github.io/GoApp/ (GitHub Pages)

**Ссылка на дизайн макет Figma:**

*Прототип*: 
https://www.figma.com/proto/sHGiZ71sPiEAv1Bg0yJgpm/Lab---Go?type=design&node-id=58-857&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=58%3A857

*Макет*: 
https://www.figma.com/file/sHGiZ71sPiEAv1Bg0yJgpm/Lab---Go?type=design&node-id=0-1&t=971TvNhbe4ux2Ncl-0

### Развертывание проекта с помощью npm

Для локального запуска веб-приложения необходим:

* npm

```sh
npm install npm@latest -g
```
```sh
npm run dev
```
Note:
Если у вас Mac на ARM архитектуре, в случае ошибки установки модуля "node-sass", ниже представлено возможное решение:
```sh
npm uninstall node-sass
npm install --save-dev sass
```
   

## Авторы

* **Latypov Artem** - *Benrise* - [@benrise](https://t.me/benristar)

## Благодарность

* [RTUITLab](https://vk.com/rtuitlab)
* [Ivan Laptev](https://github.com/IvLaptev)
