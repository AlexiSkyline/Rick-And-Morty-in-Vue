import { createStore } from 'vuex'

export default createStore({
  state: {
    character: [],
    characterFilter: []
  },
  mutations: {
    setCharacters( state, payload ) {
      state.character = payload;
    },
    setCharactersFilter( state, payload ) {
      state.characterFilter = payload;
    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch( 'https://rickandmortyapi.com/api/character' );
        const data = await response.json();
      } catch (error) {
        console.log( error );
      }
    }
  },
  modules: {
  }
})
