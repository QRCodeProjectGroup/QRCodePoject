import Home from '../components/page/Home/Home';
import About from '../components/page/About/About';
import qrcode from '../components/qrCode-generator/qrcode';
import Contact from '../components/page/Contact/Contact';
import NotFound from  '../components/page/NotFound';

const links=[
    {link:"/",title:"Home",component:qrcode,isExact:true,isLink:false},
    {link:"/restaurant/:placeName", title:"Ana Sayfa", component:Home ,isExact:true,isLink:false},
    {link: "/hakkimizda" , title: "Hakkımızda",component:About,isExact:false, isLink:true},
    {link:"/iletisim", title1:"İletişim",component:Contact, isExact:true,isTrue:true},
    {link:"/404", title:"404",component:NotFound, isExact:false,isLink:false}
]

export default links