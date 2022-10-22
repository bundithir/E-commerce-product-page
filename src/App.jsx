import React from 'react';
import './App.css';
import Content from './Component/Content';
import Nav from './Component/Nav';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      piece : 0
    }
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
        <Nav />
        <Content piece={this.state.piece} OnAddPiece={this.OnAddPiece}/>
      </div>
    )
  }
}

export default App;
