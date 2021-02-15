import React from 'react';
import Welcome from '../Welcome';
import Restaurant from '../../restaurant/Restaurant'
import Menu from '../../restaurant/Menu/Menu'
import MenuDetailCard from '../../restaurant/Menu/MenuDetailCard';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import './Home.css'


function Home(props) {
    AOS.init();
    const params = props.location.hash.slice(1)
    return (

        <>
            <Welcome />
            <Restaurant />
            <Menu />

            <div className="container-fluid bg-light text-dark">

                <section id={params.toLowerCase()}>
                    <MenuDetailCard title={params.toLowerCase()}/>
                </section>
            </div>
           
        </>
    )
}

export default Home