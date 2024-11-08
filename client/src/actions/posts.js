import * as api from "../api";
import {UPDATE, DELETE, FETCH_ALL, CREATE} from "../constants/actionTypes"
// Action creators -> actions that return an action
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts(); // returned data from backend

        dispatch({type: FETCH_ALL, payload: data}); //action
    }catch(error){
        console.log(error.message);
    }
}
export const createPost = (post) => async(dispatch) =>
{
    try{
        const { data } = await api.createPost(post);

        dispatch({type: CREATE, payload: data});
    }catch(error){
        console.log(error);
    }
}
export const updatePost = (id, post) => async(dispatch) =>
{
    try{
        const { data } = await api.updatePost(id, post); //returns the updated post as a response
    
        dispatch({ type: UPDATE, payload: data});
    }catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) =>{

    try{
        await api.deletePost(id); // returned value is not needed

        dispatch( {type: DELETE, payload: id} );
    }catch(error){
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) =>
{
    try{
        const { data } = await api.likePost(id); //returns the updated post as a response
    
        dispatch({ type: UPDATE, payload: data});
    }catch(error){
        console.log(error);
    }
}