import Catalog from '../../blocks/Catalog/Catalog.jsx'

const Main = (props) => {
  const {products} = props;

  return (
    <main>
      <Catalog products={products} />
    </main>
  )
};

export default Main;