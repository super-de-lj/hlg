<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { admin } from '@/api'
import { ElNotification } from 'element-plus'
import * as service from '@/api/index';
//管理员数据
var admins = ref([]);
//抽屉组件
const drawer = ref(false)
//获取tree树状控件实例
var tree = ref();
//表单数据
var form = ref({ adminname: '', password: '' ,role:'',checkedKeys:[]});
//获取表单实例
var formref = ref();
//加载
const loading = ref(false);

//获取管理员列表
var getdata = async ()=>{
    loading.value = true;
    var res = await admin.admin_list();
    admins.value = res.data.data;
    loading.value = false;
}
//初始化
onMounted(async () => {
    getdata();
})

//表单验证规则
const rules = {
    adminname: [
        { required: true, message: '请输入账号', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    role: [
        { required: true, message: '请选择角色', trigger: 'blur' }
    ],
    checkedKeys: [
        { required: true, message: '请选择权限', trigger: 'blur' }
    ]
}

//树形控件数据
const treeData = [
  {
    id: '1',
    label: '首页',
  },
  {
    id: '2',
    label: '轮播图管理',
    children: [
      {
        id: '2-1',
        label: '轮播图列表',
      },
    ],
  },
  {
    id: '3',
    label: '账号管理',
    children: [
      {
        id: '3-1',
        label: '管理员列表',
      },
    ],
  },
  {
    id: '4',
    label: '产品管理',
    children: [
      {
        id: '4-1',
        label: '产品列表',
      },
      {
        id: '4-2',
        label: '秒杀列表',
      },
      {
        id: '4-3',
        label: '推荐列表',
      },
      {
        id: '4-4',
        label: '筛选列表',
      },
    ],
  },
  {
    id: '5',
    label: '数据可视化',
    children: [
      {
        id: '5-1',
        label: 'echarts使用',
      },
    ],
  },
  {
    id: '7',
    label: 'excel管理',
    children: [
      {
        id: '7-1',
        label: 'excel导入',
      },
      {
        id: '7-2',
        label: 'excel导出',
      },
    ],
  },
  {
    id: '8',
    label: '地图管理',
    children: [
      {
        id: '8-1',
        label: '百度地图',
      },
    ],
  },
]

//点击添加，显示抽屉
var addAdmin = (tree:any) => {
    drawer.value = true;
}

//点击编辑,显示抽屉，并回显数据
var EditAdmin = (row:any)=>{
    form.value = row; //回显数据
    drawer.value = true;//显示抽屉
}

//点击删除，删除对应用户
var deleteAdmin = async (row:any)=>{
    var res = await service.admin.admin_delete({adminid:row.adminid});
    if(res.data.code==200){
        ElNotification.closeAll();
        ElNotification.success(res.data.message);
        getdata();
    }else{
        ElNotification.closeAll();
        ElNotification.error(res.data.message);
    }
}

//点击其他隐藏抽屉
var handleClose = () => {
    if(form.value.adminid){
        form.value = { adminname: '', password: '' ,role:'',checkedKeys:[]}
    }
    //清空树形控件
    tree && tree.value.setCheckedKeys([]);
    drawer.value = false;
}

//获取树形控件结果
var getCheckedKeys = (ele:any,data:any)=>{
    var newDate = JSON.parse(JSON.stringify(data.checkedKeys))
    form.value.checkedKeys = data.checkedKeys;
}

//提交表单
var submitForm = (ruleFormRef:any) => {
    ruleFormRef.validate(async (valia:boolean)=>{
        if(valia){
            //有id则编辑管理员
           if(form.value.adminid){
            var res = await service.admin.admin_update(form.value);
           }else{
            //无id则添加管理员
            var res = await service.admin.admin_add(form.value);
            //添加完毕清空表单
            form.value = { adminname: '', password: '' ,role:'',checkedKeys:[]};
            //并清空树形控件
            tree && tree.value.setCheckedKeys([]);
           }
            if(res.data.code == 200){
                drawer.value = false;
                ElNotification.success(res.data.message);
                //更新页面
                getdata();
            }else{
                ElNotification.closeAll();
                ElNotification.error(res.data.message);
            }
        }else{
            ElNotification.closeAll();
            ElNotification.error('登录失败')
        }
    })
}
</script>
<template>
    <div class="admin">
        <!-- 添加按钮 -->
        <el-button type="primary" @click="addAdmin(tree)">添加管理员 <el-icon>
                <Plus />
            </el-icon>
        </el-button>
        <!-- 展示表格 -->
        <el-table :data="admins" style="width: 100%" class="table" v-loading="loading">
            <el-table-column label="序号" width="150px">
                <template #default="scope">
                    <span>{{ scope.$index + 1 }}</span>
                </template>
            </el-table-column>
            <el-table-column label="账号" prop="adminname"></el-table-column>
            <el-table-column label="权限">
                <template #default="scope">
                    <el-tag type="success">{{ scope.row.role== 1?'管理员':'超级管理员' }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="165px">
                <template #default="scope">
                    <el-button type="primary" @click="EditAdmin(scope.row)">Edit</el-button>
                    <el-button type="danger" @click="deleteAdmin(scope.row)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 抽屉 -->
        <el-drawer v-model="drawer" :before-close="handleClose" size="378">
            <template #header>
                <h4>{{ form.adminid?'编辑管理员':'新增管理员'}}</h4>
            </template>
            <!-- 抽屉表单 -->
            <el-form ref="formref" :model="form" :rules="rules" class="form"
                status-icon>
                <el-form-item label="账号" prop="adminname" >
                    <el-input v-model="form.adminname" :disabled="!!form.adminid"/>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password"  :disabled="!!form.adminid"/>
                </el-form-item>
                <el-form-item label="角色" prop="role" >
                    <el-select v-model="form.role" placeholder=" ">
                        <el-option key="1" label="管理员" :value="1"/>
                        <el-option key="2" label="超级管理员" :value="2" />
                    </el-select>
                </el-form-item>
                <el-form-item label="权限" prop="checkedKeys">
                    <el-tree
                        ref="tree"
                        :data="treeData"
                        show-checkbox
                        node-key="id"
                        :default-expanded-keys="[]"
                        :default-checked-keys="form.checkedKeys"
                        @check="getCheckedKeys"
                    />
                </el-form-item>
                <el-button type="primary" @click="submitForm(formref)">
                    {{ form.adminid?'编辑管理员':'新增管理员' }}
                </el-button>
            </el-form>
        </el-drawer>
    </div>
</template>
<style  scoped>
.admin h4 {
    color: #000;
}

:deep(.el-drawer__header) {
    border-bottom: 1px solid #eee;
    padding: var(--el-drawer-padding-primary)
}
.admin .form{
    padding: 0 12px;
}
</style>