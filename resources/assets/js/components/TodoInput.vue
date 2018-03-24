<template>
            <div class="field is-grouped">
                <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Nuevo recordatorio" v-model="todoItemText">
                </p>
                <p class="control">
                    <a class="button is-info" @click="addTodo">
                        Agregar
                    </a>
                </p>
            </div>
</template>

<script>
    export default {
        data () {
            return {
                todoItemText: ''
            }
        },
        mounted () {

      
        },
        methods: {
            addTodo () {
                let text = this.todoItemText.trim()

                if (text !== '') {
                        this.$store.dispatch('addTodo',{text:text,done:false}) // dispatch loading
                      this.todoItemText = '';

                }
            }
            }
        }
    
</script>
