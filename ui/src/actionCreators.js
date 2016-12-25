export function loadPlayers() {
    // Interpreted by the thunk middleware:
    return (dispatch, getState) => {
        let { players } = getState();

        if (players.length) {
            return;
        }

        dispatch({
            type: 'LOAD_PLAYERS_REQUEST'
        });

        fetch(`http://127.0.0.1:8000/api/players/`).then(
            response => response.json().then(data => dispatch({
                type: 'LOAD_PLAYERS_SUCCESS',
                data
            })),
            error => dispatch({
                type: 'LOAD_PLAYERS_FAILURE',
                error
            })
        );
    }
}
