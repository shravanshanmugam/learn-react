import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'
import Boxes from './components/Boxes';
import Forms from './components/Forms'
import StarWars from './components/StarWars';
import WindowTracker from './components/WindowTracker';

export default function App() {
    return <div>
        <Header/>
        <Meme/>
        <Boxes/>
        <Forms/>
        <StarWars/>
        <WindowTracker/>
    </div>
}