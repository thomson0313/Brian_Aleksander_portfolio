import React from 'react';
import './styles.about.css';
import RouterBar from '../../components/routerBar';
import Achieve from '../../components/about/achieve';
import Who from '../../components/about/who';
import Tech from '../../components/about/tech';
import Culture from '../../components/about/culture';
import Practice from '../../components/about/practice';

const routerData = [
    {router: "About Us", link: "/about"},
]

function About() {
	return (
		<div className="about">
			<RouterBar router={routerData} />
			<div className='about-hero'></div>
			<Who />
			<Tech />
			<Achieve />
			<Culture />
			<Practice />
		</div>
	);
}

export default About;
