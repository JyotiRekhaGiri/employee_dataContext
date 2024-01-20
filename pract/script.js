let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    //print all the employee who have the profession of developer
    const developers =arr.filter((e) => e.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    //Write your code here, just console.log
    //making another employee object
    const newEmp = {id: 4, name: 'susan',age: 20 , profession: 'intern'};
    arr.push(newEmp);
    console.log('new Array after newEmp addition:', arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    //remove admin profession
    arr = arr.filter((e) => e.profession !== 'admin');
    console.log('Array after admin remove', arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    // make another array and concatenate with the original array
    const newArr = [
        { id: 5, name: 'raj', age: 22, profession:'admin'},
        { id: 6, name: 'manji', age: 23, profession: 'developer'},
    ];
    arr = arr.concat(newArr);
    console.log('Array after concat:', arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }