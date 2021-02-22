import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import slugify from 'slugify';
import { globalContext } from '../../data/context';

function QrCode(props) {

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
                            value={`localhost:3000/restaurant/${slugify(item.placeName, { lower: true })}`}
                        />
                    </div>
                    <div className="button d-flex justify-content-center">
                        <Link to={`/restaurant/${slugify(item.placeName, { lower: true })}`}><button className="btn btn-primary mt-3">Detay</button></Link>
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