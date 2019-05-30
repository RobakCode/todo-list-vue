<template>
  <v-flex xs12 mb-2>
    <v-card @click="dialog = true">
      <v-card-title>
        <div>{{task.title}}</div>
      </v-card-title>
    </v-card>

    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-card-title>
          <div>{{task.title}}</div>
        </v-card-title>
        <v-card-text>{{task.description}}</v-card-text>
        <v-card-actions>
          <v-btn
            v-if="list !== 'todo'"
            color="amber darken-1"
            flat
            @click="moveTask('todo')"
          >Move to ToDo</v-btn>
          <v-btn
            v-if="list !== 'doing'"
            color="blue darken-2"
            flat
            @click="moveTask('doing')"
          >Move to Doing</v-btn>
          <v-btn
            v-if="list !== 'done'"
            color="green darken-1"
            flat
            @click="moveTask('done')"
          >Move to Done</v-btn>
          <v-btn color="error darken-1" flat @click="removeTaskId()">Remove</v-btn>
          <v-spacer/>
          <v-btn color="error darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    task: {
      type: Object,
      default: () => {},
    },
    list: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(['taskMoveTo', 'removeTask']),
    moveTask(newList) {
      this.taskMoveTo({ list: this.list, newList, id: this.task.id });
    },
    removeTaskId() {
      this.removeTask({ list: this.list, id: this.task.id });
    },
  },
};
</script>
