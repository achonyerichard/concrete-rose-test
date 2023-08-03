/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


export default function Pagination({
    itemsPerPage,
    total,
    paginate,
    currentPage,
  }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center items-center">
  
     
      <div className='py-2'>
        <div className="flex justify-center">
          <p className='text-sm text-black'>
            Showing
            <span className='font-medium'>
              {" "}
              {currentPage * itemsPerPage - itemsPerPage}{" "}
            </span>
            to
            <span className='font-medium'> {currentPage * itemsPerPage} </span>
            of
            <span className='font-medium'> {total} </span>
            results
          </p>
        </div>
        <nav className='block'>
          <ul className='flex justify-center pl-0 rounded list-none flex-wrap ' >
            <li className="">
              {pageNumbers.map((number,index) => (
                <span
                key={index}
                  onClick={() => {
                    paginate(number);
                  }}
                
                  className={
                    currentPage === number
                      ? "mr-2 rounded-full bg-blue-600 font-bold border-blue-600 text-white hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm "
                      : "rounded-full bg-white border-gray-300 text-blue-600 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {number}
                </span>
              ))}
            </li>
          </ul>
        </nav>
      </div>
      </div>
    );
  }