import express from 'express';
const app = express();
import db from './config/db';
import userRouter from './routers/UsersRouter';
import walletRouter from './routers/WalletRouter';

// app.get('/', (req:any, res:any, next:any) => {
//     res.json('Hello world')
// })

app.use(express.json());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/wallet', walletRouter)

app.listen(4000,()=>{
    console.log('app is runing in port 4000');
    db.sync().then(() => {
        console.log('db success');
    }).catch((err:any)=>{
        console.log(err.message);
    })
})