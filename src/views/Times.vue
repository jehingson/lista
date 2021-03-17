<template>
  <v-div>
     <v-col class="d-flex align-center" cols="12" md="2">
          <v-select
            dense
            placeholder="Seleccionar"
            solo
            @click="changeDate"
            :items="[
              {title:'Todos', value:''},
              {title:'Pickup', value:'Pickup'}, 
              {title:'Domicilio', value:'Domicilio'}
              ]"
            item-text="title"
            item-value="value"
            v-model="TypeDelivery"
          >
          </v-select>
        </v-col>
         <v-col class="py-0 d-flex align-center" cols="12" md="2">
          <v-menu
            v-model="menuDateFrom"
            :close-on-content-click="false"
            :nudge-right="0"
            transition="scroll-x-transition"
            offset-y
            min-width="290px"
            
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                class="rounded-lg inputFilter"
                outlined
                dense
                background-color="white"
                placeholder="Desde..."
                :value="DateFromFormatted"
                readonly
                v-on="on"
              >
              </v-text-field>
            </template>
            <v-date-picker
              v-model="dateFrom"
              @input="menuDateFrom = false"
              class="ag-m datePiker"
              header-color="primary"
              locale="es-CO"
              :max="dateTo"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col class="py-0 d-flex align-center" cols="12" md="2">
          <v-menu
            v-model="menuDateTo"
            :close-on-content-click="false"
            :nudge-left="69"
            transition="scroll-x-reverse-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                class="rounded-lg inputFilter"
                outlined
                dense
                background-color="white"
                placeholder="Hasta..."
                :value="DateToFormatted"
                readonly
                v-on="on"
              >
              </v-text-field>
            </template>
            <v-date-picker
              class="ag-m datePiker"
              header-color="primary"
              v-model="dateTo"
              @input="menuDateTo = false"
              locale="es-CO"
              :min="dateFrom"
               @click="changeDate"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="2" class="d-flex">
          <v-btn
            color="#FF2F5D"
            dark
            class="text-capitalize elevation-0 rounded-lg px-10"
            @click="changeDate"
          >
            <!--  @click="filterDate" -->
            Buscar
          </v-btn>
        </v-col>



         <v-col cols="12" md="2">
                <label for="">Rango de fecha</label>
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      readonly
                      v-on="on"
                      class="rounded-lg"
                      dense
                      :items="status"
                      item-text="title"
                      item-value="value"
                      label="Seleccionar rango"
                      color="#A443AA"
                      v-model="array"
                      append-icon="mdi-chevron-down"
                      solo
                    >
                    </v-text-field>
                  </template>
                  <v-date-picker
                    range
                    @change="filterOrders"
                    locale="es"
                    v-model="dates"
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      color="primary"
                      @click="
                        () => {
                          array = []
                          filterOrders()
                          menu1 = false
                        }
                      "
                    >
                      Limpiar
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
  </v-div>
</template>

<script>

import format from 'date-fns/format'
import { es } from 'date-fns/locale'
import subWeeks from 'date-fns/subWeeks'
import addDays from 'date-fns/addDays'


  export default {
    data: () => ({
      TypeDelivery: [],
      dateFrom: subWeeks(new Date(), 5).toISOString().substr(0, 10),
      dateTo: new Date().toISOString().slice(0, 10),
      startDate: null,
      endDate: null,
      type: [],
      menuDateFrom: false,
      menuDateTo: false,

      dates: [],
      status: [
        { title: 'Todos', value: 'ALL', color: 'red' },
      ],
      menu1: false,
      array: []
    }),
    computed: {
      DateFromFormatted(){
        return (
          this.dateFrom ? format(addDays(new Date(this.dateFrom), 1), 'MMMM dd, yyyy', {locale: es }) : ''
        )
      },
      DateToFormatted(){
        return (
           this.dateTo
           ? format(addDays(new Date(this.dateTo), 1), 'MMMM dd, yyyy', {
            locale: es,
          })
        : ''
        )
      },
      dateRangeText(){
        return this.array.join(' ~ ')
      }
    },
    methods: {
      changeStatus(id, status) {
      //const athtkn = this.$warehouse.get('athtkn')
      const params = {
        id,
        status,
        //athtkn,
      }
      this.$store.dispatch('rider/changeStatus', params).then((response) => {
        if (response.data.code === 100) {
          window.location.reload()
        }
      })
    },
      changeDate(){
      this.startDate = this.dateFrom + 'T0:0:00.000Z'
      this.endDate = addDays(new Date(this.dateTo), 1).toISOString().substr(0, 10) + 'T0:0:00.000Z'
      this.type = this.TypeDelivery
       this.dateee()
      },
      filterOrders(){
        console.log('vamos bien')
      },
      dateee(){
        console.log('dateFrom', this.dateFrom)
        console.log('dateTo', this.dateTo)
        console.log('startDate', this.startDate)
        console.log('endDate', this.endDate)
        console.log('type', this.TypeDelivery)
         console.log('datesss', this.dates)
        this.array = [this.dateFrom, this.dateTo]
        console.log('array', this.array)
      },
    }
  }
</script>