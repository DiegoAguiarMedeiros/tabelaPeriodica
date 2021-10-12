import React from 'react'
import './Modal.css'

const modal = props => {
    
    let classes = 'modal '
    classes += props.display === "none" ? 'd-none ' : ''
    return (
        <div className={classes}>
            <div className='modal-header'>
                <h1>{props.elements.element}</h1>
                <span  onClick={e => props.close && props.close()}><img src='./times.ico' alt='fechar modal' ></img></span>
            </div>
            <div className='modal-body'>
                <p>asdasdasdasd asd asd asd asdas da sd asd as </p>
            </div>
            <div className='modal-bottom'>
                <button onClick={e => props.close && props.close()}>OK</button>
            </div>
        </div>
    )
}

export default modal