<template>
    <div class="sidebar-links d-flex flex-column">
      <RouterLink to="/" title="Моя Панель">
        <img src="../assets/home.png" alt="">
        <span>Моя Панель</span>
      </RouterLink>
      <RouterLink to="/about" title="Учебный материал">
        <img src="../assets/book.png" alt="">
        <span>Учебный материал</span>
      </RouterLink>
      <RouterLink to="/about" title="Тесты для практики">
        <img src="../assets/test_practice.png" alt="">
        <span>Тесты для практики</span>
      </RouterLink>
      <RouterLink to="/about" title="Экзамены">
        <img src="../assets/certificate.png" alt="">
        <span>Экзамены</span>
      </RouterLink>
      <RouterLink to="/about" title="Все новости">
        <img src="../assets/megaphone.png" alt="">
        <span>Все новости</span>
      </RouterLink>
      <RouterLink to="/about" title="Отправить отзыв">
        <img src="../assets/chat.png" alt="">
        <span>Отправить отзыв</span>
      </RouterLink>
      <RouterLink to="/users" title="Пользователи">
        <img src="../assets/users.png" alt="">
        <span>Пользователи</span>
      </RouterLink>
      <RouterLink to="/about" title="Добавить/Редактировать новость">
        <img src="../assets/megaphone2.png" alt="">
        <span>Добавить/Редактировать новость</span>
      </RouterLink>
      <RouterLink to="/about" title="Добавить/Редактировать тему">
        <img src="../assets/drawer.png" alt="">
        <span>Добавить/Редактировать тему</span>
      </RouterLink>
      <RouterLink to="/about" title="Добавить/Редактировать учебный материал">
        <img src="../assets/presentation.png" alt="">
        <span>Добавить/Редактировать учебный материал</span>
      </RouterLink>
      <RouterLink to="/about" title="Добавить/Редактировать вопрос">
        <img src="../assets/edit.png" alt="">
        <span>Добавить/Редактировать вопрос</span>
      </RouterLink>
      <RouterLink to="/about" title="Создать (ccылку) Practice quiz">
        <img src="../assets/quizpaper.png" alt="">
        <span>Создать (ccылку) Practice quiz</span>
      </RouterLink>
      <RouterLink to="/about" title="Создать (ccылку) Exam">
        <img src="../assets/file.png" alt="">
        <span>Создать (ccылку) Exam</span>
      </RouterLink>
    </div>
</template>

<script>
import {RouterLink} from 'vue-router'

export default {
  name: "Sidebar",
}


</script>

<style scoped lang="scss">


a {
  display: flex;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 6px;
  width: 100% !important;
  text-decoration: none;
  color: black;

  span {
    margin-left: 10px;
    font-size: 14px;
  }

  img {
    width: 25px;
  }

  &:hover {
    color: #8faef3;
  }
}

.sidebar.false {
  a  {

  }
}



@media (min-width: 300px) and (max-width: 991px){
  .sidebar.false {
    .sidebar-links {
      a {
        span {
          display: none;
        }
      }
    }
  }
  .sidebar.is-expanded {
    .sidebar-links {
      a {
        span {
          display: block;
        }
      }
    }
    .toggle {
      display: flex;
      justify-content: end;
      transform: rotate(180deg);
    }
  }
  .toggle{
    display: flex!important;
  }
}

.sidebar.is-expanded {
  a {
    span {
      display: none ;
    }
  }
}



</style>