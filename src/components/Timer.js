import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
	useEffect(
		function () {
			const id = setInterval(function () {
				dispatch({ type: "tick" });
			}, 1000);

			return () => clearInterval(id);
		},
		[dispatch]
	);
	return (
		<div className="timer">
			{Math.floor(secondsRemaining / 60)}:
			{(secondsRemaining % 60).toString().padStart(2, "0")}
		</div>
	);
}

export default Timer;
