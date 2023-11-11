import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  Field, ID, InputType, ObjectType,
} from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IFormulario } from '../../formulario.interface';

@ObjectType('EncuentroNacionalType')
@InputType('EncuentroNacionalInput')
@Schema({ collection: 'EncuentroNacional' })
export class FormEncuentroNacionalDto implements IFormulario
{
    @IsOptional()
    @Field(() => ID, { nullable: true })
      _id: string;

    @IsNotEmpty({ message: 'El id buscar es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      idBuscar:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      nombrePlantel: string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      correoPlantel: string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      telefonoPlantel: string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      estadoPlantel: string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      municipioPlantel: string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      callePlantel:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      coloniaPlantel:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      nombreContig:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      correoContig:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      telefonoContig:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      nombreAlumno:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      fotografia:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      disciplina:string;

    @IsNotEmpty({ message: 'Este campo es requerido' })
    @Field(() => String, { nullable: true })
    @Prop()
      modalidad:string;
}

export const SCHEMA_REG_ENCUENTRO_NACIONAL = SchemaFactory.createForClass(FormEncuentroNacionalDto);
export type TFormEncuentro = FormEncuentroNacionalDto;
