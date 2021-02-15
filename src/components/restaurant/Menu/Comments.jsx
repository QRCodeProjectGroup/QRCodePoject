import React, { useState } from 'react';
import Popup from '../../page/PopUp/PopUp';


function Comments(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <input
                type="button"
                value="Yorumlar"
                onClick={togglePopup}
            />
            {isOpen && <Popup
                content={<>
                    <b>Yorumlar</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Test button</button>
                </>}
                handleClose={togglePopup}
            />}
        </>
    )
}

export default Comments;