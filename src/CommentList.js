import React from 'react';
import Comment from './Comment';

export default function CommentList({isNotAdmin, comments, setComments}) {

    const commentsJSX = comments.map(element => {
        return <Comment key={element.id} 
                        id={element.id} name={element.name} message={element.body} isNotAdmin={isNotAdmin}
                        comments={comments} setComments={setComments} />
    });

    return (
        <div>
                    
                    <h1 className="title">Liste des commentaires ({comments.length})</h1>
                    <ul className="comment-list">
                        {commentsJSX}
                    </ul>
                  
        </div>
    )
}
