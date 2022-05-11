class Pagination {
    constructor(items = [], pageSize = 10){
        this.items = items;
        this.pageSize = Math.floor(pageSize);
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1;
        this.currentPage = 1;
    }
    prevPage(){
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
        return this
    }

    nextPage(){
        this.currentPage = this.currentPage + 1 <= this.totalPages ? this.currentPage + 1 : this.currentPage;
        return this
    }

    firstPage(){
        this.currentPage =1;
        return this
    }

    lastPage(){
        this.currentPage = this.totalPages;
        return this
    }

    goToPage(){
        if (Math.sign(page) === -1){
            this.currentPage = 1;
            return this
        }else{
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page);
            return this
        }
            
    }

    getVisibleItems(){
        const start = this.currentPage * this.pageSize - this.pageSize;
        const end = this.currentPage * this.pageSize;
        const lista = this.items.slice(start, end);
        const wrapper = document.querySelector('#wrapper');
        let strHtml = '';
        lista.forEach((item) => {
            strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`;
        });
        wrapper.innerHTML = strHtml;
    }
}

const users = [
    { id: 1, nome: 'Luca', cognome: 'Frasino', classe: 'A' },
    { id: 2, nome: 'Simone', cognome: 'Peraz', classe: 'A' },
    { id: 3, nome: 'Francesco', cognome: 'Verdini', classe: 'A' },
    { id: 4, nome: 'Giancarlo', cognome: 'Rossomando', classe: 'A' },
    { id: 5, nome: 'Alessio', cognome: 'Biancospino', classe: 'A' },
    { id: 6, nome: 'Paolo', cognome: 'Nervi', classe: 'A' },
    { id: 7, nome: 'Federico', cognome: 'Marossi', classe: 'A' },
    { id: 8, nome: 'Stedano', cognome: 'Fenzi', classe: 'A' },
];
 
p = new Pagination(users, 2);
p.getVisibleItems();
const primo = document.querySelector('#first')
primo.addEventListener('click', function () {
    p.firstPage();
    p.getVisibleItems();
});
const ultimo = document.querySelector('#last')
ultimo.addEventListener('click', function () {
    p.lastPage();
    p.getVisibleItems();
});
const precedente = document.querySelector('#prev')
precedente.addEventListener('click', function () {
    p.prevPage();
    p.getVisibleItems();
});
const successivo = document.querySelector('#next')
successivo.addEventListener('click', function () {
    p.nextPage();
    p.getVisibleItems();
});
