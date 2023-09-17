/* eslint-disable @typescript-eslint/no-require-imports */

import React, {useState} from 'react';
import './style.scss';
import {Carousel} from 'react-bootstrap';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {type ReactElement} from 'react';
import ProjectElement from './project-element';
import {SiExpress, SiFirebase, SiJavascript, SiNodedotjs, SiReact, SiSocketdotio, SiTypescript, SiWebpack} from 'react-icons/si';
import {TiHtml5} from 'react-icons/ti';
import {IoLogoCss3, IoLogoSass} from 'react-icons/io';
import {BsBack, BsGithub, BsYoutube} from 'react-icons/bs';

export default function Projects(): React.ReactElement {
	const [displays, setDisplays] = useState([
		true,
		false,
		false,
	]);

	const toLeft = () => {
		//
	};

	const toRight = () => {
		//
	};

	return (
		<Carousel id='project' prevIcon={(<>
			<MdOutlineKeyboardArrowLeft size={50} color='#6c63ff' />
		</>)} nextIcon={(
			<>
				<MdOutlineKeyboardArrowRight size={50} color='#6c63ff' />
			</>
		)}>
			<Carousel.Item>
				<div className='item-content'>
					<div className='project-element'>
						<div className='img-project'>
							<ProjectElement imgs={[
								require('./img/flagFinder/dark-hd-findcountries.png'),
								require('./img/flagFinder/white-hd-findcountries.png'),
								require('./img/flagFinder/inf-dark-findcountries.png'),
								require('./img/flagFinder/info-white-findcountries.png'),
								require('./img/flagFinder/dark.png'),
								require('./img/flagFinder/white.png'),
								require('./img/flagFinder/phone-dark.png'),
								require('./img/flagFinder/phone-white.png'),
							]} />
						</div>
						<div className='project-information'>
							<div className='project-information-title'>
								<div className='project-information-content-one'>
									<h1>
										FlagFinder
									</h1>
									<a href='https://findcountries2-0.netlify.app' target='_blank' rel='noreferrer'>
										<BsBack className='icon-element' size={15} />
									</a>
								</div>
								<div className='project-information-content-two'>
									<a href='https://github.com/raoni111/flagFinder2.0/tree/main' target='_blank' rel='noreferrer'>
										<BsGithub className='icon-element' size={25} />
									</a>
								</div>
							</div>
							<div className='skill-content'>
								<div className='skill-content-title'>
									<h1>Skills</h1>
								</div>
								<ul className='skill-list-content'>
									<li>
										<SiJavascript className='icon-element' color='#ffd000' size={30} />
									</li>
									<li>
										<SiTypescript className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiReact className='icon-element' color='#0099ff' size={30} />
									</li>
									<li>
										<TiHtml5 className='icon-element' color='#ff5e00' size={30} />
									</li>
									<li>
										<IoLogoSass className='icon-element' color='#ff0062' size={30} />
									</li>
								</ul>
							</div>
							<div className='sumario-content'>
								<div className='sumario-content-title'>
									<h1>Resumo</h1>
								</div>
								<div className='sumario'>
									<p>
										O FlagFinder é um aplicativo desenvolvido para facilitar a pesquisa de informações sobre países com base em seus nomes ou regiões específicas. Com este aplicativo, você terá acesso rápido e fácil a dados importantes, como moeda, idioma oficial, países fronteiriços e população de qualquer nação do mundo.
									</p>
								</div>
							</div>
						</div>
					</div>
					<a href=''>

					</a>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className='item-content'>
					<div className='project-element'>
						<div className='img-project'>
							<ProjectElement imgs={
								[
									require('./img/devFinder/beautiful-caramel-8348cf.netlify.app_(HD) (1).png'),
									require('./img/devFinder/beautiful-caramel-8348cf.netlify.app_(HD).png'),
								]
							} />
						</div>
						<div className='project-information'>
							<div className='project-information-title'>
								<div className='project-information-content-one'>
									<h1>
										DevFinder
									</h1>
									<a href='https://beautiful-caramel-8348cf.netlify.app' target='_blank' rel='noreferrer'>
										<BsBack className='icon-element' size={15} />
									</a>
								</div>
								<div className='project-information-content-two'>
									<a href='https://github.com/raoni111/DevFinder' target='_blank' rel='noreferrer'>
										<BsGithub className='icon-element' size={25} />
									</a>
								</div>
							</div>
							<div className='skill-content'>
								<div className='skill-content-title'>
									<h1>Skills</h1>
								</div>
								<ul className='skill-list-content'>
									<li>
										<SiJavascript className='icon-element' color='#ffd000' size={30} />
									</li>
									<li>
										<SiTypescript className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiWebpack className='icon-element' color='#0099ff' size={30} />
									</li>
									<li>
										<TiHtml5 className='icon-element' color='#ff5e00' size={30} />
									</li>
									<li>
										<IoLogoSass className='icon-element' color='#ff0062' size={30} />
									</li>
								</ul>
							</div>
							<div className='sumario-content'>
								<div className='sumario-content-title'>
									<h1>Resumo</h1>
								</div>
								<div className='sumario'>
									<p>
										O DevFinder é um aplicativo projetado para facilitar a pesquisa e a descoberta de informações de usuários do GitHub. Com esta ferramenta, é possível obter detalhes relevantes sobre perfis de desenvolvedores, como repositórios públicos, região que ele mora, seguidores e muito mais.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className='item-content'>
					<div className='project-element'>
						<div className='img-project'>
							<ProjectElement
								imgs={[
									require('./img/comentario interativo/img-1.png'),
									require('./img/comentario interativo/img-2.png'),
									require('./img/comentario interativo/img-3.png'),
									require('./img/comentario interativo/img-4.png'),
									require('./img/comentario interativo/img-5.png'),
								]}
							/>
						</div>
						<div className='project-information'>
							<div className='project-information-title'>
								<div className='project-information-content-one'>
									<h1>
										Comentário Interativo
									</h1>
									<a href='https://www.youtube.com/watch?v=77X_Mjn7vVc&ab_channel=RaoniOliveiraQuevedo' target='_blank' rel='noreferrer'>
										<BsYoutube className='icon-element' color='red' size={20} />
									</a>
								</div>
								<div className='project-information-content-two'>
									<a href='https://github.com/raoni111/comentarioInterativo' target='_blank' rel='noreferrer'>
										<BsGithub className='icon-element' size={25} />
									</a>
								</div>
							</div>
							<div className='skill-content'>
								<div className='skill-content-title'>
									<h1>Skills</h1>
								</div>
								<ul className='skill-list-content'>
									<li>
										<SiJavascript className='icon-element' color='#ffd000' size={30} />
									</li>
									<li>
										<SiNodedotjs className='icon-element' color='#2bff00' size={30} />
									</li>
									<li>
										<SiTypescript className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiReact className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<TiHtml5 className='icon-element' color='#ff5e00' size={30} />
									</li>
									<li>
										<IoLogoCss3 className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiExpress className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiSocketdotio className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiFirebase className='icon-element' color='#ffd000' size={30} />
									</li>
								</ul>
							</div>
							<div className='sumario-content'>
								<div className='sumario-content-title'>
									<h1>Resumo</h1>
								</div>
								<div className='sumario'>
									<p>
                    O App de comentários interativos é uma plataforma de comunicação que permite aos usuários trocarem mensagens instantâneas de forma rápida e segura. Com recursos de criação de conta e personalização
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
			<Carousel.Item>
				<div className='item-content'>
					<div className='project-element'>
						<div className='img-project'>
							<ProjectElement
								imgs={[
									require('./img/ipTracker/Captura de tela 2023-07-04 195529.png'),
									require('./img/ipTracker/iptrackerendlocation.netlify.app_(HD).png'),
								]}
							/>
						</div>
						<div className='project-information'>
							<div className='project-information-title'>
								<div className='project-information-content-one'>
									<h1>
										IpTracker
									</h1>
									<a href='https://iptrackerendlocation.netlify.app' target='_blank' rel='noreferrer'>
										<BsBack className='icon-element' size={15} />
									</a>
								</div>
								<div className='project-information-content-two'>
									<a href='https://github.com/raoni111/rastreadorDeInderecoDeIP' target='_blank' rel='noreferrer'>
										<BsGithub className='icon-element' size={25} />
									</a>
								</div>
							</div>
							<div className='skill-content'>
								<div className='skill-content-title'>
									<h1>Skills</h1>
								</div>
								<ul className='skill-list-content'>
									<li>
										<SiTypescript className='icon-element' color='#00b7ff' size={30} />
									</li>
									<li>
										<SiReact className='icon-element' color='#0099ff' size={30} />
									</li>
									<li>
										<TiHtml5 className='icon-element' color='#ff5e00' size={30} />
									</li>
									<li>
										<IoLogoSass className='icon-element' color='#ff0062' size={30} />
									</li>
								</ul>
							</div>
							<div className='sumario-content'>
								<div className='sumario-content-title'>
									<h1>Resumo</h1>
								</div>
								<div className='sumario'>
									<p>
                    O IPTracker é um aplicativo intuitivo e eficiente que permite rastrear o endereço de IP de qualquer dispositivo conectado à internet. Com apenas alguns cliques, você pode descobrir a localização geográfica precisa de um determinado IP e visualizá-la em um mapa
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		</Carousel>
	);
}
