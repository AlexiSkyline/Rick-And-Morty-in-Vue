<template>
    <section>
        <div class="charecters">
            <div class="charecters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character"/>
            </div>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import CardCharacter from '@/components/CardCharacter';
export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore();
        const characters = computed( () => {
            return store.state.charactersFilters;
        });
        onMounted( () => {
            store.dispatch('getCharacters');
        });

        return {
            characters
        }
    },
}
</script>

<style>
.charecters {
    display: grid;
    grid-template-columns: repeat( 3, 1fr );
    gap: 3rem;
    margin: 3rem 0;   
}

</style>