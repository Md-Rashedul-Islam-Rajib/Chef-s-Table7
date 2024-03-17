import React, { useEffect, useState } from 'react';
import Card from './Card';
const Cards = ({setCarts,carts,setPrepareItem,prepareItem}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await fetch("/data.json");
            const  data = await res.json();
            setCards(data);
        })()
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'>
            {
                cards.map((card) => <Card prepareItem={prepareItem} setPrepareItem={setPrepareItem} setCarts={setCarts} carts={carts} key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;