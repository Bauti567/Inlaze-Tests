import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() userObject: RegisterAuthDto){
    return this.authService.Register(userObject)
    
  }

  @Post('login')
  LoginUser(@Body() userObjectLogin: LoginAuthDto){
    return this.authService.Login(userObjectLogin)
  }

  
}
