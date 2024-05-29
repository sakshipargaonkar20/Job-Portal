import React, { useState } from "react";
import PageHeader from "./PageHeader"; // Import your main page component

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobileNumber: "",
    address: ""
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const [error, setError] = useState("");

  // Function to handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    // You can add your login logic here
    // For example, you can make an API call to authenticate the user
    console.log("Login successfully");
    setLoginStatus("loginSuccess"); // Set login status to success
    setError(""); // Clear any previous errors
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="md:flex md:items-center md:justify-between w-full md:w-2/3 lg:w-1/2">
        <div className="relative w-full md:w-1/2">
          <div
            id="radius-shape-1"
            className="absolute rounded-circle shadow-5"
          ></div>
          <div id="radius-shape-2" className="absolute shadow-5"></div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            {loginStatus === "loginSuccess" ? (
              <PageHeader /> // Render the main page component
            ) : (
              <form onSubmit={handleLogin}>
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Mobile Number"
                  type="text"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                />
                <input
                  className="mb-4 border-b-2 p-2 outline-none focus:border-blue-500"
                  placeholder="Address"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                  type="submit"
                  className="w-full mb-4 bg-blue-500 text-white py-2 rounded-md"
                >
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
