import {
  Button,
  Spinner,
} from 'flowbite-react';
import PropTypes from 'prop-types';

import { useFetchGifts } from '../hooks/useFetchGifts';
import { Title } from './Heading';
import { ItemGift } from './ItemGift';

export const GridGift = ({ category }) => {
    const { images, isLoading } = useFetchGifts(category)

    if (isLoading) {
        return (
            <Button>
                <Spinner aria-label="Spinner button example" size="sm" />
                <span className="pl-3">Loading...</span>
            </Button>
        )
    }
    return (
        <> 
        <div className='my-14'>

            <Title title={category} />
        </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-4 md:grid-rows-1 md:gap-3">

                {
                    images.map(({ id, title, url }) => (
                        <ItemGift key={id} title={title} imageUrl={url} />
                    )
                    )
                }
            </div>
        </>
    )
}

GridGift.propTypes = {
    category: PropTypes.string.isRequired
};

