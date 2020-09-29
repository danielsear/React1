import React, { Component } from 'react';
import './ListaDeCategorias.css';

export default class listaDeCategorias extends Component {

    _handleEventoInput(evento){
       // console.log(evento.key);//testando evento, evento.key, evento.keyCode
       if(evento.key === 'Enter' ){
           //console.log('Adicionar Categoria');
           let valorCategoria= evento.target.value;//target é o elemento de input
           this.props.adicionarCategoria(valorCategoria);
       }
    }

    

    render(){
        return (
            <section className='lista-categorias'>
                <ul  className='lista-categorias_lista'>
                    {this.props.categorias.map((categoria,index)=>{
                        return <li key={index} 
                                    className='lista-categorias_items'>{categoria}</li>;
                    })}
                </ul>

                <input type="text" className='lista-categorias_input' 
                        placeholder='Adicionar Categoria'
                        onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
        );
    };
};
//bind é usado para não ter problemas de usar o this dentro do método