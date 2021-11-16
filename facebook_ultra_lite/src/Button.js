import React from 'react';

export class Button extends React.Component{
    render(){
        return(
            <input type="button" name="name" value={this.props.value} onClick= { () => this.props.handleChange(this)}/>
        )
    }
}