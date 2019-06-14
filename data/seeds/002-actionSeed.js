
exports.seed = function(knex, Promise) {
return knex('actions').insert([
  {project_id: 1, description: "Obtain images and templates", notes: "This project wants an image of Una Otomachi as the background"},
  {project_id: 1, description: "Develop basic app", notes: "Write the basic app without styling to make sure everything works"},
  {project_id: 1, description: "Styling and deployement", notes: "Design the app to be mobile first, where it will get the most use"},
  {project_id: 2, description: "Draw layout of final project", notes: "Create a sense for how the app should look"},
  {project_id: 2, description: "List technologies needed to complete project", notes: "Will this app be made in vanilla HTML/CSS, or will it use other technologies?"},
  {project_id: 2, description: "Styling", notes: "As content will mostly come from band interviews, YouTube videos, etc, the main thing this website needs is styling"},
  {project_id: 3, description: "Obtain permission to develop the web page from current webmaster", notes: "Prove to the webmaster that I am qualified enough to work on the webpage, offer to do it for free"},
  {project_id: 3, description: "Gather content from school and teachers", notes: "The content of this site will need to be gathered in the form of interviews"},
  {project_id: 3, description: "Write basic layout of project", notes: "Make sure the app has mobile and tablet breakpoints"},

]);
};
