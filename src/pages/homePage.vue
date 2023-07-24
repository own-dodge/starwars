<template>
   <div style="text-align: center; margin: 2rem 0;">
    <h1 class="title">Star Wars</h1>
    <p>
      TypeScript, Services, Composition API, Rest API
      <router-link to="/about" class="link" style="text-decoration: underline;">and more</router-link>
    </p>
  </div>
  <div v-if="loading">
    <SpinnerUIComponent/>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>height</td>
          <td>mass</td>
          <td>birth year</td>
          <td>gender</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in persons" :key="index">
          <td>{{ person.name }}</td>
          <td>{{ person.height }}</td>
          <td>{{ person.mass }}</td>
          <td>{{ person.birth_year }}</td>
          <td>{{ person.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import DataServices from '@/services/DataServices';
import IPerson from '@/types/IPerson';
import SpinnerUIComponent from '@/components/UI/SpinnerUIComponent.vue'

export default {
  components: { SpinnerUIComponent },
  setup() {
    const loading = ref(true as boolean);
    const persons = ref([] as Array<IPerson>);

    const getPeople = () => {
      DataServices.getAll()
        .then(res => {
          persons.value = res.data.results;
          loading.value = false;
        })
        .catch((e: Error) => console.log(e))
    }
    onMounted(() => getPeople())

    return {
      loading,
      persons,
    }
  }
}
</script>