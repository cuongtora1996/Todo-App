import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Button,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

import {connect} from 'react-redux';
import TodoItem from '../../components/TodoItem';
import operations from '../../redux/todo/operations';
import Header from '../../components/Header';

class TodoPage extends Component {
  constructor(props) {
    super(props);
    this.onCheckComplete = this.onCheckComplete.bind(this);
    this.renderRightAction = this.renderRightAction.bind(this);
    this.hideAddModal = this.hideAddModal.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.state = {
      addModalVisible: false,
      todoText: '',
      todoError: '',
    };
  }

  onCheckComplete(item) {
    this.props.actions.updateTodoState(item.id);
  }

  renderRightAction() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({addModalVisible: true});
        }}
        style={styles.addWrapper}>
        <View style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </View>
      </TouchableOpacity>
    );
  }

  onAddTodo() {
    const text = this.state.todoText;
    if(text.trim().length === 0) {
      this.setState({todoError: "Todo is required"})
      return;
    }
    this.props.actions.addTodo(text);
    this.setState({todoText: "", todoError: ""})
    this.hideAddModal();
  }
  hideAddModal() {
    this.setState({addModalVisible: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="To do" rightAction={this.renderRightAction} />
        <FlatList
          data={this.props.todos}
          keyExtractor = { (item, index) => index.toString() }
          renderItem={({item, index}) => (
            <TodoItem
              item={{...item, onCheckComplete: this.onCheckComplete, onRemove: this.props.actions.removeTodo}}
            />
          )}
        />
        <Modal
          style={{flex: 1, backgroundColor: 'rgba(1, 1, 1, 0.55)', margin: 0}}
          visible={this.state.addModalVisible}
          onBackButtonPress={this.hideAddModal}
          onBackdropPress={this.hideAddModal}>
          <View style={styles.addModal}>
            <Text style={styles.addModalTitle}>Add</Text>
            <TextInput
              style={styles.addInput}
              value={this.state.todoText}
              onChangeText={text => this.setState({todoText: text})}
            />
            <Text style={styles.error}>{this.state.todoError}</Text>
            <View style={styles.buttonWrapper}>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  color="#AEAEAE"
                  onPress={this.hideAddModal}
                />
              </View>
              <View style={styles.button}>
                <Button style={styles.button} title="Confirm" color="#00AEA0" 
                  onPress={this.onAddTodo}
                  />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 16,
    justifyContent: 'center',
  },
  addButton: {
    padding: 8,
  },
  addText: {
    color: '#00AEA0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addModal: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 30,
    marginHorizontal: 18,
    backgroundColor: '#fff',
  },
  addInput: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    width: '100%',
    height: 48,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  addModalTitle: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 12,
  },
  error: {
    marginVertical: 12,
    color: '#CC3300',
    fontSize: 16,
    alignSelf: 'center'
  },
  button: {
    marginHorizontal: 10,
  },
  buttonWrapper: {
    marginTop: 16,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    updateTodoState: id => dispatch(operations.updateTodoState(id)),
    removeTodo: id => dispatch(operations.removeTodo(id)),
    addTodo: text => dispatch(operations.addTodo(text))
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
