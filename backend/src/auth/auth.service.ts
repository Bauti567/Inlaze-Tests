import { Body, HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/schemas/users.schema';
import { hash, compare } from 'bcrypt';
import { checkPrime } from 'crypto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument> ){
    
  }

  async Register(userObject: RegisterAuthDto){
    const {password} = userObject
    const plainToHash = await hash(password, 10)
    userObject = {...userObject, password: plainToHash}
    return this.userModel.create(userObject)
  }

  async Login(@Body() userObjectLogin: LoginAuthDto){
    const { email, password } = userObjectLogin;
    const findUser = await this.userModel.findOne({email})
    if(!findUser) new HttpException('User Not found', 404)

      const checkPassword = await compare(password, findUser.password)
      if(!checkPassword) throw new HttpException('Password Incorrect', 403)
      const data = findUser
      return data;
  }
  


}