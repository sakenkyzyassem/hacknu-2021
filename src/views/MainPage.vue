<template>
    <div>
        START PAGE
        {{data?.name ?? 'a'}}
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import aituBridge from "@btsd/aitu-bridge";
export default defineComponent({
  name: "MainPage",
  components: {},
  methods: {
  },
  async data() {
    try {
      let data = null;
      if(aituBridge.isSupported()) {
          data = await aituBridge.getMe();
      }
    //   console.log(data);
    //   if (data) {
    //       console.log('here')
    //       this.$router.push('/dashboard');
    //   } else {
    //       this.$router.push('/welcome');
    //   }
      return { data };
    } catch (e) {
      console.log(e);
    }
  },
});
</script>
<style>
</style>