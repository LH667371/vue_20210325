<template>
    <div>
        <h3>欢迎大家留言</h3>
        <input type="text" v-model="msg">
        <button @click="add_note">添加留言</button>
        <ul>
            <li v-for="(message, index) in notebook" :key="index">
                {{ message }} <a href="javascript: void(0)" @click="del(index)">清空留言</a>
            </li>
        </ul>
        <div v-if="this.notebook.length > 0">
            <p>总数量：{{ notebook.length }}条</p>
            <a href="javascript: void(0)" @click="all_del">清空留言</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "First",
    data() {
        return {
            msg: "",
            notebook: localStorage.notebook ? JSON.parse(localStorage.notebook) : [],
        }
    },
    methods: {
        // 将留言发表到留言板
        add_note() {
            let msg = this.msg;
            if (msg) {
                this.notebook.push(msg);
                // 将留言板保存到localStorage
                localStorage.notebook = JSON.stringify(this.notebook);
                this.msg = '';
            }
        },
        del(index) {
            localStorage.removeItem('notebook');
            this.notebook.splice(index, 1);
            localStorage.notebook = JSON.stringify(this.notebook);
        },
        all_del() {
            localStorage.removeItem('notebook');
            this.notebook = [];
        },
    },
}
</script>

<style scoped>

</style>
