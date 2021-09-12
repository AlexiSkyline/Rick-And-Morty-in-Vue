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
      } catch (error) {
        console.log( error );
      }
    },
    filterByStatus({ commit, state }, status ) {
      const results = state.characters.filter((characters) => {
        return characters.status.includes( status );
      });
      commit( 'setCharactersFilters', results );
    }
  },
  modules: {
  }
})
