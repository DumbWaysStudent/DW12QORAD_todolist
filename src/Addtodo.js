import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList} from 'react-native';

export default class Addtodo extends Component {

    constructor() {
    super();
    
    this.state = {
        add:'Add',
        text:'  ENTER YOUR ACTIVITY HERE ...',
        // arrayHolder:[],
        inputHolder: ''
    }
    
    this.todo = [
        {id:1, items:'WORKING'},
        {id:2, items:'SWIMING'},
        {id:3, items:'STUDYING'},
        {id:4, items:'SLEEPING'},
        {id:5, items:'RUNING'}
    ]
    }
    
    handleInput = () => {
        this.todo.push({todo: this.state.inputHolder})
        this.setState({ arrayHolder: [this.todo], inputHolder: '' })
        // this.textInputRef.clear();
        console.log (this.state.todo)
    }

    render() {
      return (
        <View style={style.container}>
            <View style={style.todoInput}>
                <TextInput autoCorrect={false} 
                // ref={ref => this.textInputRef = ref}
                value={inputHolder}
                placeholder={this.state.text} 
                style={style.inputStyle} onChangeText={data => this.setState({inputHolder: data})} />
                <TouchableHighlight title={this.state.add}  onPress={this.handleInput}>
                    <Text style={style.title}>ADD</Text>
                </TouchableHighlight>
            </View>
            <View>
            <FlatList
                data={this.todo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => 
                <View   style={style.list}>
                <Text style={style.textList}> {item.items} </Text>         
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
        backgroundColor: 'red',
        borderRadius: 8,
        marginHorizontal: 5,
        textAlign: 'center'
    },

    list: {
        height: 46,
        backgroundColor:'white',
        borderRadius:8,
        borderWidth: 1,
        margin:6,
        padding:8
    },

    textList: {
        fontSize: 20
    }
})