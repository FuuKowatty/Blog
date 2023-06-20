type Props = {
    name: string;
    href: string;
    value: string;
}

export function ContactItem({name, href, value} : Props) {
    return(
      <a href={href} className="block">
        <strong>{name}:</strong> <span className="underline text-lightBlue font-bold">{value}</span>
      </a>
    )
}