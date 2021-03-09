<template>
  <div class="home">
    <TodoWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoWrapper from '@/components/TodoWrapper'

export default {
  name: 'Home',
  components: {
    TodoWrapper
  }
}
</script>
<style scoped>
.home-wrapper {
  max-width: 500px;
  margin: 0 auto;
}
</style>
