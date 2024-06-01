import { get, ref } from "firebase/database";
import { database } from "./firebase.js";

export async function getData(queryString) {
    const query = await ref(database, queryString);
    const qResult = await get(query);
    const data = qResult.val();
    return data;
}