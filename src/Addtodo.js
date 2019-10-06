import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

class Addtodo extends Component {
    render() {
        const activity = ['WORKING','SWIMING','STUDYING','SLEEPING','RUNNING']
        return ( 
         <View style={style.container}>  
            <View>
                <TextInput style={style.textinput}></TextInput>
                <Button title="ADD" color='red' onPress={() => Alert}></Button>
            </View>          
            <View>
                {activity.map((activity, index) => {
                    return (
                        <Text key={index} style={style.activity}> {activity}</Text>
                    )
                }
                    )}
            </View>
        </View> 
        );
    }
}

export default Addtodo;

const style = StyleSheet.create ({
    container: {
        flex: 1,
    },   
    activity: {
        fontSize: 20,
        borderWidth: 3,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },
    textinput: {
        height: 50,
        borderWidth: 2,
        marginHorizontal: 5,
        marginVertical: 10       
    },
    button: {
        height: 50,
        color: 'red'
    }
})