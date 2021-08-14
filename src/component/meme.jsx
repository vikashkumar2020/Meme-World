import React,{useState} from "react";

const Meme = ({item,setmemeitem}) => {

    const [form, setform] = useState({
        template_id : item.id,
        username : "kvvik2020",
        password : "nokia220",
        boxes : [],
    });

    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
        form.boxes.map((box,index) =>
        (
            url += `&boxes[${index}][text]=${box.text}`
        ));
        fetch(url).then(res => res.json())
        .then((data) => 
            {
                console.log(data);
                if(data.success===true)
                {
                    setmemeitem({...item,url:data.data.url})
                }else
                {
                    setmemeitem({...item,url:item.url})
                }
            })
        //
        //setmemeitem()
    }
  return (
    <div className="meme-item">
      <div className="image-box-meme">
        <img src={item.url} alt="" />
      </div>
      <h3>Meme-tittle : {item.name}</h3>
      <div className="formlist">
        {[...Array(item.box_count)].map((el, index) => (
          <input type="text" key={index} placeholder={"Caption " + (index + 1)}
          onChange={(e) => {
            const newBoxes = form.boxes;
            newBoxes[index] = {text : e.target.value}
            //console.log(e.target.value)
            setform({...form,boxes:newBoxes})
          } } />
        ))}
      </div>
      <div className="btn-wrap">
          <button className="btn" onClick={generateMeme}>Generate Meme</button>
          <button className="btn" onClick={() => {setmemeitem(null)}}>Choose Template</button>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
   <button className="btn">
      <i className="fas fa-download"/>
      Download File
      </button>
</a>
      </div>
    </div>
  );
};

export default Meme;
