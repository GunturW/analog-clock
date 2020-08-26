window.onload=()=>{

    let hour = document.querySelector(".hour")
    let min = document.querySelector(".min")
    let sec = document.querySelector(".sec")

    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        //second
        sec.style.transform = `rotate(${seconds * 6}deg)`;

        //minute
        min.style.transform = `rotate(${minutes * 6}deg)`;

        //hour
        hour.style.transform = `rotate(${(hours * 30)+(minutes / 2)}deg)`;
    }, 1000);
}