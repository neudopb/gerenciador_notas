import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormNota from "./components/FormNota";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    if (titulo && texto) {
      const novaNota = { titulo, texto, categoria };
      const novoArrayNotas = [...this.state.notas, novaNota];
      const novoEstado = {
        notas: novoArrayNotas,
      };

      this.setState(novoEstado);
    }
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nome) {
    if (nome) {
      const newCategorias = [...this.state.categorias, nome];
      this.setState({categorias: newCategorias});
    }
  }

  render() {
    return (
      <section className="conteudo">
        <FormNota
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas
            deletarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
