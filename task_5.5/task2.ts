// Интерфейс с использованием дженерика
interface Container<T> {
    value: T;
  }
  
  // Функция для получения значения
  function getValue<T>(container: Container<T>): T {
    return container.value;
  }
  
  // Проверка 
  const numberContainer: Container<number> = { value: 42 };
  const stringContainer: Container<string> = { value: "Привет, мир!" };
  
  console.log(getValue(numberContainer)); 
  console.log(getValue(stringContainer)); 
  