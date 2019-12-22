import React from 'react';
import { StyleSheet,Text,Dimensions,TouchableHighlight } from 'react-native';

const styles= StyleSheet.create({
    button:{
        fontSize:40,
        height : Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#AA4DE2' ,
        textAlign: "center",
        borderColor:"#888",
    }
})

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}