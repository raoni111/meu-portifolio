/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */

import React from 'react';
import {IoLogoJavascript, IoLogoNodejs, IoLogoCss3, IoLogoSass} from 'react-icons/io';
import {TiHtml5} from 'react-icons/ti';
import {SiTypescript, SiReact, SiJavascript} from 'react-icons/si';
import './style.scss';

export default function Home(): JSX.Element {
	const getDate = () => {
		const initialDate = 2020;

		const date = (new Date()).getFullYear();

		return date - initialDate;
	};

	return (
		<section className='home-content' id='home-content'>
			<section className='section-element home-section-one'>
				<div className='user-bios'>
					<h1>
						<span>Full Stack</span>
						<div className='developer-content'>
							<div>
								<h1>
									Developer {'</>'}
								</h1>
							</div>
							<div className='stick-element' />
						</div>
					</h1>
					<p>
						Olá! Eu sou programador Full Stack
						apaixonado por tecnologia e inovação.
						Estou envolvido nessa área há {getDate()} anos
						e continuo buscando novos desafios
						a todo momento.
					</p>
					<div className='ability-user-content'>
						<h1>Habilidades</h1>
						<ul className='skill-list'>
							<li className='li-skill-icon-element'>
								<SiJavascript className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>Javascript</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<IoLogoNodejs className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>NodeJs</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<SiTypescript className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>Typescript</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<TiHtml5 className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>HTML5</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<IoLogoCss3 className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>CSS3</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<SiReact className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>React</h3>
								</div>
							</li>
							<li className='li-skill-icon-element'>
								<IoLogoSass className='skill-icon-element' />
								<div className='li-skill-icon-info'>
									<h3>SASS</h3>
								</div>
							</li>
						</ul>
						<h2 className='more-skills'>
							<a href='#skill-container'>
								<u>
									Mais Habilidades....
								</u>
							</a>
						</h2>
					</div>
					<div className='project-button-content'>
						<a href='#project'>
							<button>Conheça meus projetos</button>
						</a>
					</div>
				</div>
			</section>
			<section className='section-element home-section-two'>
				<img src={require('./img/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966.gif')} alt='' />
			</section>
		</section>
	);
}
