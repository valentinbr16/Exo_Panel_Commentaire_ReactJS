import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import AdminMode from './AdminMode';

export default function Comments() {

//___________________Dans AdminMode.js & CommentList.js______________________
    const [isNotAdmin, setisNotAdmin] = useState(true);

    const changeMode = () => {
        setisNotAdmin(!isNotAdmin);
        // même chose que :

        // if(isNotAdmin) {
        // setisNotAdmin(false);
        // } else {
        //     setisNotAdmin(true);
        // }

        //même chose que :
        //isNotAdmin ? setisNotAdmin(true) : setisNotAdmin(false);    
    }

    //___________________Dans CommentList.js______________________

    const [comments, setComments] = useState([
        // { name: "JB", message: "Youhou la famille!"}, 
        // { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
     ]);

     useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => {
            setComments(res.data);
        }) 
    }, []);

    return (
        <div>
            <div className="App container">
                <AdminMode isNotAdmin={isNotAdmin} changeMode={changeMode} />
                <div className="columns">
                    <div className="column">
                        <CommentForm comments={comments} setComments={setComments}/>
                    </div>
                    <div className="column">
                        <CommentList isNotAdmin={isNotAdmin} comments={comments}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
