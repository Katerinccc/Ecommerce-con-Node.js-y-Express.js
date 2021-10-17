const faker = require('faker');

class UserService {
  constructor(){
    this.users = [];
    this.generate();
  }
  async generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
      });
    };
  };
  find() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      },1000);
    });
  };
  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.users.push(newUser);
    return newUser;
  };
  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error("product not found");
    }
    this.users.splice(index, 1);
    return {id};
  }
}

module.exports = UserService;
