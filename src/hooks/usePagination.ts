import { useMemo, useState } from "react";

export interface usePaginationProps {
    itemsPerPage: number;
    totalCount: number;
};

const getLimit = (itemsPerPage: number, offset: number, totalCount: number): number => {
    if((offset + itemsPerPage) > totalCount) {
        return itemsPerPage - ((offset + itemsPerPage) - totalCount);
    };

    return itemsPerPage;
};

const usePagination = ({itemsPerPage, totalCount}: usePaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const offset = (currentPage * itemsPerPage) - itemsPerPage;

    const limit = getLimit(itemsPerPage, offset, totalCount);
    
    const totalPages = useMemo(() => {
        return Math.ceil(totalCount / itemsPerPage);
    }, [itemsPerPage, totalCount]);

    const setPage = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const hasPrevious = (): boolean => {
        if (currentPage === 1) return false;

        return true;
    };

    const hasNext = (): boolean => {
        if (currentPage === totalPages) return false;

        return true;
    };

    return { currentPage, setPage, hasPrevious, hasNext, totalPages, offset, limit};

};

export default usePagination;