import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Todo extends Component {
    render() {
        const activities = ['WORKING','SWIMING','STUDYING','SLEEPING','RUNNING']
        return (           
            <View>
                {activities.map((activities, index) => {
                    return (
                        <Text key={index} style={style.activities}> {activities}</Text>
                    )
                }
                    )}
            </View>
        );
    }
}

export default Todo;

const style = StyleSheet.create ({
    activities: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        padding: 5
    },
})
