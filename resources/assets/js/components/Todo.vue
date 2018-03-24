<template>
    <div class="container">
        <div class="box">
            <todo-input-component></todo-input-component>
        </div>
        <table class="table is-bordered">
             <tr is="todo-item-component" v-for="(todo, index) in items"  :text="todo.text" :done="todo.done" :id="todo.id"></tr>
        </table>
    </div>
</template>

<script>
    /**
     * Tips:
     * - En mounted pueden obtener el listado del backend de todos y dentro de la promesa de axios asirnarlo
     *   al arreglo que debe tener una estructura similar a los datos de ejemplo.
     * - En addTodo, removeTodo y toggleTodo deben hacer los cambios pertinentes para que las modificaciones,
     *   addiciones o elimicaiones tomen efecto en el backend asi como la base de datos.
     */
    import TodoInput from './TodoInput.vue'
    import TodoItem from './TodoItem.vue'
    import Vuex from 'vuex'    
    
    export default {
        computed: Vuex.mapState(['items', 'loading']),
        components:{
          'todo-input-component':TodoInput,
          'todo-item-component':TodoItem,
        },
        mounted () {

        this.$store.dispatch('loadTodos') // dispatch loading
     
        }
    }
</script>

<style>
    .is-done {
        text-decoration: line-through;
    }
</style>
