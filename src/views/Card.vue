<template>
  <div>
    <div class="role">
      <div class="role-grid">
        <div v-for="(itm, index) of role" :key="index" class= "role-card" >
          <img v-bind:src="itm.image" alt="" />
          <div class="text">
            <h3>{{itm.title}}</h3>
            <p></p>
            <p>Precio: {{itm.price}} </p>
            <p>Categoria: {{itm.category}}</p>
            <button @click="comprar(itm)"> comprar  </button>
          </div>
        </div>
      </div>
      <br>
      <br>
      <h2 style="text-align: center">Carrito </h2>
      <div class="role-grid comprar">
        <div v-for="(itm, index) in pedidos" :key="index" class= "role-card comprar" >
          <img v-bind:src="itm.image" alt="" />
          <div class="text comprar">
            <h3>{{itm.title}}</h3>
            
            <p>Cantidad: {{itm.cantidad}}</p>
            <p>Precio: {{itm.price*itm.cantidad}} </p>
            <div>
            <button @click="incremet(itm.id)" > + </button>
            <button class="menos" @click="decrement(itm.id)"> - </button>
            </div>
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
            image: "https://cdn4.chrono24.com/images/topmodels/2846-alz5vjoi11mxlc54imf27mlj-Original.png?auto=compress&amp;h=305",
            category: "rolex",
            cantidad: 1
        },
        {
            id: 2,
            title: "OMEGA Speedmaster",
            price: 104,
            image: "https://cdn4.chrono24.com/images/topmodels/2875-7wlcl6ogfoc0qxg22ox6up9m-Original.png?auto=compress&amp;h=305",
            category: "omega",
            cantidad: 1
        },
        {
            id: 3,
            title: "AUDEMARS PIGUET",
            price: 75,
            image: "https://cdn4.chrono24.com/images/topmodels/1177-wugpfdlkkz5ie2od4y1w8rlm-Original.png?auto=compress&amp;h=305",
            category: "audemars",
            cantidad: 1
        },
        {
            id: 4,
            title: "HUBLOT Big Bang",
            price: 99,
            image: "https://cdn4.chrono24.com/images/topmodels/1065-ae2seivfjwbgqxgobd7rimxu-Original.png?auto=compress&amp;h=305",
            category: "hublot",
            cantidad: 1
        },
        {
            id: 5,
            title: "ROLEX Day-Date",
            price: 105,
            image: "https://cdn4.chrono24.com/images/topmodels/48-coj40rpfx8fwxs9h0nl1l5z5-Original.png?auto=compress&amp;h=305",
            category: "rolexDay",
            cantidad: 1

        },
        {
            id: 6,
            title: "TAG HEUER Carrera Calibre",
            price: 85,
            image: "https://cdn4.chrono24.com/images/topmodels/1023-knl4kmo66jmse324vzq1rit9-Original.png?auto=compress&amp;h=305",
            category: "tag",
            cantidad: 1

        },
        {
            id: 7,
            title: "Roles Datejust",
            price: 60,
            image: "https://cdn4.chrono24.com/images/topmodels/2889-i234z41cn7v0n4vanfhte4w4-Original.png?auto=compress&amp;h=305",
            category: "rolex",
            cantidad: 1
        },
        {
            id: 8,
            title: "OMEGA Speedmaster",
            price: 35,
            image: "https://cdn4.chrono24.com/images/topmodels/277-q51jko3qp053cwsfydfnmp8r-Original.png?auto=compress&amp;h=305",
            category: "omega",
            cantidad: 1
        },
    ],
    pedidos: []
  }),
  computed: {
    refres(){
      return this.pedidos 
    }
  },
  created(){
    //this.filterCard()
    console.log(this.pedidos)
  },
  methods: {
    comprar(producto){
      const res = this.pedidos.filter(p => {
        return p.id === producto.id
      })
      // this.pedidos.map(p => {
      //   if(p.id === producto.id){
      //   p.cantidad = p.cantidad + 1;
      //   }
      // })
      
      if(res.length > 0 ) return this.incremet(producto.id)// alert 
      return this.pedidos.push(producto)
    },
    incremet(id){
      this.pedidos.map(p => {
        if(p.id === id){
          p.cantidad = p.cantidad +1;
        }
      })
    },
    decrement(id){
      this.pedidos.map(p => {
        if(p.id === id){
          p.cantidad <= 0 ? p.cantidad = 0 : p.cantidad = p.cantidad -1;
        }
      })
    }
  },
  
};
</script>

<style>
.role-grid{
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1.3rem 1.3rem;
}
.role-card{
  max-width: 100%;
  height: 290px;
  border: 1px solid blue;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
.role-card img{
  object-fit: contain;
  width: 210px;
  height: 230px;
  margin: 0;
}
.role-card .text{
  margin: -24px 0;
  line-height: 18px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
}
.role-card .text > h3{
  font-size: 14px;
  height: 18px;
  overflow: hidden;
}
.text > p{
  font-size: 12px;
  font-weight: 700;
  margin: 0;
}
.text > button{
  text-align: center;
  outline: 0;
  width: 100%;
  background: rgb(57, 60, 238);
  color: wheat;
}
/* COMPRA */
.role-grid.comprar{
  max-width: 700px;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  gap: 1.3rem 1rem;
  margin-bottom: 30px;
}
.role-card.comprar{
  height: 260px;
}
.role-card.comprar img{
  width: 180px;
  height: 200px;
}
.role-card .text div{
  display: flex;
}
.role-card .text div > button{
  display: block;
  text-align: center;
  outline: 0;
  margin: 0 10px 10px 10px;
  width: 100%;
  background: rgb(57, 60, 238);
  color: wheat;
}
.role-card .text div > button.menos{
background: rgb(247, 37, 18);
}

</style>
