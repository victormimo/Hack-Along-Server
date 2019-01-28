const keystone = require('keystone');
const Types = keystone.Field.Types;

let City = new keystone.List('City', {
  map: { name: 'cityName' }
});

City.add({
  cityName: { type: Types.Text, unique: true }
});

City.defaultColumns = 'cityName';

City.register();
