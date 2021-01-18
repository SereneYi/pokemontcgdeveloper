<template>
  <div>
    <div class="header-item">
      <b-navbar toggleable="lg" variant="faded" type="light">
        <b-navbar-brand href="#">
          <router-link to="/">
            <div class="logo-word">
              <img
                src="https://pokemontcg.io/static/media/logo.a09cc1c3.png"
                class="logo d-inline-block align-top"
                alt="pikachu"
              />
              <strong>Pokémon TCG Developers</strong>
            </div>
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item router-link to="/">Home</b-nav-item>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Documentation</b-nav-item>
            <b-nav-item href="#">Featured App</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-item {
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.logo-word {
  font-size: medium;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: black;
}

.logo {
  height: auto;
  max-width: 100%;
  max-height: 1.75rem;
  padding: 0 5px;
}
</style>