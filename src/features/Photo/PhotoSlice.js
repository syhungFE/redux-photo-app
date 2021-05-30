import { createSlice } from "@reduxjs/toolkit";

const Photo = createSlice({
  name: "Photo",
  initialState: [],
  reducers: {
    initPhotos: (state,action) => {
     return action.payload;
    },
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state,action) => {
        const photoId = action.payload;
        return state.filter(state => state.id !== photoId); 
    },
    updatePhoto: (state,action) => {
        const photoUpdate = action.payload;
        // find index of this photo in array
        const photoIndex = state.findIndex(photo => photo.id === photoUpdate.id);
        if(photoIndex > 0){
            state[photoIndex] = photoUpdate;
        }
    },
   },
});

const { reducer, actions } = Photo;
export const {initPhotos, addPhoto, updatePhoto, removePhoto } = actions;
export default reducer;
