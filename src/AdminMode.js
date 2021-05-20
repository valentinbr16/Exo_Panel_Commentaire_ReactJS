import React, {useState} from 'react';
import './AdminMode.css';

export default function AdminMode({isNotAdmin, changeMode}) {

    return (
        <div className="admin-mode">
            
                <article className={isNotAdmin ? "message is-info" : "message is-danger"}>
                <div className="message-body">
                    <button onClick={changeMode} className= {isNotAdmin ? "button is-info" : "button is-danger"}>{isNotAdmin ? "Activer le mode d'administration" : "Désactiver le mode d'administration"}</button>
                </div>
                </article>
            
        </div>
    )
}
