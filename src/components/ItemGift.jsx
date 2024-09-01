import { Card } from 'flowbite-react';

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

