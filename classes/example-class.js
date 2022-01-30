class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + " " + this.lastname;
  }
}

var me = new Developer("Tojo", "Darvin");
console.log(me.getName());
