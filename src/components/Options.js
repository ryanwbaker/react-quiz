function Options({ question }) {
	console.log("From Options Component:");
	console.log(question);
	return (
		<div className="options">
			{question.options.map((option) => (
				<button className="btn btn-option" key={option} onClick>
					{option}
				</button>
			))}
		</div>
	);
}

export default Options;
