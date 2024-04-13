import React from "react"
import {formatISO9075} from "date-fns";
import myImage from './assets/8406694.jpg';
function Post({title,summary,cover,content,createdAt,author}){
    return(
    
        <div className="post">
        <div className="imge"><img src={`http://localhost:4000/${cover}`} alt={title} /></div>
       <div className="text">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
         
        </p>
        <p className='summary'>{summary}</p>
        </div>
        </div>
        
    );

}
export default Post