import React from 'react';

export default function Comment({id, name, message, isNotAdmin, comments, setComments}) {
    // const [pseudo, setPseudo] = useState("Name");
    // const [message, setMessage] = useState("insert text");

    // const completeList = () => {
    //     setPseudo("Valou");
    //     setMessage("Je suis un message secret...");
    // }
    const deleteComment = () => {
        let newComments = comments.filter(comment => comment.id !== id);
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
