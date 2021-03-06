import React, { useState } from 'react';
import Comment from './Comment';
import Popup from '../../page/PopUp/PopUp';
import './Comments.css'


function Comments(props) {
    const [isOpen, setIsOpen] = useState(false);
    const {comments} = props;

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <input
            className="commentButton"
                type="button"
                value="Yorumlar"
                onClick={togglePopup}
            />
            
            {isOpen && <Popup
                content={<>
                    <Comment comments={comments} />
                </>}
                handleClose={togglePopup}
            />}
        </>
    )
}

export default Comments;