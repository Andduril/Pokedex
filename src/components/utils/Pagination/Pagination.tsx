import Arrow from '../SVG/Arrow'
import FinalArrow from '../SVG/FinalArrow'
import './Pagination.style.scss'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (nb: number) => void
  siblingCount?: number
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, siblingCount }) => {
  // eslint-disable-next-line
    const goStart = () => {
    onPageChange(1)
  }

  // eslint-disable-next-line
    const goEnd = () => {
    onPageChange(totalPages)
  }

  const goPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const goNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
        <div className='Pagination'>
            <button disabled={currentPage === 1} onClick={() => { goStart() }} className='pagination-button previous'>
                <FinalArrow/>
            </button>
            <button disabled={currentPage === 1} onClick={() => { goPrevious() }} className='pagination-button previous'>
                <Arrow/>
            </button>
            <div className='pagination-current-page'>
                <span>
                    {currentPage}
                </span>
            </div>
            <button disabled={currentPage === totalPages} onClick={() => { goNext() }} className='pagination-button'>
                <Arrow/>
            </button>
            <button disabled={currentPage === totalPages} onClick={() => { goEnd() }} className='pagination-button'>
                <FinalArrow/>
            </button>
        </div>
  )
}

export default Pagination
