import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./component/item";
import Meme from "./component/meme";
import icon from "./assets/icon.jpg";
function App() {
  const [templates, setTemplates] = useState([]);
  const [memeitem, setmemeitem] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="icon">
          <img src={icon} alt="" />
        </div>
        <h1 className="heading">Meme World</h1>
      </div>
      <div className="memelist">
        {memeitem === null ? ( 
          templates.map((temp) => {
            return (
            <Item
              key={temp.id}
              name={temp.name}
              url={temp.url}
              height={temp.height}
              setmemeitem={setmemeitem}
              obj={temp}
            />)
          })
        ) : (
          <Meme item={memeitem} setmemeitem={setmemeitem} />
        )}
      </div>
    </div>
  );
}

export default App;
