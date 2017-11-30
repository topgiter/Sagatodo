import 'whatwg-fetch';
import { SHOW_TYPE_ALL, SHOW_TYPE_COMPLETED } from '../common/Constants';

// async function
async function fetchAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return data;
}


export default function () {
  return fetchAsync()
    .then((data) => {
      const items = data.slice(0, 15).map(todo => ({ // Use first 15 todos only for test
        text: todo.title,
        type: todo.completed ? SHOW_TYPE_COMPLETED : SHOW_TYPE_ALL,
      }));

      return items;
    })
    .catch(() => {
      // todo
    });
}
