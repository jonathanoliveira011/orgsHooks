import React from "react";
import { Text, View, Image} from "react-native";

export default function Produtor( {nome, imagem, distancia, estrelas} ){

return <View>
    <Image source={imagem} acessibilityLabel={nome}/>
    <View>
        <Text>{ nome }</Text>
        <Text>{ distancia }</Text>
    </View>
</View>

}