import React from 'react';
import './App.scss';
import Headers from './content/header';
import Home from './content/home';
import SkillContainer from './content/skills';
import Projects from './content/projects';
import Footer from './content/footer';

function App() {
	return (
		<div className='App'>
			<Headers />
			<Home />
			<SkillContainer />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
