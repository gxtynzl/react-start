import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "panel-body": {
        "flex": 1
    },
    "ul": {
        "display": "flex",
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 109
    },
    "li": {
        "display": "flex",
        "flex": 1,
        "justifyContent": "center",
        "alignItems": "center"
    }
});