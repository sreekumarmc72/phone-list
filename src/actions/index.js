let idPointer = 0;

export const addPhone = (name) => ({
    type    :   'ADD_PHONE',
    id      :   idPointer++,
    name    :   name
});