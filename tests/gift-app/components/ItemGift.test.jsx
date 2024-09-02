import {
  render,
  screen,
} from '@testing-library/react';

import { ItemGift } from '../../../src/components/ItemGift';

describe('test on component <ItemGift />', () => {

    const title = 'Titulo de prueba'
    const imageUrl = 'imagen de prueba'
    const alt = `image or gift for image with title: ${title}`
    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<ItemGift title={title} imageUrl={imageUrl} />);

        expect(container).toMatchSnapshot()

    });
    test('Debe de mostrar la imagen/gift con el url y alt indicado', () => {

        render(<ItemGift title={title} imageUrl={imageUrl} />);

        const imgElement = screen.getByRole('img');
        // Extraemos solo el pathname de la URL para comparar
        const imgSrcPath = new URL(imgElement.src).pathname;

        // Verificamos 
        expect(imgSrcPath).toBe(`/imagen%20de%20prueba`)
        expect(imgElement.alt).toBe(alt)


    });

    test('debe de mostrar el titulo en el componente', () => {
        render(<ItemGift title={title} imageUrl={imageUrl} />);
        expect(screen.getByText(title)).toBeTruthy()


    });
})