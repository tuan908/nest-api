import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuChoicesDto } from './create-menu-choices.dto';

export class UpdateMenuChoicesDto extends PartialType(CreateMenuChoicesDto) {}
