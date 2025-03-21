const Quote = [
    "Life's a party—bring your own confetti.",
     "The secret to a good life? Laugh at the spills and dance through the thrills.",
     "Live like the Wi-Fi is free and the snacks are endless.",
     "Life is short—eat the cake, take the nap, chase the fun.",
     "Happiness is a playlist of your favorite songs and no skip button.",
     "Life's too wild to fold the fitted sheet—embrace the chaos.",
     "Find joy in the mess; perfection's just a boring rumor.",
     "Dance like nobody's judging, because they're all too busy tripping.",
     "Life is a game—play it with glitter and a goofy grin.",
     "The best days are the ones you didn't plan but can't forget.",
     "Fun is the spice of life; sprinkle it everywhere.",
     "Live loud, laugh often, and let the good times roll.",
     "Life's a rollercoaster—scream if you want, but enjoy the ride.",
     "Happiness is a sunny day and a playlist that slaps.",
     "Don't take life too seriously; it's just a cosmic prank.",
     "Chase dreams, catch laughs, and dodge the drama.",
     "Life' a canvas—paint it with silly and bold strokes.",
     "The trick to living well? More giggles, less grumbles.",
     "Fun isn't a destination; it's the whole dang road trip.",
     "Life's too short to match socks—wear the wild ones.",
     "Laugh at the rain; it's just the sky throwing a tantrum.",
     "Every day's a chance to make a memory or a meme.",
     "Live like a kid: chase bubbles, not deadlines.",
     "The best therapy is a belly laugh and a bad dance move.",
     "Life's a puzzle—have fun finding the pieces.",
     "Joy' in the little things: coffee, sunshine, and goofy friends.",
     "Life is a circus; be the clown, not the ringmaster.",
     "Happiness is contagious—spread it like glitter.",
     "Live like the weekend's eternal and Monday's a myth.",
     "Fun's the fuel; keep your tank full.",
     "Life's a movie—make it a comedy, not a tragedy.",
     "Sing off-key, laugh on purpose, live with gusto.",
     "The good life? It's 90% vibes and 10% snacks.",
     "Life's a treasure hunt—find the fun in every corner.",
     "Be the spark that turns a dull day into a firework show.",
     "Live like every sunrise is an invite to play.",
     "Happiness is a messy bun and a silly pun.",
     "Life's a buffet—pile your plate with the good stuff.",
     "Laugh so hard the neighbors wonder what's up.",
     "Fun doesn't knock; you've got to fling the door open.",
     "Life's a mixtape—crank up the funky tracks.",
     "The best moments are the ones that make no sense.",
     "Live like a puppy: wag more, worry less.",
     "Joy's the glitter that sticks even when life shakes you.",
     "Life's too fun to count calories or grudges.",
     "Be the sunshine in someone's cloudy day.",
     "Fun's the shortcut to a life well-lived.",
     "Life's a blast—light the fuse and enjoy the boom."
]

const quotegenerat = document.getElementById("quotegenerat")
const quotedisplay = document.getElementById("quotedisplay")

function GenrateQuote(params) {
    const random = Math.floor(Math.random() * Quote.length);
    const quote = Quote[random]
    quotedisplay.innerText = quote
}


quotegenerat.addEventListener("click", GenrateQuote)