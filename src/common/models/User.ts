export class User {
  name: String;
  surname: String;
  email: String;
  
  constructor(name: String, surname: String, email: String) {
    this.name = name;
    this.surname = surname;
    this.email = email;
  }
  toString(): String {
    return `${this.name} ${this.surname} - ${this.email}`;
  }
}
