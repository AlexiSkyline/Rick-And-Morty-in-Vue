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
        console.log( data.result );
      } catch (error) {
        console.log( error );
      }
    },
    filterByStatus({ commit, state }, status ) {
      const results = state.characters.filter((characters) => {
        return characters.status.includes( status );
      });
      commit( 'setCharactersFilters', results );
    },
    filterByName({ commit, state }, name ) {
      const formatName = name.toLowerCase();
      const results = state.characters.filter( (character) => {
        const characterName = character.name.toLowerCase();

        if( characterName.includes( formatName ) ) {
          return character;
        }
      });
      commit( 'setCharactersFilters', results );
    }
  },
  modules: {
  }
})
