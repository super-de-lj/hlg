import service from '@/utils/request'

//管理员登陆
export  function admin_login(payload = {}){
    return service.post('/admin/admin/login', payload )
}