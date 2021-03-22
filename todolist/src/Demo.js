import React , {Component} from 'react';
import './Demo.css'
class Demo extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[],
        txtContent:"",
        showMe:false}

    }

    operation(){
        this.setState({
            showMe:!this.state.showMe
        })
    }



    txtChange=(e)=>{
    
        this.setState({txtContent:e.target.value})
    }
    addItem=(e)=>{
    let currentText=this.state.txtContent;
    let currentItems=this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems})
    this.setState({
        showMe:!this.state.showMe
    })
    }
    render(){
        return(
            <div>
          <h1>TASKS</h1>
           <button onClick={()=>this.operation()}>+</button> Add a task
           <br/>
           <br/>
           {this.state.showMe?<div><input type="text" onChange={this.txtChange}/>
           <button onClick={this.addItem}>Submit</button></div>:null}
           
           {this.state.items.map((itm,k)=>{
              return(
                  <div >
                       <input type="radio" class="strikethrough" value="1"  /><span>{itm}</span><br/>
                 
                </div>
              )
           })}
           
           </div>
        )
    }
}
export default Demo;