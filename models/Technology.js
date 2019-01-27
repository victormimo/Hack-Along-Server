const keystone = require('keystone');
const Types = keystone.Field.Types;

let Technology = new keystone.List('Technology', {
  map: { name: 'technologyName' }
});

Technology.add({
  technologyName: { type: Types.Text, unique: true }
});

Technology.defaultColumns = 'technologyName';

Technology.register();
