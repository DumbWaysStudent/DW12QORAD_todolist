import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Todo extends Component {
    render() {
        const activitys = ['WORKING','SWIMING','STUDYING','SLEEPING','RUNNING']
        return (           
            <View>
                {activitys.map((activitys, index) => {
                    return (
                        <Text key={index} style={style.activitys}> {activitys}</Text>
                    )
                }
                    )}
            </View>
        );
    }
}

export default Todo;

const style = StyleSheet.create ({
    activitys: {
        fontSize: 20,
        borderWidth: 3,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },
})