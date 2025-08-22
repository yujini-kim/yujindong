import { IconFail, IconSuccess } from '@/components/icon'
import { ToastType } from './use-toast-store'
interface Props {
    type: ToastType
    message: string
}

export default function ToastContent({ type, message }: Props) {
    return (
        <div className="w-fit flex items-center justify-center gap-2 bg-ink-900 text-white px-3 py-2 rounded">
            {type === 'success' ? <IconSuccess className="w-4 h-4 " /> : <IconFail className="w-4 h-4 " />}
            <span className="text-sm">{message}</span>
        </div>
    )
}
