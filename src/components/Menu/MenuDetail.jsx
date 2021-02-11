import React from 'react';
import './MenuDetail.css'
import { useParams } from 'react-router-dom';
import data from '../../data/data.json'
import kahvaltisofrasi from '../../images/kahvaltisofrasi.jpg'
import MenuDetailCard from './MenuDetailCard'

function MenuDetail(props) {
 
    const params = useParams();
    const { detay } = params;
    const song = data.foods.filter(
        item => item.title === String(detay)
    ).map(
        item =>
        <div className="container">
            <div className="row" key={item.id}>
            <img id="ph" src={kahvaltisofrasi}></img>
                <div className="col">
               
                <h1>{item.title}</h1>
                </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="row">
                    <MenuDetailCard/>
                    </div>
                </div>
            </div>
            
            </div>
            
    )

    return (

        <>{song}</>
    )
}

export default MenuDetail