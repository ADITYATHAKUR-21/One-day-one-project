const container = document.getElementById('container');
const list = document.getElementById('list');
const grid = document.getElementById('grid');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageInfo = document.getElementById('page-info')

list.addEventListener('click', () => {
  container.classList.remove('grid');
  container.classList.add("list");
})

grid.addEventListener('click', () => {
  container.classList.remove("list");
  container.classList.add('grid');
})

let currentPage = 1;
const limit = 12;
let totalPage = 1;

async function getdata(page = 1) {

  const response = await fetch(`https://api.freeapi.app/api/v1/public/books?page=${page}&limit=${limit}`);
  const res = await response.json();

  const data = res.data.data
    totalPage = res.data.totalPages;
   currentPage = res.data.page;

  container.innerHTML = '';

  data.forEach((Item) => {
    const book = Item.volumeInfo

    const card = document.createElement('div');
    card.className = 'book-card';

    card.innerHTML = `
          <img src="${book.imageLinks?.smallThumbnail || ''}" alt="${book.title}">
          <h3>Title: ${book.title || "N/A"}</h3>
          <p>Author: ${book.authors ? book.authors.join(", ") : "N/A"}</p>
          <p>Publisher: ${book.publisher || "N/A"}</p>
          <p>Published Date: ${book.publishedDate || "N/A"}</p>
    `

    container.appendChild(card);
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPage}`

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPage;


}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    getdata(currentPage - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPage) {
    getdata(currentPage + 1);
  }
});

getdata();
