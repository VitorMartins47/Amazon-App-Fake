import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import Jojo1 from "../../assets/jojo1.png";
import Jojo10 from "../../assets/mangajojo.png"
import Gta from "../../assets/gta.png"
import Fnaf from "../../assets/fnf.png"
import Lata from "../../assets/lata.png"
import One from "../../assets/op.png"
import Ps from "../../assets/ps5.png"
import Horizon from "../../assets/horizon.png"




import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function Home() {
    return (
        <ScrollView style={styles.tela}>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
        </View>
        <View style={styles.Endereço}>
            <Ionicons name="pin-outline" style={styles.Icon}/>
            <Text>Enviar para Vitor - Pederneiras - 17284530</Text>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={Jojo1} style={styles.ImageProdutos}/>
        <Image source={Jojo10} style={styles.ImageProdutos}/>
        <Image source={Gta} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={Fnaf} style={styles.ImageProdutos}/>
        <Image source={Ps} style={styles.ImageProdutos}/>
        <Image source={Lata} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
            <Text> Continue comprando </Text>
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={One} style={styles.ImageProdutos}/>
        <Image source={Jojo10} style={styles.ImageProdutos}/>
        <Image source={Horizon} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.AppDayBar}>
            <Text style={styles.TextoAppDay}> O App day começa amanhã</Text>
        </View>
        </ScrollView>
    )
}