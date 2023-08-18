import React from 'react';
import Header from './components/Header'
import Meme from './components/Meme'
import Boxes from './components/Boxes';
import Forms from './components/Forms'
import StarWars from './components/StarWars';
import ToggleWindowTracker from './components/ToggleWindowTracker';

export default function App() {
    return <div>
        <Header/>
        <Meme/>
        <Boxes/>
        <Forms/>
        <StarWars/>
        <ToggleWindowTracker/>
    </div>
}