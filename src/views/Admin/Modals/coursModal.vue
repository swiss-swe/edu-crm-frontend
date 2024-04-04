<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <template v-slot:activator="{ props }">
        <v-button v-bind="props"> {{ t('admin.addCourse') }}</v-button>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New cours</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field label="Cours name*" v-model="cours_name"></v-text-field>
                <v-text-field label="Cours coast" v-model="cours_coast"></v-text-field>
                <v-text-field label="Cours period" v-model="course_period"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';
import VButton from '@/components/button.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const dialog = ref(false);
</script>
