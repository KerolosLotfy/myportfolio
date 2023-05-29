export const typing = async (sequences, el, speed = 150) => {
  let seqIndex = 0;
  let letterIndex = 0;
  const typed = async () => {
    if (seqIndex < sequences.length) {
      if (letterIndex < sequences[seqIndex].length) {
        el.textContent += sequences[seqIndex][letterIndex];
        letterIndex++;
        setTimeout(typed, speed);
      } else {
        // Waiting for 1000 ms
        await waiting();
        spacing(el);
      }
    } else {
      typed();
      seqIndex = 0;
      letterIndex = 0;
    }
  };
  typed();
  const spacing = (el) => {
    let seq = el.textContent.split("");
    let del = setInterval(() => {
      if (seq.length !== 0) {
        seq.pop();
        el.textContent = seq.join("");
      } else {
        clearInterval(del);
        letterIndex = 0;
        seqIndex++;
        typed();
      }
    }, speed);
  };
};

const waiting = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000);
  });
};
