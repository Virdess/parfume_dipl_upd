<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="playCircle" />
            <ion-label>Listen now</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="radio" href="/checkout">
            <ion-icon :icon="radio" />
            <ion-label>Radio</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="library" href="/blogs">
            <ion-icon :icon="library" />
            <ion-label>Library</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/contacts">
            <ion-icon :icon="search" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { playCircle, radio, library, search } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          playCircle,
          radio,
          library,
          search,
        };
      },
    };
  </script>