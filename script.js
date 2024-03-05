const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const st = document.getElementById('status');

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke

//   st.innerHTML = "saranda " + Math.random();
st.innerHTML = data.status + " jam " + Math.random()

  
}
