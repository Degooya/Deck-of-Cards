<template>
  <div class="view">
    <header>
      <div class="header___wrapper">

      </div>
    </header>
    <main>
      <div class="stack">
        <vue-swing
          :config="config"
          ref="vueswing"
          @dragstart="onDragStart"
          @dragend="onDragEnd"
        >
          <div
            v-for="card in deck"
            :key="card.value + card.suit"
            class="card___container"
          >
            <Card :suit="card.suit" :value="card.value" />
          </div>
        </vue-swing>
      </div>
    </main>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Deck from "./library/Deck.js";

import VueSwing from "vue-swing";

export default {
  name: "App",
  components: {
    Card,
    VueSwing,
  },
  data() {
    return {
      deck: [1],
      config: {
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.DOWN,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT,
        ],
        minThrowOutDistance: 250,
        maxThrowOutDistance: 250,
        maxRotation: 0,
      },
    };
  },
  async created() {
    this.deck = new Deck().deck;
  },
  methods: {
    onDragStart({ target }) {
      target.classList.add("card-dragged");
    },
    onDragEnd({ target }) {
      target.classList.remove("card-dragged");
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
}

html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  min-height: 100%;
  cursor: default;
  overflow: hidden;
  background: #45a173;
}

/* main*/

.view {
  display: flex;
  flex-direction: column;
  -webkit-box-direction: normal;
  position: relative;
  min-height: 100%;
  height: 100%;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  overflow: hidden;
}

/* Header */

header {
  background: #334d41;
}

.header___wrapper {
  padding: 8px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  min-width: -webkit-min-content;
  min-width: min-content;
}

.header___column {
  height: 20px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-user-select: none;
}

/* Components*/

.stack {
  width: 90px;
  height: 130px;
  background: #334d41;
  border-radius: 10px;
  position: relative;
}

.card___container {
  cursor: grab;
  cursor: -webkit-grab;
  cursor: -moz-grab;
}

.card-dragged {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
</style>