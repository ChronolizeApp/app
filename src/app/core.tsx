import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routing/router"
import { Provider } from "react-redux"
import { store } from "@/shared/api/store"

export const Core = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </BrowserRouter>
    )
}
