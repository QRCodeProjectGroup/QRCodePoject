import React from 'react';
import MenuDetailCard from './MenuDetailCard';

function MenuDetail(props) {
    const { cardItems } = props
    return (
        <>
            <div className="container">
                <div className="row">
                    {cardItems}
                </div>
            </div>
        </>
    )
}

export default MenuDetail;