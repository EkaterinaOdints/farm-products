import About from '../../blocks/About/About.jsx'
import Features from '../../blocks/Features/Features.jsx'

const Main = ({features}) => {

  return (
    <main>
      <About />
      <Features features={features} />
    </main>
  )
};

export default Main;