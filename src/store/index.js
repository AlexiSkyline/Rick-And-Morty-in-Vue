import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters( state, payload ) {
      state.characters = payload;
    },
    setCharactersFilters( state, payload ) {
      state.characterFilters = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch( 'https://rickandmortyapi.com/api/character' );
        const data = await response.json();
        commit( 'setCharacters', data );
        commit( 'setCharactersFilters', data );
      } catch (error) {
        console.log( error );
      }
    }
  },
  modules: {
  }
})
