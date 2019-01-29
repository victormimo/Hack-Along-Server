const keystone = require('keystone');
const logger = require('winston');

exports.listingInfo = async (req, res) => {
  const TechCategories = keystone.list('TechCategory');
  const Technologies = keystone.list('Technology');
  let result;
  try {
    result = {
      techCategories: await TechCategories.model.find(),
      technologies: await Technologies.model.find()
    };
  } catch (err) {
    res.status(500).send(err.message);
    logger.error(err.message);
    return;
  }

  res.send(result);
};
