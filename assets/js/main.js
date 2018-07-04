(function() {
  new Vue({
    el: '#app',
    data: {
      name: 'Kolia',
      url: 'https://google.com.ua',
      newBook: '',
      books: []
    },
    methods: {
      changeName: function(e) {
        this.name = 'Moto';
        e.preventDefault();
      },
      addBook: function() {
        this.books.push(this.newBook);
      },
      deleteBook: function(i) {
        console.log(i);
        this.books.splice(i);
      }
    },
    computed: {
      userInfo : function() {
        return this.name + '  kek';
      }
    },
    watch: {
      books: function() {
        console.log(this.newBook);
      }
    }
  });
})();