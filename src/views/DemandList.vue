<template>
    <div>
      <h3 class="mt-3 mb-3">求购列表</h3>
       <el-table :data="items">
            <el-table-column prop="_id" label="ID"  width="230px"></el-table-column>
           
            <el-table-column prop="icon" label="图标" >
              <template slot-scope="scope">
                <img :src="scope.row.icon" alt="" style="height:3rem" >
                <!-- scope.row表示这一行数据 -->
              </template>
            </el-table-column>
            <el-table-column prop="name" label="名称" ></el-table-column>
            <el-table-column prop="jiage" label="价格" ></el-table-column>
            <el-table-column prop="time" label="预计收获时间" ></el-table-column>
            <el-table-column prop="number" label="预计生产数量" ></el-table-column>
            <el-table-column prop="icon" label="资历(图)" >
              <template slot-scope="scope">
                <img :src="scope.row.zhengming" alt="" style="height:3rem" >
                <!-- scope.row表示这一行数据 -->
              </template>
            </el-table-column>
            <el-table-column prop="zili" label="资历(文字)" ></el-table-column>
            <el-table-column prop="lianxi" label="联系方式" ></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="primary" size="small"
           @click="$router.push(`/demands/edit/${scope.row._id}`)">编辑</el-button>
           <el-button type="primary" size="small"
           @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
           
          </el-table>
    </div>
  </template>
  <script>
  export default {
    data(){
      return{
        items:[]
      }
    },
    methods:{
     async fetch(){
      const res = await this.$http.get('rest/demands')
      this.items = res.data
      },
      async remove(row){
        this.$confirm(`是否要确认删除分类?"${row.name}"`, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          .then(async() => {
            const res=await this.$http.delete(`rest/demands/${row._id}`)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.fetch();
          })
      }
  
    },
    created(){
      this.fetch();
    }
  }
  </script>
  