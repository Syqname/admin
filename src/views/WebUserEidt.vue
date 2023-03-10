<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}用户</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <!--.native原生表单 .prevent组织默认提交 -->
            
            
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
                <!-- v-model=''双向绑定 -->
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
                <!-- v-model=''双向绑定 -->
            </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">保存</el-button>
                    <!-- type="primary"设置类型  primary初级类型 -->
                    <!-- native-type="submit"原生类型，HTML中的类型  submit提交按钮-->
                </el-form-item> 
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
       id:{}
    },
    data(){
        return{
            model:{},
           
        }
    },
    methods:{
       async save(){
        let res 
        if(this.id){
            res = await this.$http.put(`rest/web_users/${this.id}`,this.model)
        }
        else{
            res = await this.$http.post("rest/web_users",this.model)
        }
          
         this.$router.push('/web_users/list')
         this.$message({
            type:'success',
            message:'保存成功'       
         })
        },
        async fetch(){
            const res = await this.$http.get(`rest/web_users/${this.id}`)
            this.model = res.data
        },
       
    },
    created(){
        
        this.id && this.fetch()
    }
}



</script>