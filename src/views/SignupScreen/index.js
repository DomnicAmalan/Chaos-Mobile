import React, { useState } from 'react';
import  {View, Text} from 'react-native'
import fonts from 'config/fonts';
import styles from "./SignupScreenStyles";
import { strings } from 'utils/i18n';
// import TextInput from 'components/TextInput';
import {Button, Avatar} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik'
import * as yup from 'yup';
import {TextInput} from 'react-native-paper';

const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  username: yup
    .string()
    .min(3, ({ min }) => `Username must be at least ${min} characters`)
    .required('Username is required'),
})

const SignupScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('j')
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  return (
    <View style={styles.screen}>
     <View style={styles.formContainer}>
        <Text style={styles.title}>{strings('LoginScreen.register')}</Text>
        <Formik
          initialValues={{ email: email, password: password, username:username}}
          onSubmit={values => console.log(values)}
          validationSchema={signupValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
            <>
              <TextInput  
                mode="outlined" 
                onChangeText={handleChange('username')}   
                name={"username"} 
                style={styles.input} 
                label={strings('LoginScreen.placeholders.username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <TextInput  
                mode="outlined" 
                onChangeText={handleChange('email')}   
                name={"email"} 
                style={styles.input} 
                label={strings('LoginScreen.placeholders.email')}
                keyboardType="email-address"
                onBlur={handleBlur('email')}
              />
              <TextInput  
                secureTextEntry
                mode="outlined" 
                onChangeText={handleChange('password')}   
                name={"password"} 
                style={styles.input} 
                label={strings('LoginScreen.placeholders.password')}
                onBlur={handleBlur('email')}
              />
              <TouchableOpacity>
                <Button onPress={handleSubmit} mode='contained' style={styles.button}>
                  {strings('LoginScreen.register')}
                </Button>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        
        <Text style={[fonts.headline, styles.alternate]}>{strings('LoginScreen.alternatesign')}</Text>
        <View style={styles.alternateLogins}>
          <TouchableOpacity>
            <Avatar.Icon style={{backgroundColor: "#315DFAAA"}} size={30} icon="apple" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Icon style={{backgroundColor: "#315DFAAA"}} size={30} icon="google" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Avatar.Icon style={{backgroundColor: "#315DFAAA"}} size={30} icon="facebook" />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={[fonts.headline, styles.footerText]}>{strings('LoginScreen.alreadysignedin')}</Text>
          <Text onPress={() => navigation.navigate("LoginScreen")} style={[fonts.callout, styles.footerText, {textDecorationLine: "underline"}]}>
            {strings('LoginScreen.singnow')}
          </Text>
        </View>
     </View>
    
    </View>
  )
}

export default SignupScreen;