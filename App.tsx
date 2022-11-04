import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

// import theme from "./src/theme";
// import { ThemeProvider } from "styled-components/native";
// import { Loading } from "@components/Loading";
// import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    // <ThemeProvider theme={theme}>
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Text>Hello</Text> : <View />}
      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
    </>
    // </ThemeProvider>
  );
}
