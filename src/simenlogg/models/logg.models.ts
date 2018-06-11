export interface Logg {
  id?: string;
  tidspunkt: Date;
  form: string;
  konsistens: string | null;
  blod: boolean | null;
  slim: boolean | null;
  matKommentar: string;
  kommentar: string;
  signatur: string;
}
