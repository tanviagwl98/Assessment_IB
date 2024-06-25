function strFunc(strA: string): number {
  let delimiter: string = ',';
  let num: string = strA;
  
  if (strA.startsWith('//')) {
    const delimiterEndInd: number = strA.indexOf('\n');
    delimiter = strA.substring(2, delimiterEndInd);
    num = strA.substring(delimiterEndInd + 1);
  }  
  let x: string[] = num.replace(/\n/g, delimiter).split(delimiter);
  let sum: number = 0;
  
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  
  return sum;
}

// Test cases
console.log(strFunc('1,2,3')); 
console.log(strFunc('1\n2,3')); 
console.log(strFunc('//;\n1;2;3'));
