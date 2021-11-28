import React, { Component } from "react";
import "./style.css";

class FormNota extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <h2 className="form-cadastro-titulo">Gerenciador de Notas</h2>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro-input"
          onChange={this._handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Digite sua nota."
          className="form-cadastro-input"
          onChange={this._handleTexto.bind(this)}
        />
        <button className="form-cadastro-input form-cadastro-submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormNota;
