function printing() {
  console.log(1); // 1
  setTimeout(function () {
    console.log(2); // Loggea 2 luego de 1s
  }, 1000);

  setTimeout(function () {
    console.log(3);
  }, 0); // loggea 3
  console.log(4); //loggea 4
  setTimeout(function () {
    console.log(8); // Loggea 2 luego de 1s
  }, 1000);
}

printing();
