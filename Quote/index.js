const container = document.getElementById("container");
const line = document.getElementById("line")
const quoteBtn = document.getElementById("Quote");
const copyBtn = document.getElementById("copy");
const exportBtn = document.getElementById("export")
const twitterBtn = document.getElementById("twitter")



async function getData() {
  try {
    const rseponse = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
    const res = await rseponse.json();
    const data = await res.data

    line.innerText = data.content

  } catch (error) {

  }

}

// copy button
copyBtn.addEventListener('click', () => {
  const text = line.innerText
  navigator.clipboard.writeText(text).then(() => {
    alert('Text copy ')
  })
})

// export button
exportBtn.addEventListener('click', () => {
  const text = line.innerText
  const blob = new Blob([text], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Quote.txt';
  link.click();
  URL.revokeObjectURL(link.href);

})

twitterBtn.addEventListener('click', () => {
  const text = encodeURIComponent(line.innerText);
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(shareUrl, '_blank', 'width=500,height=350');
})

quoteBtn.addEventListener('click', getData);



getData();
