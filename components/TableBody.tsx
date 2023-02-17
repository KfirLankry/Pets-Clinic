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
        <button
          className=" bg-black hover:bg-black_hover w-9 py-1.5 px-1.5 text-white rounded-full shadow"
          type="button"
          onClick={() => props.editRow(props.patient._id)}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </td>
    </>
  );
};

export default TableBody;
