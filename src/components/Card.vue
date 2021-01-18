<template>
  <div>
    <section class="section">
      <div class="card-container">
        <!-- Search -->
        <div class="Search-bar">
          <b-input-group prepend="Pokemon Name" class="mt-3">
            <b-form-input></b-form-input>
            <b-input-group-append>
              <b-button variant="info">Search</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>

        <!-- loading -->
        <div>
          <img
            class="loading"
            src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
            v-if="loading"
          />
        </div>

        <div class="columns">
          <div class="row justify-content-md-center">
            <div class="col-sm-12 col-md-4">
              <div class="pkmimg-container" v-for="details in card" :key="details.id">
                <img class="pkmimg" :src="details.imageUrlHiRes" alt="">
              </div>
            </div>

            <div class="col-sm-12 col-md-8">  
              <div v-for="details in card" :key="details.id">
                <div class="head">
                  <div class="d-flex flex-wrap-reverse">
                    <div class="mr p-2">
                      <div class="name">
                        <span class="name"></span> {{ details.name }}
                      </div>
                    </div>

                    <div class=" p-2">
                      <div class="subtype">
                        <span v-if="details.subtype">
                          Pokémon -
                          <em>{{ details.subtype }}</em>
                        </span>
                      </div>
                    </div>
                    <div class="ml-auto p-2">
                      <div class="hp">
                        <span v-if="details.hp">
                          HP
                          <em class="hp">{{ details.hp }}</em>
                        </span>
                      </div>
                    </div>
                    <div class=" p-2">
                      <div class="type">
                        <div v-if="details.types">
                          <div
                            v-for="(type, i) in details.types"
                            :key="'type-' + i"
                          >
                            {{ type }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div class="details">
                  <div v-if="details.text">
                    <p>Rules</p>

                    <div v-for="(text, i) in details.text" :key="'text-' + i">
                      {{ text }}
                    </div>
                  </div>
                  <div v-if="details.ability">
                    <div>
                      {{ details.ability.name }}
                      <br />

                      {{ details.ability.text }}
                    </div>
                  </div>
                  <br />
                  <div v-if="details.attacks">
                    <div
                      v-for="(attack, i) in details.attacks"
                      :key="'attack-' + i"
                    >
                      <div class="Abname">
                        <span>
                          {{ attack.name }} | {{ attack.damage }} | Energy Cost:
                          {{ attack.convertedEnergyCost }}
                        </span>
                      </div>
                      <p class="text-m">{{ attack.text }}</p>
                    </div>
                  </div>
                </div>
                <br />
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <p>WEAKNESS</p>
                      <div
                        v-for="(weakness, i) in details.weaknesses"
                        :key="'weakness-' + i"
                      >
                        <p>
                          {{ weakness.type }}
                        </p>
                        <p class="text-m">{{ weakness.value }}</p>
                      </div>
                    </div>
                    <div class="col-sm">
                      <p>RESISTANCE</p>
                      <div v-if="details.resistances">
                        <div
                          v-for="(resistances, i) in details.resistances"
                          :key="'resistances-' + i"
                          
                        >
                          <p>
                              {{ resistances.type }}
                            </p>
                            <p class="text-m">{{ resistances.value }}</p>
                        </div>
                      </div>
                      
                      <div v-else>N/A</div>
                    </div>
                    <div class="col-sm">
                      <div class="col-sm">
                        <p>RETREAT COST</p>
                        <div v-if="details.retreatCost">
                        <div
                          v-for="(retreatCost, i) in details.retreatCost"
                          :key="'retreatCost-' + i"
                        >
                          <p>
                            {{ retreatCost }}
                          </p>
                        </div>
                        </div>
                      
                      <div v-else>N/A</div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-sm">Artist:</div>
                    <div class="col-sm">Rarity:</div>
                    <div class="col-sm">Set:</div>
                  </div>
                  <div class="row">
                    <div class="col-sm">
                      <span v-if="details.artist">
                        <em class="Artistdetail">{{ details.artist }}</em>
                      </span>
                    </div>
                    <div class="col-sm">
                      <span v-if="details.rarity">
                        <em class="Raritydetail">{{ details.rarity }}</em>
                      </span>
                    </div>
                    <div class="col-sm">
                      <span v-if="details.set">
                        <em class="Setdetail">{{ details.set }}</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PokemonAPI from "@/services/api/pokemontcg";

export default {
  data() {
    return {
      loading: true,
      card: [],
    };
  },
  created() {
    PokemonAPI.getCard(this.$route.params.id)
      .then((card) => {
        this.card = card;
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
  padding: 3rem, 1.5rem;
}

.loading {
  max-width: 300px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.Search-bar {
  padding: 2px;
  padding-bottom: 20px;
}

.pkmimg {
  height: 36rem;
  background-repeat: no-repeat;
  background-size: 350px 525px;
}

.column-img {
  width: 33.33%;
}

.column-description {
  width: 66.66%;
}

.col-sm {
  text-align: center;
}

.Abname {
  font-size: 1.5rem;
  font-weight: 300;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.details {
  margin-left: 50px;
}

.head {
  margin-left: 40px;
}

.name {
  font-size: 2rem;
  font-weight: 300;
}

.subtype {
  font-size: 1.5rem;
  font-weight: 300;
}

em {
  font-style: normal;
}

.hp,
.type {
  font-size: 1.25rem;
  font-weight: 300;
}

body {
  font-weight: 300;
}

.pkmimg{
  width: 100%;
  height: auto;
}
@media only screen and (max-width: 768px) {
  .pkmimg-container{
    padding: 20px;
  }
}


</style>