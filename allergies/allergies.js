// Given a person's allergy score, determine whether or not they're allergic to a given item, and their full list of allergies.
const Allergies = (score) => {
  let allergens = [
    'eggs', 'peanuts', 'shellfish', 'strawberries',
    'tomatoes', 'chocolate', 'pollen', 'cats'
  ];
  return {
    list: function () {
      return allergens.filter(function (score) { return this.allergicTo(score); }.bind(this));
    },
    allergicTo: function (allergen) {
      return !!(1 << allergens.indexOf(allergen) & score);
    }
  };
};
module.exports = Allergies;