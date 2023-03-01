import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public categories = [
    {
      name: "Computer mouses",
      products: [
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          likes: 1,
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь X-Game XM-770OUB черный",
          description: "Мышь X-Game XM-770UB Игровая мышь для начинающих геймеров с подсветкой и оптическим сенсором на 1000dpi. Просто подключите мышь к компьютеру и наслаждайтесь эффектной игрой света. Продуманный форм-фактор позволяет с удобством играть в любимые игры, не напрягая руки, а футуристичный дизайн достойно украсит рабочий стол начинающего киберспортсмена.",
          raiting: 4,
          realPage: "https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h11/50458052591646/x-game-xm-770oub-black-9101354-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h11/50458052591646/x-game-xm-770oub-black-9101354-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hd3/50458052821022/x-game-xm-770oub-cernyj-9101354-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h52/49870295564318/x-game-xm-770oub-cernyj-9101354-3.jpg"
          ]
        },
        {
          name: "Блендер Proliss PRO-2908 черный, серебристый",
          description: "Плавная регулировка скорости, мощный DC-двигатель, низкий уровень шума, эргономичность и многофункциональность — все эти качества воплощены в модели погружного блендера. Измельчитель, блендер и миксер в одном компактном приборе — это удобно.",
          raiting: "Raiting: 4",
          realPage: "https://kaspi.kz/shop/p/proliss-pro-2908-chernyi-serebristyi-101850732/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2NL6SLpWqvwIlCYohnRk7PEnCwe_5oDm6Zhz4gTQI30TySs9ezodhoCUAIQAvD_BwE#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/haf/34436267999262/proliss-pro-2908-cernyj-101850732-1-Container.jpg",
          galery: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/haf/34436267999262/proliss-pro-2908-cernyj-101850732-1-Container.jpg"]
        },
        {
          name: "Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый",
          description: "Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц. Частота дискретизации сенсорного слоя. Высокая частота дискретизации до 360 Гц обеспечивает более высокую чувствительность и удобство работы. Она адаптируется к каждому движению, помогая легко побеждать. Технология LiquidCool. Тепловые трубки и технология охлаждения с помощью многослойных графитовых листов для максимальной теплоэффективности. Оптимальный баланс между производительностью и управлением температурой. Восьмиядерный процессор MediaTek Helio G96. 1 фотография, 108 млн. деталей. Redmi Note 11 Pro оснащен основной камерой 108 Мп, которая записывает 108 млн. деталей в режиме 108 Мп, обеспечивая кристальную четкость даже при многократном увеличении. Запечатлейте все великолепные ночные пейзажи. Благодаря трем передовым технологиям камера работает ночью так же, как при дневном свете.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy2NL6SLpWqvwIlCYohnRk7PEnCwe_5oDm6Zhz4gTQI30TySs9ezodhoCUAIQAvD_BwE#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/heb/51166990598174/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h18/51166988107806/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
        {
          name: "Мышь Logitech G102 Lightsync черный",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h4b/33418929045534/logitech-g102-lightsync-cernyj-100956618-2-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hca/hd6/49314663399454/logitech-g102-lightsync-cernyj-100956618-3.jpg"
          ]
        },
      ]
    },
    {
      name: "Headsets",
      products: [
        {
          name: "Наушники TWS F9-5 черные",
          description: "Мышь проводная Logitech G102 LightSync позволяет играть с максимальной\n" +
            "        эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком\n" +
            "        диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой\n" +
            "        кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция\n" +
            "        корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией\n" +
            "        LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В\n" +
            "        программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над\n" +
            "        процессом управления системой и настраивать функциональность клавиш.",
          raiting: "Raiting: 5",
          realPage: "https://kaspi.kz/shop/p/tws-f9-5-chernye-101769530/?c=750000000#!/item",
          currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h0e/47809640824862/tws-f9-5-cernyj-101769530-1-Container.jpg",
          galery: [
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h0e/47809640824862/tws-f9-5-cernyj-101769530-1-Container.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h75/62447889743902/tws-f9-5-seryj-101769530-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h1b/62447890202654/tws-f9-5-cernye-101769530-3.jpg"
          ]
        },
      ]
    },
  ]

  constructor() {
  }
}
