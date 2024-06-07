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
						Emile
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
						Hi! I'm Emile, a French developer since 2015. Over the years, I've had the privilege to engage
						with an extensive array of technologies. From pioneering web tools like ThreeJS and React, to
						harnessing the power of the Unity game engine, and crafting desktop applications using
						ElectronJS, I've delved into diverse realms. Moreover, my adeptness in programming languages,
						spanning from Batch, HTML, CSS, JS, Python, Java, SQL, C, C++, Rust and beyond, highlights my
						adaptability in the technical sphere. This breadth of expertise empowers me to creatively tackle
						the myriad challenges inherent in my projects.
					</p>
				</div>
				<div className="Experiences">
					<ExBox
						name="Menu Vaucanson"
						link="https://github.com/Menu-Vaucanson/"
						date="2021 — 2023"
						description="Menu Vaucanson is an infrastructure for distributing the cafeteria menu of Vaucanson High School. Launched in 2021 and discontinued in 2023, this service had an average of 2000 visitors per month. It consisted of a React frontend and an ExpressJS server, both divided into Desktop and Mobile versions. Users could rate the menus, and statistics for staff were provided in a dedicated web app. Security measures for rating verification were integrated into the server, and data protection was ensured through encryption protocols."
						roles={['Lead Engineer', 'Lead Developer', 'Lead Designer']}
						categories={['TypeScript', 'React', 'ExpressJS']}
					/>
					<ExBox
						name="Factorio Mod Updater"
						link="https://github.com/Wiwok/Factorio-Mod-Updater"
						date="2022 — 2024"
						description="Factorio Mod Updater is a software entirely developed in JavaScript and exclusively usable in CLI (Command Line Interface). It's more of a proof of concept than a full-fledged software, although it remains perfectly functional. This tool allows for the installation and updating of mods for the video game Factorio, bypassing the system and protections of the official Factorio API. Therefore, it's possible to use mods without owning an official game license."
						roles={['Single Engineer', 'Single Developer']}
						categories={['TypeScript', 'Reverse Engineering']}
					/>
					<ExBox
						name="The Pirate Phone"
						link="https://github.com/ThePiratePhone"
						date="2024 — Now"
						description="The Pirate Phone is by far my most comprehensive project. It's a software developed at the request of an organization to manage the recall of numerous phone numbers. It's a WebApp built in React along with a data server utilizing ExpressJS and MongoDB. Given the critical importance of data privacy and integrity, numerous security measures have been implemented. The software can be summarized as a phone number distributor, allowing multiple employees to simultaneously call multiple phone numbers without ever dialing the same number twice."
						roles={['Lead Developer', 'Lead Designer', 'Engineer']}
						categories={['TypeScript', 'React', 'MongoDB']}
					/>
				</div>
			</div>
			<div className="MainBox MainBox2">
				<div className="Experiences">
					<ExBox
						name="Student representative at Vaucanson High School"
						date="2022 — 2023"
						description="Elected to the Board of Directors, the Student Life Council, the Hygiene, Safety, and Working Conditions Committee, as well as to numerous bodies of Vaucanson High School and the Greta of Grenoble. I actively participated in the management of the establishments and in student representation in the councils."
					/>
					<ExBox
						name="Secretary of Génération Précarité"
						date="2024 — now"
						description="Secretary of an association fighting against student precarity. I invest my time in the fight against student poverty and manage numerous partnerships to help as many students as possible."
					/>
					<ExBox
						name="Elected to the Central Bodies of the University of Grenoble Alpes"
						date="2024 — Now"
						description="Elected to numerous councils that govern and decide the policies of UGA. I actively manage the university across many sectors and participate in decision-making processes."
					/>
				</div>
				<div className="WhoAmI">
					<h1>Myself</h1>
					<p>
						For numerous years, I have actively engaged in the realm of associations. I dedicate my time and
						efforts to volunteering for various organizations and committees, driven by a commitment to
						champion causes and propel personal initiatives forward. Oh. And by the way, I'm a music fan and
						I play the piano.
					</p>
				</div>
			</div>
			<div className="Footer">
				<div>
					<span>Emile Dechenaud — 2024</span>
					<span>emile.dechenaud@gmail.com</span>
				</div>
				<div>
					<a target="_blank" rel="noreferrer" href="https://github.com/Wiwok/wiwok.github.io">
						Code source
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
