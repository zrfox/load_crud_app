// Why make this file?
// Purpose: we will only want to retry on errors that make sense, such as a short network interrupt or timeout 
// that may be recoverable. But we wouldn't want to retry on a missing credentials error since retrying there doesn't help.
// Additionally, our utils will all need try/catch blocks due to being asynchronous.
// Therefore, making a generic function to handle this repeated pattern is preferable. 
// could handle non-firebase errors, but keeping scope to firebase, currently. 
// Currently: function tries connecting <maxAttempts> times no matter the error.

import { FirebaseError } from "firebase-admin";

// js Error class doesn't have code, unlike FirebaseError
// <T> is for declaring type parameter for class or  function, but let foo: T; is foo of type T. 
// async functions always return a promise
async function retryWrapper<T>(fn: () => Promise<T>): Promise<T> {
    const maxAttempts = 5;
    let currentAttempt = 0;
    let caughtError: unknown;
do {
    try {
        // fnPromise is actually of type T and not a promise after awaiting
        // however, it is wrapped back up in a promise on return because
        // async functions always return promises
        let fnPromise = await fn();
        return fnPromise;
    }
            // err is unknown because js can throw anything (string, 42 {something: true})
            // must prove what it is before using it
            catch(err: unknown) {
            // get error code if firebaseerror, retry if issue is easy to fix. 
                if (err instanceof FirebaseError) {
                    if ('code' in err){
                        console.error(err.code);
                    }
                }
                else if (err instanceof Error) {
                // log message for all errors
                    console.error(err.message);
                }
            // store err in local var to persist in function's scope outside try/catch
            caughtError = err;
            // increment and print attempts
            console.error( `retryWrapper attempts: ${++currentAttempt} of ${maxAttempts} max attempts`);
    }
} while (currentAttempt < maxAttempts)
    // throw and print caughtError as Error to log .message
    throw new Error(`retryWrapper failed after ${maxAttempts} attempts. Error: ${(caughtError as Error).message}`)
}
        
export default retryWrapper;