<template>
  <v-container class="fill-height" grid-list-lg>
    <v-layout row wrap>
      <v-flex sm4>
        <TasksList/>
      </v-flex>
      <v-flex sm4>
        <TasksList list="doing"/>
      </v-flex>
      <v-flex sm4>
        <TasksList list="done"/>
      </v-flex>
    </v-layout>
    <TaskAddNew/>
  </v-container>
</template>

<script>
export default {
  components: {
    TasksList: () => import('../components/TasksList.vue'),
    TaskAddNew: () => import('../components/TaskAddNew.vue'),
  },
  data() {
    return {
      name: 'ToDo',
    };
  },
};
</script>
