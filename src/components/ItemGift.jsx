import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';

export const ItemGift = ({ title, imageUrl }) => {


    return (
        <Card
            className="max-w-sm cursor-pointer"
            imgAlt={`image or gift for image with title: ${title}`}
            imgSrc={imageUrl}
        >
            <h5 className="hidden md:flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {title} 
            </h5>
        </Card>
    )
}


ItemGift.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

