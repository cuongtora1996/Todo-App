import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';

const Header = ({title, rightAction}) => {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {rightAction && rightAction()}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      borderBottomColor: '#AEAEAE',
      borderBottomWidth: 1,
      paddingVertical: 8,
      marginBottom: 8
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#000',
      alignSelf: 'center'
    }
  });

  export default Header;