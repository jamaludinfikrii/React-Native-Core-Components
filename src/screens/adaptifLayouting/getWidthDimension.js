import { Dimensions } from "react-native";

function getWidthDimension (point)  {
    const divider = 400 / point
    return Dimensions.get('window').width / divider
}

export default getWidthDimension