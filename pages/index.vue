<template>
  <v-layout
    align-content-space-around
    align-center
    justify-space-around
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <auction-box id='auction-box'/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuctionBox from '~/components/AuctionBox.vue'
export default {
  components: {
    AuctionBox,
  }
}
</script>
