import EditPatientBtn from "./EditPatientBtn";

const TableBody = (props: any) => {
  return (
    <>
      <td className="px-5 py-5 border-b  text-sm">
        <p className="whitespace-no-wrap">{props.patient.name}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="whitespace-no-wrap">{props.patient.phone}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="whitespace-no-wrap">{props.patient.petName}</p>
      </td>
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="whitespace-no-wrap">
          {props.year - parseInt(props.patient.petBirthDate.slice(0, 4))}
        </p>
      </td>
      <td className="border-b bg-white text-sm">
        <p
          className={`whitespace-no-wrap rounded-2xl w-16 mx-auto text-white ${
            props.patient.petType == "Dog" ? "bg-dog" : null
          } ${props.patient.petType == "Parrot" ? "bg-parrot" : null} ${
            props.patient.petType == "Cat" ? "bg-cat" : null
          }`}
        >
          {props.patient.petType}
        </p>
      </td>
      <td className="px-5 py-5 border-b text-sm text-center">
        <EditPatientBtn editRow={props.editRow} patientId={props.patient._id} />
      </td>
    </>
  );
};

export default TableBody;
