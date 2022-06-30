import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { BooksService } from "../shared/services";
import { BooksPageActions, BooksApiActions } from "./actions";

@Injectable()
export class BooksApiEffects {

    constructor(private actions$: Actions, private bookService: BooksService) {}

    getAllBooks$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.enter),
            exhaustMap((action) => {
                return this.bookService.all().pipe(
                    map(books => BooksApiActions.booksLoaded({ books }))    
                );
            })
        )
    });

    deletedBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.deleteBook),
            mergeMap(action => {
                return this.bookService.delete(action.bookId).pipe(
                    map(() => BooksApiActions.bookDeleted({ bookId: action.bookId }))
                );
            })
        );
    });  

    createBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.createBook),
            concatMap(action => {
                return this.bookService.create(action.book).pipe(
                    map(bookCreated => BooksApiActions.bookCreated({ book: bookCreated}))
                );
            })
        );
    });

    updateBook$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(BooksPageActions.updateBook),
            concatMap(action => {
                return this.bookService.update(action.bookId, action.changes).pipe(
                    map(bookUpdated => BooksApiActions.bookUpdated({ book: bookUpdated }))
                );
            })
        );
    });



}