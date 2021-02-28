import React from "react";
import hakkimizda from "../../../images/hakkimizda5.jpg";
import "./About.css";
import { useTranslation } from 'react-i18next';

function About(props) {

  const { t, i18n } = useTranslation();
    function handleClick(lang) {
    i18n.changeLanguage(lang);
    }

  return (
    <>
      <div className="pl-0 ">
        <div id="aboutRow py-5">
          <img            
            id="about"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            src={hakkimizda}
          ></img>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row"  id="bgDark">
          <div>
            <h1 id="us">{t('Biz Kimiz Ne Yapıyoruz.1')}</h1>
            <p id="paragraf">
              {t('Kodluyoruz Adana Full Stack Development Bootcamp projesidir.1')}
              <br />
              {t('Şu anda içinde bulunduğumuz pandemi sürecinde restoranların kullanabileceği bir OR kod dijital menü oluşturmak ve teması azaltmayı amaçlıyoruz.1')}
              <br />
              {t('Projemiz 2 ana kısımdan oluşmaktadır.1')}
              <br />
              {t('NodeJS ile api oluşturmak.1')}
              <br />{t('React kütüphanesi ile önyüz oluşturmak.1')}
            </p>
            <h4 id="align">{t('NodeJsde neler yaptık.1')}</h4>
            <p id="align">
              {t('MongoDB ye kayıt olup amazonun bulut sunucusunda database oluşturduk.1')}
              <br />
              {t('Express ile uygulamamızı oluşturduk ne mongoose ile bulut sunucudaki veritabanımıza bağlandık.1')}
              <br />
              {t('Restoranlar için User modeli oluşturduk kullanıcı şifrelerini bcrypt kütüphanesi ile veritabanımıza şifreledik Bu sayede Json Web Token ile rahatça oturum kontrolü sağlayabildik.1')}
              <br />
              {t('Menü modeli oluşturduk burada modeli iki parçaya böldük Örneğin yemek bölümü ve yemek bölümünün detayı adlı iki modelimiz olmuş oldu Bunları aggregate ile gruplama işlemi yaparak oluşturduk.1')}
              <br />
              {t('Son olarak yayına hazır olmadan önce oluşturduğumuz yapılara Unit test yazdık Yayına alırken heroku ile travisCI kullanıp sürekli entegrasyon işlemleri yaptık.1')}
            </p>
            <h4 id="align">{t('React kısmında neler yaptık.1')}</h4>
            <p id="align">
              {t('Bootstrap Html ve CSS kullanarak tasarımın iskeletini çıkardık.1')}
              <br />
              {t('Componentlerimizi parçalayarak modüler bir sistem halinde,tüm componentlerimizi oluşturduk.1')}
              <br />
              {t('React-router-dom kullanarak navbarımızı işlevsel hale getirdik.1')}
              <br />
              {t('Bootstrap card kullanarak menümüzü oluşturduk.1')}
              <br />
              {t('Restoran menümüzü oluşturduktan sonra, menünün detaylarını ayrı bir sayfada oluşturduk.1')}
              <br />
              {t('Tüm detayları bir json dosyasında tuttuk ve map fonksiyonu ile sayfamıza yazdık.1')}
              <br />
              {t('React ın bize sağladığı qrcode react adlı kütüphaneyi kullanarak restorana özel QR kod oluşturan bir component oluşturduk.1')}
              <br />
              {t('Her yeni restoran veri tabanına kayıt yaptığında dinamik şekilde mekanın ismine göre qrcode u oluşturduk.1')}
              <br />
              {t('Api çekerken context kullandık useReducer ile belirli post update delete methodlarını uyguladık.1')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
