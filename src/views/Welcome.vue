<template>
    <ion-page>
        <ion-alert>
            Welcome, you are invited here by {{ data ? data.name : ''}}
        </ion-alert>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import aituBridge from "@btsd/aitu-bridge";

export default defineComponent({
  name: 'Welcome',
  components: {},
  async data() {
    try {
      const data = await aituBridge.getMe();
      return { data };
    } catch (e) {
      console.log(e);
    }
  }
});
</script>