import type { AxiosError } from "axios";
import {
	type DefaultOptions,
	QueryClient,
	type UseMutationOptions,
	type UseQueryOptions,
} from "react-query";
import type { PromiseValue } from "type-fest";

const queryConfig: DefaultOptions = {
	queries: {
		useErrorBoundary: true,
		refetchOnWindowFocus: false,
		retry: false,
	},
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type ExtractFnReturnType<FnType extends (...args: any) => any> =
	PromiseValue<ReturnType<FnType>>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
	UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
	"queryKey" | "queryFn"
>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type MutationConfig<MutationFnType extends (...args: any) => any> =
	UseMutationOptions<
		ExtractFnReturnType<MutationFnType>,
		AxiosError,
		Parameters<MutationFnType>[0]
	>;
