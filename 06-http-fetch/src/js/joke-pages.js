import { getJoke } from './http-provider';

// References HTML
let body = document.body;
let olListJokes;
let btnRandomJoke;

const createJokesHtml = () => {
  const html = `
    <h1 class="mt-5">Jokes</h1>
    <hr /> 

    <button class="btn btn-primary mt-5 mb-5">Random Joke</button>

    <ol class="list-group">
    </ol>
  `;

  const divJokes = document.createElement('div');

  divJokes.innerHTML = html;

  body.append(divJokes);
};

// Events

const events = () => {
  olListJokes = document.querySelector('ol');
  btnRandomJoke = document.querySelector('button');

  btnRandomJoke.addEventListener('click', async (event) => {
    try {
      btnRandomJoke.disabled = true;

      drawJoke(await getJoke());

      btnRandomJoke.disabled = false;
    } catch (error) {
      console.error(error);
    }
  });
};

// {id, value}
const drawJoke = ({ id, value }) => {
  let olItem = document.createElement('li');
  olItem.innerHTML = `<b>${id}</b> - ${value}`;

  olListJokes.classList.add('list-group-item');

  olListJokes.append(olItem);
};

export const init = () => {
  createJokesHtml();
  events();
};
