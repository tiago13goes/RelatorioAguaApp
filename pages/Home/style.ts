import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import { RectButton } from 'react-native-gesture-handler'
import { FlatList } from 'react-native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.color.background };
`;

export const PosterHeader = styled.Image`
    width: 500px;
    height: 250px;
    opacity: 1;
`;

export const TituloDestaque = styled.Text`
    color: #FFF;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    top: -50px;
`;

export const BotaoDestaque = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({theme}) => theme.color.primary };
    border-radius: 5px;
    width: 250px;
    padding: 8px;
    top: -40px;
`;

export const LabelBotao = styled.Text`
    color: ${({theme}) => theme.color.text };
    font-size: 18px;
    font-family: ${({theme}) => theme.fonte.regular};
`;

export const Header = styled.View`
    align-items: center;
`;


export const TituloSecao = styled.Text`
    color: #FFF;
    font-size: 16px;
    border-color: ${({theme}) => theme.color.primary };
    border-left-width: 5px;
    padding-left: 8px;
    `;

export const SecaoCidades = styled.View`
    margin-left: 16px;
`;

export const ListaHorizontal = styled(FlatList as new () => FlatList<any>).attrs({
    // horizontal:false,
    showsHorizontalScrollIndicator:false
})`
    
`;


export const CardCidade = styled(RectButton)`
    width: 90%;
    margin: 5px;
    height: 50px;
    background-color: #ffffff;
    justify-content: center;
`;

export const Poster = styled.Image`
    height: 50px;
    border-radius: 5px;
`;