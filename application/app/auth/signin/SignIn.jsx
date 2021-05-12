import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Image
} from "react-native";

import ButtonShared from "../../components/shared/ButtonShared";
import NavWarinigShared from "../../components/shared/NavWarningShared";
import SocialButton from "../../components/SocialButtonComponent";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
    },
    cardSign:{
        borderRadius:25,
        backgroundColor: '#eef0f25c',
        padding:30,
        marginLeft:30,
        marginRight:30,
        marginTop:130
    },
    input: {
        height: 40,
        padding:8,
        borderBottomWidth:0.7,
        borderColor:'white',
        marginTop:20,
    },
    lineOu : {
        color: 'white',
        textAlign: 'center',
        margin: 10,

    }
});

const SignIn = () => {
    const [fname, onChangeFname] = React.useState("");

    function signIn() {
        console.log(fname);
    }

    return (
        <ScrollView style={styles.container}>
            <NavWarinigShared/>
            <View style={styles.cardSign} >
                <SocialButton 
                    title='Se Connecter avec GitHub'
                    btnType='github'
                    backgroundColor="white"
                    color="black"
                />
                <SocialButton 
                    title='Se Connecter avec Facebook'
                    btnType='facebook'
                    backgroundColor="white"
                    color="#3b5999"
                />
                <SocialButton 
                    title='Se Connecter avec Twitter'
                    btnType='twitter'
                    backgroundColor="white"
                    color="#55acee"
                />
            </View>
        </ScrollView>
    );
}

export default SignIn;
