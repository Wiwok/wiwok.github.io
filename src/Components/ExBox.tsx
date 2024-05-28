function ExBox({
	name,
	date,
	link,
	roles,
	description,
	categories
}: {
	name: string;
	date: string;
	link?: string;
	roles?: Array<string>;
	description: string;
	categories?: Array<string>;
}) {
	if (link) {
		return (
			<a target="_blank" rel="noreferrer" href={link} className="ExBox">
				<pre>{date}</pre>
				<div>
					<div>
						<h3>{name}</h3>
						{roles?.map(el => (
							<h5>{el}</h5>
						))}
					</div>
					<section>{description}</section>
					<article>
						{categories?.map(el => (
							<div>{el}</div>
						))}
					</article>
				</div>
			</a>
		);
	} else {
		return (
			<div className="ExBox">
				<pre>{date}</pre>
				<div>
					<div>
						<h3>{name}</h3>
						{roles?.map(el => (
							<h5>{el}</h5>
						))}
					</div>
					<section>{description}</section>
					<article>
						{categories?.map(el => (
							<div>{el}</div>
						))}
					</article>
				</div>
			</div>
		);
	}
}

export default ExBox;
