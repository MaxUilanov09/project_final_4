const createPagItem = (pageNum, accent = false) => {
    if (pageNum !== '>' && pageNum !== '<') {
        return `<div data-pageid="${pageNum}" class="pagination__item${(accent) ? ' pagination_accent' : ''}"><p style="transform: translateY(-2px)">${pageNum}</p></div>`
    }
    else if (pageNum === '>') {
        return `<div data-pageid="${pageNum}" class="pagination__item${(accent) ? ' pagination_accent' : ''}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></div>`
    }
    else if (pageNum === '<') {
        return `<div data-pageid="${pageNum}" class="pagination__item${(accent) ? ' pagination_accent' : ''}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></div>`
    }
}

// const pagContainer = document.querySelector('.pagination__pages');

export function fillPag(container, currentPage, totalPages, PathOptions) {
    currentPage++;
    let leftNum = currentPage;
    let rightNum = totalPages - currentPage;
    let arr = (currentPage > 5) ? 
        [
            '1', 
            (leftNum > 5) ? '<' : '2',
            (currentPage - 1).toString(),
            currentPage.toString(),
            (currentPage + 1).toString(),
            (rightNum > 5) ? '>' : ((totalPages - 1).toString()),
            totalPages.toString()
        ] : 
        Array(Math.min(5, totalPages))
            .fill(0)
            .map((_, idx) => String(idx + 1))
            .concat(
                (
                (totalPages > 7) ? 
                ['>', totalPages.toString()] : 
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
            if (item.dataset.pageid === currentPage) {
                item.innerHTML = `<input class="pagination__input" max="${totalPages}" min="1">`
                const itemInput = item.querySelector('.pagination__input')
                itemInput.addEventListener('keyup', (ev) => {
                    if (ev.key === 'Enter') {
                        PathOptions.page = Number(itemInput.value) - 1;
                        item.innerHTML = currentPage;
                        document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                        fillPag(container, PathOptions.page, totalPages, PathOptions);
                    }
                });
                itemInput.focus();
            }
            else if (item.dataset.pageid === '>') {
                console.log(PathOptions);
                PathOptions.page = Math.max(0, Math.min(Number(currentPage + 5), totalPages - 1) - 1);
                console.log(PathOptions);
                document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                fillPag(container, PathOptions.page, totalPages, PathOptions);
            }
            else if (item.dataset.pageid === '<') {
                PathOptions.page = Math.max(0, Math.min(Number(currentPage - 5), totalPages - 1) - 1);
                document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                fillPag(container, PathOptions.page, totalPages, PathOptions);
            }
            else {
                PathOptions.page = Math.max(0, Math.min(Number(item.textContent), totalPages - 1) - 1);
                document.querySelector('.dataDiv').dataset.searchFlag = 'yes';
                fillPag(container, PathOptions.page, totalPages, PathOptions);
            }
        })
    })
}

