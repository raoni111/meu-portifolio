/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */
import React, {useState} from 'react';
import './style.scss';

export default function Headers(): React.ReactElement {
	const [displayNav, setDisplayNav] = useState(false);

	return (
		<header className='header-portfolio'>
			<div className='user-profile'>
				<img src={require('./img/1676915620132.jpg')} alt='' />
				<h1>Raoni Oliveira Quevedo</h1>
			</div>
			<nav className={`nav-content display-${String(displayNav)}`}>
				<ul className='list-option-nav'>
					<a href='#home-content'>
						<li className='option-list'>
							<h1>
                Inicio
							</h1>
						</li>
					</a>
					<a href='#skill-container'>
						<li className='option-list'>
							<h1>
                Habilidades
							</h1>
						</li>
					</a>
					<a href='#project'>
						<li className='option-list'>
							<h1>
                Projetos
							</h1>
						</li>
					</a>
					<a href='#footer'>
						<li className='option-list'>
							<h1>
                Contato
							</h1>
						</li>
					</a>
				</ul>
			</nav>
			<div className={`display-nav display-${String(displayNav)}`} onClick={() => {
				setDisplayNav(!displayNav);
			}}>
				<div className='icon-content' />
			</div>
		</header>
	);
}
