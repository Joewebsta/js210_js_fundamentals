function debugIt() {
  const status = 'debugging'; // 2
  
  function logger() {
    console.log(status);
  }

  logger(); // 3
}

debugIt(); // 1

// debugging