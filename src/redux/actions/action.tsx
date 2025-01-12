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

export const REMOVE = (item:any) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}