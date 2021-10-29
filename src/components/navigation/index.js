import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Amplify, { Auth } from "aws-amplify";

import Routes from "./Routes";
import { AuthProvider } from "./Providers/AuthProvider";

const Providers = (props) => {
  const defaultQueryFn = async ({ queryKey }) => {
    const data = await Auth.currentAuthenticatedUser();

    return data;
  };

  // provide the default query function to your app with defaultOptions

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes themeColor={props.themeColor} />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;

{
  /*
      <Routes />
*/
}
