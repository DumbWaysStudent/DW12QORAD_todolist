/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Todo from './src/Todo';
import Addtodo from './src/Addtodo';
import DeleteTodo from './src/DeleteTodo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DeleteTodo);
