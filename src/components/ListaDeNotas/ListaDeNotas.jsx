import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {

  constructor(props) {
    super(props);
    this.state={notas:[]};

    this._criarNota = this._criarNota.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._criarNota);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._criarNota);
  }

  _criarNota(notas) {
    this.setState({...this.state, notas});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((notas, index) => {
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