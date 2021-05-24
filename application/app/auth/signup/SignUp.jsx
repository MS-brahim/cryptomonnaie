import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";

import NavWarinigShared from "../../components/shared/NavWarningShared";
import SocialButton from "../../components/SocialButtonComponent";
import Input from "../../components/shared/InputShared";
import ButtonShared from "../../components/shared/ButtonShared";

import firebase from '../../../Config'
const db  = firebase.firestore();

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1,
    },
});

const SignUp = (props) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [full_name, setFullName] = React.useState("")

    function onLoginPressed  () {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
                console.log(res);
                // props.navigation.navigate('Home')
                if (db) {
                    db.collection("users")
                      .add({
                        full_name: full_name,
                        email: email,
                        password: password,
                    })
                }
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    function navgateToSignIn() {
        props.navigation.navigate('signIn')
    }

    return (
        <View style={styles.container}>
            <NavWarinigShared/>
            <ScrollView style={{margin:30, zIndex:1}}>
                <Input
                    placeholder='Full name'
                    secureTextEntry={false}
                    onChangeText={setFullName}
                />
                <Input
                    placeholder='E-mail...'
                    secureTextEntry={false}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                <ButtonShared text='Connection' onPress={()=>{onLoginPressed()}}/>
                <Text style={{color:'orange',alignSelf:'center', marginVertical:15, fontSize:16}}>Or Sign up with</Text>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <SocialButton 
                        title='Se Connecter avec GitHub'
                        btnType='github'
                        backgroundColor="black"
                    />
                    <SocialButton 
                        title='Se Connecter avec Facebook'
                        btnType='facebook'
                        backgroundColor="#3b5999"
                        onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}

                    />
                    <SocialButton 
                        title='Se Connecter avec Twitter'
                        btnType='twitter'
                        backgroundColor="#55acee"
                    />
                </View>
                    <View style={{ alignItems:'center', marginVertical:20}}>
                        <Text style={{fontSize:15}}>Have an account ?</Text>
                        <Text style={{color:'orange', fontSize:16,}}
                            onPress={()=>navgateToSignIn()}
                        >Sign in </Text>
                    </View>
            </ScrollView>
        </View>
    );
}

export default SignUp;
