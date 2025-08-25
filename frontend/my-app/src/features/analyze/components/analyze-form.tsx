import Button from '@/components/common/button/button'
import Input from '@/components/common/input/input'

export default function AnalyzeForm() {
    return (
        <div>
            <form>
                <Input title="파일업로드하기" fieldName="file" type="file" accept=".txt" />
                <Input fieldName="friendName" />
                <Input fieldName="text" />
                <Button>분석하기</Button>
            </form>
        </div>
    )
}
