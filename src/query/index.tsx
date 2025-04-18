import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export const queryProvider = ({children}:{children:React.ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions:{
            queries:{
                retry:1,
                staleTime: 1000 * 60 * 5,
                // @ts-ignore
                cacheTime: 1000 * 60 * 10,
                refetchOnWindowFocus:false
            }
        }
    }))

    return(
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}
