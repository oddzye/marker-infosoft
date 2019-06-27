const MARKERS =  [
        {
            markerName: 'Marker-1', 
            coords: [55.3588, 37.97888]
        },
        {
            markerName: 'Marker-2',
             coords: [55.7188, 37.30888]
        },
        {
            markerName: 'Marker-3', 
            coords: [55.7688, 37.50888]
        }
    ]

export const markers = (state = MARKERS, action) => {
    switch(action.type) {
        case 'ADD_MARKER':
            return [...state, { markerName: action.markerName, coords: [55.75, 37.57] }];
        case 'MARKER_POSITION_CHANGED':
            return [
                        ...state.slice(0, action.idx),
                        { markerName: action.markerName , coords: action.coords },
                         ...state.slice(action.idx + 1)
                    ]
        case 'REMOVE_MARKER':
            return [...state].filter((marker, id) => {
                return action.id !== id
            })
        case 'REORDER_MARKER_LIST':
            const result = [...state];
            const [removed] = result.splice(action.startIndex, 1);
            result.splice(action.endIndex, 0, removed);
            return result;
        default:
            return [...state];
    }
}