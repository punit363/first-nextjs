import React from "react";

const SignupComponent = () => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // TODO: implement signup logic here
  //     console.log("Sign Up Data:", formData);
  //   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form className="flex flex-col gap-4">
          {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4"> */}
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            placeholder="Email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            placeholder="Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white rounded py-2 hover:bg-green-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
