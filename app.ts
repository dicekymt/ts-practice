// const person:{
//   name: string;
//   age: number;
//   hobbies:string[];
//   // tuple type
//   role: [number, string]
// } ={
//   name:'Mike',
//   age: 30,
//   hobbies:['book','game'],
//   role:[2,'author'],
// }

enum Role {
  ADMIN,READ_ONLY,AUTHOR
}

const person = {
  name:'Mike',
  age: 30,
  hobbies:['book','game'],
  role: Role.ADMIN,
}

// person.role = [0, 'admin'];


if(person.role === Role.ADMIN) {
  console.log("Admin User")
}
