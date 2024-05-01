import store from "@/lib/auth";
import { queryClient } from "@/lib/react-query";
import * as React from "react";
import AuthProvider from "react-auth-kit";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";

const ErrorFallback = ({ error }: FallbackProps) => {
	console.error(error);
	return (
		<div
			className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
			role="alert"
		>
			<h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
			<button
				className="mt-4"
				onClick={() => window.location.assign(window.location.origin)}
			>
				Refresh
			</button>
		</div>
	);
};

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<React.Suspense
			fallback={
				<div className="flex items-center justify-center w-screen h-screen">
					Loading...
				</div>
			}
		>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						{process.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
						{/* <Notifications /> */}
						<AuthProvider store={store}>
							<Router>{children}</Router>
						</AuthProvider>
					</QueryClientProvider>
				</HelmetProvider>
			</ErrorBoundary>
		</React.Suspense>
	);
};
