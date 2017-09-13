import React from 'react';

var itemData = [];

export default function MenuItemComponent({
  item = { name: 'N/A', imagePath: '//via.placeholder.com/300x200', price: '' },
  onAddItem
}) {
  function handleClick(event) {
    event.preventDefault();
    onAddItem(item.id);
  }

  return (
    <div className="col s12 m12 l6">
      <div className="card medium cards MenuItemComponent">
        <div className="card-image">
          <img src={item.imagePath ? item.imagePath : 'N/A'} />
        </div>
        <div className="card-content">
          <h5 className="card-title">
            {item.name ? `${item.name}` : 'N/A'}
          </h5>
          <p>
            {item.price ? `${item.price.toFixed(2)}` : 'N/A'}
          </p>
        </div>
        <div className="card-action">
          <a className ='link' href="#" onClick={handleClick}>
            Add Order
          </a>
        </div>
      </div>
    </div>
  );
}
