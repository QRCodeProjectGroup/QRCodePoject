import React, { useContext } from 'react';
import QRCode from 'qrcode.react';
import slugify from 'slugify';
import Contact from '../page/Contact/Contact';
import { globalContext } from '../../data/context';

function QrCode(props) {

    const { place } = useContext(globalContext);
    console.log(place)
    const qrcodies = place && place.map((item,index) =>{
        return(
            <div className="index">
                <QRCode
                    value={`localhost:3000/restaurant/${slugify(item.placeName,{lower:true})}`}
                />
            </div>
        )
    })

    return (
        <>
            
        </>
    )
}

export default QrCode;