document.getElementById("envelope").addEventListener("click", () => {
  const envelope = document.querySelector(".envelope-wrapper");
  const letter = document.getElementById("letter");
  const extraContent = document.getElementById("extraContent");

  envelope.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  envelope.style.transform = "scale(0.95) translateY(-20px)";
  envelope.style.opacity = "0";

  setTimeout(() => {
    envelope.style.display = "none";
    letter.style.display = "block";
    extraContent.style.display = "block";

    document
      .getElementById("bg-music")
      .play()
      .catch(() => {
        console.log("Autoplay blocked.");
      });

    const text = `Dear Anin,
    
    Hi selamat tanggal 12 yang pertama cieee! Im sorry because our first monthvesarry(?) is happened after something messy. 
Maaf ya kemarin bikin kamu sedih, im sorry for being a bad and oblivious boyfriend. I didnt mean any of it.
Makasih ya udah mau ngertiin aku walaupun kamu pasti kesel sama tinkahku yang bikin muak ini.
Makasih udah mau cerita sama aku, mau belajar terbuka sama aku, and thank you for understanding my anger.
Maaf kalo aku kemarin marah marah, maaf kalo 1 bulan ini banyak ngecewain kamuu.
Maaf kalo aku masih ga sesuai harapan kamu, SO SO ABSOLUTELY SORRY if i failed in showing my love,  
So many things i want to apologize for, but above all thank you for still staying.
Thank you for wanting to grow together. Makasih yaa udah jadi pacarku yang paling cantik paling sabar paling baik sedunia kiw kiw, i love you more than what i can show ❤️
Im hoping to see more of you in the future too, kalo ada apa apa kasih tau aku ya?? Im here for you.
    
    Let's learn more together, let's cry more together, let's laugh more together.
    Let's grow more together.

    Terima kasih anin keren untuk 1 bulannya 🥝.

`;

    const typewriterElement = document.getElementById("typewriter");
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
      } else {
        animateLoveMeter();
      }
    }

    typeWriter();
  }, 600);
});

function animateLoveMeter() {
  const loveFill = document.getElementById("loveFill");
  const lovePercent = document.getElementById("lovePercent");
  let percent = 0;

  const interval = setInterval(() => {
    if (percent <= 100) {
      loveFill.style.width = percent + "%";
      lovePercent.textContent = percent + "%";
      percent++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

// Mute toggle
const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

muteBtn.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    muteBtn.textContent = "🔈";
  } else {
    music.muted = true;
    muteBtn.textContent = "🔇";
  }
});
