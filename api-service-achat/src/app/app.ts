import express from 'express';
const app = express();
import db from '../config/db';
import userRouter from '../routers/UsersRouter';
import walletRouter from '../routers/WalletRouter';
import cors from 'cors'

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/wallet', walletRouter)
const port = process.env.PORT || 4000

app.listen( port,()=>{
    console.log('App is runing in port : '+port);
    db.sync().then(() => {
        console.log('db success');
    }).catch((err:any)=>{
        console.log(err.message+'errrrr');
    })
})