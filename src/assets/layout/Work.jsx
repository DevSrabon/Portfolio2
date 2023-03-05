import React from 'react';
import { Navbar } from '../../components';
import Details from '../../components/Details';

const Work = () => {
    return (
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg0cover bg-no-repeat bg-center">
					<Navbar home="Home" />
					<div className='w-3/4 mx-auto'>
						<Details />
					</div>
				</div>
			</div>
		);
};

export default Work;