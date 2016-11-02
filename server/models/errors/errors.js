'use strict';

class Errors {

  constructor() {
    this.errors = [];
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  addError(error) {
    this.errors.push(error);
  }

  getErrors() {
    return this.errors;
  }

  formatResponse() {
    let errors = {
      statuCode: 500,
      status: "Internal Server Error",
      details: this.getErrors()
    };
    return errors;
  }
}

module.exports = new Errors();
