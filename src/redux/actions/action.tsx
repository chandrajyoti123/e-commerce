export const ADD =(item:object)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const DLT = (id:number) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}