const EditPatientBtn = (props: {
  editRow: (editRow: string) => void;
  patientId: string;
}) => {
  return (
    <button
      className=" bg-black hover:bg-black_hover w-9 py-1.5 px-1.5 text-white rounded-full shadow"
      type="button"
      onClick={() => props.editRow(props.patientId)}
    >
      <i className="fa-regular fa-pen-to-square"></i>
    </button>
  );
};

export default EditPatientBtn;
