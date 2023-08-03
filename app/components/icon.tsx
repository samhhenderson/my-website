import Image from "next/image"

interface IconProps {
  src: string
  alt: string
  href: string
}

export default function Icon({ src, alt, href }: IconProps): JSX.Element {
  return (
    <a
    className="flex"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    >
      <div className="dark:invert">
        <Image
          src={src}
          alt={alt}
          width={40}
          height={24}
          priority
          className="opacity-100 hover:opacity-75 transition-opacity duration-300"
        />
      </div>
  </a>
  )
}
