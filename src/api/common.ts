import { useMutation, useQuery } from "@tanstack/react-query"

import axios from "axios"

export const getRepos = () => {
    return useQuery({
        queryKey: ['repos'],
        queryFn: () => axios.get('https://api.github.com/users/HERSHIT-code/repos'),
        select:(response) => response.data
    })
}