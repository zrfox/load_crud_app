import { FirebaseError } from "firebase-admin";
async function clearCollection<T>(collectionNames: string[], dbInstance: FirebaseFirestore.Firestore): Promise<void> {
    // try clearing collection <collectionName> in <db_instance>
    try {
        for (let collection of collectionNames) {
            const snapshot = await dbInstance.collection(collection).get();
            // map over doc references to delete all in collection
            const deletes = snapshot.docs.map(doc => doc.ref.delete());
            // await to make sure all docs were deleted with map call-back function in above line
            await Promise.all(deletes);
            console.log(`Cleared ${collection} of all (${snapshot.size}) docs`)
        }
        }
}

export default clearCollection;