function FinishScreen({ points, maxPossiblePoints, highscore }) {
	const pointsPerc = (points / maxPossiblePoints) * 100;

	let emoji;
	if (pointsPerc === 100) emoji = "🥇";
	if (pointsPerc >= 80 && pointsPerc < 100) emoji = "🥳";
	if (pointsPerc >= 50 && pointsPerc < 80) emoji = "😯";
	if (pointsPerc >= 0 && pointsPerc < 50) emoji = "🤔";
	if (pointsPerc === 0) emoji = "🤦‍♂️";

	return (
		<>
			<p className="result">
				{emoji} You scored <strong>{points}</strong> out of{" "}
				{maxPossiblePoints} ({pointsPerc.toFixed(1)}%).
			</p>
			<p className="highscore">(Highest Score: {highscore} Points)</p>
		</>
	);
}

export default FinishScreen;
