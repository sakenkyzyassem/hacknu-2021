<template>
    <ion-router>
        <ion-route url="/dashboard" component="dashboard"></ion-route>
        <ion-route url="/welcome" component="welcome"></ion-route>
    </ion-router>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import aituBridge from "@btsd/aitu-bridge";
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Default',
  components: {
      IonPage
  },
  methods: {
    async getData() {
        try {
            const data = await aituBridge.getMe();
            return data
            // if user is our: push('/main')
            // else push('/welcome')
        } catch (e) {
        console.log(e);
        }
    },
  },
  ionViewDidEnter() {
    console.log('Home page did enter');    
    const router = useRoute();
    if( this.getData() ) {
        this.$router.push('/dashboard')
    } else {
        this.$router.push('/welcome')
    }
  },
   
});
</script>