import {
  render,
  screen,
} from '@testing-library/react';

import GiftExpertApp from '../../../src/GiftExpertApp';

describe('Test on component <GiftExpertApp />', () => {

const title = 'Gift Expert App'
const subtitle = 'An app to improve in REACT library skills'

  test('Debe de hacer match con el snapshot', () => {
    

    const {container} = render(<GiftExpertApp />)
    expect(container).toMatchSnapshot()
    
  });

  test('Debe de mostrar el componente heading con el titulo, descripcion exacto', () => {
   const {container} = render(<GiftExpertApp/>)

   const heading = screen.getByRole('heading', {level: 1})
   const description = container.querySelector('p');
   expect(heading).toBeTruthy()
   expect(description).toBeTruthy()
   expect(heading.textContent).toContain(title);
   expect(description.textContent).toContain(subtitle);
  });

})