
interface IUser {
	readonly id: number; // Только для чтения
	userName: string;
	surname: string;
	coins: number;
	age?: number; 
	addCoin(amount: number): void;
	removeCoin(amount: number): void;
	getCoins(): string;
  }
  
  interface IExtendedUser extends IUser {
	role: string; 
  }
  
  interface IAdvancedUser extends IExtendedUser {
	isActive: boolean;
  }
  
  // Класс, который имплементирует интерфейс-наследник
  class Users implements IAdvancedUser {
	readonly id: number; 
	userName: string;
	surname: string;
	coins: number;
	role: string;
	isActive: boolean;
	age?: number; // Необязательное свойство
  
	constructor(
	  id: number,
	  userName: string,
	  surname: string,
	  coins: number,
	  role: string,
	  isActive: boolean,
	  age?: number
	) {
	  this.id = id;
	  this.userName = userName;
	  this.surname = surname;
	  this.coins = coins;
	  this.role = role;
	  this.isActive = isActive;
	  this.age = age;
	}
  
	public addCoin(amount: number): void {
	  this.coins += amount;
	}
  
	public removeCoin(amount: number): void {
	  this.coins -= amount;
	}
  
	public getCoins(): string {
	  return `Количество монет: ${this.coins}`;
	}
  }
  
  // Проверка 
  const ivan: IAdvancedUser = new Users(1, 'Ivan', 'Ivanov', 5, 'Admin', true, 25);
  
  ivan.addCoin(10);
  ivan.removeCoin(3);
  console.log(ivan.getCoins()); 
  console.log(`Пользователь активен: ${ivan.isActive}`); 
  
  ivan.role = 'Moderator';
  console.log(`Новая роль: ${ivan.role}`); 

  