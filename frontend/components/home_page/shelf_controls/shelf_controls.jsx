import React from "react";
import "./shelf_controls.scss";

const ShelfControls = props => (
  <aside className="bookshelf-controls">
    <h4>Bookshelves</h4>
    {props.bookshelves.map(shelf => (
      <p
        key={shelf.name}
        className={
          props.selectedShelf === shelf.name
            ? "selected bookshelf-control"
            : "bookshelf-control"
        }
      >
        {shelf.name}
      </p>
    ))}
  </aside>
);

export default ShelfControls;