<template>
    <ion-alert>
        Welcome, you are invited here by {{ data?.name ?? ''}}
    </ion-alert>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, onBeforeMount } from 'vue';
import aituBridge from "@btsd/aitu-bridge";

export default defineComponent({
  name: 'Dashboard',
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