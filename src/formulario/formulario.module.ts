import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormularioService } from './services/formulario.service';
import { FormularioResolver } from './resolvers/formulario.resolver';
import { FormEncuentroNacionalDto, SCHEMA_REG_ENCUENTRO_NACIONAL } from './dto/formulario.dto/formEncuentroNacional.dto';

@Module({
  imports: [MongooseModule.forFeature([{
    name: FormEncuentroNacionalDto.name, schema: SCHEMA_REG_ENCUENTRO_NACIONAL,
  }])],
  providers: [FormularioService, FormularioResolver],
  exports: [],
})
export class FormularioModule
{}
