const keystone = require('keystone');
const Types = keystone.Field.Types;

let TechCategory = new keystone.List('TechCategory', {
  map: { name: 'categoryName' }
});

TechCategory.add({
  categoryName: { type: Types.Text, unique: true }
});

TechCategory.defaultColumns = 'categoryName';

TechCategory.register();
