
import CardNota from '../CardNota/CardNota';
import React, { Component } from 'react';
import './lista.css';

export default class ListaDeNotas extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ul className='lista-notas'>
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className='lista-notas_item' key={index}>
                            <CardNota  
                            indice={index}
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo} texto={nota.texto}
                            categoria={nota.categoria} />
                        </li>
                    );
                })}
            </ul>
        );
    }

}