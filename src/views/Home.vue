<template>
  <div class="home">
<Carousel></Carousel>
<Services></Services>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '../components/Carousel.vue';
import Services from '../components/Services.vue';

export default {
  name: 'Home',
  components: {
    Carousel,
    Services,
  },
};
</script>
<style scoped>

</style>
