function getMovingSum(arr) {
    return arr.map((el, i, array) => {
      if (i === 0) return el;
      return el + array[i - 1];
    });
  }

  console.log(getMovingSum([1,2,3,4]));