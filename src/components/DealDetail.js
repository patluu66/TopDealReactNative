import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import propTypes from 'prop-types';
import { priceDisplay } from '../util';


class DealDetail extends React.Component {
  static propTypes = {
    deals: propTypes.array.isRequired,
  };

  render() {
    const { deal } = this.props;

    return (
      
       <View style={styles.deal}>

        <Image 
          source={{ uri: deal.media[0] }} 
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{ deal.title}</Text>
          <Text>{ deal.cause.name}</Text>
          <Text style={styles.price}>{ priceDisplay(deal.price) }</Text>
          <Button
            title="Buy Item"
            color="red"
          />          
        </View>
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
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
    marginTop: 50,
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


export default DealDetail;