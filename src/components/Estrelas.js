import React from "react";
import {Image, StyleSheet, View} from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png'

export default function Estrelas({

    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,

}){
    const estilos = estilosFuncao(grande);
    return <View style={estilos.grupoEstrelas}>
        <Image source={estrela} style={estilos.estrela} />
        <Image source={estrela} style={estilos.estrela} />
    </View>

}

const estilosFuncao = (grande) => StyleSheet.create({

    estrela: {

        width: grande ? 36 : 12,
        height: grande ? 36 : 12,

    },

    grupoEstrelas: {

        flexDirection: 'row',
        marginRight: 2,

    }

})