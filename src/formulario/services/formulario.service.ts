import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormEncuentroNacionalDto, TFormEncuentro } from '../dto/formulario.dto/formEncuentroNacional.dto';

@Injectable()
export class FormularioService
{
  constructor(@InjectModel(FormEncuentroNacionalDto.name)private formEncuentro:Model<TFormEncuentro>)
  {}

  async registro(datos: FormEncuentroNacionalDto): Promise<FormEncuentroNacionalDto>
  {
    return this.formEncuentro.create(datos);
  }

  async listado():Promise<FormEncuentroNacionalDto[]>
  {
    return this.formEncuentro.find();
  }
}
