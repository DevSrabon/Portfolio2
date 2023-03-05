import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	skillJudge,
	laptopBazar,
	docService,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "resume",
		title: "Resume",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Frontend Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
		
	},

	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},

];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Skill Judge -Team Project",
		description:
			"Problem solving platform that allows users to challenge problem, solve problem, and can play quizzes.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "TypeScript",
				color: "green-text-gradient",
			},
		],
		image: skillJudge,
		source_code_link: "https://github.com/DevSrabon/Skill-judge-client",
		server_code_link: "https://github.com/Amibiplob/Skill-judge-server",

		live_site_link: "https://skill-judge.vercel.app/",
	},
	{
		name: "Laptop Bazar",
		description:
			"Web application that enables users to search for buy and sell laptops, add new laptops, and delete laptops and report a laptop.",

		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: laptopBazar,
		source_code_link: "https://github.com/DevSrabon/Resale-Laptop-Bazar",
		server_code_link: "https://github.com/DevSrabon/Laptop-Resale-Bazar-Server",

		live_site_link: "https://resale-laptop-bazar.vercel.app/",
	},
	{
		name: "Doctors Service",
		description:
			"Web application that allows users to search for doctors, add new doctors, review doctors and admin can delete doctors ",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: docService,
		source_code_link: "https://github.com/DevSrabon/Doctors-Services-Client",
		server_code_link:
			"https://github.com/DevSrabon/Doctors-Services-Server-Side",

		live_site_link: "https://doc-service-949fd.web.app/",
	},
];

export { services, technologies, testimonials, projects };
