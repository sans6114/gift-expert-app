import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { AddCategory } from '../../../src/components/AddCategory';

describe('test on component <AddCategory />', () => {

    test('Debe de cambiar el valor de mi input', () => {


        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Saitama' } })
        //muestra el DOM en consola
        // screen.debug(input)
        expect(input.value).toBe('Saitama')
    });

    test('Debe de hacer un llamado a la función onNewCategory', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        //referencia de mi input
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('No debe de llamar a la funcion si no tiene mas de 1 caracter', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />)
        
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(onNewCategory).toHaveBeenCalledTimes(0)
       
    })
})