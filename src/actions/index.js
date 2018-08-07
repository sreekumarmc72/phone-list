let idPointer = 0;

export const addPhone = (name) => ({
    type    :   'ADD_PHONE',
    id      :   idPointer++,
    name    :   name
});

export const markCostly = (id) => ({
    type    :   'MARK_COSTLY',
    id      :   id
});

export const markLowCost = (id) => ({
    type    :   'MARK_LOWCOST',
    id      :   id
});