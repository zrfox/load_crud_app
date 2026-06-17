import { FirebaseError } from "firebase-admin";
async function clearCollection(collectionName: string, db_instance: FirebaseFirestore.Firestore) {
    // try clearing collection <collectionName> in <db_instance>
    try {
            const snapshot = await db_instance.collection(collectionName).get();
            // map over doc references to delete all in collection
            const deletes = snapshot.docs.map(doc => doc.ref.delete());
            // await to make sure all docs were deleted with map call-back function in above line
            await Promise.all(deletes);
            console.log(`Cleared ${collectionName} of all (${snapshot.size}) docs`)

    
        }
    catch (err) {
        if (err instanceof FirebaseError) {
            console.log(err.code);
            console.log(err.message);
        }
        
    }
}

export default clearCollection;