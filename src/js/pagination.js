const createPagItem = (pageNum, accent = false) => `<div class="pagination__item${(accent) ? ' pagination_accent' : ''}">${pageNum}</div>`

// const pagContainer = document.querySelector('.pagination__pages');

export function fillPag(container, currentPage, totalPages, PathOptions) {
    currentPage++;
    let leftNum = currentPage;
    let rightNum = totalPages - currentPage;
    let arr = (currentPage > 5) ? 
        [
            '1', 
            (leftNum > 5) ? '...' : '2',
            (currentPage - 1).toString(),
            currentPage.toString(),
            (currentPage + 1).toString(),
            (rightNum > 5) ? '...' : ((totalPages - 1).toString()),
            totalPages.toString()
        ] : 
        Array(Math.min(5, totalPages))
            .fill(0)
            .map((_, idx) => String(idx + 1))
            .concat(
                (
                (totalPages > 7) ? 
                ['...', totalPages.toString()] : 
                Array(Math.max(0, totalPages - 5))
                    .fill(0)
                    .map((_, idx) => String(idx + 1 + 5))
                )
            );
    
    container.innerHTML = '';
    for (const element of arr) {
        container.innerHTML += createPagItem(element, currentPage === Number(element));
    }
    container.querySelectorAll(".pagination__item").forEach(item => {
        item.addEventListener('click', () => {
            if (item.textContent === '...') {
                item.innerHTML = `<input class="pagination__input" max="${totalPages}" min="1">`
                const itemInput = item.querySelector('.pagination__input')
                itemInput.addEventListener('keyup', (ev) => {
                    if (ev.key === 'Enter') {
                        PathOptions.page = Number(itemInput.value) - 1;
                        item.innerHTML = '...'
                        document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                        fillPag(container, PathOptions.page, totalPages, PathOptions);
                    }
                });
                itemInput.focus();
            }
            else {
                PathOptions.page = Math.min(Number(item.textContent), totalPages - 1) - 1;
                document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                fillPag(container, PathOptions.page, totalPages, PathOptions);
            }
        })
    })
}

