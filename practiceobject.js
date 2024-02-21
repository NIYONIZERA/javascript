let student={
name:'Benigne',
age:30,
gender:'female',
martalStatus:'married',
studentNumber:2,
changeStudentNumber: function(newNumber){
    this.studentNumber=newNumber;
}

};
console.log(student);
console.log(student.name);
console.log(student.changeStudentNumber(50));
