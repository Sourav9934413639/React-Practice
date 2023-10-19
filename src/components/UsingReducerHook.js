import React,{useReducer} from 'react'
const initialState={
    count:0,
    countFive:0
};
const reducer=(state,action)=>{
   switch(action.type){
    case 'increment':
        return {...state,count:state.count+1};
    case 'decrement':
        if(state.count<=0){
            return {...state,count:0}
        }
        return {...state,count:state.count-1};
    case 'reset':
        return {...state,count:initialState.count};
    case 'increment by 5':
        return {...state,countFive:state.countFive+action.payload};
    case 'decrement by 5':
        if(state.count<=0){
            return {...state,initialState:initialState.countFive}
        }
        return {...state,countFive:state.countFive-action.payload}
    case 'resetFive':
        return {...state,countFive:initialState.countFive};
        
    default:
        return state;
   }
}
const UsingReducerHook = () => {
    const [currState,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <div>
        <h1>{currState.count}</h1>
        <h1>{currState.countFive}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
    <div>
       <button onClick={()=>dispatch({type:'increment by 5',payload:5})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement by 5',payload:5})}>Decrement</button>
      <button onClick={()=>dispatch({type:'resetFive'})}>Reset</button>

    </div>
    </>
  )
}

export default UsingReducerHook
