import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

const { Dashboard } = lazyImport(
	() => import("@/features/dashboard"),
	"Dashboard",
);

const App = () => {
	return (
		<MainLayout>
			<Suspense
				fallback={
					<div className="h-full w-full flex items-center justify-center">
						Loading ..
					</div>
				}
			>
				<Outlet />
			</Suspense>
		</MainLayout>
	);
};

export const protectedRoutes = [
	{
		path: "/app",
		element: <App />,
		children: [
			{ path: "/dashboard", element: <Dashboard /> },
			{ path: "/", element: <Dashboard /> },
			{ path: "*", element: <Navigate to="." /> },
		],
	},
];
