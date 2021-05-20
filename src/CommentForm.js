import React, {useState} from 'react';

export default function CommentForm({comments, setComments}) {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const currentData = (e) => {
    e.preventDefault();
    let newComment = {
      name: name,
      body: message
    }
     let newComments = [...comments, newComment];
    setComments(newComments);
    setName("");
    setMessage("");
  }

    return (
        <div>       
            <h1 className="title">Ajouter un commentaire</h1>
            <form onSubmit={currentData} className="commentform">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your name" onChange={e => setName(e.target.value)} value={name} />
                </div>
              </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea className="textarea" placeholder="Your comment" onChange={e => setMessage(e.target.value)}value={message}></textarea>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input type="submit" name="Envoyer" className="button is-primary"/>
                  </div>
                </div>
              </form>
        </div>
    )
}
