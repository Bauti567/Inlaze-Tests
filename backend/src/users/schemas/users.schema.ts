import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Users{
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    password: string

}


export const UserSchema = SchemaFactory.createForClass(Users)