const container = document.getElementById('container')
const list = document.getElementById('list');
const grid = document.getElementById('grid');

list.addEventListener('click', () => {
  container.classList.remove('grid');
  container.classList.add('list');
},

grid.addEventListener('click', () => {
  container.classList.remove('list');
  container.classList.add('grid');

})

)

async function getData() {

  const response = await fetch('https://api.freeapi.app/api/v1/public/books');
  const res = await response.json();

  const data = res.data.data;


  for (i = 0; i <= 10; i++) {

    const book = data[i].volumeInfo;

    const Thumbnail = document.getElementById(`thumbnail${i}`);
    const Title = document.getElementById(`title${i}`);
    const Author = document.getElementById(`author${i}`);
    const Publisher = document.getElementById(`publisher${i}`);
    const PublishedDate = document.getElementById(`publishedDate${i}`);

    if(Thumbnail) Thumbnail.src = book.imageLinks.smallThumbnail || ""
    if(Title) Title.innerText = `Title : ${book.title}`
    if(Author) Author.innerText = `Author : ${book.authors}`
    if(Publisher) Publisher.innerText = `Publisher : ${book.publisher}`
    if(PublishedDate) PublishedDate.innerText = `PublishedDate : ${book.publishedDate}`

  }


}

getData();
