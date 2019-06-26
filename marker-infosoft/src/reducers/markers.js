const initialState = {
    markers: [
        {markerName: 'Marker-1', coords: [55.3588, 37.97888]},
        {markerName: 'Marker-2', coords: [55.7188, 37.30888]},
        {markerName: 'Marker-3', coords: [55.7688, 37.50888]},
    ]
}

export const markers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MARKER':
            return { markers: [...state.markers, { markerName: action.markerName, coords: [55.75, 37.57] }]};
        case 'MARKER_POSITION_CHANGED':
            return { markers: [
                        ...state.markers.slice(0, action.idx),
                        { markerName: action.markerName , coords: action.coords },
                         ...state.markers.slice(action.idx + 1)
                    ]}
        default:
            return {...state};
    }
}