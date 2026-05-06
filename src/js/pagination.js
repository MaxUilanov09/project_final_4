const createPagItem = (pageNum) => `<div class="pagination__item"><p class="pagination__text">${pageNum}</p></div>`

// const pagContainer = document.querySelector('.pagination__pages');

export function fillPag(container, currentPage, totalPages) {
    let leftNum = currentPage;
    let rightNum = totalPages - currentPage;
    let arr = (currentPage > 5) ? 
        [
            '1', 
            (leftNum > 6) ? '...' : '2',
            (currentPage - 1).toString(),
            currentPage.toString(),
            (currentPage + 1).toString(),
            (rightNum > 6) ? '...' : ((totalPages - 1).toString()),
            totalPages.toString()
        ] : 
        Array(Math.min(5, totalPages))
            .fill(0)
            .map((_, idx) => idx).concat(((totalPages > 7) ? ['...', totalPages.toString()] : Array(totalPages - 5).fill(0).map((_, idx) => idx + 5)))
    
    // console.log(arr);
    for (const element of arr) {
        container.innerHTML += createPagItem(element);
    }
}