import { StatusBar, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";
// import { ThemeProvider } from "styled-components/native";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
// import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    // <ThemeProvider theme={theme}>
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
      {/* {fontsLoaded ? <Loading /> : <Text>Hello</Text>} */}
      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
    </NativeBaseProvider>
    // </ThemeProvider>
  );
}
