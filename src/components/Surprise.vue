<template>
  <div class="surprise">
    <audio id="myAudio">
      <source src="/static/test.mp3" type="audio/mpeg">
    </audio>
    <div id="qBackDrop" v-if=showBackDrop></div>
  </div>
</template>

<script>

export default {
  name: 'Surprise',
  data () {
    return {
      showBackDropTest: false,
      showBackDrop: false
    }
  },
  methods: {
    displayBackDrop: function () { this.showBackDrop = true }
  },
  mounted () {
    const that = this

    setTimeout(function () {
      document.getElementById('myAudio').play()
      that.showBackDrop = true
    }, 10000)
  }
}
</script>

<style scoped>
  #qBackDrop {
    background-color: rgb(0, 0, 0, 0.7);
    background-image: url('/static/maxresdefault.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    position: fixed;
    overflow-y: scroll;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 100%;
    height: 100%;
  }
  .iCenter {
    position: relative;
    margin: 30px 15px 20px 15px;
    top: 35%;
    width: 400px;
    margin: auto;
    /* padding: 20px 15px 20px 15px; */
    /* border: 3px solid green;  */
  }
  #qBackDropTest {
    background-color: rgb(0, 0, 0, 0.9);
    color: white;
    position: fixed;
    overflow-y: scroll;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 100%;
    height: 100%;
  }

  .high01 {
    color:tomato;
  }

  .high02 {
    color:slateblue;
    font-weight: bold;
  }

  .high03{
    font-size: 0.8em;
  }

  .high04{
    font-size: 0.7em;
  }
  .high05{
    font-size: 0.6em;
  }
</style>
