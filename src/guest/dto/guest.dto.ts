export class GuestDto {
  constructor(
    id: string,
    phone: string,
    name: string,
    rank: string,
    zaloId: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.phone = phone;
    this.name = name;
    this.rank = rank;
    this.zaloId = zaloId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  id: string;
  phone: string;
  name: string;
  rank: string;
  zaloId: string;
  createdAt: Date;
  updatedAt: Date;
}
