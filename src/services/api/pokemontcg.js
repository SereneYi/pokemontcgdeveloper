import axios from 'axios'

export default {

    getCards() {

        return axios.get('https://api.pokemontcg.io/v1/cards').
        then(response => { 
            console.table(response.data.cards)
            return response.data.cards
        }) 

    },

    getCard( id ) {

        return axios.get('https://api.pokemontcg.io/v1/cards/' + id).
        then(response => { 
            console.table(response.data)
            return response.data
        }) 

    },

    getSearchCards( name ) {
        return axios.get('https://api.pokemontcg.io/v1/cards?name=' + name).
        then(response => { 
            console.table(response.data.cards)
            return response.data.cards
        }) 
    }
  
}