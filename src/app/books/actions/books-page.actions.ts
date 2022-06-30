import { createAction, props } from "@ngrx/store";
import { BookRequiredProps } from "src/app/shared/models";

export const enter = createAction('[Books Page] Enter');

export const selectBook = createAction(
    '[Book Page] Select Book',
    props<{ bookId: string}>()
);

export const clearSelectedBook = createAction(
    '[Book Page] Clear Selected Book'
);

// [Books page] Create a Book
//     - BookRequiredProps
export const createBook = createAction(
    '[Book Page] Create a book',
    props<{ book: BookRequiredProps }>()
);
// [Books on the books page] Update a Book
//     - BookRequiredProps
//     - ID of book being edited
export const updateBook = createAction(
    '[Book Page] Update a book',
    props<{ changes: BookRequiredProps, bookId: string }>()
);
// [Books page] Delete a Book
//     - ID of book being edited
export const deleteBook = createAction(
    '[Book Page] Delete a book',
    props<{ bookId: string}>()
);
// [Books page] Cancel editing a Book
export const cancelEditingBook = createAction(
    '[Book Page] Cancel editing a book'
);