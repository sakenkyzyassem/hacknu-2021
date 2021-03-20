<template>
  <ion-app>
    <ion-router-outlet>
    </ion-router-outlet>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import aituBridge from "@btsd/aitu-bridge";

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  methods: {
    async getData() {
        try {
            const data = await aituBridge.getMe();
            console.log(data)
            const phone = await aituBridge.getPhone();
            console.log(phone)
            return data
        } catch (e) {
            console.log(e);
        }
    },
  },
  ionViewDidEnter() {
    console.log('Home page did enter');    
    if( this.getData() ) {
        this.$router.push('/dashboard')
    } else {
        this.$router.push('/welcome')
    }
  },
});
</script>