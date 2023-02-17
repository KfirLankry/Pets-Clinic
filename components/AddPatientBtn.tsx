const AddPatientBtn = (props: any) => {
  return (
    <button
      className="bg-success hover:bg-success_hover shadow-md py-1.5 px-2.5 text-white rounded-full"
      type="button"
      onClick={() => props.setShowModal(true)}
    >
      <i className="fa-solid fa-plus"></i>{" "}
      <span className="sm: hidden xl:inline">Add New Patient</span>
    </button>
  );
};

export default AddPatientBtn;
