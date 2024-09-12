import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users,UserSchema } from 'src/users/schemas/users.schema';
import { User } from 'src/users/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Users.name,
      schema: UserSchema
      
    }]),
    // Jwt Tokens import
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  
  controllers: [AuthController],
  providers: [AuthService],
})

export class AuthModule {}
