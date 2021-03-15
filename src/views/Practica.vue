<template >
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <div>
        <div v-for="(state, index) of items" :key="index">
          <v-chip
            label 
            class="ma-2 px-5 rounded-lg white--text ag-sm"
            v-on="on"
            v-if="state.value != 'ALL'"
            :color= state.color
             @click="changeStatus(state.value)"
          >
            {{ state.title }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-chip>
        </div>
      </div>
    </template>
    <v-list>
      <div v-for="(i, index) in lista" :key="index">
        <v-list-item
          v-if="i.value != 'ALL' && index < 7"
        >
          <v-list-item-title>{{ i.title }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items:  [
      { title: "ceros", value: "ALL", color: '#E60F0F' },
      { title: "uno", value: 1, color: '#2755DB' },
      { title: "dos", value: 2, color: '#24ED64'  },
      { title: "tres", value: 3, color: '#F5DE36' },
      { title: "cuatro", value: 4, color: '#F213BD' },
      { title: "cinco", value: 5, color: '#1017DE' },
      { title: "seis", value: 4, color: '#18182B' },
      { title: "seven", value: 6, color: '#D434ED' },
      { title: "ocho", value: 7, color:  '#D434ED' },
      { title: "nueva", value: 8, color:'#180DEA' },
      { title: "dies", value: 9, color: '#E06B31' },
      { title: "once", value: 10, color:  '#72106D' },
    ],
    lista: [
      { title: "ceros", value: "ALL", color: '#E60F0F' },
      { title: "uno", value: 1, color: '#2755DB' },
      { title: "dos", value: 2, color: '#24ED64'  },
      { title: "tres", value: 3, color: '#F5DE36' },
      { title: "cuatro", value: 4, color: '#F213BD' },
      { title: "cinco", value: 5, color: '#1017DE' },
      { title: "seis", value: 6, color: '#18182B' },
      { title: "seven", value: 7, color: '#D434ED' },
      { title: "ocho", value: 8, color:  '#D434ED' },
      { title: "nueva", value: 9, color:'#180DEA' },
      { title: "dies", value: 10, color: '#E06B31' },
      { title: "once", value: 11, color:  '#72106D' },
    ]
  }),
  methods:{
    changeStatus(n){ 
      console.log('NUMERO',n)
  this.lista = [];
  this.items.map(itm => {
      if( itm.value != 'ALL' && itm.value >= n){
        const res = {
          title: itm.title,
          value: itm.value,
          color: itm.color
        }
        this.lista.push(res)
      }
    })

    //   if(title === 'dos'){
    //   this.lista = [
    //   { title: "dos", value: 2, color: '#24ED64'  },
    //   { title: "tres", value: 3, color: '#F5DE36' },
    //   { title: "cuatro", value: 4, color: '#F213BD' },
    //   { title: "cinco", value: 5, color: '#1017DE' },
    //   { title: "seis", value: 6, color: '#18182B' },
    //   { title: "seven", value: 7, color: '#D434ED' },
    //   { title: "ocho", value: 8, color:  '#D434ED' },
    //   { title: "nueva", value: 9, color:'#180DEA' },
    //   { title: "dies", value: 10, color: '#E06B31' },
    //   { title: "once", value: 11, color:  '#72106D' },
    // ]
    // }
    // if(title === 'tres'){
    //   this.lista = [
    //   { title: "tres", value: 3, color: '#F5DE36' },
    //   { title: "cuatro", value: 4, color: '#F213BD' },
    //   { title: "cinco", value: 5, color: '#1017DE' },
    //   { title: "seis", value: 6, color: '#18182B' },
    //   { title: "seven", value: 7, color: '#D434ED' },
    // ]
    // }
    // if(title === 'cuatro'){
    //   this.lista = [
    //   { title: "cuatro", value: 4, color: '#F213BD' },
    //   { title: "cinco", value: 5, color: '#1017DE' },
    //   { title: "seis", value: 6, color: '#18182B' },
    //   { title: "seven", value: 7, color: '#D434ED' },
    // ]
    // }
    // if(title === 'cinco'){
    //   this.lista = [
    //   { title: "cinco", value: 5, color: '#1017DE' },
    //   { title: "seis", value: 6, color: '#18182B' },
    //   { title: "seven", value: 7, color: '#D434ED' },
    // ]
    // }
    // if(title === 'seis'){
    //   this.lista = [
    //   { title: "seis", value: 6, color: '#18182B' },
    //   { title: "seven", value: 7, color: '#D434ED' },
    // ]
    // }
    // if(title === 'seven'){
    //   this.lista = [
    //   { title: "seven", value: 7, color: '#D434ED' },
    // ]
    // }
  
  }
}
}
</script>
