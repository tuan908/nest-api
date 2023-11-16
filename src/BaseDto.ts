export type BaseDto<T> = {
  data: T[] | T;
  status: 'OK' | 'NG';
  message: string;
  success: boolean;
};
