import Link from 'next/link'

interface Props {
    text: string
    linkText: string
    href: string
}

export default function AuthSwitchLink({ text, linkText, href }: Props) {
    return (
        <div className="flex text-sm gap-1">
            <span className="text-ink-800">{text}</span>
            <Link href={href} className="text-skyx-400 underline">
                {linkText}
            </Link>
        </div>
    )
}
