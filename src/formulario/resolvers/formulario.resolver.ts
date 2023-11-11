import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { FormularioService } from '../services/formulario.service';
import { FormEncuentroNacionalDto } from '../dto/formulario.dto/formEncuentroNacional.dto';

@Resolver(() => FormEncuentroNacionalDto)
export class FormularioResolver
{
  constructor(private formService: FormularioService)
  {}

@Mutation(() => FormEncuentroNacionalDto)
  async registro(@Args('datos') datos: FormEncuentroNacionalDto):Promise<FormEncuentroNacionalDto>
  {
    return this.formService.registro(datos);
  }

  @Query(() => [FormEncuentroNacionalDto], { nullable: true, defaultValue: []})
async listado():Promise<FormEncuentroNacionalDto[]>
{
  return this.formService.listado();
}
}
