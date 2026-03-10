import {useQuery} from '@tanstack/react-query';
import { fetchSpecialists } from './api';
import { Specialist } from './types';


export const specialistKeys = {
    all: ['specialist'] as const,
};

export function useSpecialists() {
    return useQuery({
        queryKey: specialistKeys.all,
        queryFn: fetchSpecialists,
    });
}