import React from 'react';
import {View, Text} from 'react-native';
import loginScreenStyles from "./loginScreenStyles";
import TextInput from 'components/TextInput';
import { strings } from 'utils/i18n';
import { Surface } from 'react-native-paper'

const LoginScreen  = () => {
  return (
    <View style={loginScreenStyles.screen}>
      <Surface style={loginScreenStyles.formcontainer}>
        <View style={loginScreenStyles.header}>
          <Text>Sign IN</Text>
        </View>
        <TextInput label={strings('LoginScreen.placeholders.name')}  style={loginScreenStyles.input} />
        <TextInput style={loginScreenStyles.input} label={strings('LoginScreen.placeholders.password')} />
      </Surface>
      <View style={loginScreenStyles.footer}>
      </View>
    </View>
  )
}

export default LoginScreen;