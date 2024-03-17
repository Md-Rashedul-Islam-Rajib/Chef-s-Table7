import React from 'react';

const Cartitem2 = ({item,idx}) => {
    const {title,cooking_time,calories} =item;
    return (
        <tr className="text text-[#282828B2] bg-[#28282808] rounded-3xl">
              <td className="text-[#282828CC]">{idx+1}</td>
              <td>{title}</td>
              <td>{cooking_time} minutes</td>
              <td>{calories}</td>
            </tr>
    );
};

export default Cartitem2;