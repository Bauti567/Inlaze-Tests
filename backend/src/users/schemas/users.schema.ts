import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UsersDocument = Users & Document

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