const fs = require('fs');
const path = require('path');

const database = path.join(__dirname, '../', 'database', 'db.json');

module.exports = class Friend {
  constructor(name, age) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }
  save() {
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const db = JSON.parse(data);
    db.push(this); // this refers to the object created based on the class
    fs.writeFileSync(database, JSON.stringify(db));
  }
  static friendsList() {
    const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
    const friendsList = JSON.parse(data);
    return friendsList;
  }
};
