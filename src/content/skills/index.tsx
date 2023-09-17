import React from 'react';
import './style.scss';
import {SiExpress, SiFirebase, SiJavascript, SiMysql, SiNodedotjs, SiReact, SiSocketdotio, SiStyledcomponents, SiTailwindcss, SiTypescript, SiWebpack} from 'react-icons/si';
import {TiHtml5} from 'react-icons/ti';
import {IoLogoCss3, IoLogoSass} from 'react-icons/io';
import {TbBrandReactNative, TbBrandSocketIo} from 'react-icons/tb';
import {IoLogoElectron} from 'react-icons/io5';
import {FaDocker} from 'react-icons/fa';

export default function SkillContainer(): React.ReactElement {
	return (
		<section className='skill-container' id='skill-container'>
			<div className='header-skill-container'>
				<h1>Habilidades</h1>
			</div>
			<div className='skill-content'>
				<div className='skill-front-end-back-end'>
					<div className='skills front-end'>
						<div className='header-skill'>
							<h1>Front-End</h1>
							<ul className='skill-list'>
								<li className='skill-list-li'>
									<SiJavascript className='icon-element' color='yellow' size={40} />
									<h2>
										Javascript
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiTypescript className='icon-element' color='#00b7ff' size={40} />
									<h2>
										Typescript
									</h2>
								</li>
								<li className='skill-list-li'>
									<TiHtml5 className='icon-element' color='#ff5e00' size={40} />
									<h2>
										HTML5
									</h2>
								</li>
								<li className='skill-list-li'>
									<IoLogoCss3 className='icon-element' color='#00b7ff' size={40} />
									<h2>
										CSS3
									</h2>
								</li>
								<li className='skill-list-li'>
									<IoLogoSass className='icon-element' color='#ff0062' size={40} />
									<h2>
										SASS
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiTailwindcss className='icon-element' color='#008cff' size={40} />
									<h2>
										Tailwindcss
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiWebpack className='icon-element' color='#008cff' size={40} />
									<h2>
										Webpack
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiStyledcomponents className='icon-element' color='#ff009d' size={40} />
									<h2>
										Styled component
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiReact className='icon-element' color='#0099ff' size={40} />
									<h2>
										React
									</h2>
								</li>
								<li className='skill-list-li'>
									<TbBrandReactNative className='icon-element' color='#0099ff' size={40} />
									<h2>
										React Native
									</h2>
								</li>
								<li className='skill-list-li'>
									<IoLogoElectron className='icon-element' color='#0099ff' size={40} />
									<h2>
										Electron.js
									</h2>
								</li>
							</ul>
						</div>
					</div>
					<div className='skills front-backend'>
						<div className='header-skill'>
							<h1>Back-End</h1>
							<ul className='skill-list'>
								<li className='skill-list-li'>
									<SiNodedotjs className='icon-element' color='#2bff00' size={40} />
									<h2>
										NodeJS
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiMysql className='icon-element' color='yellow' size={40} />
									<h2>
										SQL
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiExpress className='icon-element' color='#00b7ff' size={40} />
									<h2>
										Express
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiSocketdotio className='icon-element' color='#00b7ff' size={40} />
									<h2>
										Socket.io
									</h2>
								</li>
								<li className='skill-list-li'>
									<FaDocker className='icon-element' color='#00b7ff' size={40} />
									<h2>
										Docker
									</h2>
								</li>
								<li className='skill-list-li'>
									<SiFirebase className='icon-element' color='#fffb00' size={40} />
									<h2>
										Firebase
									</h2>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
