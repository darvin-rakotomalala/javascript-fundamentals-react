class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + " " + this.lastname;
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return "React Front-end Developer";
  }
}

var me = new ReactDeveloper("Tojo", "Darvin");
console.log(me.getName() + " is " + me.getJob());
