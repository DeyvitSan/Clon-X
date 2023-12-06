// LeftNav.js
import React from 'react';
import Link from 'next/link';

function LeftNav() {
    return (
        <aside className="contain_left_nav">
            <ul>
                <li>
                    <Link href="/profile">Perfil</Link>
                </li>
                <li>
                    <Link href="/settings">Configuración</Link>
                </li>
                {/* Agrega más elementos de navegación lateral aquí */}
            </ul>
        </aside>
    );
}

export default LeftNav;
