import { type ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
};

type HeaderProps = {
  image: Image;
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <div>
      <img src={image.src} alt={image.alt} />
      {children}
    </div>
  );
}
