// clear collections based on collectionNames array 

import { FirebaseError } from "firebase-admin";
async function clearCollection(collectionNames: string[], dbInstance: FirebaseFirestore.Firestore): Promise<void> {
        // use 'of' for iterable structures, in is for objects
        for (let collection of collectionNames) {
            const snapshot = await dbInstance.collection(collection).get();
            // map over doc references to delete all in collection
            const deletes = snapshot.docs.map(doc => doc.ref.delete());
            // await to make sure all docs were deleted with map call-back function in above line
            await Promise.all(deletes);
            console.log(`Cleared ${collection} of all (${snapshot.size}) docs`)
        }
}

export default clearCollection;