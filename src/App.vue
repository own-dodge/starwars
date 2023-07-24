<template>
  <div class="wapper">
    <HeaderComponent/>
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>
