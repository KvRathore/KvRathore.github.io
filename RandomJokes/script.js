const jokeContainer = document.querySelector('.joke__container');
const jokeFetch = document.querySelector('.joke__fetch');

const getJoke = async () => {
  try {
    const response = await fetch('https://geek-jokes.sameerkumar.website/api');

    if (!response.ok) throw new Error('');

    const data = await response.json();
    renderJoke(data);
  } catch (e) {
    showError();
  }
};

const renderJoke = joke => {
  jokeContainer.textContent = `${joke}`;
};

const showError = () => {
  jokeContainer.textContent = 'Something went wrong.';
};

jokeFetch.addEventListener('click', () => {
  getJoke();
});

getJoke();
