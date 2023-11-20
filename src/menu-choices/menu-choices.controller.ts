import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {CreateMenuChoicesDto} from './dto/create-menu-choices.dto';
import {UpdateMenuChoicesDto} from './dto/update-menu-choices.dto';
import {MenuChoicesService as MenuChoicesService} from './menu-choices.service';
import {number} from 'joi';

@Controller('menu-choices')
export class MenuChoicesController {
  constructor(private readonly menuChoicesService: MenuChoicesService) {}

  @Post()
  create(@Body() createMenuChoicesDto: CreateMenuChoicesDto) {
    return this.menuChoicesService.create(createMenuChoicesDto);
  }

  @Get()
  findAll(@Query('limit') limit?: number) {
    console.log(limit);
    return this.menuChoicesService.findAll(limit ? limit : null);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuChoicesService.findOne(id);
  }

  @Get('category/:category')
  findByCategory(
    @Param('category') category: string,
    @Query('limit') limit?: number,
  ) {
    return this.menuChoicesService.findByCategory(category, limit);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMenuChoiceDto: UpdateMenuChoicesDto,
  ) {
    return this.menuChoicesService.update(+id, updateMenuChoiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuChoicesService.remove(+id);
  }
}
