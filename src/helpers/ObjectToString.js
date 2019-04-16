export const objectToString = object => {
  const valuesArray = Object.values(object);
  let output = '';

  valuesArray.forEach(value => {
    if (value === ''){
        output = output + '0';
    } else {
        output = output + value;
      }
  })
  return output;
}