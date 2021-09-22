import React from "react";
import axios from "axios";

const { useState } = React;

export const DomainRegistrationButton = () => {
  const [registeredDomain, registrationData] = useState("");
  const [success, setSuccess] = useState(false);

  const domainTrigger = () => {
    axios
      .post("/RegisterDomain")
      .then((response) => {
        console.log(response);
        setSuccess((current) => !current);
        registrationData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        className="bg-green-300 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={() => {
          domainTrigger();
        }}
      >
        Register Domain
      </button>
      {/*  <div className="col-auto">
                <p>Hello {k8sManifest.user.name}, it's so nice to meet you. I just wanted to let you know the state of your site is {k8sManifest.user.state}. The link to the gitlab deployment is <a href={k8sManifest.user.web_url}>{k8sManifest.user.web_url}</a></p>
            </div> */}
      <div className="row-auto">
        <div className="col-auto">
          {success ? (
            <div
              class="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
              id="modal-window"
            >
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>
                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-400 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          class="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg leading-6 font-medium text-gray-900"
                          id="modal-title"
                        >
                          Your domain has been registered!
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            Your domain has been registered and...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={() => {
                        setSuccess(false);
                      }}
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-300 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 sm:ml-3 sm:w-auto sm:text-sm"
                      id="confirm"
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
