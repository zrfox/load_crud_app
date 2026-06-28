// seed-script adds seed data to firebase. Surprising, yeah?

import seedData from './seed-data.json'
import clearCollection from '../utils/clear-collection';
import addCollection from '../utils/add-collection';
import retryWrapper from '../utils/retry-wrapper';
import validateArgs from '../utils/validate-args';
import db from '../utils/init-firebase';
import { FirebaseError } from 'firebase-admin';

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

// was seed-drivers.ts


/*

// this file should hold seed data and set it into firebase, nothing else

import dotenv from 'dotenv';
import path from 'path';

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

import clearCollection from '../utils/clear_collection';

dotenv.config({path: path.join(__dirname, '..', '..', '.env')});

// get path of firebase json // SWITCH THIS TO GET PATH FROM ENV FILE.
const serviceAccountPath = path.join(__dirname, '..', '..', 'fb.json');

// read json
const serviceAccount = require(serviceAccountPath);
// need to get rid of the initialization and put this someone
initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

// delete
// hard code name? 
// why doesn't it pass collectionName to db.collection?
async function clearCollection(collectionName: string) {
}

async function seedDrivers() {
    await clearCollection('drivers');


    const drivers = {
        'driver-1': { full_name: 'Doctor Evil', status: 'available' },
        'driver-2': { full_name: 'Austin Powers', status: 'en route' },
        'driver-3': { full_name: 'Scott Evil', status: 'unavailable' },
        'driver-4': { full_name: 'Mini Me', status: 'retired' },
    }

    for (const [id, data] of Object.entries(drivers)) {
        await db.collection('drivers').doc(id).set(data);
    }

    console.log('Seeded drivers');
}

export default seedDrivers();




*/