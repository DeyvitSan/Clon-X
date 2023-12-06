import React from 'react';
import './styles.css';
import Img from "next/image";


export  default function Cardhome(props) {
    return (
        <div className="card">
            <h2>{props.nombre}</h2>
            <p>{props.alias}</p>
            <p>{props.texto}</p>
            <div className="contain_image">
                <Img className="image" src={props.image} alt=""/>
            </div>

        </div>
    );
}
