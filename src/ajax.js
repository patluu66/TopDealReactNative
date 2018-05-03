


const apiHost = 'https://bakesaleforgood.com'



export default {
	async fetchInitialDeals() {

		try {
		    let response = await fetch('https://bakesaleforgood.com/api/deals');
		    let responseJson = await response.json();
		    return responseJson;
		  } catch (error) {
		    console.error(error);
		  }
	
	}
}