async function getdata (){

  try {
    const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos')

    const res = await response.json();
    const data = res.data.data

    console.log(data);


    for(let i = 0; i <=8; i++){

      const card = data[i].items.snippet
      console.log(card);


      const image = document.getElementById(`img${i}`);
      const title = document.getElementById(`title${i}`);
      const name = document.getElementById(`name${i}`);


      if(image)image.src = card.thumbnails.medium.url
      if(title)title.innerText = card.title
      if(name)name.innerText = card.channelTitle

    }

  } catch (error) {
    console.log("error in  function ")

  }

}
getdata();
