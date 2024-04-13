import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';
export default function PostPage(){
    const {id}=useParams();
    const [postInfo,setPostInfo] = useState(null); 
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
          response.json().then(postInfo => {
            setPostInfo(postInfo);
          });
        });
    },[]);
    if(!postInfo) return '';
 return(
  <div className="post-page">
    <div className="image">
    <img src={`http://localhost:4000/${postInfo.cover}`}/>
    </div>
    <h1>{postInfo.title}</h1>
  </div>
);
 
}