import React from 'react';

function Comment(props) {

    const { comments } = props;
    const comment = comments.anonim && comments.anonim.map((item, index) => {
        return (
            <div key={index}>
                <p>Anonim:{item}</p>
            </div>
        )
    })
    return (
        <>
            <b>Yorumlar</b>
            {comment}
            <button>Test button</button>
        </>
    )
}

export default Comment