// RootLayout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import React from 'react';
import LeftNav from '@/components/LeftNav';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }) => (
    <div className='root-container'>
        <Nav className='nav' />
        <LeftNav className='left-nav' />
        <main className='main-content'>{children}</main>
    </div>
);

export default RootLayout;
