class Credentials {
  constructor(username, password, expiration, status, id) {
    this.username = username;
    this.password = password;
    this.expiration = expiration;
    this.status = status;
    this.id = id;
  }

  getDataForUser() {
    return {
      username: this.username,
      password: this.password,
      expiration: this.expiration,
      id: this.id,
    };
  }
}
