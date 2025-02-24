import { Link } from "react-router-dom";
function SignUp() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-600" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-600" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    );
}
export default SignUp;