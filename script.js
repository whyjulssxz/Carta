function irARecuerdos() {
    document.getElementById("recuerdos").scrollIntoView({
        behavior: "smooth"
    });
}

function volverInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Corazones flotando
const hearts = document.querySelector(".hearts");

function crearCorazon() {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.color = "#d95c78";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "0";

    const duracion = Math.random() * 4 + 5;

    heart.style.transition = `transform ${duracion}s linear, opacity ${duracion}s linear`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.style.transform =
            `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, duracion * 1000);
}

setInterval(crearCorazon, 700);