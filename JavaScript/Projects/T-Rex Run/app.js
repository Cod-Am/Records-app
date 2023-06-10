document.addEventListener("DOMContentLoaded", () => {
    const dino = document.querySelector('.dino');
    let position = 0;
    let isJumping = false;
    let gravity = 0.9;
    let count = 0;
  
    function control(e) {
      if (e.keyCode === 32) {
        console.log('key pressed');
        if (!isJumping) {
          jump();
        }
      }
    }
  
    document.addEventListener('keydown', control);
  
    function jump() {
      isJumping = true;
      let timerId = setInterval(function () {
        // move up
        console.log('up');
        position += 30;
        count++;
        position *= gravity;
        dino.style.bottom = position + 'px';
  
        if (count === 15) {
          clearInterval(timerId);
          console.log('down');
          let downTimerId = setInterval(function () {
            // move down
            console.log('down');
            if (count === 0) {
              clearInterval(downTimerId);
              isJumping = false;
            }
            position -= 5;
            count--;
            position *= gravity;
            dino.style.bottom = position + 'px';
  
            if (position <= 0) {
              clearInterval(downTimerId);
              isJumping = false;
            }
          }, 20);
        }
      }, 20);
    }
  });
  