// Geting elements
const greetings = document.getElementById('greetings');
const content = document.getElementById('content');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const lesbian = document.getElementById('lesbian');

document.getElementById('start-button').addEventListener('click', function () {
	startGame(true);
});

// Start
function startGame(first) {
	if (first) {
		// Ocult greetings First Game
		greetings.style.display = 'none';
		content.style.display = 'block';
	}

	// Game
	//    Calculate Result
	function result(pick) {
		const number = Math.floor(Math.random() * 3) + 1;
		const ret = {
			pick: pick,
			number: number,
			result: 0,
		};

		if (pick === number) {
			ret.result = 0; // Draw
		} else if ((pick === 1 && number === 2) || (pick === 2 && number === 3) || (pick === 3 && number === 1)) {
			ret.result = 2; // Wins
		} else {
			ret.result = 1; // Loss
		}

		return ret;
	}

	//    Administration of the Results
	function gameAdmin(pick) {
		const results = result(pick);
		let message, chose, computerchose;

		if (results.result === 0) {
			message = 'Draw';
		} else if (results.result === 1) {
			message = 'You WIN!';
		} else {
			message = 'You Lose :(';
		}
		switch (results.pick) {
			case 1:
				chose = 'Rock';
				break;
			case 2:
				chose = 'Paper';
				break;
			case 3:
				chose = 'Lesbian';
				break;
		}
		switch (results.number) {
			case 1:
				computerchose = 'Rock';
				break;
			case 2:
				computerchose = 'Paper';
				break;
			case 3:
				computerchose = 'Lesbian';
				break;
		}

		const resultsdiv = document.createElement('div');
		resultsdiv.innerHTML = `
    <div class="choses">
      <div>
        <p>You chose ${chose}</p>
        <img src="./img/${results.pick}.jpg">
      </div>
      <div>
        <p>The Computer Chose ${computerchose}</p>
        <img src="./img/${results.number}.jpg">
      </div>
    </div>
    <p id="result-message">${message}</p>
    <div class="button" id="restart-button">Play Again</div>
    `;
		resultsdiv.className = 'results-div';
		document.body.appendChild(resultsdiv);
		if (results.result === 1) {
			document.getElementById('result-message').style.color = 'green';
		} else if (results.result === 2) {
			document.getElementById('result-message').style.color = 'red';
		}
		content.style.display = 'none';
	}

	// Events
	rock.addEventListener('click', function () {
		gameAdmin(1);
	});

	paper.addEventListener('click', function () {
		gameAdmin(2);
	});

	lesbian.addEventListener('click', function () {
		gameAdmin(3);
	});
}
