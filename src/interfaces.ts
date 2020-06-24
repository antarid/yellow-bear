export interface Jog {
  date: number;
  distance: number;
  id: number;
  time: number;
  user_id: string;
}

export interface JogInput {
  distance: number;
  time: number;
  date: number;
}
