import React from 'react';
import './styles.home.css';
import Hero from '../../components/home/hero';
import Features from '../../components/home/feature';
import Parte from '../../components/home/parte';
import Character from '../../components/home/character';
import Achieve from '../../components/home/achieve';

function Home() {
	return (
		<div className="home">
			<Hero />
			<Character />
			<Features />
			<Parte />
			<Achieve />
		</div>
	);
}

export default Home;
