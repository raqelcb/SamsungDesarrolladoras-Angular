export class Person {
	constructor(
		private _name: string,
		private _lastName: string,
		private _age: number,
		private _dni: string,
		private _birthday: Date,
		private _favColor: string,
		private _gender: string,
		private _note: string
	) { }

	set name(name: string) {
		this._name = name;
	}
	set lastName(lastName: string) {
		this._lastName = lastName;
	}
	set age(age: number) {
		this._age = age;
	}
	set dni(dni: string) {
		this._dni = dni;
	}
	set birthday(birthday: Date) {
		this._birthday = birthday;
	}
	set favColor(favColor: string) {
		this._favColor = favColor;
	}
	set gender(gender: string) {
		this._gender = gender;
	}
	set note(note: string) {
		this._note = note;
	}

	get name(): string {
		return this._name;
	}
	get lastName(): string {
		return this._lastName;
	}
	get age(): number {
		return this._age;
	}
	get dni(): string {
		return this._dni;
	}
	get birthday(): Date {
		return this._birthday;
	}
	get favColor(): string {
		return this._favColor;
	}
	get gender(): string {
		return this._gender;
	}
	get note(): string {
		return this._note;
	}

	getformatBirthday(): string {
		let date = this._birthday;
		let formatBirthday = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
		return formatBirthday;
	}
	showPersonInfo(): string {
		let personInfo: string = `Información personal de ${this._name} ${this._lastName
			}:
	Nombre: ${this._name}
	Apellidos: ${this._lastName}
	Edad: ${this._age}
	DNI: ${this._dni}
	Cumpleaños: ${this.getformatBirthday()}
	Color Favorito: ${this._favColor}
	Sexo: ${this._gender}
	Nota: ${this._note}`;
		return personInfo;
	}
}



// export class Persona {

// 	id?: number;
// 	nombre: string;
// 	apellidos: string;
// 	edad: number;
// 	dni: string;
// 	cumple: string;
// 	color: string;
// 	sexo: string;
  
// 	constructor() {
// 	  this.id = 0;
// 	  this.nombre = "";
// 	  this.apellidos = "";
// 	  this.edad = 0;
// 	  this.dni = "";
// 	  this.cumple = "";
// 	  this.color = "";
// 	  this.sexo = "";
// 	}
//   }