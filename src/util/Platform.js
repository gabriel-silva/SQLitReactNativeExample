import React from "react";
import {
    Platform
} from "react-native";
import Dimensoes from "../util/Dimensions";

/*
    iPhone X
    iPhone XR
    iPhone XS MAX
 */
const IPHONE_X =
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (Dimensoes.ALTURA_DO_DISPOSITIVO === 812 || Dimensoes.LARGURA_DO_DISPOSITIVO === 812) ||
    (Dimensoes.ALTURA_DO_DISPOSITIVO === 896 || Dimensoes.LARGURA_DO_DISPOSITIVO === 896);

const IPAD = Platform.isPad;

const TV_OS = Platform.isTVOS;

const ANDROID = Platform.OS === "android";

const IOS = Platform.OS === "ios";

export default {
    IPHONE_X,
    IPAD,
    TV_OS,
    ANDROID,
    IOS
};