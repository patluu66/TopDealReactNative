import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import propTypes from 'prop-types';
import DealItem from './DealItem';
import PropTypes from 'prop-types';


class DealList extends React.Component {
  static propTypes = {
    deals: propTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      
      <View style={styles.list}>

        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <DealItem deal={item} onPress={this.props.onItemPress} />}
        />
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 40,
  },

});


export default DealList;