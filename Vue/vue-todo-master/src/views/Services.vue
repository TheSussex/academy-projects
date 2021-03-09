<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Services</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TodoWrapper",
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Wake Up",
          isComplete: false
        },
        {
          id: 2,
          title: "Eat",
          isComplete: false
        },
        {
          id: 3,
          title: "Code",
          isComplete: false
        },
        {
          id: 4,
          title: "Rinse and Repeat",
          isComplete: false
        }
      ]
    }
  }
}
</script>

<style scoped></style>