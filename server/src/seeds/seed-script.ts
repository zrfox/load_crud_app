// seed-script adds seed data to firebase. Surprising, yeah?
import { FirebaseError } from 'firebase-admin';
import seedData from './seed-data.json'
import clearCollection from '../utils/seed/clear-collection';
import addCollection from '../utils/seed/add-collection';
import retryWrapper from '../utils/seed/retry-wrapper';
import validateArgs from '../utils/seed/validate-args';
import db from '../utils/firebase/init-firebase';

// removed parameter of dbinstance, will import intialized firebase
async function seedScript() {
    // remove first 2 args, Node.js's process.argv array always starts with executable absolute path [0] and absolute path to file being executed [1]
    const args = process.argv.slice(2);
    // if no args, get all collections as keys, else use args
    const collectionsToSeed = (args.length === 0) ? Object.keys(seedData.collections) : args;
    

    try {
        // catch error thrown in validateArgs on failure
        validateArgs(collectionsToSeed);
        // clear all collections
        await retryWrapper(() => clearCollection(Object.keys(seedData.collections), db));
        // must add collections in the proper order given some depend on others, like loads needing items and shipper
        await retryWrapper(() => addCollection(seedData.collections, db, collectionsToSeed));

    } catch(err: unknown) {
        // must check instanceof to access properties of err
        if (err instanceof FirebaseError) {
            console.error(`retryWrapper in seedSCript failed.\n${err.code} ${err.message}`);

        }
        else if (err instanceof Error) {
        console.error(`retryWrapper in seedSCript failed.\n${err.message}`);
        }
    }
}
seedScript();