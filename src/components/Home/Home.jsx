import React from 'react';
import Welcome from '../Welcome/Welcome'
import Restaurant from '../RestaurantCards/Restaurant'
import Preferred from '../Preferred/Preferred'
import Menu from '../Menu/Menu'
import MenuDetail from '../Menu/MenuDetail'

function Home(props){
    return(

        <>
         <Welcome/>
         <Restaurant/>
        
         <Menu/>
        <MenuDetail/>
        </>
    )
}

export default Home