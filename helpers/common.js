import { Dimensions } from "react-native/types_generated/index";

const { width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const hp = percentage => {
    return (percentage*deviceHeight) / 100;
}
const wp = percentage => {
    return (percentage*deviceWidth) / 100;
}
