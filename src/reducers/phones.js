const phones = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PHONE': 
            return [
                ...state,
                {
                    id  : action.id,
                    name: action.text
                }
            ];
        default:
            return [
                {
                    id      :   1,
                    name    :   'test1' 
                },
                {
                    id      :   2,
                    name    :   'test2' 
                },
                {
                    id      :   3,
                    name    :   'test3' 
                }
            ]; 
    }
}

export default phones;