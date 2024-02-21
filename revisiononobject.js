let student = {
  studentid: 221020634,
  FirstName: 'Niyonizera',
  LastName:'Benigne',
  address: "gisozi",
  sex: "female",
  age: 20,
  displayFullName : function(FirstName,LastName){
console.log( `My name is ${FirstName}  ${LastName}`);
  }
  };

student.age = 40;
student.marks = 80;
console.log(student);
console.log(student.displayFullName('Niyonizera','Benigne'));
