const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');

const ajv = new Ajv();

function validateJSON(file, schemaFile) {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaFile, 'utf8'));

    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        console.log(`Validation errors in ${file}:`);
        console.log(validate.errors);
        return false;
    }

    return true;
}

// Validate each JSON file
const projectsResult = validateJSON('./src/db/apexProjects.json', './schemas/projects-schema.json');
const teamResult = validateJSON('./src/db/apexTeam.json', './schemas/team-schema.json');

if (!projectsResult || !teamResult) {
    process.exit(1);
}