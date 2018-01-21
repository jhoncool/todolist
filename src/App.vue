<template>
  <div id="app">  
    <div class="container">
      <div class="row">
        <nav class="col-lg-3 main-menu">
          <ul class="nav flex-column">
            <li class="main-menu__nav-item nav-item active">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="home" />
                <span class="main-menu__text">
                  Main
                </span>
              </a>
            </li>
            <li class="main-menu__nav-item nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="plus-square" />
                <span class="main-menu__text">
                  Add Category
                </span>                
              </a>
            </li>
            <li class="main-menu__nav-item nav-item">
              <a class="nav-link disabled main-menu__link-header" href="#">
                <font-awesome-icon icon="book" />
                <span class="main-menu__text">
                  ToDo lists:
                </span>                
              </a>
              <ul class="nav flex-column submenu">
                <li class="submenu__nav-item nav-item">
                  <a class="nav-link active" href="#">
                    <font-awesome-icon icon="caret-right" size="xs" class="submenu__icon--caret" />
                    Default
                  </a>
                </li>
                <li class="submenu__nav-item nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon icon="caret-right" size="xs" class="submenu__icon--caret" />
                    Programming
                  </a>
                </li>
                <li class="submenu__nav-item nav-item">
                  <a class="nav-link" href="#">
                    <font-awesome-icon icon="caret-right" size="xs" class="submenu__icon--caret" />
                    Live
                  </a>
                </li>
              </ul>           
            </li>
          </ul>
        </nav>
        <main role="main" class="col-lg-9">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style>
#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
.main-menu {
  position: relative;
}
.main-menu__text {
  display: inline-block;
  margin-left: 5px;
}
.main-menu__nav-item {
  position: relative;
  border: 1px solid rgba(0,0,0,.125);
  margin-bottom: -1px;
}
.main-menu__nav-item.active {
  background-color: #f2f7fa;
}
.main-menu__nav-item.active:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 41px;
  width: 3px;
  max-width: 3px;
  overflow: hidden;
  background-color: #4f90c2;
}
.main-menu__nav-item:first-child {
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}
.main-menu__nav-item:last-child {
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
  margin-bottom: 0;
}
.main-menu__link-header {
  border-bottom: 1px dotted rgba(0,0,0,.125);
}
.submenu {
  margin-left: 24px;
  position: relative;
}
.submenu:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  border: 1px dotted;
  border-width: 0 0 0 1px;
  border-color: rgba(0,0,0,.125);
}
.submenu__nav-item {
  position: relative;
}
.submenu__nav-item:before {
  content: "";
  display: block;
  width: 10px;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 20px;
  border: 1px dotted;
  border-width: 1px 0 0;
  border-color: rgba(0,0,0,.125);
}
.submenu__icon--caret {
  position: absolute;
  left: 0px;
  top: 14px;
  display: none;
}
.submenu__nav-item:hover .submenu__icon--caret {
  display: inline-block;
}
</style>
