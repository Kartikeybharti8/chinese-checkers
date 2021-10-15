//import { user } from './user.interface';

import { generate } from './randomNo';
import admin, {db} from './firebaseService'
export class Firebase { 
    async getUser( token: string): Promise<any> 
    {
      try{
          if(token === undefined){
              console.log('no header recieved');
              return null;
          }
        //   if(token.split(' ')[0] === 'Bearer')
        //     token = token.split(' ')[1];
            const decodedToken = await admin.auth().verifyIdToken(token);
            // const userRecord = await admin.auth().getUser(decodedToken.uid)
        //   const user: user = {
        //       currentUser: userRecord.displayName,
        //       avatar: userRecord.photoURL,
        //       userId: userRecord.uid
        //   }
         if(decodedToken)
        {
            //var user=[72, 100, 102, 128, 130, 132, 156, 158, 160, 162];
            const user= generate();
            return user;
        }
      }catch{
          return null;
      }

    }
    database = db;
    async addData(table: string, docID: string, object: any): Promise<void> {
        await this.database
            .collection(table)
            .doc(docID)
            .set(object)
            .then(() => console.log("added"))
            .catch((error:any) => console.log(error));
    }


    // async getData(table: string, docID: string): Promise<any> {
    //     let data;
    //     await this.database
    //         .collection(table)
    //         .doc(docID)
    //         .get()
    //         .then((snapshot) => {
    //             console.log("fetching data");
    //             data = snapshot.data();
    //         })
    //         .catch((error) => console.log(error));
    //         return data;
    // }
}