class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Функция для перемещения дисков
function tower<T>(n: number, source: Stack<T>, target: Stack<T>, auxiliary: Stack<T>): void {
  if (n > 0) {
    tower(n - 1, source, auxiliary, target);

    const disk = source.pop();
    if (disk !== undefined) {
      target.push(disk);
      console.log(`Переместили диск ${disk} из ${source} в ${target}`);
    }

    tower(n - 1, auxiliary, target, source);
  }
}

// Проверка работы
const source = new Stack<number>();
const target = new Stack<number>();
const auxiliary = new Stack<number>();

for (let i = 8; i >= 1; i--) {
  source.push(i);
}

tower(source.size(), source, target, auxiliary);
//Выводит в порядке убывания
console.log('Содержимое целевой башни:', target);
