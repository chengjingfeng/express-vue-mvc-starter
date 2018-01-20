<template>
    <div>
        <h3>{{message}}-request</h3>
        <form method="post">
            <input type="hidden" name="_csrf" :value="csrfToken">
            <div class="form-group">
                <label for="username">Username</label>
                <input id="username" type="text" name="username" v-model="username" v-bind="username" autocomplete="username"/>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" v-model="password" v-bind="password" autocomplete="current-password"/>
            </div>
            <input type="submit"/>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                message: '',
                csrfToken: ''
            }
        }
    }
</script>

<style>
    div.form-group {
        padding: 5px;
    }

    div.form-group > * {
        padding: 5px;
    }

    div.form-group input {
        display: inline-block;
    }

</style>