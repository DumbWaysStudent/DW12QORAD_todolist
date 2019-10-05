import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Todo extends Component {
    render() {
        const activity = ['WORKING','SWIMING','STUDYING','SLEEPING','RUNNING']
        return (           
            <View>
                {activity.map((activity, index) => {
                    return (
                        <Text key={index} style={style.activity}> {activity}</Text>
                    )
                }
                    )}
            </View>
        );
    }
}

export default Todo;

const style = StyleSheet.create ({
    activity: {
        fontSize: 20,
        borderWidth: 3,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },
})