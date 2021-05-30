import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilList from './components/ProfilList/ProfilList'
import Counter from "./components/counter/Counter";
import Header from './components/Header/Header';

export class App extends Component {
  state = {
    PersonList: [
      {
        fullName: "Belhassen Hamdi",
        photo:'hamdi1.png',
        bio: "ma3raftech",
        profession: "Ingenieur informatique industrielle ,Dev web ",
        lieu :"Tunise , Sfax",
        enis:"Ecole Nationale d'Ingenieur de Sfax",
        job: "GOMYCODE",
        link:"voir les cordonnees",
        count:0,
        isShow: true
      },
    ],
    isShow: true
  }

hendleShow = (idProfil) => {
  this.setState({
    PersonList:this.state.PersonList.map((todo) =>
      todo.id === idProfil ? { ...todo, isShow: !todo.isShow } : todo
    ),
  })

}
  handleClick=()=>{
    this.setState({result:!this.state.ref})
  }

  render() {
    return (
      <div className="App" >
      <Header>
         <img src="hamdi.jpg" alt="" style={{height:250 ,width:"100%" , position: 'absolute',left:"0",top:"0"}}/>
       </Header> 
      <ProfilList
        Person={this.state.PersonList}
        hendleShow={this.hendleShow.PersonList}
        handleClick={this.handleClick.PersonList}
      />
      {/* {this.state.isShow ? <Counter /> : null}  */}
    </div>


    )
  }
}

export default App
