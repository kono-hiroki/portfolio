<template>
  <v-toolbar>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat>
        <router-link to="/">Top</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/profile">Profile</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/skill">Skill</router-link>
      </v-btn>
      <v-btn flat>
        <router-link to="/hobby">Hobby</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>