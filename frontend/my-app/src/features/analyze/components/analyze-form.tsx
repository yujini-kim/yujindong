'use client'
import Button from '@/components/common/button/button'
import Input from '@/components/common/input/input'
import { useForm } from 'react-hook-form'
import { useAnalyzeMutation } from '../model/use-analyze-mutation'

interface analyzeFormData {
    text: string
    friend_name: string
}

export default function AnalyzeForm() {
    const { register, handleSubmit, setValue, watch } = useForm<analyzeFormData>()
    const analyzeMutation = useAnalyzeMutation()
    const onSubmit = (formData: analyzeFormData) => {
        analyzeMutation.mutate(formData)
    }
    const textValue = watch('text', '')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = () => {
            setValue('text', reader.result as string, { shouldValidate: true })
        }
        reader.readAsText(file)
    }

    return (
        <div className="p-2">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  flex flex-col justify-center items-center">
                <Input title="파일업로드하기" fieldName="file" type="file" accept=".txt" onChange={handleFileChange} />
                <Input fieldName="text" title="분석할 대화내용" {...register('text')} value={textValue} />
                <Input fieldName="friendName" title="친구이름" {...register('friend_name')} />
                <Button>분석하기</Button>
            </form>
        </div>
    )
}
