export function selectBook(book) {
  return {
    // type is always needed | this is for switch statement
    type: 'BOOK_SELECTED',
    // payload is optional extra information
    payload: book
  }
}
