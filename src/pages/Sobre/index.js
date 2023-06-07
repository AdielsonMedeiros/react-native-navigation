import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Sobre({ route }){
    const navigation = useNavigation()
    return(
        <View>
            <Text>Sobre</Text>
            <Text>{route.params?.nome}</Text>
            <Text>{route.params?.email}</Text>
            <Button title="Voltar para HOME"
            onPress={()=> navigation.goBack()}/>
        </View>
    )
}