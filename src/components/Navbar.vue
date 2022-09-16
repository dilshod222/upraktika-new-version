

<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand ms-3" href="/">uPraktika</a>
      </div>
      <div class="collapse navbar-collapse" id="navbarCollapse" style="width: 100%;box-sizing: border-box">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/" title="Моя Панель" style="text-decoration: none;color: black;">
              <img src="../assets/home.png" style="width: 25px" alt="">
              <span class="ms-2">Моя Панель</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Учебный материал"
                        style="text-decoration: none;color: black;">
              <img src="../assets/book.png" style="width: 25px" alt="">
              <span class="ms-2">Учебный материал</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Тесты для практики"
                        style="text-decoration: none;color: black;">
              <img src="../assets/test_practice.png" style="width: 25px" alt="">
              <span class="ms-2">Тесты для практики</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Экзамены"
                        style="text-decoration: none;color: black;">
              <img src="../assets/certificate.png" style="width: 25px" alt="">
              <span class="ms-2">Экзамены</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Все новости"
                        style="text-decoration: none;color: black;">
              <img src="../assets/megaphone.png" style="width: 25px" alt="">
              <span class="ms-2">Все новости</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Отправить отзыв"
                        style="text-decoration: none;color: black;">
              <img src="../assets/chat.png" style="width: 25px" alt="">
              <span class="ms-2">Отправить отзыв</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/users" title="Пользователи"
                        style="text-decoration: none;color: black;">
              <img src="../assets/users.png" style="width: 25px" alt="">
              <span class="ms-2">Пользователи</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Добавить/Редактировать новость"
                        style="text-decoration: none;color: black;">
              <img src="../assets/megaphone2.png" style="width: 25px" alt="">
              <span class="ms-2">Добавить/Редактировать новость</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="обавить/Редактировать тему"
                        style="text-decoration: none;color: black;">
              <img src="../assets/drawer.png" style="width: 25px" alt="">
              <span class="ms-2">Добавить/Редактировать тему</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="обавить/Редактировать учебный материал"
                        style="text-decoration: none;color: black;">
              <img src="../assets/presentation.png" style="width: 25px" alt="">
              <span class="ms-2">Добавить/Редактировать учебный материал</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Добавить/Редактировать вопрос"
                        style="text-decoration: none;color: black;">
              <img src="../assets/edit.png" style="width: 25px" alt="">
              <span class="ms-2">Добавить/Редактировать вопрос</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Cоздать (ccылку) Practice quiz"
                        style="text-decoration: none;color: black;">
              <img src="../assets/quizpaper.png" style="width: 25px" alt="">
              <span class="ms-2">Cоздать (ccылку) Practice quiz</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink @click.native="clicklink" class="nav-link d-flex align-items-center" to="/about" title="Создать (ccылку) Exam"
                        style="text-decoration: none;color: black;">
              <img src="../assets/file.png" style="width: 25px" alt="">
              <span class="ms-2">Создать (ccылку) Exam</span>
            </RouterLink>
          </li>


        </ul>
      </div>

    </div>


  </nav>


</template>

<script>


import $ from "jquery";
export default {
  name: "Navbar",
  methods: {
    clicklink() {
      $('.navbar-collapse').removeClass('show');
    }
  }
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
  box-sizing: border-box;

  .navbar-brand {
    font-family: "Shadows Into Light", cursive;
    font-size: 30px;
    font-weight: bold;
    color: #1f4d79;;
  }
}

.collapse{
  overflow-y: scroll;
  position: relative;
  z-index: 2000;
  max-height: 90vh;

}

@media (min-width: 992px) {
  .navbar {
    .collapse {
      display: none !important;
    }
  }
}

@media (min-width: 300px) and (max-width: 992px) {
  .navbar {

  }
}


</style>