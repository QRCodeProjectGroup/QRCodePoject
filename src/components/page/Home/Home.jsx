import React, { useContext } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useParams } from 'react-router-dom';
import slugify from 'slugify';
import { globalContext } from '../../../data/context';
import Welcome from '../Welcome';
import Restaurant from '../../restaurant/Restaurant'
import Menu from '../../restaurant/Menu/Menu'
import MenuDetailCard from '../../restaurant/Menu/MenuDetailCard';
import './Home.css'

function Home(props) {
    AOS.init();
    const params = props.location.hash.slice(1)
    const { placeName } = useParams();
    const { place, details } = useContext(globalContext);
    return (
        <>
            {
                place && place.filter(item => slugify(item.placeName, { lower: true }) === slugify(placeName))
                    .map((item, index) => {
                        return (
                            <div key={index}>
                                <Welcome />
                                <Restaurant place={item} />
                                <Menu />
                                <div className="container-fluid bg-light text-dark">
                                    <section id={params.toLowerCase()}>
                                        <MenuDetailCard
                                            title={params.toLowerCase()}
                                            details={details}
                                        />
                                    </section>
                                </div>
                            </div>
                        )
                    })
            }
        </>
    )
}

export default Home