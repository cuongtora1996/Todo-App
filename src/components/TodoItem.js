import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class TodoItem extends Component {
  render() {
    const {text, isCompleted, onCheckComplete, onRemove} = this.props.item;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => onCheckComplete && onCheckComplete(this.props.item)}
          style={styles.checkboxWrapper}>
          <View style={styles.checkbox}>
            <View
              style={[
                styles.check,
                {
                  backgroundColor: isCompleted ? '#000' : '#FFF',
                },
              ]}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity
          onPress={() => onRemove && onRemove(this.props.item.id)}
          style={styles.deleteWrapper}>
          <View style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: "#AEAEAE",
    borderBottomWidth: 0.5,
  },
  checkboxWrapper: {
    flexShrink: 1,
    marginRight: 12,
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    height: 12,
    width: 12,
  },
  text: {
    flexGrow: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  deleteWrapper: {
    flexShrink: 1,
    alignSelf: 'flex-end',
  },
  deleteButton: {
    backgroundColor: '#CC3300',
    padding: 8,
    borderRadius: 8,
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default TodoItem;
