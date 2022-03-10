import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactSlice from "../../slices/contacts";
import { v1 as uuid } from "uuid";
import {
  createContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  updateContactThunk,
} from "../../thunks/contacts";
import "./contacts.css";

export default function Contacts() {
  // get redux state
  const contacts = useSelector((state) => state.contacts);

  // state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editId, setEditId] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // create dispatch() function
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  // on add click
  const onAddClick = () => {
    dispatch(
      createContactThunk({
        id: uuid(),
        firstName,
        lastName,
        email,
        phone,
      })
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const onDeleteClick = (contact) => {
    if (window.confirm("Are you sure want to delete this contact?")) {
      dispatch(deleteContactThunk(contact.id));
    }
  };

  const onEditClick = (contact) => {
    setEditId(contact.id);
    setEditFirstName(contact.firstName);
    setEditLastName(contact.lastName);
    setEditEmail(contact.email);
    setEditPhone(contact.phone);
  };

  const onUpdateClick = () => {
    dispatch(
      updateContactThunk({
        id: editId,
        firstName: editFirstName,
        lastName: editLastName,
        email: editEmail,
        phone: editPhone,
      })
    );
    setEditId("");
  };

  return (
    <div>
      <div className="container">
        <h4 className="grid-header">
          Contacts &nbsp; &nbsp;
          {contacts.status === "pending" ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            ""
          )}
          <span className="text-red">{contacts.error?.message}</span>
        </h4>

        <div className="box">
          <details>
            <summary>New Contact</summary>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Phone"
                className="form-control"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <button className="button button-green" onClick={onAddClick}>
              Save
            </button>
          </details>

          <div className="grid-container">
            <table className="grid">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {contacts.data.map((contact, index) => (
                  <tr key={contact.id}>
                    <td>{index + 1}</td>
                    <td>
                      {editId === contact.id ? (
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control"
                          value={editFirstName}
                          onChange={(event) =>
                            setEditFirstName(event.target.value)
                          }
                        />
                      ) : (
                        <span>{contact.firstName}</span>
                      )}
                    </td>
                    <td>
                      {editId === contact.id ? (
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="form-control"
                          value={editLastName}
                          onChange={(event) =>
                            setEditLastName(event.target.value)
                          }
                        />
                      ) : (
                        <span>{contact.lastName}</span>
                      )}
                    </td>
                    <td>
                      {editId === contact.id ? (
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          value={editEmail}
                          onChange={(event) => setEditEmail(event.target.value)}
                        />
                      ) : (
                        <span>{contact.email}</span>
                      )}
                    </td>
                    <td>
                      {editId === contact.id ? (
                        <input
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                          value={editPhone}
                          onChange={(event) => setEditPhone(event.target.value)}
                        />
                      ) : (
                        <span>{contact.phone}</span>
                      )}
                    </td>
                    <td>
                      {editId === contact.id ? (
                        <button
                          className="button button-green"
                          onClick={() => onUpdateClick(contact)}
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          className="button button-green"
                          onClick={() => onEditClick(contact)}
                        >
                          Edit
                        </button>
                      )}

                      <button
                        className="button button-red"
                        onClick={() => onDeleteClick(contact)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
