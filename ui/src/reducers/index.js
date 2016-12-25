const initialState = {
    players: [
        {
            "id": 1,
            "name": "SergeUFO",
            "battles_total": 1000,
            "is_hidden": false,
            "created_at": "2016-12-24T11:26:06.873092Z"
        },
        {
            "id": 2,
            "name": "Mortality",
            "battles_total": 1001,
            "is_hidden": false,
            "created_at": "2016-12-24T11:26:18.459933Z"
        },
        {
            "id": 3,
            "name": "Warrior",
            "battles_total": 500,
            "is_hidden": true,
            "created_at": "2016-12-24T11:26:30.300612Z"
        },
        {
            "id": 4,
            "name": "Noob",
            "battles_total": 100,
            "is_hidden": false,
            "created_at": "2016-12-24T11:26:37.596477Z"
        }
    ]
};

export default (state = { players: [] }, action) => {
    switch (action.type) {
        case 'LOAD_PLAYERS_SUCCESS':
            return Object.assign({}, state, {
                players: action.data
            });
        default:
            return state;
    }
};
