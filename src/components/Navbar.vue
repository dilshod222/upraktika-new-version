<template>

    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">uPraktika</a>
      </div>

    </nav>


</template>

<script>

export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 2px solid silver;
  box-shadow: 10px 0 10px silver;
  .navbar-brand {
   font-family: "Shadows Into Light", cursive;
    font-size: 30px;
    font-weight: bold;
    color: #1f4d79;;
  }
}
</style>