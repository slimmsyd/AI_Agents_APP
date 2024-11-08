"use client";

import { useState, useEffect } from "react";

import {
  useAccount,
  useBalance,
  useSendTransaction,
  usePrepareTransactionRequest,
  useSignMessage,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useSession, signIn, signOut } from "next-auth/react";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
 
interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState('');
  const [login, setLogin] = useState(false);


  const toggleDropdown = () => {
    console.log("toggleDropdown");
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const username = localStorage.getItem('username');
    const userID = localStorage.getItem("user_id")

    if (accessToken && username && userID) {
      setLogin(true);
      setShowSignupModal(false);
    }


  }, [session])

  useEffect(() => {
    setShowSignupModal(false);
  }, [login])


	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const requestBody = JSON.stringify({ username: username, password: password });

		const loginUrl = 'https://www.huemanapi.com/login'; // props.setlogin(true);

    console.log("Logging the request body", requestBody)
    console.log("Logging the login url", loginUrl)

		try {
			const response = await fetch(loginUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: requestBody
			});

			const data = await response.json(); // console.log('Loggin the Response', response);


			console.log("Logging the Data", data)

			// console.log('Loggin the data', data);
			if (response.ok) {
				// console.log('Login successful:', data);
				// console.log('Logggin the Response', response);
				localStorage.setItem('accessToken', data.access_token);
				localStorage.setItem('username', data.username); // console.log('Loggin the data access token', data.access_token);
				localStorage.setItem("user_id", data.user_id )

				const accessToken = localStorage.getItem('accessToken');
				const username = localStorage.getItem('username');
				const userID = localStorage.getItem("user_id")



				if (accessToken && username && userID) {

          setLogin(true);

        }
			} else {
				console.error('Login failed again:', data.error);
				setLoginError(data.error || 'Unknown error occurred');
				console.log('Login error:', data);
			}
		} catch (error) {
			console.error('Fetch error:', error);
			setLoginError('Failed to connect to the server');
		}
	};


  useEffect(() => {
    console.log("Logging the username", username)
  }, [username])

  return (
    <>
      <nav
        className="container 
    fixed
    top-[20px]
    left-1/2
    transform
    -translate-x-1/2
    z-50
    text-white
    flex w-full max-w-screen-xl items-center justify-around rounded-3xl dark:shadow-muted/25 shadow-lg shadow-foreground/10 border-[0.5px] border-gray-700 py-4 px-6"
      >
        <ul className="lg:flex hidden items-center gap-12  text-sm font-medium ">
          <li>
            <a className="flex items-center gap-2" href="/">
              Home
            </a>
          </li>
      
        </ul>

        <div className="lg:flex hidden items-end justify-end gap-2 flex-1">
          {login ? (
            <div className="flex flex-row gap-2">
              <Link
                href="/ai/agent"
                className="  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
              >
                Go to app
              </Link>
              <div
                onClick={() => signOut()}
                className="  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
              >
                Logout
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-row gap-2 justify-end">
         

              <button
                className="  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setShowSignupModal(true)}
              >
                Log in
              </button>
              <button
                className="  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setShowSignupModal(true)}
              >
                Create An Account
              </button>
            </div>
          )}


        </div>
        <div
          className="relative
        lg:hidden
        flex
        items-center
        justify-end
        w-full
        "
        >
          <button
            className="inline-flex
      bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] border-[0.5px] border-[rgb(39,60,110)]
      items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-9 lg:hidden rounded-[14px] h-10"
            type="button"
            onClick={toggleDropdown}
            aria-haspopup="menu"
            aria-expanded={isDropdownOpen}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-3xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M96 256h320M96 176h320M96 336h320"
              ></path>
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              className="absolute top-[30px] right-0 text-white bg-white/15 
  mt-2 w-48 rounded-md shadow-lg z-10 px-[3px] border-[#2222220d] border-[0.5px]"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, .25)",
                fontWeight: 500,
              }}
            >
              <div className="py-1">
                <a href="/" className="block px-4 py-2 text-sm text-white  ">
                  Home
                </a>

                <div className="border-t border-white/10 my-2"></div>
                {login ? (
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={() => signOut()}
                      className=" flex items-center justify-center  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
                    >
                      Logout
                    </div>
                    <Link
                      href="/ai/agent"
                      className="inline-flex bg-white text-black items-center  justify-center w-full whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 px-4 py-2  rounded-[14px] h-10"
                    >
                      Go to app
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <button
                      className="  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] w-full border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
                      onClick={() => signIn("google")}
                    >
                      Login{" "}
                    </button>

                    <button
                      className=" w-full  bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] text-[14px] border-[1px] border-[rgb(39,60,110)] transition-colors duration-200 px-4 py-2 rounded-md cursor-pointer"
                      onClick={() => setShowSignupModal(true)}
                    >
                      Create An Account
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Sign Up Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute !bg-transparent top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6 inline-flex">
              Create Account
            </h2>

            <div className="space-y-4">

              <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-[#2a2a2a] rounded-md border border-gray-600 text-white"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 bg-[#2a2a2a] rounded-md border border-gray-600 text-white"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors">
                Sign Up
              </button>

              </form>
           

        

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#1a1a1a] text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                    fill="#34A853"
                  ></path>
                </svg>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
