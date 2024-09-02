import {
  render,
  screen,
} from '@testing-library/react';

import { GridGift } from '../../../src/components/GridGift';
import { useFetchGifts } from '../../../src/hooks/useFetchGifts';

jest.mock('../../../src/hooks/useFetchGifts')

describe('test on component <AddCategory />', () => {

    const category = 'valorant'

    test('Debe mostrar el loading inicialmente', () => {


        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GridGift category={category} />)
        expect(screen.getByText('Loading...')).toBeTruthy()
    });

    test('Debe mostrar items cuando se cargan los items mediante mi hook', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg',
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg',
            },
            {
                id: 'GHI',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg',
            },
            {
                id: 'JKL',
                title: 'Luffy',
                url: 'https://localhost/luffy.jpg',
            },
            {
                id: 'MNO',
                title: 'Ichigo',
                url: 'https://localhost/ichigo.jpg',
            }]

        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GridGift category={category} />)
        screen.debug()
    });

})