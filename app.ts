const person:{
  name: string;
  age: number;
  hobbies:string[];
  // tuple type
  role: [number, string]
} ={
  name:'Mike',
  age: 30,
  hobbies:['book','game'],
  role:[2,'author'],
}

person.role = [0, 'admin'];
