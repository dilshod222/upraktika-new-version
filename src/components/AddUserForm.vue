<template>
  <div class="container">
    <div class="row">
      <div class="col-10 offset-1">
        <form>
          <label for="">Name
            <input class="form-control" type="text" placeholder="Name">
          </label>
          <label for="">Email
            <input class="form-control" type="text" placeholder="Email">
          </label>
          <label for="">Password
            <input class="form-control" type="password" placeholder="password">
          </label>
          <label for="">Manager
            <input class="form-control" type="text" placeholder="Manager">
          </label>
          <label for="">Department
            <select name="" id="">
              <option>Office1</option>
              <option>Office2</option>
              <option>Office3</option>
            </select>
          </label>

          <input type="submit" value="OK">
          <button type="button">Cancel</button>

        </form>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUserForm"
}
</script>

<style scoped>

</style>