<template>
    <div class="container">
        <div class="box">
            <todo-input-component  @add-todo="addTodo" ></todo-input-component>
        </div>
        <table class="table is-bordered">
             <tr @remove-todo="removeTodo" @toggle-done="toggleDone" is="todo-item-component" v-for="(todo, index) in items"  :text="todo.text" :done="todo.done" :id="todo.id"></tr>
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
    
    export default {
        data () {
            return {
                items: [],
            }
        },
        components:{
          'todo-input-component':TodoInput,
          'todo-item-component':TodoItem,
        },
        mounted () {

  window.axios.get('/todos').then(({ data }) => {

    this.items = [];



    for(var item in data)
{

      this.items.push( { text: data[item].text, done: data[item].done, id: data[item].id });
            
}

    });
      
        },
        methods: {
            addTodo (todo) {
                console.log(todo)
                let text = todo.text.trim()

                if (text !== '') {
                    
                window.axios.post('/todos',todo).then(({ data }) => {
                    this.items.push(data)
                });
                
                }
            },
            removeTodo (id) {
                
                var self = this;
  window.axios.delete('/todos/' + id).then(({ data }) => {
                 self.items = this.items.filter(item => item.id !== id);
    });

            },
            toggleDone (todo) {

                var self = this;
  window.axios.put('/todos/' + todo.id,{done:todo.done}).then(({ data }) => {
                 
    });
                
            }
        }
    }
</script>

<style>
    .is-done {
        text-decoration: line-through;
    }
</style>
