const keystone = require("keystone");
const Types = keystone.Field.Types;

let User = new keystone.List("User");

User.add({
  name: { type: Types.Name },
  email: { type: Types.Email },
  password: { type: Types.Password },
  canAccessKeystone: { type: Types.Boolean, initial: false }
});

User.defaultColumns = "name, email";

User.register();
