let mouseMoveActivated = false;
const left = document.getElementById("left-side");
const handleMove = e => {
  const cursorX = e.clientX || e.touches[0].clientX;
  left.style.width = `${cursorX / window.innerWidth * 100}%`;
};

left.addEventListener("animationend", () => {
  setTimeout(() => {
    document.onmousemove = e => {
      const cursorX = e.clientX;
      if (!mouseMoveActivated && cursorX >= (window.innerWidth * 0.66) - 50 && cursorX <= (window.innerWidth * 0.66) + 50) {
        mouseMoveActivated = true;
        handleMove(e);
      } else if (mouseMoveActivated) {
        handleMove(e);
      }
    };
    document.ontouchmove = e => handleMove(e);
  }, 100);
});
const reduce = document.getElementById('reduce');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            reduce.classList.add('scaling-out');
        } else {
            reduce.classList.remove('scaling-out');
        }
    });
});

observer.observe(reduce);

const choose = document.getElementById('choose');
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            choose.classList.add('scaling-out');
        } else {
            choose.classList.remove('scaling-out');
        }
    });
});

observer1.observe(choose);

const refuse = document.getElementById('refuse');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            refuse.classList.add('scaling-out');
        } else {
            refuse.classList.remove('scaling-out');
        }
    });
});

observer2.observe(refuse);

