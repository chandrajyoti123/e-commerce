type Restaurant = {
    id: number;
    rname: string;
    imgdata: string;
    address: string;
    delimg: string;
    somedata: string;
    price: number;
    rating: string;
    arrimg: string;
    qnty: number;
};

type CartState = {
    carts: Restaurant[];
};

const INIT_STATE: CartState = {
    carts: [],
};

export const cartreducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case "ADD_CART":

            const IteamIndex = state.carts.findIndex((iteam: any) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((el: any) => el.id !== action.payload);


            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
                const data = state.carts.filter((el: any) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            } else{
                return{
                    
                }
            }



        default:
            return state

    }
}