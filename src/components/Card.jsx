import React from "react";
import Avatar from "./avatar";
import Detail from "./detail";


function Card(props) {
    return (
        <div className="card">
            <div className="top">
            <p>{props.id}</p>
                <h2 class="name">{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <Detail tel={props.tel} />
                <Detail email={props.email} />
            </div>
        </div>
    );
}

export default Card;