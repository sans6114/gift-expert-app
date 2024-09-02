import { getGifts } from '../../../src/helpers/getGifts';

describe('Test on helper getGift', () => {

    const category = 'valorant'
    test('debe de retornar la data de 4 elementos de la API', async() => {


        const gifts = await getGifts(category)
        expect(gifts.length).toBe(4)
        expect(gifts.length).toBeGreaterThan(0)
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    })
})