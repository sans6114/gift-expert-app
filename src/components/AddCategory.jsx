import { useState } from 'react';

import { Button } from 'flowbite-react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    //onCHange
    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }
    //onSubmit
    const onSubmit = (event) => {
        console.log('submit')
        event.preventDefault()
        //le quito los espacios al valor del input
        const input = inputValue.trim()
        if (input.length <= 1) return
        onNewCategory(input)
        setinputValue('')
    }

    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return (
        <div className="mb-6">
            <form
                aria-label='form'
                className='flex gap-x-2'
                onSubmit={onSubmit}
            >

                <input
                    onChange={onInputChange}
                    value={inputValue}
                    placeholder="Search category"
                    type="text"
                    id="default-input"
                    className={className}
                />
                <Button type='submit'>Search</Button>
            </form>
        </div>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};