import React from 'react';
import { Button } from './Button';

export class Profil extends React.Component{
  constructor(props, nom, prenom, birth){
    super(props);
    this.state ={
      nom: nom,
      prenom: prenom,
      birth: birth,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    
  }

  render(){
    return(
      <div>
        <p>Prenom : {this.props.prenom}          Nom : {this.props.nom}</p>
        <p>Date de naissance : {this.props.birth}</p>
        <Button value={"Change Style"} handleChange={this.handleChange}/>
      </div>
    )
  }
}