<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import AddUser from "./components/AddUserModal.vue";
import {ref} from "vue";
import AddUserForm from "./components/AddUserForm.vue";

const is_expanded = ref(false)

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}

</script>

<template>

  <Navbar />


  <div class="d-flex flex-nowrap">

    <div class="sidebar" :class="`${is_expanded && 'is-expanded'}`">
      <div class="toggle">
        <button class="btn p-1 m-0" @click="ToggleMenu">
          <img src="./assets/next.png" alt="" style="width:25px; color: white">
        </button>
      </div>
      <Sidebar />
    </div>

    <div class="main w-100">
      <div class="container">
          <RouterView />
        </div>
    </div>
  </div>


</template>



<style lang="scss" scoped>
:root {
  --sidebar-big-width:350px;
  --sidebar-small-width:50px
}


.main {
  overflow-x: scroll;
  width: 100%;
  --sidebar-small-width: red(blue);
}


.sidebar {
  background-color: white;;
  position: fixed;
  top: 73px;
  left: 0;
  z-index: 111;
  height: 100vh;
  padding: 10px 0 0 10px;
  border-right: 2px solid silver;
  box-shadow: 0 10px 30px #ded9d9;
}

@media (min-width: 991px) {
  .sidebar {
    width: 360px;
  }
  .sidebar.false {
    .toggle {
      display: flex;
      justify-content: end;
      transform: translateX(-10px);
    }
    button {
      transform: rotate(180deg);
    }
    &+.main {
      margin-left: 360px;
    }
  }
  .sidebar.is-expanded {
    width: 60px;
    &+.main {
      margin-left: 60px;
      .container {
        .content {
          margin-left: 60px;
          background-color: red;
        }
      }
    }
  }
}

@media (min-width: 300px) and (max-width: 991px) {
  .sidebar {
    display: none;
  }
  .sidebar.is-expanded {
    width: 300px;
    &+.main {
    }
    .toggle {
      display: flex;
      justify-content: end;
      transform: translateX(-10px);
      button {
        transform: rotate(180deg);
      }
    }
  }
  .sidebar.false {
    width: 60px;
    &+.main {
    }
  }
}
</style>
