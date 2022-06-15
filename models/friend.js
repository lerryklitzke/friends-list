const fs = require('fs');
const path = require('path');

const database = path.join(__dirname, '../', 'database', 'db.json');
const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
const db = JSON.parse(data);

module.exports = class Friend {
  constructor(name, age) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }

  save() {
    db.push(this); // this refers to the object created based on this class
    fs.writeFileSync(database, JSON.stringify(db));
  }
  
  static delete(id) {
    const friend = db.findIndex(p => p.id == id);
    db.splice(friend, 1);
    fs.writeFileSync(database, JSON.stringify(db));
  }
  
  static friendsList() {
    return db;
  }
};
