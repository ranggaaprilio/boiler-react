import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

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
				<AuthOutlet fallbackPath="/auth/login" />
			</Suspense>
		</MainLayout>
	);
};

export const protectedRoutes = [
	{
		path: "/app",
		element: <App />,
		children: [
			{ path: "", element: <Dashboard /> },
			{ path: "*", element: <Navigate to="." /> },
		],
	},
];
