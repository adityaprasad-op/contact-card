import React from "react";
function Detail(props){
    return (<div>
        <p class="info">{props.tel}</p>
        <p class="info">{props.email}</p>
    </div>);
}
export default Detail;
