import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";
import Fnaf from "../../assets/fnf.png";
import Copo from "../../assets/kitcopo.png";
import Sacola from "../../assets/compra.png";
import Alexa from "../../assets/alexa.png"
import Caixa from "../../assets/amazon.png"
import Lista from "../../assets/bloco.png"
import Alchol from "../../assets/bebida.png"
import Limpeza from "../../assets/limpeza.png"
import Racao from "../../assets/racao.png"
import Promo from "../../assets/promocao.png"
import Presente from "../../assets/gift.png"


export default function Menu() {
    return <ScrollView>
        <View style={styles.TopBarSearch}>
            <Ionicons name="search" style={styles.Icon}/>
            <TextInput style={styles.SearchTextInput} placeholder="Faça sua pesquisa"/>
        </View>
        
        <View style={styles.ViewContinueComprando}>
            <Text style={styles.TextTopMenu}> Seus Atalhos </Text>
       
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={Caixa} style={styles.ImageProdutos}/>
        <Image source={Lista} style={styles.ImageProdutos}/>
        <Image source={Alexa} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Seus Pedidos </Text>
            <Text> Sua Lista </Text>
            <Text> Eletrônicos </Text>
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={Copo} style={styles.ImageProdutos}/>
        <Image source={Fnaf} style={styles.ImageProdutos}/>
        <Image source={Sacola} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Mais por menos </Text>
            <Text> Livros </Text>
            <Text> Comprar Novamente </Text>


        </View>
     <View style={styles.ViewContinueComprando}>
            <Text style={styles.TextTopMenu}> Compra por categoria </Text>
        </View>

        <View style={styles.ViewProdutos}>
        <Image source={Caixa} style={styles.ImageProdutos}/>
        <Image source={Presente} style={styles.ImageProdutos}/>
        <Image source={Promo} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Amazon Prime </Text>
            <Text> Presentes </Text>
            <Text> Ofertas </Text>
        </View>
        <View style={styles.ViewProdutos}>
        <Image source={Alchol} style={styles.ImageProdutos}/>
        <Image source={Limpeza} style={styles.ImageProdutos}/>
        <Image source={Racao} style={styles.ImageProdutos}/>
        </View>
        <View style={styles.ViewContinueComprando}>
            <Text> Bebidas </Text>
            <Text> Limpeza </Text>
            <Text> PetShop </Text>
</View>

       
    </ScrollView>
}