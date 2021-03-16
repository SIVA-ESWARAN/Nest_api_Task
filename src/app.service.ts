import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) { }

    // provide data in object
    // {
    //   "FirstName":"siva",
    //   "LastName":"E",
    //   "MailID":"siva@mail.com",
    //   "MobileNo":"9629350999",
    //   "Password":"siva1224"
    // }
  async doRegistration(data: object) {
    console.log("doRegistration--data===", data);
    let validateUser: any[] = await this.db.collection('USER').find({ MailID: data['MailID'] }).toArray();
    console.log("validateUser==", validateUser);
    if (validateUser.length === 0) {
      let dbRes = await this.db.collection('USER').insertOne(data);
      if (dbRes.ops.length > 0 && dbRes.result.n == 1) {
        return 'Successfully Added to Data Base';
      }
      else {
        return 'Problem in Registration'
      }
    } else {
      return ' Already Register. Please Login!'
    }
  }

  // provide data in object
  //   {
  //     "MailID":"siva@mail1.com",
  //      "Password":"siva1224"
  //  }
  async doLogin(data: object) {
    console.log("doLogin--data===", data);
    if (data['MailID'] && data['Password']) {
      let dbRes: any[] = await this.db.collection('USER').find(data).toArray();
      console.log("dbRes=login=", dbRes);
      if (dbRes.length > 0) {
        return 'Login successfully'
      } else {
        return 'No Data Found. Please Resister first!'
      }
    } else {
      return 'Provide valid information!'
    }
  }
}
