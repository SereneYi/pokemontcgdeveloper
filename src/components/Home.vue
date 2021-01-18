<template>
  <div>
    <section class="section">
      <div class="container" style="mw-100">
        <div class="columns">
          <div class="Search-bar">
            <b-input-group name="Search" prepend="Pokemon Name" class="mt-3">
              <b-form-input
                v-on:keyup.enter="checkname"
                v-model="searchterm"
              ></b-form-input>
              <b-input-group-append>
                <b-button @click="checkname" variant="info">Search 1</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>

          <div>
            <input type="text" v-model="todotitle"/>
            <button @click="newtodo">Save</button>
          </div>

          <br />
          <div>
            <img
              class="loading"
              src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
              v-if="loading"
            />
          </div>

          <div class="pkmcard">
            <b-container class="bv-example-row">
              <a v-for="card in cards" :key="card.id">
                <router-link :to="`/card/${card.id}`">
                  <img :src="card.imageUrl" />
                </router-link>
              </a>
            </b-container>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PokemonAPI from "@/services/api/pokemontcg";
// import axios from "axios";

export default {


  data() {
    return {
      loading: true,
      cards: [],
      searchterm: "",
      todotitle: "",
    };
  },
  methods: {
    checkname() {
      this.loading = true;
      PokemonAPI.getSearchCards(this.searchterm)
        .then((cards) => {
          this.cards = cards;
        })
        .catch((error) => console.log(error))
        .finally(() => {
          this.loading = false;
        });
    },
  },

  //   newtodo() {


  //       axios.post('http://localhost:21021/api/services/app/Todo/Create', {
  //   "title": this.todotitle,
  // "creationTime": "2021-01-14T09:30:39.213Z",
  // "state": 0
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  //   },
  // },
  created() {
    PokemonAPI.getCards()
      .then((cards) => {
        this.cards = cards;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style>
.section {
  padding-bottom: 48px;
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
}
.container {
  margin-left: 63px;
  margin-right: 63px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: block;
  position: relative;
}

.div {
  display: flex;
}

.pkmcard .img-hvr {
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
}

.pkmcard {
  text-align: center;
}

.pkmcard img {
  background: transparent url(/static/media/card-back-small.ce3a314e.png)
    no-repeat 50%;
  background-size: 95%;
  margin: 10px 20px 10px 0;
  width: 240px;
  cursor: pointer;
}
.img {
  height: auto;
  max-width: 100%;
}

.loading {
  max-width: 300px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
