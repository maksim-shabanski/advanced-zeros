module.exports = function getZerosCount(number, base) {
  var primeFactors = getPrimeFactors(base);
  var minZerosCount;

  for (var prime in primeFactors) {
    var copyNumber = number;
    var zerosCount = 0;
    var primeCount = primeFactors[prime];

    while (copyNumber >= prime) {
      copyNumber = Math.floor(copyNumber / prime);
      zerosCount += copyNumber;
    }

    zerosCount = Math.floor(zerosCount / primeCount);
    if (!minZerosCount || minZerosCount > zerosCount) {
      minZerosCount = zerosCount;
    }
  }

  return minZerosCount;
};

function getPrimeFactors(number) {
  var primeNumber = 2;
  var primeFactors = {};

  while (number !== primeNumber) {
    if (number % primeNumber === 0) {
      number = number / primeNumber;
      increment(primeFactors, primeNumber);
    } else {
      primeNumber++;
    }
  }

  increment(primeFactors, primeNumber);

  return primeFactors;
}

function increment(obj, key) {
  var count = obj[key] || 0;
  obj[key] = count + 1;
}
