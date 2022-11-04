import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameUserSlice = createSlice({
	name: 'nameUser',
    initialState: '',
    reducers: {
        nameUserGlobal: ( state, action ) => action.payload
    }
})

export const { nameUserGlobal } = nameUserSlice.actions;

export default nameUserSlice.reducer;