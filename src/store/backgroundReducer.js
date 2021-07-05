const initialeState = {
    background: "white"
}

const backgroundReducer = (state = initialeState, action)=>{
    switch(action.type){
        case "white":
            return{
                ...state,
                background: "white"
            }
        case "dark":
            return{
                ...state,
                background: "black"
            }
        default:
            return state
    }
}

export default backgroundReducer