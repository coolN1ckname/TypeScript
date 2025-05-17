
//Задание 1

interface Car {
	model: string;
	price: number;
  
	dynamic_1: Record<string, string>;
	dynamic_2: { [key: string]: number };

	tuple: [string, number, string];
  }

  type CarKeys = keyof Car;
  
  const car: Car = {
	model: "Tesla Model S",
	price: 79999,
	dynamic_1: { key_1: "value1", key_2: "value2", key_3: "value3" },
	dynamic_2: { key_1: 1, key_2: 2, key_3: 3 },
	tuple: ["Electric", 4, "Luxury"],
  };
  
  // Проверка 
  console.log("Keys of Car:", Object.keys(car)); 
  
//Задание 2

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; 
  }
  return `${a}${b}`; 
}

console.log(add(5, 10)); 
console.log(add("Hello, ", "world!")); 
console.log(add(10, " apples")); 
console.log(add("Count: ", 20)); 

//Задание 3

type PartialCar = Partial<Car>;
type ReadonlyCar = Readonly<Car>;
type PickCar = Pick<Car, "model" | "price">;
type OmitCar = Omit<Car, "dynamic_1" | "dynamic_2">;
type RecordCar = Record<keyof Car, string>;

//Пример 
const car1: PartialCar = { model: "BMW" }; 
const car2: ReadonlyCar = {
  model: "Audi",
  price: 50000,
  dynamic_1: { key_1: "value1" },
  dynamic_2: { key_1: 1 },
  tuple: ["Petrol", 2, "Sport"],
};

const car3: PickCar = { model: "Mercedes", price: 70000 }; 
const car4: OmitCar = { model: "Toyota", price: 30000, tuple: ["Hybrid", 5, "Economy"] };
const car5: RecordCar = {
  model: "Ford",
  price: "40000",
  dynamic_1: "key-value",
  dynamic_2: "numbers",
  tuple: "tuple",
};
