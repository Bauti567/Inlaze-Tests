import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users,UserSchema } from 'src/users/schemas/users.schema';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Users.name,
      schema: UserSchema
    }])
  ],
  
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
