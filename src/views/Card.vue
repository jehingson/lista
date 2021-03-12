<template>
  <div>
    <div class="role">
      <div class="role-grid">
        <div v-for="(itm, index) of role" :key="index" class= "role-card" >
          <img v-bind:src="itm.image" alt="" />
          <div class="text">
            <h3>{{itm.title}}</h3>
            <p>Precio:{{itm.price}} </p>
            <p>comprar</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data: () => ({
    role: [
  {
    id: 1,
    title: "Roles Datejust",
    price: 101,
    image:
      "https://cdn4.chrono24.com/images/topmodels/2846-alz5vjoi11mxlc54imf27mlj-Original.png?auto=compress&amp;h=305",
    category: "rolex",
  },
  {
    id: 2,
    title: "OMEGA Speedmaster",
    price: 104,
    image:
      "https://cdn4.chrono24.com/images/topmodels/2875-7wlcl6ogfoc0qxg22ox6up9m-Original.png?auto=compress&amp;h=305",
    category: "omega",
  },
  {
    id: 3,
    title: "AUDEMARS PIGUET",
    price: 75,
    image:
      "https://cdn4.chrono24.com/images/topmodels/1177-wugpfdlkkz5ie2od4y1w8rlm-Original.png?auto=compress&amp;h=305",
    category: "audemars",
  },
  {
    id: 4,
    title: "HUBLOT Big Bang",
    price: 99,
    image:
      "https://cdn4.chrono24.com/images/topmodels/1065-ae2seivfjwbgqxgobd7rimxu-Original.png?auto=compress&amp;h=305",
    category: "hublot",
  }
    ]



  }),
  computed: {
    
  },
  methods: {
    
  },
};
</script>

<style>
.role-grid{
 border: 1px solid red;
  margin: 0 auto;
position: relative;
 width: 100%;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
 gap: 1.3rem 1.3rem;
}
</style>
