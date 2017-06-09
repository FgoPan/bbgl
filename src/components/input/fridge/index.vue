<template>
    <div>
        <el-table :data="data" border stripe style="width: 100%">
            <el-table-column type="selection" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="code" label="项目编号">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="性别">
            </el-table-column>
            <el-table-column prop="address" label="年龄">
            </el-table-column>
            <el-table-column prop="address" label="住院/门诊号">
            </el-table-column>
            <el-table-column prop="address" label="样本类型">
            </el-table-column>
            <el-table-column prop="address" label="疾病类别">
            </el-table-column>
            <el-table-column prop="address" label="保存人">
            </el-table-column>
            <el-table-column prop="address" label="创建时间">
            </el-table-column>
            <el-table-column prop="address" label="标本期限">
            </el-table-column>
            <el-table-column prop="address" label="保存位置">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'fridge',
    data() {
        return {
            data: [{
                code: '21321133212',
                name: '王五',
                address: '22'
            }]
        }
    }
}
</script>
