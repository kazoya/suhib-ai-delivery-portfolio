import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const arabicNumber = (n: number) => new Intl.NumberFormat("ar-JO-u-nu-latn").format(n);
