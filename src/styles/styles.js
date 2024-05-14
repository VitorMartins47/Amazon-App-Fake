import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;


export default StyleSheet.create({

    tela:{
        flex:1
    },

    BackgroundAmazon:{
        backgroundColor:"whitesmoke"

    },

    LogoAmazon: {
        width: 300,
        height: 300,
        marginVertical: 'auto',
        marginHorizontal :'auto',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center'
        
    },

    InputLogin: {
        height: 50,
        marginHorizontal: 20,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: 'orange',
        borderRadius: 6,
        backgroundColor: 'white'
    },

    ButtonLogin:{
        backgroundColor: 'orange',
        textAlign: 'center',
        alignSelf: 'center',
        width: 150,
        height: 100,
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5
    },

    TextButtonLogin:{
        justifyContent: 'center',
        color:'white',
        alignContent: 'center',
        textAlign: 'center',
    },

    miniText:{
        justifyContent: 'center',
        color:'grey',
        alignContent: 'center',
        textAlign: 'center',
        marginVertical:100
    },
    
    TopBarSearch:{
        backgroundColor: "lightblue",
        height: 60,
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 30

        
    },

    Icon:{
        fontSize: 20

    },

    SearchTextInput:{
        width: '80%',
        backgroundColor: 'white',
        height: '55%',
        borderRadius: 16,
        textAlign: 'center'

    }

})