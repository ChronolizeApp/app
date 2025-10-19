import { paths } from "@/shared/lib/utils";
import { Layout } from "@/shared/ui/layout";
import { Suspense } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

import { ErrorPage } from "@/pages/empty";
import { SchedulePage } from "@/pages/schedule";
import { IndexPage } from "@/pages/index";
import { LoadingPage } from "@/pages/loading/ui/page";
import { NotesPage } from "@/pages/notes/ui";

const routes = (): RouteObject[] => [
    {
        path: "/",
        element: (
            <Layout useNavbar useMenu>
                <Outlet />
            </Layout>
        ),
        children: [
            {
                path: paths.index,
                element: <IndexPage />
            },
            {
                path: paths.schedule,
                element: <SchedulePage />
            },
            {
                path: paths.notes,
                element: <NotesPage />
            },
            {
                path: paths.profile,
                element: <h1>Profile Page</h1>
            },
            {
                path: paths.all,
                element: <ErrorPage />
            }
        ]
    }
];

export const AppRoutes = () => (
    <Suspense fallback={<LoadingPage />}>
        {useRoutes(routes())}
    </Suspense>
);
