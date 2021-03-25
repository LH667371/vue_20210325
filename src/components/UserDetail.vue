<template>
    <div>
        <h3>用户详情页</h3>
<!--        需求：在用户详情页展示该用户的详细信息-&ndash;&gt; {{ JSON.parse($route.params.data)  }}-->
        <!--    遍历查询用户的详细信息  展示出来    -->
        <span v-for="(value, key) in JSON.parse($route.params.data)" :key="key">
            {{ key }}: {{ value }}<br>
        </span>
        <button @click="back_index">返回首页</button>
        <button @click="back_user_info">返回用户列表页</button>
    </div>
</template>

<script>
export default {
    name: "UserDetail",
    data() {
        return {}
    },
    methods: {
        back_index() {
            this.$router.push({path: '/'});
        },
        back_user_info() {
          this.$router.push({path: '/second'});
        },
    }
}
</script>

<style scoped>

</style>
