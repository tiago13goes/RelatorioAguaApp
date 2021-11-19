import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
// import { RelatorioCidade, ResultadoCidade } from '../../model/RelatorioCidade';
import { Cidade, ResultadoCidade } from '../../model/RelatorioCidade';
import { 
    Container, 
    Header,
    PosterHeader, 
    TituloSecao,
    SecaoCidades,
    CardCidade,
    ListaHorizontal
} from './style'

interface NavigationProps{
    navigation: NativeStackNavigationProp<any>
}


export default function Home({navigation}: NavigationProps){
    const [cidades, setCidades] = useState<Cidade[]>([])

    
    useEffect(() => {
        async function carregarDados(){
            const resposta = require('../../model/relatorio.json')
            setCidades(resposta.cidades)
        }
        carregarDados()
    })

       

    function handleDetail(cidade : any){
        navigation.navigate('Details', {cidade})
    }

    return (
        <Container>
            <Header>
                <PosterHeader
                source={{ uri: 'https://cryptoid.com.br/wp-content/uploads/2018/02/sabesp-1440x564_c.png'}} />
            </Header>

            <TituloSecao>Cidades</TituloSecao>

            <SecaoCidades>
                <ListaHorizontal data={cidades} renderItem={ ({item}) => 
                    <CardCidade onPress={() => handleDetail(item)}>
                        <Text>
                            {item.nomeCidade}
                        </Text>
                    </CardCidade>
                } />
            </SecaoCidades>
        </Container>
       
    )
}