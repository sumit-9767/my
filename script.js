/*
   Happy Birthday, my love 💖
   I built this universe just for you.
   Every line of code = a heartbeat.
   Every animation = a memory.
   Every pixel = a promise.

   I love you more than loops, more than functions, more than even AI can express.

   Forever yours,
   — [Your Name]
*/

document.addEventListener('DOMContentLoaded', () => {

    // Confetti on load
    setTimeout(() => {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ff6b9d', '#ffa8bd', '#ffafbd', '#ffc3a0', '#ff9a9e']
        });
    }, 500);

    // Personalize her name
    const herName = "Love"; // ✏️ EDIT THIS TO HER NAME!
    document.getElementById("herName").textContent = herName;

    // Generate stars
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDelay = Math.random() * 4 + "s";
        starsContainer.appendChild(star);
    }

    // Toggle love letter
    const preview = document.getElementById("letter-preview");
    const full = document.getElementById("letter-full");

    preview.addEventListener("click", () => {
        preview.classList.add("hidden");
        full.classList.remove("hidden");
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#ff6b9d', '#ffa8bd']
        });
    });

    // Gift box
    const gift = document.getElementById("gift");
    const giftContent = document.getElementById("gift-content");

    gift.addEventListener("click", () => {
        gift.classList.add("hidden");
        giftContent.classList.remove("hidden");
        confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.5 },
            colors: ['#ff6b9d', '#ffa8bd', '#ffafbd', '#ffc3a0']
        });
    });

    // Secret room
    const unlockBtn = document.getElementById("unlock-btn");
    const secretCode = document.getElementById("secret-code");
    const secretContent = document.getElementById("secret-content");

    unlockBtn.addEventListener("click", () => {
        if (secretCode.value.toLowerCase().trim() === "141101") { // ✏️ Change to your lyric!
            secretContent.classList.remove("hidden");
            confetti({
                particleCount: 100,
                angle: 60,
                spread: 55,
                colors: ['#ff6b9d', '#ffa8bd']
            });
            confetti({
                particleCount: 100,
                angle: 120,
                spread: 55,
                colors: ['#ffafbd', '#ffc3a0']
            });
        } else {
            alert("Try again, my bubdi... hint: Mobile S24 ❤️");
        }
    });

    // Music player
    const playBtn = document.getElementById("playButton");
    const audio = document.getElementById("loveSong");

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "Pause Our Song";
        } else {
            audio.pause();
            playBtn.textContent = "Play Our Song";
        }
    });

    // Floating hearts cursor trail
    document.addEventListener('mousemove', function(e) {
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 10 + 15 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '0.8';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.transition = 'all 1s ease-out';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '0';
            heart.style.transform = 'translate(-50%, -50%) scale(2)';
        }, 100);
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 1000);
    });

    // Mini Game: Catch the Kisses
    let score = 0;
    let timeLeft = 30;
    let gameInterval;
    let kissInterval;

    document.getElementById("start-game").addEventListener("click", startGame);

    function startGame() {
        score = 0;
        timeLeft = 30;
        document.getElementById("score").innerText = "Score: 0";
        document.getElementById("timer").innerText = "Time: 30";

        clearInterval(kissInterval);
        clearInterval(gameInterval);

        kissInterval = setInterval(createKiss, 800);

        gameInterval = setInterval(() => {
            timeLeft--;
            document.getElementById("timer").innerText = `Time: ${timeLeft}`;
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
    }

    function createKiss() {
        const kiss = document.createElement("div");
        kiss.classList.add("kiss");
        kiss.innerText = "💋";
        kiss.style.left = Math.random() * 90 + "vw";
        kiss.style.fontSize = Math.random() * 20 + 25 + "px";
        kiss.addEventListener("click", () => {
            score++;
            document.getElementById("score").innerText = `Score: ${score}`;
            kiss.remove();
            confetti({
                particleCount: 5,
                origin: { x: parseFloat(kiss.style.left) / 100, y: 0.3 },
                spread: 30,
                colors: ['#ff6b9d']
            });
        });
        document.getElementById("game-area").appendChild(kiss);

        setTimeout(() => {
            if (kiss.parentNode === document.getElementById("game-area")) {
                kiss.remove();
            }
        }, 5000);
    }

    function endGame() {
        clearInterval(kissInterval);
        clearInterval(gameInterval);
        alert(`Game Over! You caught ${score} kisses! 🎉\nYou’re the sweetest player ever.`);
    }

    // Birthday countdown
    function updateCountdown() {
        const now = new Date();
        // EDIT THIS DATE to her next birthday (Month is 0-indexed: 0=Jan, 5=Jun)
        let birthday = new Date(now.getFullYear(), 10, 1); // June 22
        if (now > birthday) birthday.setFullYear(now.getFullYear() + 1);

        const diff = birthday - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("countdown").innerText =
            `🎂 Time until your next birthday: ${days}d ${hours}h ${mins}m`;
    }

    setInterval(updateCountdown, 60000);
    updateCountdown();

    /* -------------------------------------------------
   EVERYTHING BELOW IS INSIDE:
   document.addEventListener('DOMContentLoaded', () => { ... });
   ------------------------------------------------- */

    // -----------------------------------------------------------------
    // 1️⃣ QR CODE – optional dynamic link handling + copy‑to‑clipboard
    // -----------------------------------------------------------------
    const qrImg   = document.getElementById('qrImg');
    const copyBtn = document.getElementById('copyQrLink');

    // 👉 Change this URL to whatever hidden page / Google‑Drive folder you want.
    const qrLink = "https://drive.google.com/drive/folders/your‑folder‑id"; // <-- EDIT

    // If you want the QR image to be generated on‑the‑fly, you can use an API like:
    // const api = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrLink)}`;
    // qrImg.src = api;
    // For now we assume you already placed a static `qr.png` in the root.

    // Copy‑to‑clipboard helper
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(qrLink);
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = "Copy link", 1500);
        } catch (e) {
            alert("Unable to copy. Please copy manually.");
        }
    });

    // -----------------------------------------------------------------
    // 2️⃣ LOVE‑POEM GENERATOR
    // -----------------------------------------------------------------
    const poemBtn   = document.getElementById('genPoemBtn');
    const poemBox   = document.getElementById('poemResult');

    // A few arrays of poetic fragments – you can expand them as much as you like.
    const line1 = [
        "Your eyes are galaxies,",
        "When you smile, sunrise blooms,",
        "Your laughter is my favorite song,",
        "In your arms, I find home,"
    ];
    const line2 = [
        "drawing constellations on my heart.",
        "painting the world in gold.",
        "echoing through my soul.",
        "where every worry fades."
    ];
    const line3 = [
        "Every breath I take whispers your name,",
        "I count the seconds until I see you again,",
        "Your love is the rhythm that steadies my pulse,",
        "Together we write verses no ink can capture,"
    ];
    const line4 = [
        "and forever will be our endless summer.",
        "and I’m forever grateful for this love.",
        "and the universe smiles with us.",
        "and our story glows brighter each day."
    ];

    function randomFrom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    poemBtn.addEventListener('click', () => {
        const poem = `
            ${randomFrom(line1)} ${randomFrom(line2)}<br>
            ${randomFrom(line3)}<br>
            ${randomFrom(line4)}
        `.trim();

        poemBox.innerHTML = poem;
        poemBox.classList.remove('hidden');
    });

  /*
   LOVE METER – VERTICAL SCROLL FILL (fixed on the right)
   -------------------------------------------------
*/
const meterFill = document.getElementById('loveMeterFill');

// Total scrollable height (page height minus viewport height)
function getScrollableHeight() {
    return document.body.scrollHeight - window.innerHeight;
}

// Update the fill height based on scroll position
function updateLoveMeter() {
    const scrollTop = window.scrollY;
    const maxScroll = getScrollableHeight();
    const percent = Math.min(100, (scrollTop / maxScroll) * 100);
    meterFill.style.height = percent + '%';
}

// Run on load and on every scroll
window.addEventListener('scroll', updateLoveMeter);
window.addEventListener('load', updateLoveMeter);

    // -----------------------------------------------------------------
    // 4️⃣ THEME TOGGLE (sun / moon)
    // -----------------------------------------------------------------
    const themeBtn = document.getElementById('themeToggle');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    }
    themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(cur === 'dark' ? 'light' : 'dark');
    });
    // Load saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // -----------------------------------------------------------------
    // 5️⃣ Existing features (letter, gift, secret room, game, music, etc.)
    // -----------------------------------------------------------------
    // ... (the rest of your original script stays exactly as it was)
    // No changes needed here – just keep the original code after this point.

});