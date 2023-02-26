const AddPatientBtn = (props: {
  setShowModal: (showModal: boolean) => void;
}) => {
  return (
    <div className="addBtn flex items-center justify-center">
      <button
        className=" bg-success hover:bg-success_hover shadow-md py-1.5 px-5 text-white rounded-full"
        type="button"
        onClick={() => props.setShowModal(true)}
      >
        <i className="fa-solid fa-plus"></i> Add New Patient
      </button>
    </div>
  );
};

export default AddPatientBtn;
