import { TouchableOpacity } from "react-native";
import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { UserPhoto } from "@components/UserPhoto";

export function HomeHeader(){
  return (
    <HStack bg="gray.600" pt={16} pb={8} px={8} alignItems="center">
      
      <UserPhoto 
        source={{ uri: 'https://github.com/lucasoliveiraa.png'}}
        size={16} 
        alt="Image user" 
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">Olá</Text>
        <Heading color="gray.100" fontSize="md">Lucas</Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}