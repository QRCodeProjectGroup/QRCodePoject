import React from 'react';
import RestaurantDetail from './RestaurantDetail';
import users from '../../images/users1.png'
import like from '../../images/like.png'
import star from '../../images/star.png'
import ok from '../../images/ok.png'

function RestaurantData(props) {

    const { item } = props
    const restaurantData = {
        "data": [
            {
                "photo": users,
                "title": "2 Haftadaki Ziyaret:",
                "text": item.totalVisit
            },
            {
                "photo": like,
                "title": "Toplam Beğeni:",
                "text": item.totalLike
            },
            {
                "photo": star,
                "title": "Restoran Puanı:",
                "text": item.point
            },
            {
                "photo": ok,
                "title": "Ort. Sipariş Hızı",
                "text": item.orderSpeed
            },

        ]
    }
    return (
        <div className="row">
            <RestaurantDetail restaurantData={restaurantData} />
        </div>
    )
}

export default RestaurantData;