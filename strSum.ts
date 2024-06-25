function strFunc(strA: string): number {
  let delimiter: string = ',';
  let num: string = strA;

  // Check if delimiter exists and replace that to find numbers as a string in provided string.
  
  if (strA.startsWith('//')) {
    const delimiterEndInd: number = strA.indexOf('\n');
    delimiter = strA.substring(2, delimiterEndInd);
    num = strA.substring(delimiterEndInd + 1);
  }  

  // Replacing \n in case it is present
  let x: string[] = num.replace(/\n/g, delimiter).split(delimiter);
  let sum: number = 0;
  let negativeNum : number []= [] 
  for (let i = 0; i < x.length; i++) {
    
  // Condition to check if negative number exists 
    if(Number(x[i]) < 0){
  	negativeNum.push(Number(x[i]))
  }
    sum += Number(x[i]);
  }
  
  // Throw error if negative numbers are there.
  if (negativeNum.length>0){
  	throw new Error(`Negative numbers not allowed: ${negativeNum.join			(', ')}`);
  }
  
  return sum;
}

// Test cases
console.log(strFunc('1\n2,3')); 
console.log(strFunc('//;\n1;-2;-3'));
console.log(strFunc('//;\n1;2'));
console.log(strFunc('//;\n1;2;3'));
