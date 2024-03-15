import React, { useEffect, useState } from 'react';
import Card from './Card';
const Cards = ({handleCook}) => {
    const [cards, setcards] = useState([]);
    useEffect(() => {
        (async() => {
            const res = await fetch("/public/data/data.json");
            const  data = await res.json();
            setcards(data);
        })()
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
            {
                cards.map((card) => <Card handleCook={handleCook} key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;