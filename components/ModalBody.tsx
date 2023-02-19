const ModalBody = (props: {
  setShowModal: (showModal: boolean) => void;
  formik: any;
}) => {
  return (
    <>
      <form onSubmit={props.formik.handleSubmit}>
        <div className="form-group">
          <div className="input flex justify-center">
            <input
              className="p-2 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
              id="name"
              type="text"
              placeholder="Patient Name"
              name="name"
              value={props.formik.values.name}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
            />
          </div>
          {props.formik.touched.name && props.formik.errors.name ? (
            <p className="text-error pl-3 mt-1">
              {" "}
              <i className="fa-solid fa-circle-exclamation"></i>{" "}
              {props.formik.errors.name}
            </p>
          ) : null}

          <div className="input flex justify-center">
            <input
              className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
              id="phone"
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={props.formik.values.phone}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
            />
          </div>
          {props.formik.touched.phone && props.formik.errors.phone ? (
            <p className="text-error pl-3 mt-1">
              {" "}
              <i className="fa-solid fa-circle-exclamation"></i>{" "}
              {props.formik.errors.phone}
            </p>
          ) : null}

          <div className="input flex justify-center">
            <input
              className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
              id="phone"
              type="text"
              placeholder="Pet Name"
              name="petName"
              value={props.formik.values.petName}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
            />
          </div>
          {props.formik.touched.petName && props.formik.errors.petName ? (
            <p className="text-error pl-3 mt-1">
              <i className="fa-solid fa-circle-exclamation"></i>{" "}
              {props.formik.errors.petName}
            </p>
          ) : null}

          <div className="input flex justify-center items-center">
            <label className="text-grey mt-2 mx-1">Pet Birth-Date: </label>
            <input
              className="p-2 mt-3 border-solid border-2 border-lightgrey rounded-md w-52 shadow-sm"
              id="petBirthDate"
              type="date"
              placeholder="Pet Birthdate"
              name="petBirthDate"
              value={props.formik.values.petBirthDate}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
            />
          </div>
          {props.formik.touched.petBirthDate &&
          props.formik.errors.petBirthDate ? (
            <p className="text-error pl-3 mt-1">
              <i className="fa-solid fa-circle-exclamation"></i>{" "}
              {props.formik.errors.petBirthDate}
            </p>
          ) : null}

          <div className="input flex justify-center ">
            <select
              className="p-2 mt-3 mb-3 border-solid border-2 border-lightgrey rounded-md w-80 shadow-sm"
              id="petType"
              name="petType"
              value={props.formik.values.petType}
              onChange={props.formik.handleChange}
              onBlur={props.formik.handleBlur}
            >
              <option>Select Pet Type:</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Parrot">Parrot</option>
            </select>
          </div>
          {props.formik.touched.petType && props.formik.errors.petType ? (
            <p className="text-error pl-3">
              {" "}
              <i className="fa-solid fa-circle-exclamation"></i>{" "}
              {props.formik.errors.petType}
            </p>
          ) : null}
        </div>
        {/*Modal Footer*/}
        <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
          <button
            className="bg-gray w-36 mx-1 hover:bg-gray_hover py-1.5 px-1.5 text-white rounded-full shadow"
            type="button"
            onClick={() => props.setShowModal(false)}
          >
            <i className="fa-solid fa-xmark"></i> Close
          </button>
          <button
            disabled={!props.formik.isValid || props.formik.isSubmitting}
            className="mx-2 bg-success w-36 hover:bg-success_hover py-1.5 px-1.5 text-white rounded-full shadow"
            type="submit"
          >
            <i className="fa-solid fa-plus"></i> Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ModalBody;
