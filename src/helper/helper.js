
export const colorDifficult = (diff) => {
    let color = ""
    switch (diff) {
        case 'Easy':
            color = "#00d7ff"
            break;
        case "Normal":
            color = "#24d40c"
            break;
        case "Hard":
            color = "#db0837"
            break;
        default:
            color = "#00d7ff"
    }
    return color
}

export const colorCategory = (category) => {
    let color = ""
    switch (category) {
        case 'Stuff':
            color = "#b9c3c8"
            break;
        case "Family":
            color = "#ffe6d3"
            break;
        case "Health":
            color = "#cdf7ff"
            break;
        case "Learning":
            color = "#fff6c0"
            break;
        case "Leisure":
            color = "#f8d2ff"
            break;
        case "Work":
            color = "#d3f6ce"
            break;
        default:
            color = "#b9c3c8"
    }
    return color
}