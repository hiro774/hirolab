import { FormEvent } from "react";

export type Props = {
  formData: {
    name: string;
    email: string;
    content: string;
  };
  submitStatus: {
    success: boolean;
    message: string;
  } | null;
  isSubmitting: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent) => void;
};
