import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class TodoList extends Component {

    constructor() {
    super();
    
    this.state = {
        add:'Add',
        text:'  ENTER YOUR ACTIVITY HERE ...',
        arrayHolder:[],
        inputHolder:'',
        todo: [
            {id:1, items:'WORKING'},
            {id:2, items:'SWIMING'},
            {id:3, items:'STUDYING'},
            {id:4, items:'SLEEPING'},
            {id:5, items:'RUNING'}
        ]

    }

    }

    handleInput = () => {
        const todos=this.state.todo
        const todoItem={
            id: todos.length + 1,
            items: this.state.inputHolder
        }
        todos.push(todoItem)
        this.setState({todo:todos,inputHolder:''})
    }

    handleDelete = (id) => {
        console.log (id)
        this.setState ({todo: [...this.state.todo.filter(todo => todo.id !== id)]})
    }

    render() {
      return (
        <View style={style.container}>
            <View style={style.todoInput}>
                <TextInput autoCorrect={false}
                value={this.state.inputHolder} 
                style={style.inputStyle} onChangeText={text => this.setState({inputHolder: text})} />
                <TouchableHighlight title={this.state.add}  onPress={this.handleInput}>
                    <Text style={style.title}>ADD</Text>
                </TouchableHighlight>
            </View>
            <View>
            <FlatList 
                data={this.state.todo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <View key={item.id} style={style.list}>
                    <Text style={style.textList}> {item.items} </Text>  
                    <Icon name='trash' style={style.icon} onPress={() => this.handleDelete(item.id)}  />
                </View>
            }
            />
            </View>
        </View>
      );
    }
  }
  
const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fafafa',
        margin: 5
    },

    todoInput: {
        flexDirection: 'row',
    },

    inputStyle: {
        marginHorizontal:4,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth: 1, 
        flex: 8   
    },

    title: {
        padding: 12,
        fontSize: 20,
        color: '#fff',
        borderWidth: 1,
        backgroundColor: 'blue',
        borderRadius: 8,
        marginHorizontal: 5,
        textAlign: 'center'
    },

    list: {
        flexDirection: 'row',
        height: 46,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth: 1,
        margin:6,
        padding:8
    },

    textList: {
        fontSize: 20,
        flex: 8
    },
    icon: {
        fontSize: 30,
        color: 'red'
    }
})