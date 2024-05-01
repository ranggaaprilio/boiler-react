import { useRoutes } from "react-router-dom";

import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

export const AppRoutes = () => {
	const IsAuthenticated = useIsAuthenticated();

	const commonRoutes = [{ path: "/", element: <div>Landing</div> }];

	const routes = IsAuthenticated ? protectedRoutes : publicRoutes;

	const element = useRoutes([...routes, ...commonRoutes]);

	return <>{element}</>;
};
