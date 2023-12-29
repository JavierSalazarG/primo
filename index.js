const esPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const calcPrimo = () => {
  for (let index = 1; index <= 100; index++) {
    if (esPrimo(index)) {
      console.log(index);
    }
  }
};

calcPrimo();
module.exports = calcPrimo;
