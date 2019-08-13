import React from 'react'

export const MessageList=(props:any)=>{
    //console.log("Props are ",props)


    var a:any=[];
    for (const key of props.arraydata) {
        a.push(<div key={key}>{key}</div>)
    }

    return(
        <div className="container">
        <label>Message Panel:</label>
        <div>
        {props.channelname}
        <hr></hr>
        {a}
        </div>
        </div>
    );
}