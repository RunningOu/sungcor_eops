// 浏览器本地存储LocalStorage 时效性方案

export default function storageEnhance() {
    Storage.prototype.setExpire = (key,value,expire) => {
        let obj = {
            data: value,
            time: Date.now(),
            expire: expire
        }
        localStorage.setItem(key ,JSON.stringify(obj));
    };

    Storage.prototype.getExpire = (key) => {
        let val = localStorage.getItem(key);
        if(!val) {
            return val
        }
        val = JSON.parse(val)
        //视为过期，删除并返回null
        if((Date.now() - val.time) > val.expire) {
            localStorage.removeItem(key)
            return null
        }
        return val.data
    }
}