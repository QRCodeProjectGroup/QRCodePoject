import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import slugify from 'slugify';
import { globalContext } from '../../data/context';

function QrCode(props) {
    const mystyle = {
        width: "50%",
        display: "block",        
    }
    const { place } = useContext(globalContext);
    const qrcodies = place && place.map((item, index) => {
        return (
            <div className="container mt-5" key={index}>
                <div className="index">
                   
                    <div className="title">
                        <h6 className="mb-4 text-center">Mekan ismi: {item.placeName}</h6>
                    </div>
                    <div className="qrcode d-flex justify-content-center">
                        <QRCode
                            value={`https://menusepeti.live/restaurant/${slugify(item.placeName, { lower: true })}`}
                        />
                    </div>                 
                    <div className="button d-flex justify-content-center">
                        <Link to={`/restaurant/${slugify(item.placeName, { lower: true })}`}><button className="btn btn-primary mt-3">Detay</button></Link>
                    </div>
                    <div>
                        <img src="https://www.bitiriyor.com/upload/temp/urunler/-28163_w1000_h1241.jpg" className="mx-auto mt-4 shadow bg-body rounded" alt="img" style={mystyle}/>
                    </div>
                </div>
            </div >
        )
    })
    return (
        <>
            {qrcodies}
        </>
    )
}

export default QrCode;