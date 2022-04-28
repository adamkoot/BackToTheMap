
import React, { useEffect, useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    Alert
} from "react-native";
import bijacz1 from "./../assets/cities/bijacz1.png";
import bijacz2 from "./../assets/cities/bijacz2.png";
import chocim2 from "./../assets/cities/chocim2.png";
import elblag from "./../assets/cities/elblag.png";
import isfahan from "./../assets/cities/isfahan.png";
import kirholm from "./../assets/cities/kirholm.png";
import konstantynopol from "./../assets/cities/konstantynopol.png";
import krakow1 from "./../assets/cities/krakow1.png";
import krakow2 from "./../assets/cities/krakow2.png";
import krakow3 from "./../assets/cities/krakow3.png";
import krakow4 from "./../assets/cities/krakow4.png";
import krakow5 from "./../assets/cities/krakow5.png";
import krakow6 from "./../assets/cities/krakow6.png";
import krosno from "./../assets/cities/krosno.png";
import lowicz from "./../assets/cities/lowicz.png";
import maciejowice from "./../assets/cities/maciejowice.png";
import moskwa from "./../assets/cities/moskwa.png";
import obertyn from "./../assets/cities/obertyn.png";
import olkusz from "./../assets/cities/olkusz.png";
import poznan from "./../assets/cities/poznan.png";
import raclawice from "./../assets/cities/raclawice.png";
import ryga from "./../assets/cities/ryga.png";
import sandomierz from "./../assets/cities/sandomierz.png";
import szczekociny from "./../assets/cities/szczekociny.png";
import torun1 from "./../assets/cities/torun1.png";
import torun2 from "./../assets/cities/torun2.png";
import wenecja from "./../assets/cities/wenecja.png";
import BurgerButton from "./tools/BurgerButton";
import i18n from "./../i18n";
import SingleImageZoomViewer from "react-native-single-image-zoom-viewer";


export default function BigPicture({ route, navigation }) {
    const [cityInfo, setCityInfo] = useState("");
    function ReturnPhoto(param) {
        param = param.split(".");
        param = param[0];
        if (param == "krakow1") {
            return krakow1;
        } else if (param == "krakow2") {
            return krakow2;
        } else if (param == "krakow2") {
            return krakow3;
        } else if (param == "krakow3") {
            return krakow3;
        } else if (param == "krakow4") {
            return krakow4;
        } else if (param == "krakow5") {
            return krakow5;
        } else if (param == "krakow6") {
            return krakow6;
        } else if (param == "olkusz") {
            return olkusz;
        } else if (param == "bijacz1") {
            return bijacz1;
        } else if (param == "bijacz2") {
            return bijacz2;
        } else if (param == "poznan") {
            return poznan;
        } else if (param == "maciejowice") {
            return maciejowice;
        } else if (param == "krosno") {
            return krosno;
        } else if (param == "lowicz") {
            return lowicz;
        } else if (param == "elblag") {
            return elblag;
        } else if (param == "raclawice") {
            return raclawice;
        } else if (param == "szczekociny") {
            return szczekociny;
        } else if (param == "sandomierz") {
            return sandomierz;
        } else if (param == "torun1") {
            return torun1;
        } else if (param == "torun2") {
            return torun2;
        } else if (param == "wenecja") {
            return wenecja;
        } else if (param == "konstantynopol") {
            return konstantynopol;
        } else if (param == "isfahan") {
            return isfahan;
        } else if (param == "ryga") {
            return ryga;
        } else if (param == "kirholm") {
            return kirholm;
        } else if (param == "moskwa") {
            return moskwa;
        } else if (param == "chocim2") {
            return chocim2;
        } else if (param == "obertyn") {
            return obertyn;
        }
    }
    const map = ReturnPhoto(route.params.map);
    return (
        <View style={styles.container}>
            <BurgerButton view={"map"} />

                <SingleImageZoomViewer
                    style={{

                        resizeMode: "stretch",
                        backgroundColor: 'white'
                    }}

                    source={map}
                />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    button: {
        borderColor: "rgba(255,100,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00305B",
        borderRadius: 50,
        padding: 10,
        margin: 10,
        color: "white",
    },
});
