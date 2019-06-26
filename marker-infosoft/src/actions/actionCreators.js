export const addMarker = markerName => ({
    type: 'ADD_MARKER',
    markerName
})

export const markerPositionChanged = (coords, idx, { markerName }) => ({
    type: 'MARKER_POSITION_CHANGED',
    coords,
    idx,
    markerName
}) 