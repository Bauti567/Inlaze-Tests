import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://JuanBautista:RvYHr6R8OQwy5Mk0@cluster0.tuza9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    UsersModule
  ],
  

})
export class AppModule {
  
}
