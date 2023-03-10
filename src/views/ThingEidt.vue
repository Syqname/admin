<template>
    <div class="about">
        <h1>{{id?'编辑':'新建'}}资讯</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <!--.native原生表单 .prevent组织默认提交 -->
            
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
                <!-- v-model=''双向绑定 -->
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor v-model="model.body"  useCustomImageHandler  @image-added="handleImageAdded"></vue-editor>
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
import { VueEditor} from 'vue2-editor'

export default {
    props:{
       id:{}
    },
    components:{
        VueEditor
    },
    data(){
        return{
            model:{},
            categories:[],
        }
    },
    methods:{
      async  handleImageAdded(file, Editor, cursorLocation, resetUploader) {
     
      var formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('upload',formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
          resetUploader();

    
    },
       async save(){
        let res 
        if(this.id){
            res = await this.$http.put(`rest/things/${this.id}`,this.model)
        }
        else{
            res = await this.$http.post("rest/things",this.model)
        }
          
         this.$router.push('/things/list')
         this.$message({
            type:'success',
            message:'保存成功'       
         })
        },
        async fetch(){
            const res = await this.$http.get(`rest/things/${this.id}`)
            this.model = res.data
        },
        async fetchCatgories(){
            const res = await this.$http.get(`rest/categories`)
            this.categories = res.data
        }
    },
    created(){
        this.fetchCatgories()
        this.id && this.fetch()
    }
}



</script>