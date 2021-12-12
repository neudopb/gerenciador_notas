import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((notas, index) => {
          return (
            <li key={index} className="lista-notas-item">
              <CardNota 
                index={index}
                deletarNota={this.props.deletarNota}
                categoria={notas.categoria}
                titulo={notas.titulo} 
                texto={notas.texto} 
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
