class Character { 
constructor (nickName, age, category) {
    this.nickName = nickName;
    this.age = age;
    this.category = category;
    }
        attacked(atackType) {
        console.log(`The ${figure.category} attacked using ${atackType}!`)    
    }
}


let figure = new Character ("Adalberto", 21, "mage")


figure.attacked("magic")



