import React from 'react';
import './Footer.css'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import qrkod from '../../images/qrkod.png'

function Footer(props) {
    return (
        <div className="container-fluid " id="footerContainer">

            <div className="row">
                <div className="col-sm-4 mt-5">
                    <h3>Nedir bu QR Menü?</h3>
                    <img src={qrkod}></img>
                    <p className="mt-3">QR menü yeni nesil dijital menüdür.Cep telefonunuzdan
                    QR kod okutarak restoranınızın menüsünü,müşterilerinize gösterebilirsiniz.</p>
                </div>


                <div className="col-sm-4">
                    <div className="row mt-5">
                        <div className="col">
                            <h3>Menü Sepeti Destek</h3>
                            <p className="mt-5"> QR menü ile ilgili bilgi almak istiyorsanız,yazın biz size dönelim!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email adresiniz:</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mesajınız:</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary mb-5">Gönder</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mt-5">
                    <h3>İletişim</h3>
                    <p className="mt-5">Sosyal Medyadan Bize Ulaşın</p>
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
                            <h3>Hizmetler</h3>
                            <ul>
                                <li className="a">Restoran Ekle</li>
                                <li className="a mt-3">Güvenlik</li>
                                <li className="a mt-3">Gizlilik Politikası</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <hr color="gray" />
            <p className="pb-4">Copyright © 2021 MenuSepeti. All right reserved.</p>
        </div>

    )
}

export default Footer