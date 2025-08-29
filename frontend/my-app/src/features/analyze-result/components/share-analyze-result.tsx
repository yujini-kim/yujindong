import Button from '@/components/common/button/button'
import { toast } from '@/components/common/toast/toast'
import { AnalyzeResult } from '../model/analyze-result.types'

interface Props {
    data: AnalyzeResult
    uuid: string
}

export default function ShareAnalyzeResult({ data, uuid }: Props) {
    const handleShareToKakao = () => {
        const Kakao = (window as any).Kakao

        if (!Kakao) {
            toast.error('카카오 SDK가 로드되지 않았습니다')
            return
        }

        if (!Kakao.isInitialized()) {
            Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY)
        }

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: `${data.friendName}님과의 친밀도 결과`,
                description: data.summary,
                imageUrl: 'https://www.weddinggiftai.online/thumbnail.png',
                link: {
                    mobileWebUrl: `https://www.weddinggiftai.online/result/${uuid}`,
                    webUrl: `https://www.weddinggiftai.online/result/${uuid}`,
                },
            },
            buttons: [
                {
                    title: '결과 보러가기',
                    link: {
                        mobileWebUrl: `https://www.weddinggiftai.online/result/${uuid}`,
                        webUrl: `https://www.weddinggiftai.online/result/${uuid}`,
                    },
                },
            ],
        })
    }

    return (
        <Button onClick={handleShareToKakao} variant="accent" className="w-40 lg:w-[336px]">
            공유하기
        </Button>
    )
}
