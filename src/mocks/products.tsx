import chickenThighFillet from '../assets/img/products/chicken-thigh-fillet.jpg';
import gooseThighFillet from '../assets/img/products/goose-thigh-fillet.jpg';
import beefThighPulp from '../assets/img/products/beef-thigh-pulp.jpg';
import chickenBreastWithBone from '../assets/img/products/chicken-breast-with-bone.jpg';
import chickenDrumstick from '../assets/img/products/chicken-drumstick.jpg';

const products = [
  {
    isChecked: true,
    id: "chicken-thigh-fillet",
    title: "Филе бедра цыпленка",
    imgPath: chickenThighFillet,
    description: {
      text: "Филе бедра без кожи и&nbsp;кости. Птица содержится в&nbsp;свободных&nbsp;птичниках, выращивается на&nbsp;натуральных зерновых кормах, что влияет положительно на&nbsp;вкус мяса. Филейная часть бедра обладает насыщенным вкусом и&nbsp;мясным ароматом. ",
      weight: "700 гр.",
      priceNumber: 400,
    },
    characteristics: [
      {
        id: "chicken-thigh-fillet-char-weight",
        title: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        id: "chicken-thigh-fillet-char-expiration",
        title: "Срок годности",
        value: "6 суток" 
      },
      {
        id: "chicken-thigh-fillet-char-breed",
        title: "Порода",
        value: "КОББ 500." 
      },
      {
        id: "chicken-thigh-fillet-char-expiration2",
        title: "Срок годности",
        value: "6 суток." 
      },
      {
        id: "chicken-thigh-fillet-char-origin",
        title: "Место происхождения",
        value: "Тверская область" 
      },
    ],
    properties: [
      {
        id: "chicken-thigh-fillet-prop-calories",
        title: "Энергетическая ценность",
        value: "135 ккал./565 кДж."
      },
      {
        id: "chicken-thigh-fillet-prop-nutrition",
        title: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ],
  },
  {
    isChecked: true,
    id: "goose-thigh-fillet",
    title: "Филе бедра гуся",
    imgPath: gooseThighFillet,
    description: {
      text: "Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      weight: "700 гр.",
      priceNumber: 500
    },
    characteristics: [
      {
        id: "goose-thigh-fillet-char-weight",
        title: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        id: "goose-thigh-fillet-char-expiration",
        title: "Срок годности",
        value: "6 суток" 
      },
      {
        id: "goose-thigh-fillet-char-breed",
        title: "Порода",
        value: "КОББ 500." 
      },
      {
        id: "goose-thigh-fillet-char-expiration2",
        title: "Срок годности",
        value: "6 суток." 
      },
      {
        id: "goose-thigh-fillet-char-origin",
        title: "Место происхождения",
        value: "Тверская область" 
      },
    ],
    properties: [
      {
        id: "goose-thigh-fillet-prop-calories",
        title: "Энергетическая ценность",
        value: "135 ккал./565 кДж."
      },
      {
        id: "goose-thigh-fillet-prop-nutrition",
        title: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ],
  },
  {
    isChecked: true,
    id: "beef-thigh-pulp",
    title: "Мякоть бедра говяжья",
    imgPath: beefThighPulp,
    description: {
      text: "Мякоть бедра говяжья - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      weight: "700 гр.",
      priceNumber: 600
    },
    characteristics: [
      {
        id: "beef-thigh-pulp-char-weight",
        title: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        id: "beef-thigh-pulp-char-expiration",
        title: "Срок годности",
        value: "6 суток" 
      },
      {
        id: "beef-thigh-pulp-char-breed",
        title: "Порода",
        value: "КОББ 500." 
      },
      {
        id: "beef-thigh-pulp-char-expiration2",
        title: "Срок годности",
        value: "6 суток." 
      },
      {
        id: "beef-thigh-pulp-char-origin",
        title: "Место происхождения",
        value: "Тверская область" 
      },
    ],
    properties: [
      {
        id: "beef-thigh-pulp-prop-calories",
        title: "Энергетическая ценность",
        value: "135 ккал./565 кДж."
      },
      {
        id: "beef-thigh-pulp-prop-nutrition",
        title: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ],
  },
  {
    isChecked: false,
    id: "chicken-breast-with-bone",
    title: "Грудка цыпленка на кости",
    imgPath: chickenBreastWithBone,
    description: {
      text: "Грудка цыпленка на кости - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      weight: "700 гр.",
      priceNumber: 700
    },
    characteristics: [
      {
        id: "chicken-breast-with-bone-char-weight",
        title: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        id: "chicken-breast-with-bone-char-expiration",
        title: "Срок годности",
        value: "6 суток" 
      },
      {
        id: "chicken-breast-with-bone-char-breed",
        title: "Порода",
        value: "КОББ 500." 
      },
      {
        id: "chicken-breast-with-bone-char-expiration2",
        title: "Срок годности",
        value: "6 суток." 
      },
      {
        id: "chicken-breast-with-bone-char-origin",
        title: "Место происхождения",
        value: "Тверская область" 
      },
    ],
    properties: [
      {
        id: "chicken-breast-with-bone-prop-calories",
        title: "Энергетическая ценность",
        value: "135 ккал./565 кДж."
      },
      {
        id: "chicken-breast-with-bone-prop-nutrition",
        title: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ],
  },
  {
    isChecked: false,
    id: "chicken-drumstick",
    title: "Голень цыпленка",
    imgPath: chickenDrumstick,
    description: {
      text: "Голень цыпленка - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.",
      weight: "700 гр.",
      priceNumber: 800
    },
    characteristics: [
      {
        id: "chicken-drumstick-char-weight",
        title: "Масса",
        value: "0,7 кг. (595-805 г.)."
      },
      {
        id: "chicken-drumstick-char-expiration",
        title: "Срок годности",
        value: "6 суток" 
      },
      {
        id: "chicken-drumstick-char-breed",
        title: "Порода",
        value: "КОББ 500." 
      },
      {
        id: "chicken-drumstick-char-expiration2",
        title: "Срок годности",
        value: "6 суток." 
      },
      {
        id: "chicken-drumstick-char-origin",
        title: "Место происхождения",
        value: "Тверская область" 
      },
    ],
    properties: [
      {
        id: "chicken-drumstick-prop-calories",
        title: "Энергетическая ценность",
        value: "135 ккал./565 кДж."
      },
      {
        id: "chicken-drumstick-prop-nutrition",
        title: "Пищевая ценность",
        value: "белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г."
      }
    ],
  }
]

export default products;