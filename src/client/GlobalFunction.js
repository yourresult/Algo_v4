import firebase from './firebase';

//Inside lib file declare functions
/**
 * @param  {} childName Database Path
 */
export const getRealData = (childName) => {
    return firebase.database().ref().child(childName);
}

export const setRealData = (childName, data) => {
    return firebase.database().ref(childName).set(data);
}  

