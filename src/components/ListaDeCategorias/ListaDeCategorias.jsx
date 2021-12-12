import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {

  constructor() {
    super();
    this.state = {categorias: []};

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }

  _handleEventoInput(event) {
    event.stopPropagation();

    if (event.key === "Enter") {
      let categoria = event.target.value;
      this.props.adicionarCategoria(categoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias-section">
        <ul className="lista-categorias-listagem">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias-item" key={index}>
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias-input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
