import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";

import { carregaProdutores } from "../../../Services/carregaDados";
import Produtor from "./Produtor";

export default function Produtores({topo: Topo}){

    const [titulo, atualizaTitulo] = useState('');
    const [lista, atualizaLista] = useState('');

    useEffect(() => {

        const prods = carregaProdutores();
        atualizaTitulo(prods.titulo);
        atualizaLista(prods.lista);

    }, []);

    const TopoLista = () => {

        return <>
            <Topo/>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>

    }

    return <FlatList
        data={lista}
        renderItem={({item}) => <Produtor {...item}/>}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={ TopoLista } />
}

const estilos = StyleSheet.create({

    titulo: {

        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646',
    },

})