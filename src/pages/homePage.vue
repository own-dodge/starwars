<template>
  <div class="md-body">
    <h1>hello home</h1>
    <p>Edit me</p>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import DataServices from '@/services/DataServices';
import ResponseData from '@/types/ResponseData';

export default {
  setup() {
    const getPeople = () => {
      DataServices.getAll()
        .then((res:ResponseData) => console.log(res.data))
        .catch((e: Error) => console.log(e))
    }
    onMounted(() => getPeople())
  }  
}
</script>