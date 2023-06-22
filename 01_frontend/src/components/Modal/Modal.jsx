import React, { useState, useEffect } from "react";
import {GrNext, GrPrevious} from 'react-icons/gr'
import "./modal.css";

function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.className === "modal") {
        setShowModal(false);
      }
    };

    window.addEventListener("click", handleClickOutsideModal);

    return () => {
      window.removeEventListener("click", handleClickOutsideModal);
    };
  }, []);

  const totalPages = Math.ceil(props.contents.length / 1);

  const displayedContents = props.contents.slice(
    currentPage * 1,
    (currentPage + 1) * 1
  );

  return (
    <>
      <button className="modal-btn" onClick={handleOpenModal}>
        Xem chi tiết
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content-outer">
              <h1 className="modal-header gradient-text">KẾT QUẢ TÌM KIẾM</h1>
              <span className="close" onClick={handleCloseModal}>
                &times;
              </span>
              {/* {currentPage > 0 && (
                  <button className="pagination-btn-left" onClick={handlePreviousPage}><GrPrevious color="white" className="pagination-btn-icon"/></button>
                )}
              {currentPage < totalPages - 1 && (
                  <button className="pagination-btn-right" onClick={handleNextPage}><GrNext color="white" className="pagination-btn-icon" /></button>
                )} */}
            <div className="modal-content">
              
              {displayedContents.map((content, index) => (
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  {/* <hr /> */}
                </div>
              ))}
            </div>
            <div className="pagination">
                {currentPage > 0 && (
                  <button className="pagination-btn" onClick={handlePreviousPage}><GrPrevious className="pagination-btn-icon" /></button>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                  <div
                    key={index}
                    className={`pagination-dot ${
                      index === currentPage ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                  >{index + 1}</div>
                ))}
                {currentPage < totalPages - 1 && (
                  <button className="pagination-btn" onClick={handleNextPage}><GrNext className="pagination-btn-icon"/></button>
                )}
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
