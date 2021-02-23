import React from 'react';
import { useTranslation } from 'react-i18next';

function Comment(props) {
    const { t, i18n } = useTranslation();
    function handleClick(lang) {
    i18n.changeLanguage(lang);
    }
    

    const { comments } = props;
    const comment = comments.anonim && comments.anonim.map((item, index) => {
        return (
            <div key={index}>
                <p>{t('Anonim.1')}{item}</p>
            </div>
        )
    })
    return (
        <>
            <b>{t('Yorumlar.1')}</b>
            {comment}
            <button>Test button</button>
        </>
    )
}

export default Comment