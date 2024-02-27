class Character { 
constructor (nickName, age, category) {
    this.nickName = nickName;
    this.age = age;
    this.category = category;
    }
        attacked(atackType) {
        console.log(`The ${mage.category} attacked using ${atackType}!`)    
    }
}



let mage = new Character ("Adalberto", 21, "mage")




mage.attacked("magic")



