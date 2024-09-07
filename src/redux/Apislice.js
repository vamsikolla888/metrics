import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setItem, showToast } from "./reducers/Uislice";
import { CommonToastTypes } from "../common/toast/Toast";
import { getDataFromLocalStorage } from "../utils/localStorage";


export const ApiStore = createApi({
    reducerPath: "apiStore",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.school1.dosystemsinc.com/api/",
        // headers: {
        //     Authorization: "Bearer " + "4fa3ba46-0be8-585f-a6df-256121e716df"
        // }
    }),
    endpoints: builder => ({
        getAllDetails: builder.query({
            query: (url) => ({ url, headers: { 'Authorization': 'Bearer ' + getDataFromLocalStorage("loginCredentials", obj => obj["accessToken"])}}),
            transformResponse: (response) => {
                return response;
            },
        }),
        post: builder.mutation({
            query: ({url, body}) => ({ url, body, method: "POST", headers: { 'Content-Type': 'application/json'}}),
            transformResponse: response => response,
            async onQueryStarted(arg, { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry}) {
                if(arg?.url === "auth/login") {
                    let { data } = await queryFulfilled;
                    if(data?.respCode) {
                        dispatch(setItem({key: "accessToken", value: data.accessToken}));
                        dispatch(setItem({key: "loginCredentials", value: data}))
                        dispatch(showToast({ type: CommonToastTypes.SUCCESS, message: data.respMessage }));
                    }
                    else {
                        dispatch(showToast({ type: CommonToastTypes.ERROR, message: data.errorMessage }));
                    }
                    
                    // console.log("RES", response);
                }
                console.log("GET STATE", getState());
                console.log("QUERY FULL", queryFulfilled, requestId, extra, getCacheEntry)
            }

        })

})
});

export const { useGetAllDetailsQuery, usePostMutation } = ApiStore;