export class CreateBookingDto {
  zaloId: string;
  bookingName: string;
  bookingPhone: string;
  date: Date;
  time: Date;
  note?: string;
  successful: boolean;
  failedReason: string;
}
