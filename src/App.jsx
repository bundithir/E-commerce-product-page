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
      Cart : [],
      Menu : false
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

  OnAddCart = () =>{
    if(this.state.piece >= 1){
      this.setState({
      Cart : [{
        image : this.state.item[0].thumbnail[0],
        name : this.state.item[0].name,
        stock : this.state.piece,
        price : this.state.item[0].after.toFixed(2),
        total : this.state.item[0].after*this.state.piece
      }]
      
    })
    }
    
    // console.log(this.state.Cart)
  }

  OnRemove = (e) => {
    this.setState({
      Cart : this.state.Cart.filter(list => list.name !== e)
    })
  }

  OnOpenMenu =()=>{
    this.setState({
      Menu : !this.state.Menu
    })
  }

  render(){
    const all = this.state.Cart.reduce((x,list)=>x + list.stock ,0)
    return(
      <div className="min-h-screen">
        <Nav OnCart={this.OnCart} Cart={this.state.Cart} number={all} MN={this.state.Menu} Menu={this.OnOpenMenu}/>
        <Content item={this.state.item} Cart={this.state.Cart} DisCart={this.state.DisCart} piece={this.state.piece} OnAddPiece={this.OnAddPiece} OnAddCart={this.OnAddCart} OnRemove={this.OnRemove}/>
      </div>
    )
  }
}

export default App;
