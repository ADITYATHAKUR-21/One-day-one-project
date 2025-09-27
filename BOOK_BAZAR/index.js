const bookOneThumbnail = document.getElementById('thumbnailOne');
const bookOneTittle = document.getElementById('tittleOne');
const bookOneAuthor = document.getElementById('authorOne');
const bookOnePublisher = document.getElementById('piublisherOne');
const bookOnePublishedDate = document.getElementById('publishedDateOne');

const bookTwoThumbnail = document.getElementById('thumbnailTwo');
const bookTwoTittle = document.getElementById('tittleTwo');
const bookTwoAuthor = document.getElementById('authorTwo');
const bookTwoPublisher = document.getElementById('piublisherTwo');
const bookTwoPublishedDate = document.getElementById('publishedDateTwo');

const bookThreeThumbnail = document.getElementById('thumbnailThree');
const bookThreeTittle = document.getElementById('tittleThree');
const bookThreeAuthor = document.getElementById('authorThree');
const bookThreePublisher = document.getElementById('piublisherThree');
const bookThreePublishedDate = document.getElementById('publishedDateThree');

const bookFourThumbnail = document.getElementById('thumbnailFour');
const bookFourTittle = document.getElementById('tittleFour');
const bookFourAuthor = document.getElementById('authorFour');
const bookFourPublisher = document.getElementById('piublisherFour');
const bookFourPublishedDate = document.getElementById('publishedDateFour');

const bookFiveThumbnail = document.getElementById('thumbnailFive');
const bookFiveTittle = document.getElementById('tittleFive');
const bookFiveAuthor = document.getElementById('authorFive');
const bookFivePublisher = document.getElementById('piublisherFive');
const bookFivePublishedDate = document.getElementById('publishedDateFive');

const bookSixThumbnail = document.getElementById('thumbnailSix');
const bookSixTittle = document.getElementById('tittleSix');
const bookSixAuthor = document.getElementById('authorSix');
const bookSixPublisher = document.getElementById('piublisherSix');
const bookSixPublishedDate = document.getElementById('publishedDateSix');

const bookSevenThumbnail = document.getElementById('thumbnailSeven');
const bookSevenTittle = document.getElementById('tittleSeven');
const bookSevenAuthor = document.getElementById('authorSeven');
const bookSevenPublisher = document.getElementById('piublisherSeven');
const bookSevenPublishedDate = document.getElementById('publishedDateSeven');

const bookEightThumbnail = document.getElementById('thumbnailEight');
const bookEightTittle = document.getElementById('tittleEight');
const bookEightAuthor = document.getElementById('authorEight');
const bookEightPublisher = document.getElementById('piublisherEight');
const bookEightPublishedDate = document.getElementById('publishedDateEight');

const bookNineThumbnail = document.getElementById('thumbnailNine');
const bookNineTittle = document.getElementById('tittleNine');
const booKNineAuthor = document.getElementById('authorNine');
const bookNinePublisher = document.getElementById('piublisherNine');
const bookNinePublishedDate = document.getElementById('publishedDateNine');

const bookTenThumbnail = document.getElementById('thumbnailTen');
const bookTenTittle = document.getElementById('tittleTen');
const booKTenAuthor = document.getElementById('authorTen');
const bookTenPublisher = document.getElementById('piublisherTen');
const bookTenPublishedDate = document.getElementById('publishedDateTen');



async function getData() {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/books")
    const res = await response.json();
    const data = res.data.data;

    console.log(data);

    bookOneThumbnail.src = data[0].volumeInfo.imageLinks.smallThumbnail
    bookOneTittle.innerText = `Title : ${data[0].volumeInfo.title}`
    bookOneAuthor.innerText = `Author : ${data[0].volumeInfo.authors}`
    bookOnePublisher.innerText = `Publisher : ${data[0].volumeInfo.publisher}`
    bookOnePublishedDate.innerText = `Date : ${data[0].volumeInfo.publishedDate}`


    bookTwoThumbnail.src = data[1].volumeInfo.imageLinks.smallThumbnail
    bookTwoTittle.innerText = `Title : ${data[1].volumeInfo.title}`
    bookTwoAuthor.innerText = `Author : ${data[1].volumeInfo.authors}`
    bookTwoPublisher.innerText = `Publisher : ${data[1].volumeInfo.publisher}`
    bookTwoPublishedDate.innerText = `Date : ${data[1].volumeInfo.publishedDate}`


    bookThreeThumbnail.src = data[2].volumeInfo.imageLinks.smallThumbnail
    bookThreeTittle.innerText = `Title : ${data[2].volumeInfo.title}`
    bookThreeAuthor.innerText = `Author : ${data[2].volumeInfo.authors}`
    bookThreePublisher.innerText = `Publisher : ${data[2].volumeInfo.publisher}`
    bookThreePublishedDate.innerText = `Date : ${data[2].volumeInfo.publishedDate}`


    bookFourThumbnail.src = data[3].volumeInfo.imageLinks.smallThumbnail
    bookFourTittle.innerText = `Title : ${data[3].volumeInfo.title}`
    bookFourAuthor.innerText = `Author : ${data[3].volumeInfo.authors}`
    bookFourPublisher.innerText = `Publisher : ${data[3].volumeInfo.publisher}`
    bookFourPublishedDate.innerText = `Date : ${data[3].volumeInfo.publishedDate}`


    bookFiveThumbnail.src = data[4].volumeInfo.imageLinks.smallThumbnail
    bookFiveTittle.innerText = `Title : ${data[4].volumeInfo.title}`
    bookFiveAuthor.innerText = `Author : ${data[4].volumeInfo.authors}`
    bookFivePublisher.innerText = `Publisher : ${data[4].volumeInfo.publisher}`
    bookFivePublishedDate.innerText = `Date : ${data[4].volumeInfo.publishedDate}`


    bookSixThumbnail.src = data[5].volumeInfo.imageLinks.smallThumbnail
    bookSixTittle.innerText = `Title : ${data[5].volumeInfo.title}`
    bookSixAuthor.innerText = `Author : ${data[5].volumeInfo.authors}`
    bookSixPublisher.innerText = `Publisher : ${data[5].volumeInfo.publisher}`
    bookSixPublishedDate.innerText = `Date : ${data[5].volumeInfo.publishedDate}`

    bookSevenThumbnail.src = data[6].volumeInfo.imageLinks.smallThumbnail
    bookSevenTittle.innerText = `Title : ${data[6].volumeInfo.title}`
    bookSevenAuthor.innerText = `Author : ${data[6].volumeInfo.authors}`
    bookSevenPublisher.innerText = `Publisher : ${data[6].volumeInfo.publisher}`
    bookSevenPublishedDate.innerText = `Date : ${data[6].volumeInfo.publishedDate}`

    bookEightThumbnail.src = data[7].volumeInfo.imageLinks.smallThumbnail
    bookEightTittle.innerText = `Title : ${data[7].volumeInfo.title}`
    bookEightAuthor.innerText = `Author : ${data[7].volumeInfo.authors}`
    bookEightPublisher.innerText = `Publisher : ${data[7].volumeInfo.publisher}`
    bookEightPublishedDate.innerText = `Date : ${data[7].volumeInfo.publishedDate}`

    bookNineThumbnail.src = data[8].volumeInfo.imageLinks.smallThumbnail
    bookNineTittle.innerText = `Title : ${data[8].volumeInfo.title}`
    booKNineAuthor.innerText = `Author : ${data[8].volumeInfo.authors}`
    bookNinePublisher.innerText = `Publisher : ${data[8].volumeInfo.publisher}`
    bookNinePublishedDate.innerText = `Date : ${data[8].volumeInfo.publishedDate}`

    bookTenThumbnail.src = data[9].volumeInfo.imageLinks.smallThumbnail
    bookTenTittle.innerText = `Title : ${data[9].volumeInfo.title}`
    booKTenAuthor.innerText = `Author : ${data[9].volumeInfo.authors}`
    bookTenPublisher.innerText = `Publisher : ${data[9].volumeInfo.publisher}`
    bookTenPublishedDate.innerText = `Date : ${data[9].volumeInfo.publishedDate}`



  } catch (error) {

  }


}
getData();
