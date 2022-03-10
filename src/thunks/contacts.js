import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7000",
});

export const fetchContactsThunk = createAsyncThunk(
  "contact/fetch",
  async () => {
    let response = await api.get("/contacts");
    return response.data;
  }
);

//contacts/fetch/pending
//contacts/fetch/fulfilled
//contacts/fetch/rejected

export const createContactThunk = createAsyncThunk(
  "contact/create",
  async (newContact) => {
    let response = await api.post("/contacts", { newContact });
    return response.data;
  }
);

//contacts/create/pending
//contacts/create/fulfilled
//contacts/create/rejected

export const updateContactThunk = createAsyncThunk(
  "contact/update",
  async (modifiedContact) => {
    let response = await api.put(`/contacts/${modifiedContact.id}`, {
      modifiedContact,
    });
    return response.data;
  }
);

//contacts/update/pending
//contacts/update/fulfilled
//contacts/update/rejected

export const deleteContactThunk = createAsyncThunk(
  "contact/update",
  async (contactId) => {
    let response = await api.delete(`/contacts/${contactId}`);
    return response.data;
  }
);

//contacts/delete/pending
//contacts/delete/fulfilled
//contacts/delete/rejected
