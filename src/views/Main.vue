<template>

  <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router  unique-opened :default-active="$route.path">
          <el-submenu index="1" >
            <template slot="title"><i class="el-icon-message"></i>首页管理</template>
            <el-menu-item-group>
              <template slot="title">轮播图</template>
              <el-menu-item index="/ads/create">新建轮播图</el-menu-item>
              <el-menu-item index="/ads/list">轮播图列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">农业资讯</template>
              <el-menu-item index="/notices/create">新建资讯</el-menu-item>
              <el-menu-item index="/notices/list">资讯列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">三农要闻</template>
              <el-menu-item index="/things/create">新建要闻</el-menu-item>
              <el-menu-item index="/things/list">要闻列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">违规警告</template>
              <el-menu-item index="/warnings/create">新建违规</el-menu-item>
              <el-menu-item index="/warnings/list">违规列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">市价公示</template>
              <el-menu-item index="/items/create">新建市价</el-menu-item>
              <el-menu-item index="/items/list">市价列表</el-menu-item>
            </el-menu-item-group>
          
    
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>商城管理</template>
            <el-menu-item-group>
              <template slot="title">市价公示</template>
        
              <el-menu-item index="/botanies/list">商品列表</el-menu-item>
              <el-menu-item index="/demands/list">求购列表</el-menu-item>
            
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-message"></i>管理员账户管理</template>
            <el-menu-item-group>
              <template slot="title">管理员</template>
              <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
              <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
            </el-menu-item-group>
          
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-message"></i>用户账号管理</template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/web_users/create">新建用户</el-menu-item>
              <el-menu-item index="/web_users/list">用户列表</el-menu-item>
            </el-menu-item-group>
          
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        
        <el-main>
          <router-view :key="$route.path"></router-view>      
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
      
  </template> 
    <style>
      .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
      }
      
      .el-aside {
        color: #333;
      }
    </style>
    
    <script>
      export default {
        data() {
          const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          };
          return {
            tableData: Array(20).fill(item)
          }
        }
      };
    </script>