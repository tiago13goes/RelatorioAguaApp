import { useRoute } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { Cidade } from '../../model/RelatorioCidade'
import { Container, Header } from '../Home/style'
import { Dimensions } from "react-native";

//begin teste
import { useWindowDimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//end teste


import {
    LineChart,
    // BarChart,
    // PieChart,
    // ProgressChart,
    // ContributionGraph,
    // StackedBarChart
} from "react-native-chart-kit";



export function Detail({ navigation }: any) {

    const route = useRoute()
    const { cidade }: any = route.params
    const screenWidth = Dimensions.get("window").width;

    let turbidezData = {
        labels: cidade.resultado.meses,
        datasets: [
            {
                data: cidade.resultado.turbidezR,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: cidade.resultado.turbidezC,
                color: (opacity = 1) => `rgba(0, 142, 210, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Turbidez Realizada", "Turbidez Conforme"] // optional
    };


    let corData = {
        labels: cidade.resultado.meses,
        datasets: [
            {
                data: cidade.resultado.corR,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: cidade.resultado.corC,
                color: (opacity = 1) => `rgba(0, 142, 210, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Cor Realizada", "Cor Conforme"] // optional
    };

    let cloroData = {
        labels: cidade.resultado.meses,
        datasets: [
            {
                data: cidade.resultado.cloroR,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: cidade.resultado.cloroC,
                color: (opacity = 1) => `rgba(0, 142, 210, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Cloro Realizada", "Cloro Conforme"] // optional
    };

    let coliformeData = {
        labels: cidade.resultado.meses,
        datasets: [
            {
                data: cidade.resultado.coliformeR,
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            },
            {
                data: cidade.resultado.coliformeC,
                color: (opacity = 1) => `rgba(0, 142, 210, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Coliforme Realizada", "Coliforme Conforme"] // optional
    };


    let TurbidezRoute = () => (
        <View>
            <Header style={{ height: 80, backgroundColor: "#1d8dd9", justifyContent: 'center', alignItems: 'flex-start' }} >
                <Button onPress={handleBack} title="voltar" />
            </Header>
            <Text style={{ marginTop: 100, fontSize: 50 }}>
                {cidade.nomeCidade + ": Turbidez"}
            </Text>
            <LineChart
                data={turbidezData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );

    let CorRoute = () => (
        <View>
            <Header style={{ height: 80, backgroundColor: "#1d8dd9", justifyContent: 'center', alignItems: 'flex-start' }} >
                <Button onPress={handleBack} title="voltar" />
            </Header>
            <Text style={{ marginTop: 100, fontSize: 50 }}>
                {cidade.nomeCidade + ": Coloração"}
            </Text>
            <LineChart
                data={corData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );

    let CloroRoute = () => (
        <View>
             <Header style={{ height: 80, backgroundColor: "#1d8dd9", justifyContent: 'center', alignItems: 'flex-start' }} >
                <Button onPress={handleBack} title="voltar" />
            </Header>
            <Text style={{ marginTop: 100, fontSize: 50 }}>
                {cidade.nomeCidade + ": Nível de Cloro"}
            </Text>
            <LineChart
                data={cloroData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );

    let ColiformeRoute = () => (
        <View>
             <Header style={{ height: 80, backgroundColor: "#1d8dd9", justifyContent: 'center', alignItems: 'flex-start' }} >
                <Button onPress={handleBack} title="voltar" />
            </Header>
            <Text style={{ marginTop: 100, fontSize: 50 }}>
                {cidade.nomeCidade + ": Coliformidade"}
            </Text>
            <LineChart
                data={coliformeData}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );

    let renderScene = SceneMap({
        turbidez: TurbidezRoute,
        cor: CorRoute,
        cloro: CloroRoute,
        coliforme: ColiformeRoute,
    });

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#000000",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        decimalPlaces: 0,
        backgroundColor: "#000000",
        // useShadowColorFromDataset: false // optional
    };

    function handleBack() {
        navigation.goBack()
    }

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'turbidez', title: 'Turbidez' },
        { key: 'cor', title: 'Cor' },
        { key: 'cloro', title: 'Cloro' },
        { key: 'coliforme', title: 'Coliforme' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition="bottom"
        />
    );
}