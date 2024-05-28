'use client';

import React, { MouseEventHandler } from 'react';

const AddToBasket = () => {
    const addToBasket: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        console.log('addToBasket');
    };

    return (
        <button
            onClick={addToBasket}
            className="btn btn-square btn-secondary absolute bottom-0 left-0 rounded-none hover:btn-primary"
            aria-label="Add to basket"
        >
            <svg className="text-white" width="32" height="32">
                <use href="#basket" />
            </svg>
        </button>
    );
};

export default AddToBasket;
