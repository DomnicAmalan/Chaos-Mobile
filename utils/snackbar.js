import Snackbar from 'react-native-snackbar';
import colors from "config/colors.json";

export const showSnack = (type, message) => {

  const color = {
    error: colors.red,
    success: colors.green
  }

  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: color[type]
  });
}