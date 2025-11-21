// Generics
class DataStorage<T> {
    private items: T[] = [];
  
    addItem(item: T) {
      this.items.push(item);
    }
  
    getAllItems(): T[] {
      return this.items;
    }

    
  }
  
  const stringStorage = new DataStorage<string>();
  stringStorage.addItem("Hareesh");
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(123);

  // getters and setters 
  class Employee {
    private _name: string = "";
  
    // Getter
    get name(): string {
      return this._name;
    }
  
    // Setter
    set name(value: string) {
      if (value.length > 0) {
        this._name = value;
      } else {
        throw new Error("Name cannot be empty!");
      }
    }
  }
  
  const emp = new Employee();
  emp.name = "Hareesh";   // 👈 Calls setter
  console.log(emp.name);  // 👈 Calls getter
  