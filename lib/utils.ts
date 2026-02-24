import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const sectionClass = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
