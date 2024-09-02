import {
  renderHook,
  waitFor,
} from '@testing-library/react';

import { useFetchGifts } from '../../../src/hooks/useFetchGifts';

describe('test on HOOK useFetchGifts', () => {


    test('debe de regresar el estado inicial', () => {


        const { result } = renderHook(() => useFetchGifts('One Punch'))
        // const {images, isLoading} = useFetchGifts()
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()

    });

    test('debe de regresar el arreglo de imagenes y el isLoading en false', async () => {


        const { result } = renderHook(() => useFetchGifts('One Punch'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )
        const { images, isLoading } = result.current
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    });
})