import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilters: []
  },
  mutations: {
    setCharacters( state, payload ) {
      state.characters = payload;
    },
    setCharactersFilters( state, payload ) {
      state.charactersFilters = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch( 'https://rickandmortyapi.com/api/character' );
        const data = await response.json();
        commit( 'setCharacters', data.results );
        commit( 'setCharactersFilters', data.results );
        console.log( data );
      } catch (error) {
        console.log( error );
      }
    }
  },
  modules: {
  }
})
