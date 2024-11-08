import {connect} from 'mongoose';

 async function connectToDatabase(){
    try {
        await connect (process.env.MONGODB_URL );
        console.log('Connected to the database');
        }
    catch (error){
            console.log(error);
            throw new Error('Error connecting to the database');
        }
        
     }

     async function  disconnectFromDatabase(){
        try {
            await connect (process.env.MONGODB_URL );
            console.log('Disconnected from the database');
            }
        catch (error){
                console.log(error);
                throw new Error('Error disconnecting from the database');
            }
     }

     export { connectToDatabase ,disconnectFromDatabase};