import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@mdi/react";
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
} from "@mdi/js";

export function DataTablePagination({ table }) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 4; // Adjust this value to determine how many page numbers are visible

    if (pageCount <= visiblePages) {
      // Show all page numbers if there are not enough pages
      for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(renderPageButton(i));
      }
    } else {
      // Show ellipsis before the visible page numbers
      if (pageIndex > 1 && pageIndex !== 2) {
        pageNumbers.push(renderEllipsis());
      }

      // Show the visible page numbers
      for (
        let i = Math.max(0, pageIndex - 1);
        i < Math.min(pageCount, pageIndex + visiblePages - 1);
        i++
      ) {
        pageNumbers.push(renderPageButton(i));
      }

      // Show ellipsis after the visible page numbers
      if (pageIndex < pageCount - 2 && pageIndex !== pageCount - 3) {
        pageNumbers.push(renderEllipsis());
      }
    }

    return pageNumbers;
  };

  const renderPageButton = (index) => (
    <Button
      key={index}
      variant="outline"
      className={`h-8 w-8 p-0 pagination-btn ${
        pageIndex === index ? "font-bold bg-[#9B2C2D] text-white" : ""
      }`}
      onClick={() => table.setPageIndex(index)}
    >
      {index + 1}
    </Button>
  );

  const renderEllipsis = () => (
    <span key="ellipsis" className="mx-1">
      ...
    </span>
  );

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[2, 4, 6, 8, 10].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          {/* Reach to the first page  */}
          {/* <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <Icon path={mdiChevronDoubleLeft} size={1} />
          </Button> */}
          <Button
            variant="outline"
            className="h-8 w-8 p-0 border-0 m-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <Icon path={mdiChevronLeft} size={1} />
          </Button>
          <div className="flex w-auto items-center justify-center text-sm font-medium">
            {/* Page numbers */}
            {renderPageNumbers()}
          </div>
          <Button
            variant="outline"
            className="h-8 w-8 p-0 border-0 m-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <Icon path={mdiChevronRight} size={1} />
          </Button>
          {/* Reach to the last page  */}
          {/* <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <Icon path={mdiChevronDoubleRight} size={1} />
          </Button> */}
        </div>
      </div>
    </div>
  );
}
