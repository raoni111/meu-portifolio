import React from 'react';
import './style.scss';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

export default function Footer(): React.ReactElement {
	return (
		<footer className='footer-element' id='footer'>
			<div className='footer-main'>
				<div className='midia-content footer-content'>
					<div className='midia-title title-content'>
						<h1>Redes Sociais</h1>
					</div>
					<ul>
						<li>
							<BsLinkedin size={30} color='#00b7ff' className='icon-element'/>
							<a href='https://www.linkedin.com/in/raoni-oliveira-quevedo-3719871b3' target='_blank' rel='noreferrer'>Linkedin</a>
						</li>
						<li>
							<BsGithub size={30} color='#fff' className='icon-element' />
							<a href='https://github.com/raoni111' target='_blank' rel='noreferrer'>GitHub</a>
						</li>
						<li>
							<AiFillInstagram size={30} color='#ffffff' className='icon-element' />
							<a href='https://www.instagram.com/raoni_o_o' target='_blank' rel='noreferrer'>Instagram</a>
						</li>
					</ul>
				</div>
				<div className='contact-content footer-content'>
					<div className='midia-title title-content'>
						<h1>Contato</h1>
					</div>
					<ul>
						<li className='footer-li' id='footer-li'>
							<SiGmail size={25} color='#ffffff' className='icon-element'/>
							<a href='https://mail.google.com/mail/u/1/#inbox' target='_blank' rel='noreferrer'>raonioliveiraquevedo@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
