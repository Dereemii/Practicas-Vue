const app = new Vue({
    el: "#app",
    data: {
        titulo: "Hola mundo con Vue",
        frutas: [
            {nombre: "Pera",  cantidad: 0},
            {nombre: "Manzana", cantidad: 10},
            {nombre: "Platano", cantidad: 5}
        ],
        nuevaFruta: "",
        total: 0
    },
    methods: {
        agregarFruta (){
            this.frutas.push({
              nombre: this.nuevaFruta, cantidad: 0
            })
        },
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
                
        }
    }
})