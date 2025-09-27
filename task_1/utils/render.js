const renderTemplate = (template, obj) => {
  let result = template;
  for (const key in obj) {
    result = result.replaceAll(`{{${key}}}`, obj[key]);
  }
  return result;
};

module.exports = { renderTemplate };