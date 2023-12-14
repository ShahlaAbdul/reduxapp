import { createSlice } from "@reduxjs/toolkit";

export const todoSlice= createSlice({
    name:"todos",
    initialState:{
        value: [],
    },
    reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeTodo:(state,action)=>{
          state.value= state.value.filter((x)=>x.id !==action.payload)
    },
}
})
export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer