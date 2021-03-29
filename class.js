const kiosk = {
    Fruit: "Mango",
    get getFruit() {
        return this.Fruit;
    },
    set setFruit(newFruit) {
        this.Fruits = newFruit;
    }

};
console.log(kiosk.Fruit);
kiosk.newFruit = "Orange"

console.log(kiosk.newFruit);