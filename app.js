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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Mike',
    age: 30,
    hobbies: ['book', 'game'],
    role: Role.ADMIN
};
// person.role = [0, 'admin'];
if (person.role === Role.ADMIN) {
    console.log("Admin User");
}
