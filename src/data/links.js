import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import NotFound from  '../components/NotFound/NotFound';
import SSS from '../components/SSS/SSS';

const links=[
    {link:"/", title:"Ana Sayfa", component:Home ,isExact:true,isLink:true},
    {link: "/hakkimizda" , title: "Hakkımızda",component:About,isExact:false, isLink:true},
    {link:"/iletisim", title1:"İletişim",component:Contact, isExact:true,isTrue:true},
    {link:"/sss", title1:"S.S.S",component:SSS, isExact:true,isTrue:true},  
    {link:"/404", title:"404",component:NotFound, isExact:false,isLink:false}
]

export default links