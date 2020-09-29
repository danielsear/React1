
import React from   'react';
import { Component } from 'react';
import './formulario.css';

export default class Formulario extends Component {
   
     constructor(props){
         super(props);
        this.titulo='';
        this.texto='';
        this.categoria= "Sem categoria";
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    } 
  
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
      //  console.log(this.titulo);
    }

   _handleMudancaTexto(evento){
         evento.stopPropagation();
        this.texto = evento.target.value;
      //  console.log(this.texto);
    }

    _criarNota(evento){
        evento.preventDefault(); //para ele não se comportar normalmente, pois ele recarrega a pagina normalmente
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
       }

    render(){
        return (
            <form className='form-cadastro'onSubmit={this._criarNota.bind(this)} >

                <select onChange={this._handleMudancaCategoria.bind(this)} 
                        className="form-cadastro_input">
                    <option defaultChecked={true}>Sem Categoria</option>
                    {this.props.categorias.map((categoria)=>{
                        return <option>{categoria}</option>
                    })}
                </select>

                <input onChange={this._handleMudancaTitulo.bind(this)} 
                 type="text" placeholder='Título' className="form-cadastro_input" />

                <textarea onChange={this._handleMudancaTexto.bind(this)} 
                rows={15} cols={50} className='form-cadastro_input'
                 placeholder='Escreva sua nota...'></textarea>

                <button className='form-cadastro_input form-cadastro_submit'>Criar Nota</button>
            </form>
        );
    }
}