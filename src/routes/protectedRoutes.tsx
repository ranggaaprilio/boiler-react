import { MainLayout } from "@/components/Layout";
import { lazyImport } from "@/utils/lazyImport";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";

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
