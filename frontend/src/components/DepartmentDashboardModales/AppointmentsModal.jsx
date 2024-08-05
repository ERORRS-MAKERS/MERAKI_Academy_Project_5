import React, { useState } from 'react';
import UserProfileStyle from '../../components/IconBox/UserProfileStyle';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function UserProfileSections({ userId, sectionTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal} className="btn btn-primary">
        Open Modal
      </button>

      {/* Conditional rendering of the modal */}
      {isModalOpen && (
        <div
          className="modal show modal-xl"
          role="dialog"
          aria-labelledby="modal-title"
          aria-hidden={!isModalOpen}
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-title">
                  {sectionTitle}
                </h5>
                <button
                  type="button"
                  className="close btn btn-primary"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <SectionHeading title={sectionTitle} center />
                  <Spacing md="72" lg="50" />
                  <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6">
                      <UserProfileStyle
                        title="Transfer"
                        subtitle="for another department"
                        href={`/doctor_request`}
                      />
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <UserProfileStyle
                        title="Medical Report"
                        subtitle="Create A Report"
                        href={`/medical_reports`}
                      />
                    </div>
                    <Spacing md="20" lg="50" />
                    <div className="col-xl-4 col-md-6">
                      <UserProfileStyle
                        title="Prescriptions"
                        subtitle="Create A Prescription"
                        href={`/add_prescription`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
