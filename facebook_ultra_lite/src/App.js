import './App.css';
import React from 'react';
import './Button.js';
import { Button } from './Button';
import { Profil } from './Profil';

class App extends React.Component {
  constructor(props){
    super(props)
    const profils = [<Profil nom="Dupont" prenom="Martine" birth="16/11/1965"/>,
    <Profil nom="Dumont" prenom="Jeanne" birth="15/10/1964"/>, 
    <Profil nom="Dugont" prenom="Claude" birth="14/09/1963"/>]
    this.state = {
      profilTab : profils,
      currentProfil : profils[0]};
    this.handleChange = this.handleChange.bind(this)
  }
  
  getProfil(name){
    for (var i=0;i<this.state.profilTab.length;i++){
      if(this.state.profilTab[i].props.prenom === name){
        return this.state.profilTab[i];
      }
    }
  }

  handleChange(event){
    this.setState({ currentProfil: this.getProfil(event.props.value) });
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <Button value={"Martine"} handleChange={this.handleChange}/>
          <Button value={"Jeanne"} handleChange={this.handleChange}/>
          <Button value={"Claude"} handleChange={this.handleChange}/>
        </div>
        <div className="profil">
          <p>{this.state.currentProfil}</p>
        </div>
      </div>
    );
  }

}

export default App;
