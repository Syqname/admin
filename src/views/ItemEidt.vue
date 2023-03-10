<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}市价</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <!--.native原生表单 .prevent组织默认提交 -->
      
           
            <el-form-item label="图标">

                <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
          >
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
                <!-- v-model=''双向绑定 -->
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="model.price"></el-input>
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
        afterUpload(res){
            this.$set(this.model,'icon',res.url)
        },
       async save(){
        let res 
        if(this.id){
            res = await this.$http.put(`rest/items/${this.id}`,this.model)
        }
        else{
            res = await this.$http.post("rest/items",this.model)
        }
          
         this.$router.push('/items/list')
         this.$message({
            type:'success',
            message:'保存成功'       
         })
        },
        async fetch(){
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model = res.data
        },
       
    },
    created(){

        this.id && this.fetch()
    }
}



</script>
<style>
 
</style>