import { useState, useEffect } from "react";
import axios from "../../api/axios";
import UsersModal from "../../components/UsersModal";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("fetch_all_user");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
      alert("try again", err);
    }
  };
  const handleDelete = async (id) => {
    console.log(id);
    Swal.fire({
      title: "are you sure ?",
      text: "If you delete, this data is unretrievable !",
      icon: "Attention",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/delete_user/${id}`)
          .then((res) => {
            fetchUsers();
          })
          .catch((err) => {
            console.error(err);
          });

        Swal.fire("Delete !", "User has been delete.", "Succès");
      }
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <div className="mt-10 mr-20 flex justify-end">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add user
        </button>
        <UsersModal
          setShowModal={setShowModal}
          showModal={showModal}
          fetchUsers={fetchUsers}
        />
      </div>
      <div className="overflow-hidden w-11/12 rounded-lg border border-gray-200 shadow-md m-4">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                User
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Phone
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Address
              </th>

              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {users.map((user) => {
              return (
                <tr className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      {/* <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span> */}
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-gray-400">{user.email}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-1">
                    <span className="px-2 py-1 text-xs font-semibold text-green-600">
                      <p>
                        {user.country},{user.city}
                      </p>

                      <p classNameName="text-xs">{user.addresslieu}</p>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-4">
                      <a
                        x-data="{ tooltip: 'Delete' }"
                        href="#"
                        onClick={() => handleDelete(user._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
