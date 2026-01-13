let book = {
    title: prompt('Enter book title:'),
    author: prompt('Enter book author:'),
    readingStatus: prompt('Have you read this book? (yes/no)').toLowerCase() === 'yes',

    getInfo: function() {
        if (this.readingStatus) {
            console.log('You have already read "' + this.title + '" by' + this.author + '.');
        } else {
            return 'You still need to read "' + this.title + '" by ' + this.author  + '.';
        }
    }
};
console.log(book.getInfo());