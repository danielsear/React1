import React, { Component } from 'react';
import ListaDeNotas from '../components/ListaDeNotas/ListaDeNotas';
import Formulario from '../components/Formulario/Formulario';
import ListaDeCategorias from '../components/ListaDeCategorias/ListaDeCategorias'
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
  }
    /*this.notas.push(novaNota);
    console.log(this.notas.length);
    this.setState({ //controla o render, ele atualiza a pagina sempre que chamado, houver alteração
      nostas: this.notas
    });*/
    
    deletarNota(index){
     // console.log("deletar");
     let arrayNotas = this.state.notas;
     arrayNotas.splice(index,1);
     this.setState({notas:arrayNotas});
    }

  render(){ 
            return (
              <section className='conteudo'>
                <Formulario
                 criarNota={this.criarNota.bind(this)}/>
                    <main className='conteudo-principal'>
                        <ListaDeCategorias />
                        <ListaDeNotas
                        apagarNota={this.deletarNota.bind(this)}
                        notas={this.state.notas}/>
                    </main>
                  
              </section>
            );
  }
}


