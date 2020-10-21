<template>
  <div :class="`card ${suit}`">
    <div class="card___wrapper top">
      <div class="card___content---small value">{{ value }}</div>
      <div class="card___content---small suit">{{ suit }}</div>
    </div>
    <div class="card___wrapper center">
      <div class="card___value">{{ suit }}</div>
    </div>
    <div class="card___wrapper bottom">
      <div class="card___content---small value-rotated value">{{ value }}</div>
      <div class="card___content---small value-rotated suit">{{ suit }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    value: String,
    suit: String,
  },
};
</script>

<style lang="scss">

.card-dragged .card{
  box-shadow: 0 10px 20px rgba(3, 23, 70, .09);
	transition: box-shadow .4s, -webkit-box-shadow .4s;
}

.card {
  display: flex;
  flex-flow: column;
  width: 90px;
  height: 130px;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #ececec;
  box-sizing: border-box;
  overflow: hidden;
  padding: 2px;
  font-family: sans-serif;
  transition: box-shadow .3s, -webkit-box-shadow .4s;

  &.♠,
  &.♣ {
    color: #373737;
  }

  &.♥,
  &.♦ {
    color: #ed5d52;
  }

  & .value-rotated {
    transform: rotate(180deg);
    text-align: left;
  }
}



.card___wrapper {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  & .card___value {
    text-align: center;
  }

  &.center {
    font-size: 45px;
  }

  & .card___content---small {
    flex: 1 1 auto;

    &.value {
      font-size: 11.5px;
      line-height: 10px;
      padding-left: 2px ;
    }

    &.suit {
      line-height: 14px;
      font-size: 12px;
    }
  }
}

</style>
