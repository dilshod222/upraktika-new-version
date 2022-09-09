<template>
  <div class="container">
    <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#modal">
      Add New user
    </button>

    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Typing information of new user </h5>
            <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-12">

                      <label for="name">Name</label>
                      <input required="required" :value="name"
                             @input="name=$event.target.value"
                             id="name"
                             class="form-control w-100"
                             type="text">

                    <label for="email">Email</label>
                      <input required :value="email"
                             @input="email=$event.target.value"
                             id="email"  class="form-control" type="email">

                      <label for="password">Password</label>
                      <input required :value="password"
                             @input="password=$event.target.value"
                             id="password" class="form-control" type="password">

                      <label for="manager">Manager</label>
                      <input required :value="manager"
                             @input="manager=$event.target.value"
                             id="manager" class="form-control" type="text">

                  <label for="department">Department</label>
                      <select required name="" id="department" class="form-control w-100"
                              :value="depatment" @select="depatment=$event.target.value">
                        <option>Office1</option>
                        <option>Office2</option>
                        <option>Office3</option>
                      </select>





                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" @click="createUser()">OK</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Parol</th>
        <th>Менеджер</th>
        <th>Действие</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td><input type="checkbox"></td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.manager }}</td>
        <td><a href="">EDIT</a></td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      users: [
        {id: 1, "name": "Anvar", "email": "d7877dilshod@gmail.com", "password": "dilshod123", 'manager': "Вася Иванов", "department":"BEK developer"},
        {id: 2, "name": "Dilshod", "email": "d7877dilshod@gmail.com", "password": "dilshod123", 'manager': "Вася Иванов", "department":"Front developer"},
      ],
      name : "",
      email: "",
      password : "",
      manager: "",
      depatment:""

    }
  },
  methods:{
    createUser(){
      const newUser = {
        id : Date.now(),
        name: this.name,
        email:this.email,
        password:this.password,
        manager: this.manager,
        department:this.depatment
      }
      this.users.push(newUser)
      this.name = '',
      this.email = '',
      this.password = '',
      this.manager = '',
      this.depatment = ''
    }
  }
}

</script>

<style scoped>

</style>