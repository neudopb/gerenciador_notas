import React, { Component } from "react";
import "./style.css";

import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"; // SVGR

class CardNota extends Component {

  apagar() {
    const index = this.props.index;
    this.props.deletarNota(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota-cabecalho">
          <h3 className="card-nota-titulo">{this.props.titulo}</h3>
          <h4>{this.props.categoria}</h4>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota-texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;