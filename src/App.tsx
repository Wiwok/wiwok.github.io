import ExBox from './Components/ExBox';

function App() {
	function scrollDown() {
		window.scrollTo({
			top: 915,
			behavior: 'smooth'
		});
	}

	return (
		<div className="App">
			<div className="Title">
				<div className="Stripes"></div>

				<div className="TitleContent">
					<h1>
						Émile
						<br />
						DECHENAUD
					</h1>
				</div>
			</div>

			<div onClick={scrollDown} className="ScrollDown">
				<div></div>
			</div>

			<div className="MainBox">
				<div className="WhoAmI">
					<h1>Who am I?</h1>

					<p>
						Hi! I'm Émile, a French developer with a passion for software development and technology. I've
						been programming since 2015 and have worked with a wide range of technologies, from web
						development with React and ThreeJS to desktop applications with ElectronJS and game development
						with Unity.
						<br />
						<br />
						My experience spans numerous programming languages, including JavaScript, TypeScript, Python,
						Java, C, C++, Rust and SQL. This diverse technical background allows me to adapt quickly to new
						environments and approach complex problems from different perspectives.
					</p>
				</div>

				<div className="Experiences">
					<ExBox
						name="ENGO"
						date="June 2026 — August 2026"
						description="Internship focused on the design and development of a navigation backend for connected sports glasses. The project involved working with the specific constraints of embedded software development and collaborating within a software development team."
						roles={['Software Developer Intern']}
						categories={['Backend', 'Embedded Systems', 'Software Development']}
					/>

					<ExBox
						name="DGDSI UGA — DANET"
						date="September 2025 — Now"
						description="IT support role providing technical assistance to students at Université Grenoble Alpes. Responsibilities included managing support tickets and resolving issues related to account access, email delivery and other IT services. The position involved working across multiple sites and interacting directly with the student community."
						roles={['IT Support Technician']}
						categories={['IT Support', 'Troubleshooting', 'User Support']}
					/>

					<ExBox
						name="INRIA"
						date="April 2025 — July 2025"
						description="Internship focused on the development of a demonstrator for PALMED, a CPU benchmarking and mapping tool. I developed tools for parsing and visualizing benchmarking results while working within a professional research environment and collaborating with a research team."
						roles={['Research Software Intern']}
						categories={['Python', 'Benchmarking', 'Data Visualization']}
					/>
				</div>
			</div>

			<div className="MainBox MainBox2">
				<div className="Experiences">
					<ExBox
						name="The Pirate Phone"
						link="https://github.com/ThePiratePhone"
						date="2024 — 2025"
						description="The Pirate Phone is my most comprehensive software project. Developed at the request of an organization, it is a web application designed to manage the distribution and recall of large volumes of phone numbers. The application allows multiple employees to simultaneously work with phone numbers while ensuring that the same number is never assigned twice. The project was developed with a strong focus on data privacy, integrity and security."
						roles={['Lead Developer', 'Lead Designer']}
						categories={['TypeScript', 'React', 'ExpressJS', 'MongoDB']}
					/>

					<ExBox
						name="Factorio Mod Updater"
						link="https://github.com/Wiwok/Factorio-Mod-Updater"
						date="2022 — 2024"
						description="Factorio Mod Updater is a command-line tool developed in TypeScript for installing and updating mods for the video game Factorio. The project involved reverse engineering parts of the game's API and developing an alternative method for distributing and managing mods."
						roles={['Developer', 'Reverse Engineer']}
						categories={['TypeScript', 'CLI', 'Reverse Engineering']}
					/>

					<ExBox
						name="Menu Vaucanson"
						link="https://github.com/Menu-Vaucanson/"
						date="2021 — 2023"
						description="Menu Vaucanson was a web platform for distributing the cafeteria menu of Vaucanson High School. The service reached an average of around 2,000 visitors per month and included separate desktop and mobile interfaces, menu ratings, and dedicated statistics for staff. The platform was built around a React frontend and an ExpressJS backend."
						roles={['Lead Developer', 'Lead Designer']}
						categories={['TypeScript', 'React', 'ExpressJS']}
					/>
				</div>

				<div className="WhoAmI">
					<h1>Personal Projects</h1>

					<p>
						I have been developing personal projects for many years, ranging from web applications and
						developer tools to experiments involving game development and desktop software. These projects
						allow me to explore new technologies, experiment with different architectures and develop
						solutions independently from an academic or professional environment.
					</p>
				</div>
			</div>

			<div className="MainBox">
				<div className="WhoAmI">
					<h1>Associative & Student Engagement</h1>

					<p>
						Alongside my studies and technical work, I have been actively involved in student organizations
						and associations. These experiences have allowed me to develop skills in leadership, project
						management, representation and collaboration, while contributing to projects and initiatives
						that matter to me.
					</p>
				</div>

				<div className="Experiences">
					<ExBox
						name="President of Génération Précarité"
						date="2024 — 2026"
						description="President of a student association fighting against student precarity. I coordinated the association's activities, managed partnerships and worked on initiatives designed to provide practical support to students facing financial difficulties."
						roles={['President']}
						categories={['Association Management', 'Leadership']}
					/>

					<ExBox
						name="Elected to the Central Bodies of Université Grenoble Alpes"
						date="2024 — 2026"
						description="Elected to several university councils and bodies at Université Grenoble Alpes. I represented students and participated in institutional discussions and decision-making processes concerning university life."
						roles={['Student Representative']}
						categories={['Representation', 'Governance']}
					/>

					<ExBox
						name="Student Representative at Vaucanson High School"
						date="2022 — 2023"
						description="Elected to the Board of Directors, Student Life Council, Health, Safety and Working Conditions Committee, as well as several other bodies of Vaucanson High School and the Greta of Grenoble. I participated in institutional discussions and represented students across these different bodies."
						roles={['Student Representative']}
						categories={['Representation', 'Governance']}
					/>
				</div>
			</div>

			<div className="Footer">
				<div>
					<span>Émile DECHENAUD — 2026</span>
					<span>emile.dechenaud@gmail.com</span>
				</div>

				<div>
					<a target="_blank" rel="noreferrer" href="https://github.com/Wiwok/wiwok.github.io">
						Source code
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
