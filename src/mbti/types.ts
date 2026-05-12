export type Axis = 'AD' | 'BS' | 'CF' | 'TW';

export type Pole = 'A' | 'D' | 'B' | 'S' | 'C' | 'F' | 'T' | 'W';

export type TypeCode =
  | 'ABCT' | 'ABCW' | 'ABFT' | 'ABFW'
  | 'ASCT' | 'ASCW' | 'ASFT' | 'ASFW'
  | 'DBCT' | 'DBCW' | 'DBFT' | 'DBFW'
  | 'DSCT' | 'DSCW' | 'DSFT' | 'DSFW';

export const ALL_TYPE_CODES: TypeCode[] = [
  'ABCT', 'ABCW', 'ABFT', 'ABFW',
  'ASCT', 'ASCW', 'ASFT', 'ASFW',
  'DBCT', 'DBCW', 'DBFT', 'DBFW',
  'DSCT', 'DSCW', 'DSFT', 'DSFW',
];

export const AXES: Axis[] = ['AD', 'BS', 'CF', 'TW'];

export const AXIS_POLES: Record<Axis, [Pole, Pole]> = {
  AD: ['A', 'D'],
  BS: ['B', 'S'],
  CF: ['C', 'F'],
  TW: ['T', 'W'],
};

export interface Question {
  id: string;
  axis: Axis;
  options: [
    { pole: Pole },
    { pole: Pole }
  ];
}
