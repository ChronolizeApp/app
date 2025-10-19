import { Spinner } from "@/shared/ui/spinner"

export const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center">
            <Spinner className="size-8" />
        </div>
    )
}
