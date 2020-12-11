interface Animal {
  eat(): void;
}

interface Person extends Animal{
  work(): void;
}

class ItPerson implements Person{
  public name: string
  constructor(name: string){
    this.name = name
  }
  eat(){
    console.log('eat')
  }
  work(){
    console.log('每天8小时')
  }
  skil(){
    console.log(this.name,'掌握了xxx技能')
  }
}

const FEr = new ItPerson('amu')
console.log(FEr)
FEr.work()