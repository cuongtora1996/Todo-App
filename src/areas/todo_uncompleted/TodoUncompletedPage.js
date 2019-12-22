import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import TodoItem from '../../components/TodoItem';
import operations from '../../redux/todo/operations';
import Header from '../../components/Header';

class TodoUncompletedPage extends Component {
  constructor(props) {
    super(props);
    this.onCheckComplete = this.onCheckComplete.bind(this);
  }

  onCheckComplete(item) {
    this.props.actions.updateTodoState(item.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Uncompleted" />
        <FlatList
          data={this.props.todos}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({item, index}) => (
            <TodoItem
              item={{...item, onCheckComplete: this.onCheckComplete, onRemove: this.props.actions.removeTodo}}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  todos: state.todo.todos.filter(item => !item.isCompleted),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    updateTodoState: id => dispatch(operations.updateTodoState(id)),
    removeTodo: id => dispatch(operations.removeTodo(id)),

  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoUncompletedPage);
