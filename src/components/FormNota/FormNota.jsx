import React, { Component } from "react";
import "./style.css";

class FormNota extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "";

    this.state = {categorias : []};

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

  _handleCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
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
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <h2 className="form-cadastro-titulo">Gerenciador de Notas</h2>
        
        <select onChange={this._handleCategoria.bind(this)} className="form-cadastro-input">
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return (
              <option key={index}>{categoria}</option>
            )
          })}
        </select>
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
