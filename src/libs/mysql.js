import mysql from "serverless-mysql" ;

 export const conn = mysql({
    config: {
        host: 'localhost' ,
        user: 'root',
        password : '03051996' ,
        port :3307 ,
        database: 'nextmysqlcrud'
    }
 })