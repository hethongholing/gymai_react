import React from "react";  

function Search() {
  return (
     <div
            aria-hidden="true"
            aria-labelledby="exampleModalLabel"
            className="modal fade"
            id="searchModal"
            tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    Từ khóa tsìm kiếm
                </h5>
                <button
                    aria-label="Close"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    type="button"
                />
                </div>
                <div className="modal-body d-flex align-items-center bg-primary">
                <div className="input-group w-75 mx-auto d-flex">
                    <input
                    aria-describedby="search-icon-1"
                    className="form-control p-3"
                    placeholder="Tìm kiếm"
                    type="search"
                    />
                    <span
                    className="btn bg-light border nput-group-text p-3"
                    id="search-icon-1">
                    <i className="fa fa-search" />
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
  );
}

export default Search;
