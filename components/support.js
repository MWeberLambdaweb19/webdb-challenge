module.exports = {
    intBool,
    boolInt,
    projectBody,
    actionBody,
}

// Sets an integer (1 or 0) to a true or false statement
function intBool(int) {
    return int === 1 ? true : false;
}

// Sets a true or false statement to an integer (1 or 0)
function boolInt(bool) {
    return bool === true ? 1 : 0;
}

// This function affects the way the project is sent to the json body
// It changes the completed boolean to a true/false statement
// If there are actions being called, they are being mapped to the project
// The completed boolean in actions is also being changed to a true/false statement

function projectBody(project) {
    const response = {
        ...project, // This spreads all of the project into the new variable
        completed: intBool(project.completed), // Changes completed statement of project boolean to a true/false statement
    }

    if (project.actions) { 
        // if there are actions found within the project
        response.actions = project.actions.map(action => ({
            ...action,
            completed: intBool(action.completed),
        }));
    }

    return response; //if there are no actions being called, it will return the project by itself
}

// This function is a watered down version of projectBody, simply editing the completed boolean to a true/false statement
function actionBody(action) {
    return {
        ...action,
        completed: intBool(action.completed),
    }
}