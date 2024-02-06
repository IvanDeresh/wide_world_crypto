class UserDto {
  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.roles = model.roles;
    this.username = model.username;
  }
}

export default UserDto;
