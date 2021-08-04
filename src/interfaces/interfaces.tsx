export interface SingleText {
  title: string;
  text: string;
  category: string;
  tags: string[];
  id: string
}

export type FormElement = React.FormEvent<HTMLFormElement>;
