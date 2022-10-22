import React from 'react';
import './App.css';
import Content from './Component/Content';
import Nav from './Component/Nav';
import data from './product.json'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      item : data,
      piece : 0,
      DisCart : false,
      
    }
}
  OnCart = () =>{
    this.setState({
      DisCart : !this.state.DisCart
    })
  }
  OnAddPiece =(num) =>{
    if(num !== 1){
      if(this.state.piece){
        this.setState({
          piece : this.state.piece + num
        })
      }
    }else{
      this.setState({
        piece : this.state.piece + num
      })
    }
      
  }

  render(){
    return(
      <div className="min-h-screen">
        <Nav OnCart={this.OnCart}/>
        <Content item={this.state.item} DisCart={this.state.DisCart} piece={this.state.piece} OnAddPiece={this.OnAddPiece}/>
      </div>
    )
  }
}

export default App;
