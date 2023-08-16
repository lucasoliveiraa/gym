import { useState } from "react";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";

const PHOTO_SIZE = 33

export function Profile() {
  const [loadingPhoto, setLoadingPhoto] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {
          loadingPhoto ?
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          :
            <UserPhoto
              source={{ uri: 'https://github.com/lucasoliveiraa.png'}}
              size={33}
              alt="Image user"
            />
          }

          <TouchableOpacity>
            <Text color="green.500" fontWeight="bold" fontSize="md" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input
            bg="gray.600"
            placeholder="Nome"
          />

          <Input
            bg="gray.600"
            value="lucas.oliveira@gmail.com"
            isDisabled
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
