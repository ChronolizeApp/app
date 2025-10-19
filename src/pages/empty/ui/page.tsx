import { Button } from "@/shared/ui/button"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent } from "@/shared/ui/empty"

export const ErrorPage = () => {
    return (
        <Empty className="flex justify-center items-center h-[75vh]">
            <EmptyHeader>
                <EmptyTitle className="text-2xl">Произошла ошибка</EmptyTitle>
                <EmptyDescription className="text-base">Страница возможно не найдена, попробуйте повторить попытку позже</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button className="w-full">Вернуться назад</Button>
            </EmptyContent>
        </Empty>
    )
}
