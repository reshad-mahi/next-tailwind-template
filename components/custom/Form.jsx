'use client';
import { useForm } from 'react-hook-form';

const Form = ({
  formTitle,
  formFields,
  buttonText,
  onSubmit,
  errorMessage,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-100 text-center mb-4">
        <h2 className="headline-small text-white uppercase inline-block">
          {formTitle}
          <hr className="my-2.5" />
        </h2>
      </div>

      {formFields.map((field) => (
        <div key={field.id} className="block mb-4 text-white">
          <label className="title-small block mb-2.5">{field.label}:</label>
          <input
            type={field.type}
            {...register(field.id, { required: field.required })}
            placeholder={field.placeholder}
            className="py-2.5 px-5 body-large border border-[#C8C5CA] rounded-lg w-full focus:outline-none focus:ring-1 focus:border-gray-900 text-gray-900"
          />
          {/* {errors.field.id && <p role="alert">{field.name} is required</p>} */}
          {errors[field.id] && errors[field.id].type === 'required' && (
            <p role="alert" className="text-red-400 mt-1">
              {' '}
              {field.error}
            </p>
          )}
        </div>
      ))}

      <button type="submit" className="main-btn creds-btn w-full mt-5 mb-4">
        {buttonText || 'Submit'}
      </button>
    </form>
  );
};

export default Form;
