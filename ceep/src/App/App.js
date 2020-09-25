import React, { Component } from 'react';
import ListaDeNotas from '../components/ListaDeNotas/ListaDeNotas';
import Formulario from '../components/Formulario/Formulario';
import './app.css';

 export default class App extends Component {

  constructor(){
    super();
  //  this.notas= [];
    this.state= {
      notas: []
    };
  }

  criarNota(titulo,texto){
    //console.log('uma nova nota '+ titulo+'   ' +texto); 
    const novaNota= {titulo, texto};
    const novoArrayNotas= [...this.state.notas,novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  
    /*this.notas.push(novaNota);
    console.log(this.notas.length);
    this.setState({ //controla o render, ele atualiza a pagina sempre que chamado, houver alteração
      nostas: this.notas
    });*/
  }

  render(){ 
            return (
              <section className='conteudo'>
                <Formulario criarNota={this.criarNota.bind(this)}/>
                <ListaDeNotas notas={this.state.notas}/>
              </section>
            );
  }
}


