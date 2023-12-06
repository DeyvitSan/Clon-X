'use client';
import '../style.css';
import Card from '@/components/Cardhome';
import imagen from "/public/assets/bugatti.jpg.webp";
import Img from "next/image";
import React from 'react';
import Link from "next/link";


const MiPagina = () => {
    const totalCards = 2; // Total de tarjetas

    const cardsToShow = Array.from({ length: totalCards }).map((_, index) => (
        <Card
            key={index}
            nombre="John Doe"
            alias="johnny123"
            texto="¡Hola, soy John!"
            image={imagen}
        />
    ));

    return (
        <div className="body">
            <div className="container">
                <div className="left-div">
                    Contenido del div izquierdo
                </div>
                <div className="right-div">
                    {cardsToShow}
                </div>
            </div>
        </div>
    );
};

export default MiPagina;
