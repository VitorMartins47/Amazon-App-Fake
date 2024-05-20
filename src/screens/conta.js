import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import Gta from "../../assets/gta.png"
import Fnaf from "../../assets/fnf.png"
import Lata from "../../assets/lata.png"
import One from "../../assets/op.png"
import Ps from "../../assets/ps5.png"
import Horizon from "../../assets/horizon.png"



export default function Menu() {
    return <ScrollView>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
        </View>
        <View style={styles.OlaUserBar}>
            <Ionicons name="pin-outline" style={styles.Icon}/>
            <Text>Olá Vitor</Text>
        </View>
        
        <View style={styles.ViewBotoes}>
        <TouchableOpacity style={styles.BotaoConta}>Seus Peidos</TouchableOpacity>
        <TouchableOpacity style={styles.BotaoConta}>Comprar Novamente</TouchableOpacity>
        </View>
        <View style={styles.ViewBotoes}>
        <TouchableOpacity style={styles.BotaoConta}>Sua conta</TouchableOpacity>
        <TouchableOpacity style={styles.BotaoConta}>Suas Listas</TouchableOpacity>
        </View>

     <View style={styles.ViewContinueComprando}>
            <Text style={styles.TextTopMenu}> Seus Pedidos </Text>
        </View>

        <View style={styles.ViewProdutos}>
        <Image source={Lata} style={styles.ImageProdutos}/>
        <Image source={One} style={styles.ImageProdutos}/>
        <Image source={Ps} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Continue Comprando </Text>
            <Text> Continue Comprando </Text>
            <Text> Continue Comprando </Text>
        </View>

        <View style={styles.ViewContinueComprando}>
            <Text style={styles.TextTopMenu}> Continue Comprando </Text>
        </View>

        <View style={styles.ViewProdutos}>
        <Image source={Gta} style={styles.ImageProdutos}/>
        <Image source={Horizon} style={styles.ImageProdutos}/>
        <Image source={Fnaf} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Continue Comprando </Text>
            <Text> Continue Comprando </Text>
            <Text> Continue Comprando </Text>
</View>

       
    </ScrollView>
}