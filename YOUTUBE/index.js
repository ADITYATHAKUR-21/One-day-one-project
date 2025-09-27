// Viedo
const view = document.getElementById("title");
const image = document.getElementById("img")
const channelNmae = document.getElementById("name")

// Viedo 1
const view1 = document.getElementById("title1");
const image1 = document.getElementById("img1")
const channelNmae1 = document.getElementById("name1")

// Viedo 2
const view2 = document.getElementById("title2");
const image2 = document.getElementById("img2")
const channelNmae2 = document.getElementById("name2")

// Viedo 3
const view3 = document.getElementById("title3");
const image3 = document.getElementById("img3")
const channelNmae3 = document.getElementById("name3")

// Viedo 4
const view4 = document.getElementById("title4");
const image4 = document.getElementById("img4")
const channelNmae4 = document.getElementById("name4")

// Viedo 5
const view5 = document.getElementById("title5");
const image5 = document.getElementById("img5")
const channelNmae5 = document.getElementById("name5")

// Viedo 6
const view6 = document.getElementById("title6");
const image6 = document.getElementById("img6")
const channelNmae6 = document.getElementById("name6")

// Viedo 7
const view7 = document.getElementById("title7");
const image7 = document.getElementById("img7")
const channelNmae7 = document.getElementById("name7")

// Eight 8
const view8 = document.getElementById("title8");
const image8 = document.getElementById("img8")
const channelNmae8 = document.getElementById("name8")

async function getdata() {
  try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/youtube/videos");

    const data = await response.json();

    const card = data.data.data;

    // Viedo
    const title = card[0].items.snippet.title
    const images = card[0].items.snippet.thumbnails.medium.url
    const name = card[0].items.snippet.channelTitle
    image.src = images
    view.innerText = title
    channelNmae.innerText = name


    // Viedo 1
    const title1 = card[1].items.snippet.title
    const images1 = card[1].items.snippet.thumbnails.medium.url
    const name1 = card[1].items.snippet.channelTitle
    image1.src = images1
    view1.innerText = title1
    channelNmae1.innerText = name1

    // Viedo 2
    const title2 = card[2].items.snippet.title
    const images2 = card[2].items.snippet.thumbnails.medium.url
    const name2 = card[2].items.snippet.channelTitle
    image2.src = images2
    view2.innerText = title2
    channelNmae2.innerText = name2

    // Viedo 3
    const title3 = card[3].items.snippet.title
    const images3 = card[3].items.snippet.thumbnails.medium.url
    const name3 = card[3].items.snippet.channelTitle
    image3.src = images3
    view3.innerText = title3
    channelNmae3.innerText = name3

    // Viedo 4
    const title4 = card[4].items.snippet.title
    const images4 = card[4].items.snippet.thumbnails.medium.url
    const name4 = card[4].items.snippet.channelTitle
    image4.src = images4
    view4.innerText = title4
    channelNmae4.innerText = name4

    // Viedo 5
    const title5 = card[5].items.snippet.title
    const images5 = card[5].items.snippet.thumbnails.medium.url
    const name5 = card[5].items.snippet.channelTitle
    image5.src = images5
    view5.innerText = title5
    channelNmae5.innerText = name5

    // Viedo 6
    const title6 = card[6].items.snippet.title
    const images6 = card[6].items.snippet.thumbnails.medium.url
    const name6 = card[6].items.snippet.channelTitle
    image6.src = images6
    view6.innerText = title6
    channelNmae6.innerText = name6

    // Viedo 7
    const title7 = card[7].items.snippet.title
    const images7 = card[7].items.snippet.thumbnails.medium.url
    const name7 = card[7].items.snippet.channelTitle
    image7.src = images7
    view7.innerText = title7
    channelNmae7.innerText = name7
    
    // Viedo 8
    const title8 = card[8].items.snippet.title
    const images8 = card[8].items.snippet.thumbnails.medium.url
    const name8 = card[8].items.snippet.channelTitle
    image8.src = images8
    view8.innerText = title8
    channelNmae8.innerText = name8

  } catch (error) {

  }


}
getdata();
