import React from 'react';

const Detail = ({ detail }) => {
    const { website, technologies, ss3, ss2,ss1, details4, details3, details2,detail1, img, rating, githubClient,githubServer, title, stack } = detail;
    console.log(detail)
    return (
			<div className="pt-20 h-[100vh]">
				<h2 className="text-3xl ">{title} Details</h2>
				<h4 className="text-xl my-5">ScreenShots:</h4>
				<div className="flex gap-4">
					<img className="w-[30%]" src={ss1} alt="" />
					<img src={ss2} className="w-[30%]" alt="" />
					<img src={ss3} className="w-[30%]" alt="" />
				</div>
				<h4 className="text-xl my-5">This website is base on {stack}</h4>
				<h3 className="text-2xl mb-3">About my projects</h3>
				<ul className="list-disc ml-5">
					<li>{detail1}</li>
					<li>{details2}</li>
					<li>{details3}</li>
					{details4 && <li>{details4}</li>}
				</ul>
				<h3 className="text-2xl my-5">Technologies: {technologies}</h3>
				<div className='flex gap-5'>
					<a href={website}>
						<button className="btn btn-accent">Live Site</button>
					</a>
					<a href={githubClient}>
                    <button className="btn btn-accent">GitHub Client</button>
					</a>
					<a href={githubServer}>
						<button className="btn btn-accent">GitHub Server</button>
					</a>
				</div>
			</div>
		);
};

export default Detail;