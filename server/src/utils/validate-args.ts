// validate arguments passed through command line, they must match existing collections in seed-data.json

import seedData from '../seeds/seed-data.json'

function validateArgs(args: string[]): boolean {
    for (let arg of args) {
        if (!(arg.toLowerCase() in seedData.collections)) {
            throw new Error(`CL argument ${arg} is not a valid collection name`);
        }
    }
    return true;
}

export default validateArgs;