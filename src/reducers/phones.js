const phones = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PHONE': 
            return [
                ...state,
                {
                    id      :   action.id,
                    name    :   action.name,
                    costly  :   'normal'
                }
            ];
        case 'MARK_COSTLY': 
            return state.map(phone => 
                    (phone.id === action.id) ? {...phone, costly : 'costly'} : phone
                );
        case 'MARK_LOWCOST': 
            return state.map(phone => 
                    (phone.id === action.id) ? {...phone, costly : 'lowcost'} : phone
                );
        default:
            return []; 
    }
}

export default phones;