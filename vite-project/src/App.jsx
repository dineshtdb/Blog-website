import { useState } from 'react'
import './App.css'
import myImage from './assets/8406694.jpg';

function App() {
  return (
    <main>
      <header>
        <a className="logo" href="">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
        <div className="post">
          <div className="imge"><img src={myImage}/></div>
       <div className="text">
        <h2>One Piece new updates</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, dicta iste doloremque soluta mollitia quaerat corporis saepe veniam ut blanditiis quo praesentium repellat perspiciatis, perferendis expedita incidunt, omnis eum.</p>
        </div>
        </div>

        <div className="post">
        <div className="imge"><img src={myImage}/></div>
        <div className="text">
        <h2>One Piece new updates</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, dicta iste doloremque soluta mollitia quaerat corporis saepe veniam ut blanditiis quo praesentium repellat perspiciatis, perferendis expedita incidunt, omnis eum.</p>
        </div>
        </div>

        <div className="post">
        <div className="imge"><img src={myImage}/></div>
        <div className="text">
        <h2>One Piece new updates</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, dicta iste doloremque soluta mollitia quaerat corporis saepe veniam ut blanditiis quo praesentium repellat perspiciatis, perferendis expedita incidunt, omnis eum.</p>
        </div>
        </div>

        <div className="post">
        <div className="imge"><img src={myImage}/></div>
        <div className="text">
        <h2>One Piece new updates</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nisi, dicta iste doloremque soluta mollitia quaerat corporis saepe veniam ut blanditiis quo praesentium repellat perspiciatis, perferendis expedita incidunt, omnis eum.</p>
        </div>
        </div>

        
        
    </main>
  )
}

export default App
