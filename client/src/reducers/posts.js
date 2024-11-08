import {UPDATE, DELETE, FETCH_ALL, CREATE} from "../constants/actionTypes"

// eslint-disable-next-line import/no-anonymous-default-export
export default ( posts = [], action) => { // state <-- posts
    switch(action.type)
    {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post) // arr.map(*changes*) -> returns an array after changes
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
          default: 
            return posts;
    }
} 