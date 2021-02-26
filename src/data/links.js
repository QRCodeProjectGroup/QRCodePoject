import React from 'react';

const Home = React.lazy(() => import('../components/page/Home/Home'));
const About = React.lazy(() => import('../components/page/About/About'));
const qrcode = React.lazy(() => import('../components/qrCode-generator/qrcode'));
const Contact = React.lazy(() => import('../components/page/Contact/Contact'));
const NotFound = React.lazy(() => import('../components/page/NotFound'));

const links=[
    {link:"/",title:"Home",component:qrcode,isExact:true,isLink:false},
    {link:"/restaurant/:placeName", title:"Ana Sayfa", component:Home ,isExact:true,isLink:false},
    {link: "/hakkimizda" , title: "Hakkımızda",component:About,isExact:false, isLink:true},
    {link:"/iletisim", title1:"İletişim",component:Contact, isExact:true,isTrue:true},
    {link:"/404", title:"404",component:NotFound, isExact:false,isLink:false}
]

export default links