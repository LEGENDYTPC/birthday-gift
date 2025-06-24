function showGift() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  document.getElementById("nameInputContainer").style.display = "none";
  document.getElementById("card").style.display = "flex";

  document.getElementById("displayName").innerText = name;
  document.getElementById("displayName2").innerText = name;

  const heartsContainer = document.getElementById("heartsContainer");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    heartsContainer.appendChild(heart);
  }
}

// Secret button functionality
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && (e.key === 'd' || e.key === 'D')) {
    document.getElementById('secretButton').style.display = 'block';
  }
});

let pressTimer;
const trigger = document.getElementById('secretTrigger');

trigger.addEventListener('touchstart', function () {
  pressTimer = setTimeout(() => {
    document.getElementById('secretButton').style.display = 'block';
  }, 1000);
});

trigger.addEventListener('touchend', function () {
  clearTimeout(pressTimer);
});

document.getElementById('secretButton').addEventListener('click', function () {
  alert("Bhabhi ji ka dil DreamSayz ke liye dhadakta hai 💖");
});
