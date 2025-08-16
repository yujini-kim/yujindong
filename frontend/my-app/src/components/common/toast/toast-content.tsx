import { IconFail, IconSuccess } from '@/components/icon'
import { ToastType } from './use-toast-store'
console.log('typeof IconSuccess:', typeof IconSuccess)
interface Props {
    type: ToastType
    message: string
}

export default function ToastContent({ type, message }: Props) {
    return (
        <div className="w-fit flex items-center gap-2 bg-ink-900 text-white px-3 py-2 rounded">
            <div>{type === 'success' ? <IconSuccess className="w-4 h-4" /> : <IconFail className="w-4 h-4" />}</div>
            <span>{message}</span>
        </div>
    )
}
