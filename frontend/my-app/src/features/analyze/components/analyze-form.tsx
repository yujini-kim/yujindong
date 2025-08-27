import Button from '@/components/common/button/button'
import Input from '@/components/common/input/input'
import { useForm } from 'react-hook-form'
import { useAnalyzeMutation } from '../model/use-analyze-mutation'

interface analyzeFormData {
    text: string
    friend_name: string
}

export default function AnalyzeForm() {
    const { register, handleSubmit } = useForm<analyzeFormData>()
    const analyzeMutation = useAnalyzeMutation()
    const onSubmit = (formData: analyzeFormData) => {
        analyzeMutation.mutate(formData)
    }
    return (
        <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  flex flex-col justify-center items-center">
                <Input title="파일업로드하기" fieldName="file" type="file" accept=".txt" />
                <Input fieldName="text" title="분석할 대화내용" {...register('text')} />
                <Input fieldName="friendName" title="친구이름" {...register('friend_name')} />
                <Button>분석하기</Button>
            </form>
        </div>
    )
}
