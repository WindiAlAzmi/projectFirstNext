//   const [currentPage, setCurrentPage] = useState(1);
//   const itemPerPage = 1;

//   const indexOfLastItem = currentPage * itemPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemPerPage;
//   let currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   console.log(currentItems, 'ini currentItems');

//   let nPages = Math.ceil(data.length / itemPerPage); //jumlah total halaman

//    const handleNextPage = () => {
//      setCurrentPage(currentPage + 1);
//    };

//    const handlePrevPage = () => {
//      setCurrentPage(currentPage - 1);
//    };
