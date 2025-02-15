import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;


export default StyleSheet.create({

    tela:{
        height: '100%',
        width: '100%'
    },

    BackgroundAmazon:{
        backgroundColor:"whitesmoke"

    },

    LogoAmazon: {
        width: 200,
        height: 100,
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

    },
    Endereço:{
        backgroundColor: "#00ffff",
        flexDirection: 'row',
        display: 'flex',



    },

    ViewProdutos:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        rowGap: '5px',
        paddingHorizontal: '10px',
    },

    ViewContinueComprando:{
       
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        rowGap: '5px',
        paddingHorizontal: '10px',
        marginVertical: '10px'
    },


    ImageProdutos:{
        width:100,
        height:100,
        borderWidth: 10,
        borderColor: "white"

    },

    AppDayBar:{
        width: '100%',
        flex: 1,
        flexDirection: 'column'
    },

    TextoAppDay:{
        fontSize: 20,
        width: '100%',
        textAlign: 'center'

    },
    OlaUserBar:{
        backgroundColor: "lightblue",
        flexDirection: 'row',
        display: 'flex',
    },

    TextTopMenu:{
        fontSize: 20,
        fontWeight: 'bold'

    },

    BotaoConta:{
        margin: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'

    },
    ViewBotoes:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        rowGap: '5px',
        paddingHorizontal: '50px',
    },

    ViewButtonCart:{
        backgroundColor: 'orange',
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        height: 100,
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10
    }

})