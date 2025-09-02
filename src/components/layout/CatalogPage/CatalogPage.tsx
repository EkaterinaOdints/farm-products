import type { Product } from '../../../types.ts';

import Catalog from '../../blocks/Catalog/Catalog.js'

interface Props {
  products: Product[]
}

const Main = (props: Props) => {
  const {products} = props;

  return (
    <main>
      <Catalog products={products} />
    </main>
  )
};

export default Main;