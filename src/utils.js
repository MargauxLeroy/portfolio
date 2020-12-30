export const notify = (message, timeMs) => {
    const background = document.createElement("div");
    const msg = document.createElement("p");

    msg.innerText = message;

    document.body.appendChild(background).appendChild(msg);
    
    background.style.position = "absolute";
    background.style.height = "100%";
    background.style.width = "100%";
    background.style.top = 0;
    background.style.zIndex = 999;
    background.style.display = "flex";
    background.style.justifyContent = "center";
    background.style.alignItems = "center";
    background.style.backgroundColor = "rgba(84, 91, 101, 0.6)";

    msg.style.left = 'calc(50% - 240px)';

    msg.style.fontFamily = "IBM Plex Mono";
    msg.style.fontSize = "12px";
    msg.style.color = "#8EB4E0";
    msg.style.textTransform = "uppercase";
    msg.style.backgroundColor = "#5D646E";
    msg.style.padding = "25px";
    msg.style.textAlign = "center";
    msg.style.borderRadius = "5px";
    msg.style.fontWeight = "500";


    setTimeout(() => background.remove(), timeMs || 1300);
}
