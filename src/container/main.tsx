import React, { Component } from 'react'
import { Navbar } from '../components/navbar';
import { MessageList } from '../components/messagelist';
import axios from 'axios'

interface IProps{
    
}

interface IState{
    selectedvalue:string,
    channel1:string[],
    channel2:string[],
    channel3:string[],
    data:string,
    channelslist:string[]
}

export  class Main extends Component<IProps,IState>{
   channel1:string[]=[]
   channel2:string[]=[]
   channel3:string[]=[]
   arraydata: any[] = [];
    constructor(props:any){
        super(props);
        this.state={channel1:this.channel1,channel2:this.channel2,channel3:this.channel3,selectedvalue:"",data:"",channelslist:[]}
        
    }

    channelClick(event: any,name:string){
        // console.log("Clicked")
        // console.log(name)
        if(name==="Channel 1"){
            console.log("Channel 1 Clicked")
            this.setState({...this.state,selectedvalue:"Channel1"})
            this.arraydata=[...this.state.channel1]

            axios.get('http://localhost:3000/messages/Channel1').then(
                (response) => {
                    console.log(response.data.channels)
                    this.setState({...this.state,channel1:response.data.channels})
                }).catch((err)=>{
                console.log(err)
            } 
            )
        }
        else if(name==="Channel 2"){
            console.log("Channel 2 Clicked")
            this.setState({...this.state,selectedvalue:"Channel2"})
            this.arraydata=[...this.state.channel2]

            axios.get('http://localhost:3000/messages/Channel2').then(
                (response) => {
                    console.log(response.data.channels)
                    this.setState({...this.state,channel2:response.data.channels})
                }).catch((err)=>{
                console.log(err)
            } 
            )
        }
        else if(name==="Channel 3"){
            console.log("Channel 3 Clicked")
            this.setState({...this.state,selectedvalue:"Channel3"})
            this.arraydata=[...this.state.channel3]

            axios.get('http://localhost:3000/messages/Channel3').then(
                (response) => {
                    console.log(response.data.channels)
                    this.setState({...this.state,channel3:response.data.channels})
                }).catch((err)=>{
                console.log(err)
            } 
            )
        }
        
    }

    takeInput(event:any){
        this.setState({...this.state,data:event.target.value})
        console.log(this.state)
    }

    componentDidMount(){

        axios.get('http://localhost:3000/channels').then(
            (response) => {
                console.log(response.data.channels)
                this.setState({...this.state,channelslist:response.data.channels})
            }).catch((err)=>{
            console.log(err)
        } 
        )


    }

    saveInput(){
       
        let array:string[]
        let data:string
        if(this.state.selectedvalue==="Channel1"){
            console.log("button clicked",this.state)
            data=this.state.data
            array=[...this.state.channel1,data]
           this.setState({...this.state,channel1:array})
           console.log(this.state)

           axios.post('http://localhost:3000/Channel1',{
               data:this.state.data
           })

        }
        else if(this.state.selectedvalue==="Channel2"){
            data=this.state.data
            array=[...this.state.channel2,data]
           this.setState({...this.state,channel2:array})
           console.log(this.state)
        }
        else if(this.state.selectedvalue==="Channel3"){
            data=this.state.data
            array=[...this.state.channel3,data]
           this.setState({...this.state,channel3:array})
           console.log(this.state)
        }     
        
       
    }

    render(){
        if(this.state.selectedvalue==="Channel1"){
            console.log("Array data ",this.arraydata)
             this.arraydata=[...this.state.channel1]
         }
         else if(this.state.selectedvalue==="Channel2"){
            
             this.arraydata=[...this.state.channel2]
         }
         else if(this.state.selectedvalue==="Channel3"){
             
             this.arraydata=[...this.state.channel3]
         }
        return(    
            <>
                <div>
                    <Navbar func={this.channelClick.bind(this)} channelslist={this.state.channelslist}></Navbar>
                    <MessageList channelname={this.state.selectedvalue} arraydata={this.arraydata}></MessageList>
                    <br></br>
                    <div className="container form-group">
                        <label>Editor Panel:</label>
                    <input  type="text" onChange={this.takeInput.bind(this)} className="form-control" ></input>
                    <br></br>
                    <button onClick={this.saveInput.bind(this)}>Submit</button>
                    </div>
                </div>
            </>      
        );
    }
}

