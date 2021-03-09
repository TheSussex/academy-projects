<template>
  <div class="home">
    <b-container >
      <b-list-group>
        <b-list-group-item v-for="item in todo" :key="item.id">
          <div class="d-flex item">
            <div>
            {{ item.title }}
            </div>
            <div class="actions">
              <b-button variant="primary" class="mL-1">View</b-button>
              <b-button variant="primary-outline" class="mr-1">Edit</b-button>
              <b-button variant="danger" class="mL-1">Delete</b-button>
            </div>
          </div>        
        </b-list-group-item>
      </b-list-group>
    </b-container>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
