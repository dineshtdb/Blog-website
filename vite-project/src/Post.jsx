import React from "react"
import myImage from './assets/8406694.jpg';
function Post(){
    return(
    
        <div className="post">
          <div className="imge"><img src={myImage}/></div>
       <div className="text">
        <h2>One Piece new updates</h2>
        <p className="info">
          <a className="author"> Dinesh babu</a>
          <time>2023-01- 16:00</time>
         
        </p>
        <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, dicta iste doloremque soluta mollitia quaerat corporis saepe veniam ut blanditiis quo praesentium repellat perspiciatis, perferendis expedita incidunt, omnis eum.</p>
        </div>
        </div>
        
    );

}
export default Post