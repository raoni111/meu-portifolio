/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import {Carousel} from 'react-bootstrap';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';

type ProjectElementProps = {
	imgs: any[];
};
export default function ProjectElement({imgs}: ProjectElementProps): React.ReactElement {
	return (
		<Carousel prevIcon={(<>
			<MdOutlineKeyboardArrowLeft size={30} color='#6c63ff' />
		</>)} nextIcon={(
			<>
				<MdOutlineKeyboardArrowRight size={30} color='#6c63ff'/>
			</>
		)}>
			{imgs.map(value => (
				<Carousel.Item content='center'>
					<img src={value} alt='' />
				</Carousel.Item>
			))}
		</Carousel>
	);
}
