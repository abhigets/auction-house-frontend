<template>
  <v-container fluid>
    <v-row>
      <v-col cols="col-lg-auto">
        <v-textarea
          name="input-7-2"
          label="Input your auctions"
          value=""
          hint="Enter new line after each auction"
          id="input"
          :clearable="true"
          :autofocus="true"
          rows="11"
          v-model="bid"
        ></v-textarea>
      </v-col>
      <v-col cols="col-xl-auto">
        <v-textarea
          outlined
          name="input-7-4"
          label="Sample auctions"
          value="10|1|SELL|toaster_1|10.00|20
12|8|BID|toaster_1|7.50
13|5|BID|toaster_1|12.50
15|8|SELL|tv_1|250.00|20
16
17|8|BID|toaster_1|20.00
18|1|BID|tv_1|150.00
19|3|BID|tv_1|200.00
20
21|3|BID|tv_1|300.00"
          id="sample"
          :readonly="true"
          :disabled="true"
          rows="11"
        ></v-textarea>
      </v-col>
    </v-row>
    <div>
      <v-btn id="submit-bid" small @click="submitBid">Submit Bid</v-btn>
    </div>
    <v-row>
      <v-col cols="col-lg-auto">
        <v-textarea
          name="input-7-2"
          value=""
          id="results"
          :readonly="true"
          :disabled="true"
          rows="3"
          v-model="results"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bid: "",
      results: ""
    };
  },
  methods: {
    async submitBid() {
      try {
        //this.$store.commit()
        const result = await this.$store.dispatch("send", this.bid);
        this.results = result;
      } catch (error) {
        console.log(error);
      }
    }
  }
  //  computed:{
  //   bid:{
  //     get() {
  //       return this.$store.state.bid
  //     },
  //     set(value){
  //       this.$store.commit('SET_BID', value)
  //     }
  //   }
  // }
};
</script>

<style></style>
