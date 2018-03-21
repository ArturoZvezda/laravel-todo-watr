<template>
    <tr>
        <td class="is-fullwidth" style="cursor: pointer" :class="{ 'is-done': done }" @click="toggleDone(id)">
            {{ text }}
    </td>
    <td class="is-narrow">
        <a class="button is-danger is-small" @click="removeTodo(id)">Eliminar</a>
    </td>
</tr>
</template>

<script>
    export default {
    props: {
    text: {
    type: String,
            required: true
    },
            done: {
            type: Boolean,
                    required: true
            },
            id: {
            type: Number,
                    required: true
            }
    },
            data () {
    return {
    mutableItem:this
    }
    },
            mounted () {

    },
            methods: {
            removeTodo (id) {

            this.$emit('remove-todo', id);
            },
                    toggleDone (id) {

            this.mutableItem.done = !this.mutableItem.done
                    this.$emit('toggle-done', {id:id, done:this.mutableItem.done});
            }
            }
    }
</script>
