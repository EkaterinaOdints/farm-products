import type { Feature } from '../../../types.ts';

import About from '../../blocks/About/About.js'
import Features from '../../blocks/Features/Features.js'

interface Props {
  features: Feature[]
}

const Main = (props: Props) => {
  const {features} = props;

  return (
    <main>
      <About />
      <Features features={features} />
    </main>
  )
};

export default Main;