import React from  'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../config/color'
import { MaterialIcons } from '@expo/vector-icons';
import icon from '../config/icon'

function Botao ({type, origem,icone,children,onPress}) {

    
    return (  
       
            <TouchableOpacity onPress={onPress} style={[styles.button,{backgroundColor: colors.bg[type],flexDirection:icon[origem]}]}>
                <MaterialIcons name={icone} size={24} color="black" />
                <Text style={[styles.texto,{color: colors.text[type]}]}>{children}</Text>
            </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:10,
        // width:100,
        // height:40,
        padding:10,
        margin:10,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    texto :{
        color:'white',
    }

})

Botao.defaultProps={
 type:'primary',
 origem:'esquerda'
}

export default Botao;