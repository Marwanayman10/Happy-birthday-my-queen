// الاختيارات الغلط
function wrongAnswer() {
document.getElementById("feedback").textContent =
"هى صح بس فى إجابة أحلى ♥️😉";
}

// الانتقال لرسالة عيد الميلاد
function showLetter() {
document.getElementById("quiz").classList.remove("active");
document.getElementById("letter").classList.add("active");

window.scrollTo(0, 0);

}

// الانتقال للفيديو
function showVideo() {
document.getElementById("letter").classList.remove("active");
document.getElementById("videoScreen").classList.add("active");

window.scrollTo(0, 0);

const video = document.getElementById("birthdayVideo");

video.play().catch(() => {
    // لو التشغيل التلقائي اترفض، تقدر تضغط Play بنفسك.
});

}

// إنشاء القلوب المتحركة
const heartsContainer = document.getElementById("hearts");

const heartSymbols = ["❤️", "💕", "💗", "💖", "💞"];

for (let i = 0; i < 25; i++) {
const heart = document.createElement("span");

heart.classList.add("heart");

heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

heart.style.left = Math.random() * 100 + "%";
heart.style.animationDuration = (7 + Math.random() * 8) + "s";
heart.style.animationDelay = Math.random() * 10 + "s";
heart.style.fontSize = (15 + Math.random() * 20) + "px";

heartsContainer.appendChild(heart);

}