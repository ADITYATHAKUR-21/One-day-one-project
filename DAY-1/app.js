function Clock() {
    const timeElement = document.getElementById("Time");
    const  DateElement= document.getElementById("Date");

    const now = new  Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const ampn = now.getHours() >= 12 ? 'PM' : 'AM'

        const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = now.toLocaleDateString(undefined, Option)

    timeElement.textContent = `${hours}:${minutes}:${second}:${ampn}`
    DateElement.textContent = date
}

setInterval((Clock), 1000);

Clock();