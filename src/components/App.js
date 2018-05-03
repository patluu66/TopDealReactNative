import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ajax from '../ajax';
// import { fetchInitialDeals } from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';



class App extends React.Component {

  state = {
    deals: [],
    currentDealID: null,
  };

  async componentDidMount(){

    const deals = await ajax.fetchInitialDeals();
    console.log(deals);
    this.setState({ deals });

  }

  setCurrentDeal = (dealId = this.state.deals.key) => {
    this.setState({
      currentDealID: dealId
    });
  };

  currentDeal = () => {
    return this.state.deals.find(
    
      (deal) => deal.key === this.state.currentDealID

    );
  };

  render() {
    if (this.state.currentDealID) {
      return <DealDetail deal={this.currentDeal()} />
    }

    if (this.state.deals.length > 0) {
      return (<DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />)
    }

    return (
      <View style={styles.container}>
        
        <Text style={styles.header}>Top Deal</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;