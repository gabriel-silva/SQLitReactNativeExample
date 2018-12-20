import {
    Dimensions
} from "react-native";

const {
    width: LARGURA,
    height: ALTURA
} = Dimensions.get("window");

export default {
    LARGURA_IPHONE_X: LARGURA-88, //tamanho da tela do Iphone X
    LARGURA_DO_DISPOSITIVO: LARGURA,
    ALTURA_DO_DISPOSITIVO: ALTURA
};