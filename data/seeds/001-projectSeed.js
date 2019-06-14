exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {name: 'TodOtomachi', description: 'A todo React app with the central theme being Una Otomachi'},
    {name: 'Design Grips', description: 'Bringing the official Death Grips website into 2019 with an overhauled design'},
    {name: 'Mill Creek Wing Chun', description: 'Updating and redesigning the website for Mill Creek Wing Chun'},
  ]);
};
