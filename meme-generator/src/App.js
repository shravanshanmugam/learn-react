import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'
import Boxes from './components/Boxes';
import Forms from './components/Forms'
import StarWars from './components/StarWars';

export default function App() {
    return <div>
        <Header/>
        <Meme/>
        <Boxes/>
        <Forms/>
        <StarWars/>
    </div>
}