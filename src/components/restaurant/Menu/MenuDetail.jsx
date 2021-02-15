import React, { useState } from 'react';
import MenuDetailCard from './MenuDetailCard';


function MenuDetail(props) {
    const { cardItems } = props
    return (
        <>
            <div className="container">
                {cardItems}
            </div>
        </>
    )
}

export default MenuDetail;