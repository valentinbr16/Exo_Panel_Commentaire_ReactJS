import React from 'react';

export default function Comment({id, name, message, isNotAdmin, comments, setComments}) {
    // const [pseudo, setPseudo] = useState("Name");
    // const [message, setMessage] = useState("insert text");

    // const completeList = () => {
    //     setPseudo("Valou");
    //     setMessage("Je suis un message secret...");
    // }
    const deleteComment = () => {
        // Pour supprimer un commentaire
        // J'ai besoin de mon tableau d'avant 
        // J'ai besoin de la fonction qui va modifier ce tableau
        let newComments = comments.filter(comment => comment.id !== id);
        // newComments c'est mon tableau de commentaires
        // sauf celui qui a pour id celui qu'on vient de cliquer
        setComments(newComments);
    }
    
    return (
         <div>
            <li>
                <strong>{name}</strong> {isNotAdmin ? null : <button className="delete" onClick={deleteComment}></button>} <br/>
                {message}
                
            </li>
        </div>
    )
}
