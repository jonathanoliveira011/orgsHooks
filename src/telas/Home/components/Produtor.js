import React from "react";
import { Text, View, Image, Stylesheet} from "react-native";
import Estrelas from "../../../components/Estrelas";

export default function Produtor( {nome, imagem, distancia, estrelas} ){

return <View style={estilos.cartao}>
    <Image source={imagem} acessibilityLabel={nome} style={ estilos.imagem }/>
    <View style={ estilos.informacoes }>
        <View>
            <Text style={estilos.nome}>{ nome }</Text>
            <Estrelas quantidade={estrelas}/>
        </View>
        <Text style={estilos.distancia}>{ distancia }</Text>
    </View>
</View>

}

const estilos = Stylesheet.create({

cartao: {

    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    
    //Sombra no Android
    elevation: 4,

    //Sombra no IOS
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

},

imagem: {

width: 48,
height: 48,
borderRadius: 6,
marginVertical: 16,
marginLeft: 16,

},

informacoes: {

flex: 1,
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: 8,
marginVertical: 16,
marginRight: 16,

},

nome: {

FontSize: 14,
lineHeight: 22,
fontWeight: 'bold',

},

distancia: {

FontSize: 12,
lineHeight: 19,

}
    
})