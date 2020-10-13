Vue.component('hijo', {

    template: //html
    `
    <div class="py-5 bg-success">
        <h4 class="p-3">Componente hijo: {{numero}}</h4>
        <h4 class="p-3">Nombre: {{nombre}}</h4>
       
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Rosalina'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})