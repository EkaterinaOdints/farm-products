export interface Feature {
  id: number,
  title: string,
  description: string,
  cardId: string,
  tag: string,
}

export interface ProductBase {
  id: string,
  title: string,
  value: string
}

export interface Product {
  isChecked: boolean,
  id: string,
  title: string,
  imgPath: string,
  description: {
    text: string,
    weight: string,
    priceNumber: number,
  },
  characteristics: ProductBase[],
  properties: ProductBase[],
}
