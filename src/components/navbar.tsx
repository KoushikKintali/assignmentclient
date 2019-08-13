import React from 'react'

export const Navbar=(props:any)=>{
    console.log(props)

     var a:any=[];
    for (const key of props.channelslist) {
        //console.log(key)
        a.push(<li key={key} className="nav-item">
            
        <a onClick={(e)=>{props.func(e,key)}} className="nav-link">{key}</a>
    </li>)
    }
    return(  
        <>
        <nav className="navbar navbar-expand-lg  navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                    <a onClick={(e)=>{props.func(e,"Channel1")}} className="nav-link" >Channel 1</a>
                </li>
                <li className="nav-item">
                    <a onClick={(e)=>{props.func(e,"Channel2")}}  className="nav-link" >Channel 2</a>
                </li>
                <li className="nav-item">
                    <a onClick={(e)=>{props.func(e,"Channel3")}}  className="nav-link">Channel 3</a>
                </li> */}
                {a}
                </ul>
                
            </div>
            </nav>
        </>
    );
}