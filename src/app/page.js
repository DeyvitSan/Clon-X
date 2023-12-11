'use client'
import React, { useState } from 'react';
import {router} from "next/client";
import './style.css';
import logo from '../public/assets/logoX.png'
import Img from "next/image";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Realiza la solicitud POST al backend para el inicio de sesión
    const response = await fetch('/scripts/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      // Redirige a la página de inicio si el inicio de sesión es exitoso
      await router.push('/home'); // Utiliza router. push para redireccionar en Next.js
    } else {
      // Maneja el error de inicio de sesión
      // Puede mostrar un mensaje de error al usuario indicando credenciales inválidas
    }
  };

  return (
      <div className="contenedor_login">
        <form className="contain_login" onSubmit={handleLogin}>
          <Img className="logo" src={logo}></Img>
          <h2 className="text_login">Inicio de Sesión X</h2>

          <div className="input-group">
            <label  htmlFor="username"></label>
            <input className="input"
                type="text"
                id="username"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password"></label>
            <input className="input"
                type="password"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="boton_login" type="submit">Iniciar Sesión</button>

          </div>
        </form>
      </div>

  );
};

export default Login;