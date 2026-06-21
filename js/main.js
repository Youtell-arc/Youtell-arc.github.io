const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    const time =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");

    if (clock) {
    clock.textContent = time;
    }
}

setInterval(updateClock, 1000);
updateClock();

const messages = [
    "完成度より継続性。",
    "まず公開する。改善は後から。",
    "小さな実験の積み重ねが研究になる。",
    "面白そうなら試してみる。",
    "学習記録は未来の自分への資料である。"
];

const dailyMessage =
    document.getElementById("daily-message");

if (dailyMessage) {

    const randomIndex =
        Math.floor(Math.random() * messages.length);

    dailyMessage.textContent =
        messages[randomIndex];
}

const fadeElements =
    document.querySelectorAll(".fade-in");

fadeElements.forEach((element, index) => {

    setTimeout(() => {
        element.classList.add("show");
    }, 150 * index);

});
