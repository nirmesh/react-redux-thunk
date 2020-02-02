// const iState={
//     name:"derek",
//     wish:['eat','code']
// }

const nameReducer=(state='',action)=>{
    console.log(action);
    if(action.type=='CHANGE_NAME'){
        // return {
        //     ...state,
        //     name:action.payload
        // }
        return action.payload
    }
return state;
}

export default nameReducer;