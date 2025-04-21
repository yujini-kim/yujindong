export interface SignupValues {
  username: string;
  email: string;
  displayName: string;
  password: string;
}

export interface SigninValues {
  username: string;
  password: string;
}

export interface SignupFormProps {
  onSubmit: (data: SignupValues) => void;
}

export interface SigninFormProps {
  onSubmit: (data: SigninValues) => void;
}

export interface ResultCircleProps {
  score: number;
}
