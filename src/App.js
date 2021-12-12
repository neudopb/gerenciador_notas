import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormNota from "./components/FormNota";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/App.css";
import "./assets/index.css";

import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormNota
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
