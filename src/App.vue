<template>
    <div id="app">
        <h1>信息管理系统</h1>
        <router-link to="/first">首页留言板</router-link>
        <router-link to="/second">学生管理</router-link>
        <hr>
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {}
}
</script>

<style>

</style>
