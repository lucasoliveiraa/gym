import { Box, Center, HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { ScrollView, TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "../../assets/body.svg"
import SeriesSvg from "../../assets/series.svg"
import RepetitionsSvg from "../../assets/repetitions.svg"
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6}/>
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada Frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">Costas</Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1J1B3XiT3JCE7yv7QPGgaMxroTq215G89sw&usqp=CAU" }}
            alt="Imagem exercicio"
            w="full"
            h={80}
            mb={3}
            rounded="lg"
            resizeMode="cover"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">
                  12 repetições
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado." />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
