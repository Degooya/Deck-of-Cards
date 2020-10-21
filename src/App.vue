<template>
  <div class="view">
    <div class="stack">
      <vue-swing :config="config" ref="vueswing">
        <div v-for="card in deck" :key="card.value">
          <Card :suit="card.suit" :value="card.value" />
        </div>
      </vue-swing>
    </div>
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
        minThrowOutDistance: 50,
        maxThrowOutDistance: 300,
        maxRotation: 0,
      },
    };
  },
  async created() {
    this.deck = new Deck().deck;

    console.log(this.deck)
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

a {
  color: inherit;
  text-decoration: inherit;
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

.view {
  display: flex;
  flex-direction: column;
  -webkit-box-direction: normal;
  min-height: 100%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
}

.stack {
  width: 90px;
  height: 130px;
  background: #334d41;
  border-radius: 10px;
  position: relative;
}
</style>