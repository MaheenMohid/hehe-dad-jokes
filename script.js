const jokeEL = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')


jokeBtn.addEventListener('click', generateJoke)

generateJoke()
/*using ASYNC/AWAIT*/
async function generateJoke() {

	const config = {
		headers: {
			'Accept': 'application/json'
		},
	}

	const res = await fetch('https://icanhazdadjoke.com', config)
	
	const data = await res.json()
	jokeEL.innerHTML = data.joke	


}

           /*same as above using .then */ 

/*function generateJoke() {

	const config = {
		headers: {
			'Accept': 'application/json'
		}
	}

	fetch('https://icanhazdadjoke.com', config)
	.then(res => res.json()).then(data => {
		jokeEL.innerHTML = data.joke
	})


}*/