import seedData from './seed-data.json'
import clearCollection from '../utils/clear_collection';

async function seedScript() {
    const args = process.argv.slice(2);

    // seed all
    if (args.length === 0) {
    
    }
    // seed args
    else {

    }
    //await seedDrivers();
}


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