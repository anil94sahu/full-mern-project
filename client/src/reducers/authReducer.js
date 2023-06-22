const authReducer=(state={authData:null,loading:false,error:false},action)=>{
    switch(action.type){
        case 'AUTH_START':
            return {...state,loading:true,error:false}
        case 'AUTH_SUCCESS':
            return {...state,authData:action.data,loading:false,error:false}
        case 'AUTH_ERROR':
            return {...state,loading:false,error:true}
        default :
            return state;
    }

}