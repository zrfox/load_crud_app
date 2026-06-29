import dotenv from 'dotenv';
import path from 'path';
import { DocumentData } from 'firebase-admin/firestore';
import { FirebaseError } from 'firebase-admin';
import { error } from 'console';

async function addCollection(collectionsObject: object, dbInstance: FirebaseFirestore.Firestore, collectionNamesFilter?: string[]): Promise<void> {
        for (const [collectionName, documents] of Object.entries(collectionsObject)) {
            // if collectionNamesFilter is defined and includes the collectionName, await collection
                if (collectionNamesFilter?.includes(collectionName)) {
                    // docId is a string but docData is unknown because docData is json data with strings and nums / and js objects have string ids and values can be any type
                    for (const [docId, docData] of Object.entries(documents)) {
                        // wait for fb to respond with collectionName, get doc ref, then set data for doc
                        await dbInstance.collection(collectionName).doc(docId).set(docData as DocumentData);
                    }
                }
                else {
                    for (const [docId, docData] of Object.entries(documents)) {
                        await dbInstance.collection(collectionName).doc(docId).set(docData as DocumentData);
                    }
                }
        }
    }

export default addCollection;