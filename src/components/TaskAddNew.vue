<template>
  <div class="button-add">
    <v-btn fab dark color="primary" class="button-add" @click="dialog = true">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">Add new task</v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field v-model="title" label="Title"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-textarea v-model="description" label="Description"></v-textarea>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" flat @click="cancelAdd()">Cancel</v-btn>
          <v-btn color="success darken-1" flat @click="addNewTask()">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      title: '',
      description: '',
    };
  },
  methods: {
    ...mapActions(['taskAddNew']),
    addNewTask() {
      this.taskAddNew({ title: this.title, description: this.description });
      this.cancelAdd();
    },
    cancelAdd() {
      this.dialog = false;
      this.title = '';
      this.description = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.button-add {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
