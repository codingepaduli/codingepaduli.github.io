const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  mode: 'cors',
  cache: 'no-cache'
};

function callGetJSON() {
    let source = document.querySelector('#loadImage');

    // https://i.imgur.com/X4vco9k.jpg

    fetch('https://my-json-server.typicode.com/typicode/demo/posts/1', options)
    .then( (response) => response.ok ? response.json() : false )
    .then( (post) => source.appendChild( document.createTextNode(post.id + ' ' + post.title ) ))
    .catch( (error) => console.log('Errore nella richiesta della risorsa: ' + error.message) );
}
