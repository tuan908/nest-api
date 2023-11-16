import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Controller('guest')
export class GuestController {
  constructor(private readonly guestService: GuestService) {}

  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestService.create(createGuestDto);
  }

  @Get()
  findAll() {
    return this.guestService.findAll();
  }

  @Get('/id/:id')
  findById(@Param('id') id: string) {
    console.log('ac79d917-efb3-4ee2-a3b1-16932976002d');
    return this.guestService.findById(+id);
  }

  @Get('/zaloId/:zaloId')
  findByZaloId(@Param('zaloId') zaloId: string) {
    return this.guestService.findByZaloId(zaloId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestService.update(+id, updateGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestService.remove(+id);
  }
}
