import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { priceDisplay } from '../util';
import PropTypes from 'prop-types';

class DealItem extends React.Component {
  static propTypes = {
    deals: propTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };


  render() {
    const { deal } = this.props;

    return (
      
       <TouchableOpacity style={styles.deal} onPress={this.handlePress}>

        <Image source={{ uri: deal.media[0] }} style={styles.image}/>
        
        <View style={styles.info}>

          <Text style={styles.title}>{ deal.title}</Text>
          <Text>{ deal.cause.name}</Text>
          <Text style={styles.price}>{ priceDisplay(deal.price) }</Text>
         
          
        </View>
        
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
  },
  deal: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

});


export default DealItem;