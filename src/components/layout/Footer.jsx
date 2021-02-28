import React from 'react';
import './Footer.css'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import qrkod from '../../images/qrkod.png'


import { useTranslation } from 'react-i18next';

function Footer(props) {
    const { t, i18n } = useTranslation();
    function handleClick(lang) {
    i18n.changeLanguage(lang);
    }

    return (
        <div className="container-fluid " id="footerContainer">

            <div className="row">
                <div className="col-sm-4 mt-4">
                    <h3 id="footerTitle">{t('Nedir bu QR Menü?.1')}</h3>
                    <img id="footerImg" src={qrkod}></img>
                    <p id="footer" className="mt-3">{t('QR kodu okutarak menüyü,müşterilerinize gösterebilirsiniz.1')}</p>
                </div>


                <div className="col-sm-4">
                    <div className="row mt-4">
                        <div className="col">
                            <h3 id="footerTitle">{t("Menü Sepeti Destek.1")}</h3>
                            <p id="footer" className="mt-4">{t('QR menü ile ilgili bilgi almak istiyorsanız,yazın biz size dönelim!.1')}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" id="message" className="form-label mt-2">{t('Email adresiniz.1')}</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1"  id="message" className="form-label">{t('Mesajınız.1')}:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" id="message" className="btn btn-primary mb-4">{t('Gönder.1')}</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mt-4">
                    <h3 id="footerTitle">{t('İletişim.1')}</h3>
                    <p className="mt-4" id="footer">{t('Sosyal Medyada Bize Ulaşın.1')}</p>
                    <div className="row mt-3">
                        <div className="col">
                            <img id="icon" src={facebook}></img>
                            <img id="icon" src={twitter}></img>
                            <img id="icon" src={linkedin}></img>
                            <img id="icon2" src={instagram}></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-4">
                            <h3 id="footerTitle" className="text-center">{t('Hizmetler.1')}</h3>
                            <ul>
                                <li className="footerLi mt-3">{t('Restoran Ekle.1')}</li>
                                <li className="footerLi mt-3">{t('Güvenlik.1')}</li>
                                <li className="footerLi mt-3">{t('Gizlilik Politikası.1')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr color="gray" />
            <p className="pb-4 mb-0" id="b">{t('Telif Hakkı© 2021 Menü Sepeti, tüm hakları saklıdır.1')}</p>
        </div>

    )
}

export default Footer