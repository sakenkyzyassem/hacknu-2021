<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Dashboard</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-fab vertical="bottom" horizontal="end">
                <ion-fab-button>
                    <ion-icon name="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-list>
                <ion-item v-for="(group, index) in groupsData" :key="index">
                    <ion-label>
                        Item {{ group }}
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonPage
} from '@ionic/vue';
import { add } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonContent, 
    IonFab, 
    IonFabButton,
    IonHeader, 
    IonIcon, 
    IonTitle, 
    IonToolbar,
    IonLabel,
    IonList,
    IonItem,
    IonPage
  },
  setup() {
        const groupsData: string[] = []
        for( let i = 0; i < 10; i++){
            groupsData.push('ubov')
        }

        return {
            add,
            groupsData
        }
  }
});
</script>