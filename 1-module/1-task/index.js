
  function factorial(n) {
    let resp = 1;
    let i = 1;
    while (i<=n) {
    resp = resp * i;
    i++;
    }
    return resp
  }
  console.log (factorial (0));
  console.log (factorial (1));
  console.log (factorial (3));
  console.log (factorial (5));  

