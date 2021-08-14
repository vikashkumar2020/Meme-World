import React from 'react'

const Item = (props) => {

    const funcall = () =>{props.setmemeitem(props.obj)}
    return (
        <div className="box" onClick={funcall}>
            <div className="image-box" >
                <img src={props.url} alt="img" />
            </div>
            <h3 className="name">{props.name}</h3>
        </div>
    )
}

export default Item;
