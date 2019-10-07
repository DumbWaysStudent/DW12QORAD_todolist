import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList} from 'react-native';
import {CheckBox} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class updateTodo extends Component {

    constructor() {
    super();
    
    this.state = {
        isEdit: false,
        updateId: 0,
        text:'  ENTER YOUR ACTIVITY HERE ...',
        arrayHolder:[],
        inputHolder:'',
        todo: [
            {id:1, items:'WORKING', isCompleted: false},
            {id:2, items:'SWIMING', isCompleted: false},
            {id:3, items:'STUDYING', isCompleted: false},
            {id:4, items:'SLEEPING', isCompleted: false},
            {id:5, items:'RUNING', isCompleted: false}
        ]
    }
    
    // this.todo = [
    //     {id:1, items:'WORKING'},
    //     {id:2, items:'SWIMING'},
    //     {id:3, items:'STUDYING'},
    //     {id:4, items:'SLEEPING'},
    //     {id:5, items:'RUNING'}
    // ]
    }

    handleInput = () => {
        const todos=this.state.todo
        if (this.state.isEdit) {
           const newTodos = todos.map((todo) => {
                if (todo.id == this.state.updateId) {
                    todo.items = this.state.inputHolder;
                }
                return todo;
           });
           this.setState({todo: newTodos, inputHolder:'', isEdit: false});
        } else {
            const todoItem = {
                id: todos.length + 1,
                items: this.state.inputHolder
            }
            todos.push(todoItem)
            this.setState({todo:todos, inputHolder:''})
        }
        // this.todo.push({items: this.state.inputHolder})
        // this.setState({ arrayHolder: [...this.todo] })
        // this.textInputRef.clear();
    }

    handleDelete = (id) => {
        console.log (id)
        this.setState ({todo: [...this.state.todo.filter(todo => todo.id !== id)]})
    }

    handleChecked = (id) => {
        const refTodos = this.state.todo;
        const newTodos = refTodos.map(todo => {
            if(todo.id === id){
                todo.isCompleted = !todo.isCompleted
            }
            return todo;
        });
        this.setState({
            todo : newTodos
        })
    }

    handleUpdate = (id) => {
        const refTodos = this.state.todo;
        const newTodos = refTodos.map(todo => {
            if (todo.id === id) {
                this.setState({inputHolder: todo.items, isEdit: true, updateId: id})
            }
            return todo;
        });
    }

    render() {
      let btnEdit;
      if (this.state.isEdit)
        btnEdit = 'EDIT';
      else
        btnEdit = 'ADD';
      return (
        <View style={style.container}>
            <View style={style.todoInput}>
                <TextInput
                    autoCorrect={false}
                    value={this.state.inputHolder} 
                    // ref={ref => this.textInputRef = ref}
                    placeholder='New Todo'
                    style={style.inputStyle}
                    onChangeText={text => this.setState({inputHolder: text})}
                />
                <TouchableHighlight title={btnEdit} onPress={this.handleInput}>
                    <Text style={style.title}>{btnEdit}</Text>
                </TouchableHighlight>
            </View>
            <View>
            <FlatList 
                data={this.state.todo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <View   style={style.list}>
                    <CheckBox color='black'
                    checked={item.isCompleted} onPress={() => this.handleChecked(item.id)}
                    />
                    <Text style={style.textList}> {item.items} </Text> 

                    <Icon name='pencil' style={style.pencil} onPress={() => this.handleUpdate(item.id) }
                    
                    />  
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
        flex: 8,
        marginLeft: 20
        
    },
    icon: {
        fontSize: 30,
        color: 'red'
    },
    pencil: {
        fontSize: 30,
        marginRight: 10
    }
})