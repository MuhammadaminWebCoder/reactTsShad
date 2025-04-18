import React, { useState, FormEvent } from 'react';

type FormValues = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  jobTitle: string;
  phoneNumber: string;
  interests: string;
};

const ContactRegister = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    jobTitle: '',
    phoneNumber: '',
    interests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('✅ Form submitted:', formValues);
    setFormValues({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      jobTitle: '',
      phoneNumber: '',
      interests: '',
    });
  };

  const fieldsConfig = [
    { id: 'firstName', label: 'First name' },
    { id: 'lastName', label: 'Last name' },
    { id: 'companyName', label: 'Company name' },
    { id: 'email', label: 'Email' },
    { id: 'jobTitle', label: 'Job title' },
    { id: 'phoneNumber', label: 'Phone number' },
  ];

  return (
    <section className='ContactRegister bg-slate-100'>
      <div className='containerOn grid grid-cols-12 gap-6 py-24'>
        <div className="col-span-6">
          <strong className='text-5xl'>Contact Us</strong>
          <p className='text-3xl my-4 font-semibold'>Bridgeline provides solutions that grow revenues for our customers</p>
          <p>Bridgeline enables marketers to drive traffic, increase conversion and raise order value. You will be able to engage prospects and build revenues across multiple channels.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white col-span-6 p-8 rounded-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

          {fieldsConfig.map(({ id, label }) => (
            <div className="mb-4" key={id}>
              <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">
                {label}
              </label>
              <input
                type="text"
                id={id}
                name={id}
                value={(formValues as any)[id]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              />
            </div>
          ))}

          <div className="mb-6">
            <label htmlFor="interests" className="block text-gray-700 font-semibold mb-1">Interests</label>
            <textarea
              id="interests"
              name="interests"
              value={formValues.interests}
              onChange={handleChange}
              className="w-full max-h-[300px] min-h-[100px] p-2 border border-gray-300 rounded focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-lime-400 hover:bg-lime-500 cursor-pointer py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactRegister;
