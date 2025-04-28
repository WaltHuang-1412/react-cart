import { Button } from '@/components/ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages: (number | '...')[] = [];
    const delta = 2; // 當前頁左右各顯示幾頁

    const range = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      pages.push(1, '...', ...range);
    } else {
      pages.push(...[1, ...range]);
    }

    if (currentPage + delta < totalPages - 1) {
      pages.push('...', totalPages);
    } else {
      if (!range.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
      {/* 上一頁 */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        上一頁
      </Button>

      {/* 頁碼 */}
      {pages.map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-400 select-none">
            ...
          </span>
        ) : (
          <Button
            key={page}
            variant={page === currentPage ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        )
      ))}

      {/* 下一頁 */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        下一頁
      </Button>
    </div>
  );
}

export default Pagination
